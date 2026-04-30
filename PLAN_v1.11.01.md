# Bếp Việt: Tiệm Bún Số 7 — Kế hoạch v1.11.01

> **Trạng thái 2026-04-30**: tài liệu này là patch plan lịch sử và phần lớn đã được áp dụng. Bản code hiện tại là **Beta v1.11.04.1 (Balance)**, gồm thêm các patch sau v1.11.01: tutorial 17 bước, art polish, SVG portrait Cụ Ông, refactor 6-file và balance fixes round 5. Trạng thái hiện tại xem `PROJECT_REQUIREMENTS_CURRENT.md` và `README.md`.

> Patch sau hội đồng đánh giá 3 chuyên gia (Dev / Gamer / CEO). Tập trung sửa các vấn đề **trùng nhau** + **bug có rủi ro** với save/UX. Không thêm tính năng lớn — đó là scope v1.12.

## 1. Bối cảnh

v1.11 đã ship với drink gameplay thật, achievements, festival mode, gallery, late-game events. Hội đồng 3 góc nhìn (Senior Dev + Pro Gamer + CEO studio) đánh giá 3 vấn đề trùng nhau:

1. **Festival mode chưa tự nhiên** (Dev: code smell hijack `PROG.levelIdx`; Gamer: 3 strikes quá khắt; CEO: chưa giữ chân lâu).
2. **Boss và level cuối chương chưa khác biệt đủ** (Dev: chỉ là customer + flag; Gamer: cảm giác giống level thường; CEO: thiếu "moment" share).
3. **Notification / UI density quá cao** (Gamer: 4 pop trong 2s).

Ngoài ra có 2 bug rủi ro cao mà chỉ Dev thấy: festival hijack `PROG.levelIdx` có thể corrupt save, và `setTimeout` notify rò rỉ sau end-level.

## 2. Mục tiêu v1.11.01

- Sửa các bug làm hỏng save / cảm giác chơi.
- Giảm friction notification cho người chơi mới.
- Polish boss + rush feedback để cảm giác "moment" rõ hơn.
- KHÔNG đụng tới các thay đổi lớn: EN toggle, monetization, mobile rework, audio, refactor `class Station`.

## 3. Triage matrix

| Mức | Vấn đề | Effort | Người raise | Trong scope |
|---|---|---|---|---|
| 🔴 CRITICAL | Festival hijack `PROG.levelIdx` → save có thể corrupt | 2h | Dev | ✅ |
| 🔴 CRITICAL | `setTimeout` notify rò rỉ sau end-level | 1h | Dev | ✅ |
| 🟠 HIGH | Heat day cộng dồn 2 nerf (patience -20% + drink price +30%) | 1h | Gamer | ✅ |
| 🟠 HIGH | Notification spam (4 popup / 2s mỗi khách) | 2h | Gamer + Dev | ✅ |
| 🟠 HIGH | Festival 3 strikes quá khắt cho endless mode | 30m | Gamer | ✅ |
| 🟠 HIGH | Tutorial chưa nhắc Drink Station + Sổ tay | 30m | Gamer | ✅ |
| 🟡 MED | Rush feedback visceral (đỏ + flash khi khách <30% patience) | 2h | Gamer | ✅ |
| 🟡 MED | Boss visual differentiation (đèn đỏ + viền glow) | 3h | Gamer + CEO | ✅ |
| 🟡 MED | Sai nước = 40% giá → đổi thành 0% bonus, mất chi phí 3k | 30m | Dev | ✅ |
| 🟢 LOW | Refactor `class Station` cho Pot/Drink/Grill | 4-6h | Dev | ❌ → v1.12 |
| 🟢 LOW | `G.mode` first-class thay monkey-patch checkEndCondition | 3h | Dev | ❌ → v1.12 |
| 🟢 LOW | Boss có meter chấm điểm 0/10 + nhạc riêng | 4h+ | Gamer | ❌ → v1.12 |
| 🟢 LOW | Surprise level "Cụ Ông trong giấc mơ" | 6h | Gamer | ❌ → v1.13 |
| 🚫 OUT | EN toggle | 1 tuần | CEO | v1.12 |
| 🚫 OUT | Monetization path | — | CEO | sau khi có audience |
| 🚫 OUT | Analytics, Steam, mobile build | — | CEO | v1.12+ |
| 🚫 OUT | Audio / SFX (cần asset từ ngoài) | — | CEO | v1.12 |

