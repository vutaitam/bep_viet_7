# Marketing Phase — Bếp Việt v1.11.x

> Cập nhật 2026-04-30: bản code hiện tại là **Beta v1.11.04.1 (Balance)**. Tài liệu này là playbook marketing pilot, không phải trạng thái kỹ thuật mới nhất. Trạng thái kỹ thuật hiện tại xem `PROJECT_REQUIREMENTS_CURRENT.md` và `README.md`.

> Tài liệu này là playbook 1 tuần marketing sau khi ship nhánh v1.11.x. Mục tiêu: BIẾN GAME → PRODUCT bằng cách có audience thật trước khi quay lại code.

## 0. Vì sao pause coding

CEO Hương cảnh báo: *"Đừng để 'shipping reflex' biến thành 'avoidance' — bạn đang ở giai đoạn dễ ngầm trốn marketing bằng cách code thêm."*

3 patch trong vài giờ ≠ tiến bộ thị trường. **0 user thử = 0 feedback thật**. Tiếp tục code mà không có audience → polish bị bias theo cảm tính, không theo người chơi thật. Thiếu data → khi quay lại code v1.12, không biết nên ưu tiên gì.

## 1. Mục tiêu 1 tuần

| Chỉ số | Hiện tại | Sau 1 tuần |
|---|---|---|
| Unique visitor demo | ~0 | ≥50 |
| Phản hồi (comment, DM, Discord) | 0 | ≥10 |
| Hoàn thành level 1 (Plausible event) | unknown | ≥10 |
| Devlog video views | 0 | ≥500 |

Khi có data này → bạn biết pain point thật để code v1.12.

## 2. Lịch hành động 7 ngày

### Ngày 1 — Setup analytics + record (2-3h)

#### Plausible / Umami analytics

- [ ] Đăng ký Plausible <https://plausible.io> (30 ngày trial free) HOẶC self-host Umami <https://umami.is>
- [ ] Thêm site `vutaitam.github.io/bep_viet_7`
- [ ] Paste snippet vào `<head>` của `index.html`:
  ```html
  <script defer data-domain="vutaitam.github.io" src="https://plausible.io/js/script.js"></script>
  ```
- [ ] Custom event hooks (gọi `plausible('event_name')`):
  - "story_started" — khi click "Bắt đầu câu chuyện"
  - "level_1_complete" — khi end-level lvl 1 với star ≥1
  - "festival_started"
  - "gallery_opened"
  - "boss_won_<bossNpc>" — khi serve thành công cho boss
- [ ] Nếu bật analytics, push một patch nhỏ riêng chỉ chứa Plausible/Umami snippet + event hooks

Ưu điểm Plausible/Umami: privacy-friendly, không cần GDPR consent banner, không làm chậm trang.

#### Record clip 60-120s

Quay 3 đoạn ngắn với OBS Studio / Windows Game Bar (Win+G) / ScreenToGif:

- [ ] **Hook 30s — Cụ Ông**: từ đầu cutscene đến lúc "Bác Tâm đứng chờ trước cổng"
- [ ] **Action 30s — Boss + festival**: Lvl 5 boss Tuấn arrival → phục vụ → win, hoặc Festival 60s đầu với combo món+nước
- [ ] **Tutorial 60s**: lướt qua 17 step chứng minh chiều sâu

### Ngày 2 — TikTok / Reels (3-4h)

#### Hook clip 30s

- Mở: cutscene Cụ Ông (3s)
- Cut: nấu bún dọc mùng + pha trà đá (10s)
- Cut: festival 5 khách spawn cùng lúc (5s)
- Cut: boss arrival header glow đỏ (5s)
- Outro: "Chơi miễn phí — link in bio" (7s)
- Nhạc: "Vietnamese instrumental" trong TikTok library

#### Caption (Việt)

```text
Game cooking đầu tiên về quán bún Hà Nội 🥢
Cụ Ông qua đời, để lại cuốn sổ công thức 30 năm.
Cháu giữ được vị quán không? 👴

✅ 15 ngày · 3 chương · 21 NPC
✅ Pha tay trà tắc, cà phê sữa đá
✅ Lễ hội mode endless
✅ Chơi miễn phí trên trình duyệt — link bio

#GameViet #IndieGame #BếpViệt #Hanoi #PhoBistro
```

- [ ] Đăng TikTok
- [ ] Đăng Instagram Reels (cùng video)
- [ ] Đăng Facebook Reels (cùng video)

### Ngày 3 — Reddit (2h)

3 subreddit, 3 post khác nhau (KHÔNG copy-paste — tự viết riêng):

- [ ] **r/IndieGaming** — Title: `[Browser, Free] I made a Vietnamese cooking game about inheriting my grandfather's noodle shop` — 200-300 từ về cảm hứng + 3 screenshot + link demo. Best time: 10am-1pm UTC weekdays.
- [ ] **r/WebGames** — Title: `Bếp Việt — vanilla JS cooking sim with Vietnamese identity (15 levels, festival mode, no ads)` — kỹ thuật hơn, vanilla JS, no deps, no build step, GitHub Pages.
- [ ] **r/Vietnamese** — Title: `Mình làm game online về quán bún Việt — mời mọi người chơi thử` — tiếng Việt hoàn toàn, cảm xúc, kêu gọi feedback chân thành. **Post quan trọng nhất**.