**Tổng effort v1.11.01: ~12-14h** (1.5 ngày tập trung).

## 4. Critical fixes — phải xong trước

### C1. Festival không hijack `PROG.levelIdx`

**Vấn đề**: `startFestival` đặt `PROG.levelIdx=14` rồi `saveProg()` để bypass recipe gating. Nếu user đóng tab giữa festival → save ghi `levelIdx=14` vĩnh viễn → quay lại "Tiếp tục" sẽ nhảy sang Iron Chef Việt thay vì level đang chơi.

**Hướng sửa**:

- Thêm field `G.recipeOverallOverride` (number | null).
- Sửa `currentOverall()`:

  ```js
  function currentOverall(){
    if(G.recipeOverallOverride)return G.recipeOverallOverride;
    return LEVELS[PROG.levelIdx]?.overall||1;
  }
  ```

- Trong `startFestival`:
  - Bỏ dòng `G._festivalSavedIdx=PROG.levelIdx;`.
  - Bỏ dòng `PROG.levelIdx=14;`.
  - Bỏ `saveProg()` (nếu có) trước khi vào festival.
  - Set `G.recipeOverallOverride=15;`.

- Trong `endFestival`:
  - Bỏ phép restore `PROG.levelIdx=G._festivalSavedIdx`.
  - Set `G.recipeOverallOverride=null;`.

**Test acceptance**:

1. Vào festival → đóng tab → mở lại → "Tiếp tục" phải vào đúng `levelIdx` trước festival.
2. Festival vẫn mở khóa toàn bộ recipes/drinks (mì Quảng, hủ tiếu, com tấm, cà phê sữa đá, rau má).

### C2. Track + clear setTimeout notify

**Vấn đề**: `serveSelected` schedule 3 setTimeout (happy quote 600ms, mystery story 800ms, slow quote 400ms). Khi `endLevel` chạy giữa lúc đó (boss bỏ đi, time-out) → notify pop ra giữa end-screen.

**Hướng sửa**:

- Thêm array `pendingNotifyTimers=[]` ở scope toàn cục.
- Helper:

  ```js
  function notifyDelayed(ms,fn){
    const id=setTimeout(()=>{fn();pendingNotifyTimers=pendingNotifyTimers.filter(x=>x!==id);},ms);
    pendingNotifyTimers.push(id);
    return id;
  }
  ```

- Thay 3 chỗ `setTimeout(()=>notify(...))` trong `serveSelected` bằng `notifyDelayed`.
- Trong `endLevel` và `endFestival`, clear:

  ```js
  pendingNotifyTimers.forEach(id=>clearTimeout(id));
  pendingNotifyTimers=[];
  ```

**Test**: serve khách rồi end-level đột ngột (giả lập bằng cách đặt `customers=11` rồi để time-out) → không thấy notify dư.

## 5. High-priority fixes

### H1. Heat day không cộng dồn 2 nerf

**Vấn đề**: heat event giảm patience -20% **và** drink price +30%. Drink là giải pháp nhưng pha mất 3-4s, khách Tây 52s patience của David sẽ không đủ thời gian.

**Hướng sửa**:

- Bỏ dòng `if(G._event==='heat')pat=Math.floor(pat*0.8);` trong `spawnCustomer`.
- Giữ heat = +30% giá nước, để mục đích heat = "cơ hội kiếm tiền" thay vì "stress test".

**Test**: chơi level 11 (Sài Gòn sáng) → cảm giác công bằng, vẫn dồn dập nhưng không bất khả thi.

### H2. Giảm notification spam

**Vấn đề**: 1 khách = arrive notify + serve money notify + happy quote notify + (mystery story notify) + (achievement notify) = 3-4 popup trong 2s. Mắt người chơi không biết focus.

**Hướng sửa**:

- **Arrive notify**: bỏ `notify('👥 ' + arrive)` ở `spawnCustomer`. Thay bằng "speech bubble" gắn trên customer card, tự fade 3s.

  CSS:

  ```css
  .customer-bubble{
    position:absolute;top:-30px;left:50%;transform:translateX(-50%);
    background:#fff;color:#3E2723;padding:6px 12px;border-radius:14px;
    font-size:.78em;white-space:nowrap;
    animation:bubbleFade 3s forwards;
    box-shadow:0 2px 8px rgba(0,0,0,.3);
    max-width:200px;overflow:hidden;text-overflow:ellipsis;z-index:5;
  }
  .customer-bubble::after{
    content:'';position:absolute;bottom:-6px;left:50%;
    transform:translateX(-50%);
    border:6px solid transparent;border-top-color:#fff;
  }
  @keyframes bubbleFade{
    0%{opacity:0;transform:translateX(-50%) translateY(-6px);}
    10%,80%{opacity:1;transform:translateX(-50%) translateY(0);}
    100%{opacity:0;}
  }
  ```

  Trong `renderCustomers`, customer card đầu tiên thêm `<div class="customer-bubble">"${c.quotes.arrive}"</div>` nếu `c.justSpawned` (cờ true 3.5s rồi tự false).

- **Happy quote notify**: chỉ phát khi `c.isRegular || c.isMystery || c.tip>=1.4`. Khách thường skip — money popup đủ feedback.

- **Money popup + bonus list**: giữ nguyên (đó là feedback chính, không cắt).

- **Achievement notify**: queue nếu nhiều unlock cùng lúc, hiện lần lượt cách 800ms.

**Test**: phục vụ 1 khách thường → chỉ 1 popup money. Phục vụ Bác Tâm → 1 money + 1 happy quote (cách nhau 600ms).

### H3. Festival 3 → 5 strikes + warning

**Vấn đề**: Endless mode bỏ 3 lần kết thúc — quá khắt với người mới.

**Hướng sửa**:

- Trong `startFestival`: `G._festivalLeftLimit=5;`.
- Trong `tickPatience` (sau khi `customersLeft++`), nếu festival:
  - `===3` → `notify('⚠️ Còn 2 lần lỡ — cố lên!','warning');`
  - `===4` → `notify('⚠️ Lần lỡ cuối!','error');`

**Test**: chạy festival, để khách bỏ đi 3-4 lần → thấy warning, đến 5 mới end.

### H4. Tutorial cập nhật

**Vấn đề**: Tutorial 7 step không nhắc Drink Station và Sổ tay quán → người mới vào không biết khu pha nước dùng thế nào.

**Hướng sửa**: thêm 2 step vào array `TUTORIAL`:

```js
{icon:'🥤',title:'Khu pha nước',
 text:'Khách thường gọi món + một loại nước. Click vào nguyên liệu pha (trà, đá, mía...) để cho vào cốc, rồi nhấn "Pha nước". Đúng nước cộng combo bonus, sai/thiếu thì chỉ mất bonus chứ không hỏng đơn.'},
{icon:'📔',title:'Sổ tay quán',
 text:'Ở menu chính có "Sổ tay quán" — xem thành tựu đã mở, khách đã gặp, câu chuyện đã unlock và thống kê tổng. Có 20 thành tựu để săn.'}
```

**Test**: vào tutorial → step 8 nói khu pha nước, step 9 nói sổ tay.

## 6. Medium fixes — polish

### M1. Rush feedback visceral

**Vấn đề**: 3 khách <30% patience nhìn không khẩn cấp.

**Hướng sửa**:

- CSS:

  ```css
  .game-header.rush{
    animation:rushFlash .5s infinite alternate;
    border-color:#f44336!important;
  }
  @keyframes rushFlash{
    from{background:rgba(0,0,0,.7);}
    to{background:rgba(244,67,54,.25);}
  }
  ```

- Trong `tickPatience` cuối hàm (sau loop):

  ```js
  const isRush=G.customers.some(c=>!c.served&&!c.left&&c.patience<=c.maxPatience*0.3);
  document.querySelector('.game-header')?.classList.toggle('rush',isRush);
  ```

**Test**: spawn 3 khách + để patience giảm < 30% → header đỏ nháy.

### M2. Boss visual differentiation

**Vấn đề**: Boss = customer thường có cờ `failOnLeave`, không có cảm giác "moment".

**Hướng sửa nhẹ (3h)**:

- Khi `G._bossSpawned===true` và boss còn ở quán → `body.classList.add('boss-active')`. Khi boss `served` hoặc `left` → bỏ.

- CSS:

  ```css
  body.boss-active{background:#1a0a04;}
  body.boss-active .game-header{
    box-shadow:0 0 30px rgba(233,30,99,.5);
    border-color:#E91E63;
  }
  body.boss-active .customer-card[data-boss="1"]{
    animation:bossPulse 1.5s infinite;
    border:3px solid #E91E63;
  }
  @keyframes bossPulse{
    0%,100%{box-shadow:0 0 0 0 rgba(233,30,99,.5);}
    50%{box-shadow:0 0 0 10px rgba(233,30,99,0);}
  }
  ```

- Trong `renderCustomers`, customer card boss thêm `data-boss="1"`.

**Test**: chơi level 5 (boss Tuấn) → khi Tuấn xuất hiện, header glow hồng, card Tuấn pulse đỏ.

### M3. Sai nước = 0% bonus, không phải 40%

**Vấn đề**: pha trà tắc thay vì trà đá → vẫn cộng 40% giá. Logic kỳ.

**Hướng sửa**: trong `serveSelected` drink check, branch `wrong`:

```js
} else if(G.drinkStation.status==='done'&&G.drinkStation.finishedDrink){
  // Wrong drink — give NO bonus, just discard, lose ingredient cost
  bonuses.push(`Sai nước (${DRINKS[G.drinkStation.finishedDrink].name} không phải đơn này)`);
  sc-=2;
  drinkResult='wrong';
  resetDrinkStation();
  G.money=Math.max(0,G.money-3000);
}
```

**Test**: pha sai nước → notify "sai nước", -3k chi phí, không cộng giá nước, không fail món chính.

## 7. Out of scope (lưu cho v1.12+)

| Item | Lý do hoãn |
|---|---|
| `class Station` refactor | 4-6h, cần unit test, không user-visible |
| `G.mode` first-class | Cần audit toàn bộ logic checkEndCondition + branch festival/campaign/challenge, đáng làm riêng |
| Boss meter 0/10 + special music | Cần asset audio chưa có |
| EN toggle | 1 tuần, ~200 string, cần proofread |
| Analytics (Plausible/umami) | Cần quyết định privacy + GDPR-friendly setup |
| Mobile-first UI rework | Cần mockup + breakpoint mới + playtest mobile |
| Surprise level "Cụ Ông trong giấc mơ" | 6h thiết kế + content riêng |
| Cumulative achievement (đã phục vụ 100 khách Tây...) | Cần thiết kế thêm + storage cumulative stats |
| Steam page / itch.io publish | Marketing, không phải code |
| Mobile PWA / Electron | Cần icon, manifest, test trên thiết bị thật |

## 8. Acceptance criteria