### Ngày 4 — Facebook nhóm Việt Nam (2h)

3 nhóm, 3 góc tiếp cận khác nhau:

- [ ] **Yêu Hà Nội** (~500k member) — góc cảm xúc về cụ ông, ngõ phố cổ
- [ ] **Foody Việt Nam** / **Hội yêu ẩm thực Việt** — góc 5 món Việt + 5 nước truyền thống
- [ ] **Cộng đồng lập trình viên Việt Nam** / **Vietnam Web Dev** — góc kỹ thuật vanilla JS + open source

### Ngày 5 — Devlog video (4h)

- [ ] Quay 1 video YouTube 3-5 phút "Mình làm game cooking Việt như thế nào trong 6 tuần":
  - Inspiration (cụ ông, bún dọc mùng, ngõ phố cổ Hà Nội)
  - Tech stack (vanilla JS chọn vì học)
  - Feature reel (drink station, festival, gallery)
  - Roadmap v1.12 (EN toggle, audio, Tết DLC)
  - CTA: "Cho mình feedback — link bio"
- [ ] Cắt 60s upload TikTok/Reels
- [ ] Đăng full lên YouTube

### Ngày 6 — Discord + outreach (2h)

- [ ] Tạo Discord server "Bếp Việt — Tiệm Bún Số 7"
- [ ] 5 channel: #welcome, #feedback, #bug-report, #dev-log, #fanart
- [ ] Mời 5 bạn thân vào trước
- [ ] Thêm Discord button vào menu game bằng một micro-patch riêng nếu server thật sự hoạt động
- [ ] DM/email 5 food/game YouTuber Việt:
  - Vương Khang (food review)
  - Sam Sam Dim (food review)
  - Ăn Sập Sài Gòn (food)
  - Game indie reviewer Việt
  - Tin Game (TikTok game news)

#### Template DM

> "Em làm game web về quán bún truyền thống Việt Nam — có 15 ngày, mini-game nướng chả, pha cà phê sữa đá. Anh/chị có thời gian thử + chia sẻ cảm nghĩ không? Em không yêu cầu review chính thức, chỉ cần phản hồi. Link: <https://vutaitam.github.io/bep_viet_7/>"

### Ngày 7 — Đánh giá + plan v1.12

- [ ] Tổng kết Plausible: visitors, unique, top funnel drop-off
- [ ] Tổng kết Reddit/TikTok: upvote, comment, share, save
- [ ] Tổng kết Discord: member count
- [ ] Đọc tất cả feedback, group theo theme
- [ ] Top 3 issue lặp lại → vào `PLAN_v1.12.md`

## 3. Templates sẵn dùng

### Hashtag Việt
```text
#GameViet #IndieGame #BếpViệt #TiệmBún #Hanoi
#NấuĂnVN #GameWeb #FreeGame #VanillaJS
```

### Hashtag English
```text
#indiegamedev #cookinggame #vietnamesegame
#browsergame #webgame #pixelart #foodgame
```

### One-liner pitch
> "Bếp Việt: Tiệm Bún Số 7 — game cooking miễn phí về cháu kế nghiệp quán bún ngõ phố cổ Hà Nội. 15 ngày, 3 miền, 21 nhân vật. Chơi trình duyệt."

### One-liner English
> "Bếp Việt — a free vanilla-JS browser cooking game about inheriting a Hanoi noodle shop. 15 days, 21 characters, 5 hand-crafted Vietnamese drinks."

## 4. Acceptance — khi nào quay lại code v1.12

**KHÔNG quay lại code** nếu chưa đạt 1 trong 2:

- ≥50 unique visitor (Plausible) **HOẶC**
- ≥5 phản hồi từ người lạ (không phải bạn thân)

**Quay lại code v1.12 khi**:

- Có data về drop-off (ví dụ: 80% bỏ ở chương 3 → vấn đề chương 3)
- Có ≥3 feature request lặp lại
- Có ≥1 bug report từ người lạ

## 5. Việc duy nhất nên code trong tuần marketing

Không quá 30 phút/ngày, chỉ khi cần thiết:

- Sửa bug crash (nếu có user báo)
- Thêm Plausible analytics snippet (Ngày 1)
- Thêm Discord link vào menu (Ngày 6, nếu setup Discord)

**KHÔNG**: thêm tính năng mới, refactor, polish thêm. Sự cám dỗ sẽ rất lớn — kháng cự.

## 6. Action ngay hôm nay (90 phút)

- [ ] **[20 phút]** Đăng ký Plausible/Umami → paste snippet → push một patch riêng chỉ với analytics
- [ ] **[40 phút]** Quay 3 clip với Win+G hoặc OBS
- [ ] **[30 phút]** Đăng 1 post Facebook nhóm "Yêu Hà Nội" — bài đầu tiên

Còn lại theo lịch 6 ngày tiếp.

## 7. Tracking metrics weekly

Cập nhật bảng này mỗi cuối ngày:

| Ngày | Visitor | Reddit upvote | TikTok view | Discord member | Feedback nhận | Bug report |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |

---

*Marketing playbook v1.11.x — soạn sau hội đồng đánh giá round 2. Cập nhật khi có thay đổi.*