- [ ] Đóng tab giữa festival → reopen → đúng `levelIdx` cũ (C1)
- [ ] End-level (boss bỏ đi / timeout / hoàn thành) không có notify pop nhảy lên end-screen (C2)
- [ ] Heat day chơi được (test 3 lần), không cảm thấy "không thể" (H1)
- [ ] Khách thường serve thành công → 1-2 popup, không 4 (H2)
- [ ] Khách quen / mystery serve → 2 popup (money + happy quote) (H2)
- [ ] Festival kết thúc khi 5 khách bỏ đi, có warning ở 3 và 4 (H3)
- [ ] Tutorial 9 step, có Drink Station + Sổ tay quán (H4)
- [ ] Khi khách <30% patience → header glow đỏ nháy (M1)
- [ ] Boss spawn → body có class `boss-active` + visual differentiation (M2)
- [ ] Sai nước → 0% bonus, mất 3k chi phí (M3)
- [ ] JS parse OK + onclick + getElementById đều hợp lệ
- [ ] Save migration v111 vẫn hoạt động (không bump key vì không đổi schema)
- [ ] Playtest 1 lần full Ch.1 (lv 1-5) không gặp regression

## 9. Effort breakdown

| Block | Time |
|---|---|
| C1 (festival hijack) | 2h |
| C2 (setTimeout cleanup) | 1h |
| H1 (heat balance) | 1h |
| H2 (notification spam) | 2h |
| H3 (festival strikes) | 30m |
| H4 (tutorial) | 30m |
| M1 (rush feedback) | 2h |
| M2 (boss visual) | 3h |
| M3 (sai nước 0%) | 30m |
| Test + tweak | 2h |
| **Tổng** | **~14h** |

Có thể chia 2 sprint nửa ngày:

- **Sprint A**: C1, C2, H1, H2, H3, H4 — fix bug + giảm friction.
- **Sprint B**: M1, M2, M3 + test + push.

## 10. Test plan trước khi push

### Tự động (script Node)

- `new Function(js)` — parse OK
- onclick functions all defined
- getElementById ids all exist in HTML
- Recipe ingredients all in INGREDIENTS
- Drink ingredients all in INGREDIENTS
- NPC favorite + drink references valid
- Save migration v110 → v111 → v111.01 (no schema change) giữ data

### Tay (browser, 15 phút)

1. Load demo, "Tiếp tục" → đúng level.
2. Vào level 1 → spawn 1 khách → chỉ thấy speech bubble, không notify.
3. Phục vụ Bác Tâm đúng → thấy money popup + happy quote, không thấy notify thừa.
4. Phục vụ khách thường đúng → chỉ thấy money popup.
5. Vào festival → chơi 30s → đóng tab → reopen → "Tiếp tục" về đúng level cũ.
6. Vào festival → để 5 khách bỏ → end với warning ở 3 và 4.
7. Pha sai nước → 0% bonus, mất 3k.
8. Vào level 5 (boss Tuấn) → header glow hồng, card Tuấn pulse.
9. Spawn 3 khách + để patience < 30% → header đỏ nháy.
10. Tutorial → 9 step, có drink + gallery.

## 11. Strategy commit + push

- 1 commit duy nhất: `v1.11.01: festival save fix, notification cleanup, boss + rush polish`
- Push lên `main` sau khi pass cả test tự động và playtest tay.
- Demo URL: https://vutaitam.github.io/bep_viet_7/ — tự build sau ~2 phút.
- Hard reload (`Ctrl+Shift+R`) để bypass cache.

## 12. Sau v1.11.01 (gợi ý hướng v1.12)

Theo CEO Hương:

- 30 ngày: post Reddit/Facebook + 5 SFX + devlog TikTok
- 60 ngày: EN toggle + analytics + mobile UI breakpoint
- 90 ngày: Steam page + Tết DLC + nhạc đàn bầu

Theo Dev Minh:

- Refactor `class Station` (Pot, Drink, Grill abstract)
- `G.mode` first-class thay monkey-patch
- Unit test gameplay flow

Theo Gamer Long:

- Boss meter 0/10 + intro animation
- Surprise level "Cụ Ông trong giấc mơ"
- Customer queue display ngoài quán (xếp hàng)

---

*v1.11.01 plan — soạn sau hội đồng đánh giá 3 chuyên gia cuối phiên v1.11. Cập nhật khi có thay đổi lớn.*
