# 🥢 BẾP VIỆT: TIỆM BÚN SỐ 7

> **Context file cho Claude** — Sử dụng file này để Claude hiểu nhanh toàn bộ dự án trong các session mới.

---

## 📋 TỔNG QUAN DỰ ÁN

**Tên game**: Bếp Việt: Tiệm Bún Số 7

**Loại**: Game cooking 2D web-based với cốt truyện cảm động

**Mục tiêu**: Dự án học tập HTML/CSS/JavaScript, làm portfolio cá nhân (KHÔNG thương mại hóa ở v1)

**Người làm**: 1 người (solo developer)

**Thời gian**: 6-7 tuần

**Tech stack**: HTML + CSS + Vanilla JavaScript (đã cân nhắc Phaser.js nhưng quyết định giữ vanilla)

**Repository**: https://github.com/vutaitam/bep_viet_7

**Demo live**: https://vutaitam.github.io/bep_viet_7/ (GitHub Pages)

**Phiên bản hiện tại**: 🧪 **Beta v1.11.04.2 (Art)** (emoji art replacement + balance fixes round 5 + SVG Cụ Ông portrait + modular refactor)

---

## 🎮 CỐT TRUYỆN

Cụ Ông qua đời, để lại cho cháu (player) quán bún nhỏ trong ngõ phố cổ Hà Nội cùng cuốn sổ công thức gia truyền 30 năm. Player phải:
- Tiếp nối di sản qua 3 chương: **Hà Nội → Hội An → Sài Gòn**
- Đặc biệt: nâng cấp công thức **Bún dọc mùng** (signature dish) qua 4 cấp
- 4 cutscenes về Cụ Ông (intro, học bí quyết, được công nhận, ending)
- Đạt danh hiệu **"Đầu bếp 3 miền"** cuối game

---

## 🎯 DESIGN PILLARS (5 trụ cột)

Khi gặp quyết định khó, hỏi: *"Cái này có phá pillar nào không?"* Nếu có → cắt.

1. **🏛️ Pillar 1: "Cảm xúc về Cụ Ông là trên hết"** — Mọi tính năng phải support cảm xúc này
2. **🏛️ Pillar 2: "Bún dọc mùng là trung tâm"** — Mỗi chương phải có Bún dọc mùng, không bỏ
3. **🏛️ Pillar 3: "Bản sắc Việt thực sự"** — Nếu giống game Tây 100%, suy nghĩ lại
4. **🏛️ Pillar 4: "Ẩm thực = tâm huyết, không phải kỹ thuật"** — Tránh biến thành Cooking Mama
5. **🏛️ Pillar 5: "Phải SHIP, không cần hoàn hảo"** — Hoàn thành quan trọng hơn

---

## 📐 PHẠM VI (LỊCH SỬ - trước v1.11)

> Lưu ý 2026-04-30: phần này là quyết định scope cũ. Bản hiện tại đã mở rộng lên 10 món, 5 đồ uống gameplay thật, 21 NPC, 15 level, festival/gallery, emoji art runtime và refactor nhiều file. Ưu tiên trạng thái mới trong `PROJECT_REQUIREMENTS_CURRENT.md`.

### Đã quyết định

| Yếu tố | Quyết định | Lý do |
|---|---|---|
| Số món | **3 món** (Bún dọc mùng + Bánh mì + Bún chả) | Đủ đa dạng, không over-scope |
| Mỗi món | 4 cấp công thức | Như Bún dọc mùng signature |
| Số chương | 3 chương (Hà Nội → Hội An → Sài Gòn) | Cân bằng phạm vi |
| Số NPCs | **3 khách quen + khách lạ** (Bác Tâm, Cô Lan, John) | Đủ để cá nhân hóa |
| Mini-games | **2 cái** (thái + nướng) | Tăng variety |
| Cutscenes | 4 cutscenes về Cụ Ông | Cốt truyện trung tâm |
| Sự kiện ngẫu nhiên | Chỉ giữ **Mưa rào** (bỏ Đoàn du khách, Thanh tra) | Tránh phức tạp |
| Tiếng Anh | **BỎ HOÀN TOÀN** | Đầu tư tiếng Việt CHẤT |
| Multi-tasking | Tối đa **3 khách** | Vừa đủ áp lực |
| Upgrade | 15 cấp (5 thiết bị + 10 nhà hàng) | Giảm từ 35 ban đầu |
| KPI Dashboard | **Bọc trong cutscene Cụ Ông** | Tránh "Excel feel" |
| Endless Mode | CÓ (đơn giản) | Replayability |
| Daily Challenge | CÓ (đơn giản) | Lý do quay lại |
| Multiplayer | KHÔNG | Quá phức tạp |

### Đã loại bỏ
- ❌ Hiring System (thuê nhân viên) - quá phức tạp
- ❌ Reviews từ khách (Foody/Google Maps style) - phức tạp UX
- ❌ Mùa vụ/khuyến mãi - cần lịch + balance economy lại
- ❌ Mini-game "đi chợ" (gợi ý từ Chef) - tốn thời gian
- ❌ Tiếng Anh i18n
- ❌ Mobile-first (quyết định **Desktop-only**)

---

## 💰 KINH TẾ GAME (đã cân bằng kỹ qua nhiều iteration)

### Doanh thu mỗi chương
| Chương | Income/màn | Boss bonus | Tổng/chương |
|---|---|---|---|
| Ch.1 (Hà Nội) | 250.000đ × 5 = 1.250.000đ | +200.000đ | 1.450.000đ |
| Ch.2 (Hội An) | 400.000đ × 5 = 2.000.000đ | +500.000đ | 2.500.000đ |
| Ch.3 (Sài Gòn) | 620.000đ × 5 = 3.100.000đ | +1.000.000đ | 4.100.000đ |

### Chi phí cố định cuối chương
| Chương | Mặt bằng | Điện nước (8% DT) | Lương trợ giúp | TỔNG |
|---|---|---|---|---|
| Ch.1 | 400.000đ | 116.000đ | 200.000đ | 716.000đ |
| Ch.2 | 1.000.000đ | 200.000đ | 400.000đ | 1.600.000đ |
| Ch.3 | 1.800.000đ | 328.000đ | 500.000đ | 2.628.000đ |

### Biên lợi nhuận: **35-50%** (giống tiêu chuẩn ngành F&B Việt Nam)

### Tiền cuối game: ~2.296.000đ (đủ để mua 16/20 upgrades)

### Giá món (đã điều chỉnh)
- Bún dọc mùng: 40.000đ ⭐ (signature, +20% bonus)
- Bún chả: 35.000đ
- Bánh mì: 25.000đ

### Multiplier khi phục vụ
- Khách quen Bác Tâm: x1.3 (Bún dọc mùng)
- Cô Lan: x1.5 (Bánh mì - vội vàng)
- John: x2.0 (Bún chả - kiên nhẫn cao)
- Speed bonus: +3⭐ nếu kiên nhẫn còn >70%
- Grill PERFECT: +15% tiền

---

## 👥 NPC SYSTEM

| NPC | Emoji | Món thích | Kiên nhẫn | Tip | Vai trò |
|---|---|---|---|---|---|
| Bác Tâm | 👴 | Bún dọc mùng | 75s | x1.3 | Bạn cũ Cụ Ông, mở Hội An |
| Cô Lan | 👩‍💼 | Bánh mì | 40s | x1.5 | Doanh nhân vội vàng |
| John | 🧔 | Bún chả | 90s | x2.0 | Tây ba lô (Mỹ) |
| Khách lạ | 🧑 | Random | 60s | x1.0 | 40% tỷ lệ spawn |

**Câu thoại riêng**: arrive / happy / angry cho từng NPC

---

## 🎨 TÍNH NĂNG CHÍNH (LỊCH SỬ v7)

> Lưu ý: phần này ghi lại trạng thái demo cũ. Danh sách hiện tại đầy đủ hơn nằm ở mục "Trạng thái hiện tại" và `PROJECT_REQUIREMENTS_CURRENT.md`.

### Đã code trong demo v7
- ✅ **Cutscene 5 dialogue** với typewriter effect, click để skip
- ✅ **Tutorial 7 bước** (truy cập từ menu)
- ✅ **3 món** với công thức khác nhau
- ✅ **Mini-game nướng** cho Bún chả (lật + gắp đúng vùng PERFECT 40-60%)
- ✅ **Multi-tasking 3 khách**
- ✅ **5 NPCs** với câu thoại riêng + badge ⭐ cho khách quen
- ✅ **Pause/Resume system** với overlay
- ✅ **P&L cuối level** + feedback từ Cụ Ông (5 mức rating)
- ✅ **Score popup bay lên** + notification system phân loại
- ✅ **Tip multiplier** cho khách quen (x1.3-x2.0)
- ✅ **Speed bonus** khi phục vụ nhanh
- ✅ Font **Be Vietnam Pro** (Google Fonts)
- ✅ Responsive cho desktop + mobile cơ bản

### Sẽ code trong v1 đầy đủ
- Mini-game thái rau (rhythm)
- Sound design (đàn bầu, sáo trúc, SFX)
- Upgrade system 2 nhánh (thiết bị + nhà hàng)
- 3 chương đầy đủ với 15 levels
- 4 cutscenes về Cụ Ông
- Boss-level (Tuấn, Khang, Iron Chef Việt)
- Save/Load system với auto-save 30s
- Endless mode
- Daily challenge

---

## 🛠️ KIẾN TRÚC CODE (v1.11.04.2-beta — runtime 7-file)

### Cấu trúc thư mục hiện tại
```
bep_viet_7/
├── index.html              365 dòng · 19 KB — HTML markup thuần, references external CSS/JS
├── css/
│   └── styles.css          757 dòng · 40 KB — toàn bộ styles
├── js/                     (load order: data → state → game → screens)
│   ├── data.js             335 dòng · 29 KB — RECIPES, INGREDIENTS, DRINKS, NPCS, LEVELS, UPGRADES, ACHIEVEMENTS array, DIALOGUES, TUTORIAL, PROG_KEY/LEGACY/DEFAULT (pure data)
│   ├── state.js            109 dòng ·  5 KB — let PROG, save/load/migrate, achievement queue + functions, let G transient state, intervals, notifyDelayed/clearTimers
│   ├── emoji-art.js        — runtime thay emoji hiển thị bằng ảnh SVG tự tạo (không CDN)
│   ├── game.js             832 dòng · 41 KB — startGame, tickTimer, customer spawn/patience/render, cooking + grill + drink station mechanics, serve logic, end-level scoring
│   └── screens.js          544 dòng · 26 KB — Tutorial, cutscene, story overlay, level select, upgrade shop, festival mode (overrides checkEndCondition), gallery, generic UI helpers (notify/popup/confetti/pause), navigation, DOMContentLoaded init
├── assets/
│   └── portraits/
│       ├── cu-ong-young.svg  14 KB — Cụ Ông trẻ 45t (cầm bát bún + tạp dề)
│       ├── cu-ong-old.svg    17 KB — Cụ Ông già 75t (cardigan + ôm sổ)
│       ├── cu-ong-spirit.svg 13 KB — Cụ Ông linh hồn (translucent + halo + blessing)
│       └── preview.html             — preview tool 64-256px + mock card
├── PLAN_v1.10.md           — design spec gốc v1.10 (15 chương, drinks gameplay, mystery)
├── PLAN_v1.11.01.md        — patch plan sau hội đồng đánh giá round 1
├── PROMPTS_ART_v1.12.md    — prompt pack Gemini Imagen (1159 dòng) cho 36 art assets
├── MARKETING_v1.11.md      — playbook 7-day marketing pause coding
├── PROJECT_REQUIREMENTS_CURRENT.md
├── README.md               — landing page chỉn chu cho visitor từ Reddit/FB
└── CLAUDE.md               — file này
```

### Quy ước load order JS

```html
<script src="js/data.js"></script>      <!-- pure constants, no functions called -->
<script src="js/state.js"></script>     <!-- defines PROG, G, achievements, queue -->
<script src="js/game.js"></script>      <!-- core gameplay, defines checkEndCondition -->
<script src="js/screens.js"></script>   <!-- screens + festival monkey-patch + DOMContentLoaded init -->
```

Vanilla JS, không module, globals chia sẻ qua window scope. screens.js phải load CUỐI vì festival mode override `checkEndCondition` từ game.js.

### Game State structure
```javascript
gameState = {
  player: { name, money, totalScore, currentChapter, ... },
  currentLevel: { timeRemaining, customers, score, ... },
  npcs: { bac_tam, john, co_lan, co_mai, phe_binh_khang },
  upgrades: { equipment: {...}, restaurant: {...} },
  bunDocMungLevel: 1-4,
  cutscenesWatched: [],
  achievements: [],
  business: {  // v6 mới
    chapterRevenue, chapterExpenses, totalProfit,
    customerRating, customerCount, returningCustomers,
    perfectMiniGames, chapterReports
  },
  settings: { soundEnabled, musicVolume, language: 'vi', ... }
}
```

---

## 🎙️ FEEDBACK TỪ 8 CHUYÊN GIA (mock conversations)

### Đồng thuận lớn (5+/8 đồng ý)
1. ✅ Cốt truyện Cụ Ông là VÀNG
2. ✅ Bún dọc mùng signature là USP độc đáo
3. ✅ Cần cắt scope để ship được
4. ✅ Bỏ tiếng Anh (focus tiếng Việt CHẤT)
5. ✅ KPI Dashboard cần bọc trong cutscene Cụ Ông

### Cảnh báo lớn
- 🚨 **Producer Tuấn**: "70% xác suất bạn không ship được vì tài liệu quá hoàn hảo - phải ngừng plan, bắt đầu code"
- 🚨 **Chef Hương**: "Đang biến nấu ăn Việt thành Cooking Mama - thiếu hồn"
- 🚨 **NĐT Ngân**: "Không có giá trị thương mại trong v1"
- 🚨 **Dev Minh**: "Polish underestimate 50%"
- 🚨 **Gamer Long**: "Replayability đang yếu - cần Endless + Daily"

### Playtest từ 5 game thủ (mock)
- 👧 **Hà (16, casual)**: 3/5 - "Tutorial khó hiểu, cutscene quá buồn"
- 👨 **Tùng (28, hardcore)**: 3.5/5 - "Quá ngắn, replayability thấp"
- 👩 **Mai (35, mẹ)**: 5/5 - "Tôi vừa khóc vừa nấu! Cần auto-save"
- 👴 **Bác Hùng (62)**: 3.5/5 - "Hay nhưng chữ nhỏ"
- 🧑 **Khoa (22, streamer)**: 7/10 hiện tại, 9/10 tiềm năng - "Phải support!"

### Top 3 cần sửa
1. 🔴 **Tutorial** (60% gặp khó)
2. 🟡 **Auto-save** mỗi 30s
3. 🟡 **Accessibility** - chữ to hơn

---

## 📅 KẾ HOẠCH 6 TUẦN

| Tuần | Mục tiêu | Giờ |
|---|---|---|
| 1 | Setup + 1 level Bún dọc mùng + Cutscene #1 | 16h |
| 2 | Vertical slice (1 level hoàn chỉnh) + Test với 5 người | 18h |
| 3 | 5 levels Chương 1 (Hà Nội) + 2 NPCs + Mini-game thái | 18h |
| 4 | 5 levels Chương 2 (Hội An) + Cutscene #2 + Mini-game nướng | 18h |
| 5 | 5 levels Chương 3 + Chi phí cố định + KPI Dashboard + Cutscene #4 | 24h |
| 6 | Polish + Sound + Save/Load + Endless + Daily | 18h |

**Tổng: ~112 giờ** (đã tính buffer 20%)

**Deadline cứng**: Cuối tuần 6 PHẢI ship, dù không hoàn hảo

---

## ⚠️ NHỮNG ĐIỂM CẦN LƯU Ý

### Lỗi từng gặp và cách fix
1. **CSS specificity issue (v7.0)**: `.menu { display: flex }` override `.screen.active { display: block }` → Sửa bằng `!important`
2. **Browser cache**: Sau khi update GitHub Pages, phải `Ctrl+Shift+R` để bypass cache
3. **GitHub Pages 404**: Thường do file chưa build xong, đợi 2-5 phút

### Quyết định kỹ thuật
- **Vanilla JS** thay vì Phaser.js (vì mục tiêu HỌC, không phải tốc độ)
- **Single HTML file** thay vì nhiều files (đơn giản deploy)
- **Desktop-only** (game cooking khó trên mobile)
- **Tiếng Việt only** (tránh phức tạp i18n)

### Chiến lược marketing (sau khi ship v1)
1. Đăng vào Facebook group "Yêu Hà Nội", "Foody Việt Nam"
2. TikTok: clip 30s cutscene Cụ Ông
3. Liên hệ food YouTuber Việt: Vương Khang, Sam Sam Dim
4. Reddit: r/Vietnamese, r/IndieGaming
5. Tham gia Vietnam Game Awards

---

## 🔗 LINKS QUAN TRỌNG

- **Repo**: https://github.com/vutaitam/bep_viet_7
- **Demo**: https://vutaitam.github.io/bep_viet_7/
- **Tài liệu Excel chi tiết**: `Du_an_Bep_Viet_Tiem_Bun_So_7_v6.xlsx` (15 sheets, 95 formulas)

---

## 💬 GHI CHÚ CHO CLAUDE TRONG SESSION TIẾP THEO

Khi làm việc tiếp với dự án này, lưu ý:

### Người dùng
- Là người Việt, làm dự án solo
- Mục tiêu chính: học HTML/JS + portfolio
- Repo hiện tại dùng GitHub Pages tại `vutaitam.github.io/bep_viet_7`
- Đã có GitHub Pages chạy

### Phong cách làm việc đã thiết lập
- Iterative: làm từng phiên bản (v1 → v7)
- Hay tham khảo ý kiến chuyên gia (mock conversations)
- Thích phân tích định lượng (math + simulation)
- Quan tâm đến cảm xúc + bản sắc Việt

### Cách Claude nên trả lời
- ✅ **Trực tiếp, thẳng thắn** (không sến)
- ✅ Tiếng Việt
- ✅ Đưa ra **lựa chọn cụ thể** thay vì hỏi vague
- ✅ Đeo các "mũ" chuyên gia khi cần (dev, gamer, chef, producer, NĐT, UX, marketing, sound)
- ✅ Code phải **test thực tế** (Playwright headless) trước khi giao
- ❌ Không over-promise (đừng nói "dễ thôi" khi thực ra phức tạp)
- ❌ Không tăng scope ngầm

### Trạng thái hiện tại (cập nhật cuối — 2026-04-30)

**Phiên bản đang chạy: 🧪 Beta v1.11.04.2 (Art)**

- ✅ 15 level / 3 chương đầy đủ (Hà Nội → Hội An → Sài Gòn)
- ✅ Drink station gameplay thật: 5 công thức (trà đá, trà tắc, nước mía, cà phê sữa đá, rau má)
- ✅ 21 NPC: 3 khách quen, 5 khách Tây, 6 khách Việt, 3 khách bí ẩn, 3 boss
- ✅ Customer reactions runtime: speech bubble + happy/wrong/slow quotes (gated theo NPC type)
- ✅ Mystery story flags: phục vụ đúng lần đầu mở khóa câu chuyện riêng + bonus 30k
- ✅ 20 achievements + queue defer cuối-level
- ✅ 7 sự kiện ngày: rain, festival, rush, peak, heat, blackout, tour
- ✅ Festival endless mode (5-strike + warning ở 3/4 + best score lưu)
- ✅ Gallery 4 tab: thành tựu, khách đã gặp, câu chuyện, thống kê
- ✅ Tutorial 17 bước · 9 section · pause overlay có "Xem lại hướng dẫn"
- ✅ Texture giấy dó overlay · favicon SVG inline · Open Graph meta · confetti effect
- ✅ Festival save corruption FIXED (G.recipeOverallOverride thay vì PROG hijack)
- ✅ 3 SVG portrait Cụ Ông tự vẽ (young/old/spirit) — replace emoji 👴 trong cutscene + feedback box
- ✅ Refactor runtime: HTML / CSS / 5 JS (data, state, emoji-art, game, screens) — không còn monolithic
- ✅ Balance fixes round 5: bản balance nền là `Beta v1.11.04.1 (Balance)`
- ✅ Emoji art replacement draft: `js/emoji-art.js` đổi emoji hiển thị thành ảnh SVG tự tạo, có đánh giá trong `ART_REVIEW_v1.12.md`

### Pending (post-/compact)

- ✅ Hội đồng chuyên gia round 5 đã được áp vào beta v1.11.04.1; art icon patch đang là v1.11.04.2
- 🟡 Nếu tiếp tục planning, soạn `PLAN_v1.11.05.md` dựa trên playtest/balance thật
- 🟡 Marketing phase: Plausible analytics + 3 TikTok clip + Reddit/FB posts (per `MARKETING_v1.11.md`)
- 🟡 Gemini Imagen quota reset → gen 33 art assets còn lại (per `PROMPTS_ART_v1.12.md`)
- 🟡 Tích hợp Bác Tâm + Cô Lan + John portrait (chưa làm; emoji 👴/👩‍💼/🧔 vẫn dùng)

### Nếu user yêu cầu code mới
- Luôn check syntax bằng `node --check`
- Test thực tế bằng Playwright nếu là HTML
- Verify CSS specificity (vì v7 đã từng bị)
- Đảm bảo cleanup intervals (memory leak)
- Tiếng Việt phải đầy đủ dấu

### Nếu user yêu cầu thiết kế/phân tích
- Dùng mock chuyên gia phù hợp
- Đưa ra số liệu cụ thể (giờ, %, tiền)
- Xét theo Design Pillars (5 trụ cột)
- Cân nhắc deadline 6-7 tuần và 1 người làm

---

*File này được tạo tự động từ context conversation. Cập nhật khi có thay đổi lớn.*
*Phiên bản: 1.0 — Tạo bởi Claude*
---

## HANDOFF HIỆN TẠI - HƯỚNG v1.11.04.2+

Đây là phần mới nhất cần ưu tiên đọc. Các phần cũ bên dưới có thể đã lỗi thời hoặc bị lỗi encoding.

### Mục Tiêu Hiện Tại

Bỏ các giới hạn scope cũ nếu chúng làm game kém hay hơn. Mục tiêu duy nhất là làm “Bếp Việt: Tiệm Bún Số 7” trở thành game hay hơn, sâu hơn, Việt Nam hơn và đáng chơi lâu hơn.

### Trạng Thái Repo Hiện Tại

- File chơi chính: `index.html` (chỉ HTML markup) + `css/styles.css` + 5 file JS trong `js/`.
- Version: **🧪 Beta v1.11.04.2 (Art)** (emoji art replacement + round 5 balance fixes + SVG portrait + modular refactor).
- Công nghệ: vanilla HTML/CSS/JS, GitHub Pages, **không build step**.
- Repo: `https://github.com/vutaitam/bep_viet_7`
- Demo: `https://vutaitam.github.io/bep_viet_7/`
- Spec docs: `PLAN_v1.10.md`, `PLAN_v1.11.01.md`, `PROMPTS_ART_v1.12.md`, `MARKETING_v1.11.md`.
- File untracked không động vào: `test`, `A1.png`, `A2.png`, `A3.png` (Gemini outputs cá nhân).

### Lịch sử commit gần đây (10 cái mới nhất)

```
072a058 beta v1.11.04.1: balance fixes from expert round 5
e535a87 Update CLAUDE.md to reflect current state (beta v1.11.04)
132ec31 Refactor: split js/game.js into 4 modular files (data/state/game/screens)
eaae719 Refactor: split index.html into 3 files (HTML/CSS/JS)
01f0116 v2 SVG portraits — round 4 expert feedback applied
7ec9508 Add hand-drawn SVG portraits for Cụ Ông trio (Gemini fallback)
3bda797 Update art prompt pack with lessons from first Gemini gen
c90a165 Add detailed AI prompt pack for v1.12 art generation (PROMPTS_ART_v1.12.md)
591fe70 Rewrite README for marketing-ready first impression
1efd78f Add marketing playbook v1.11.x — pause-coding phase
209bd0d v1.11.02: detailed 17-step tutorial + hotfixes from feedback round 2
4ec3032 v1.11.01: festival save fix, notification cleanup, boss + rush polish
6548092 v1.11: drink gameplay, achievements, festival mode, gallery, late-game events
a1d0242 beta v1.11.04: SVG Cụ Ông portrait integration
5e6f24c v1.11.03: free art polish — favicon, OG card, giấy dó, confetti
```

### Đã Làm Gần Đây

- Đã có cấu trúc 15 level.
- Đã có save/load bằng localStorage, save key hiện tại `bv_prog_v111`, có migrate từ v9/v1.10.
- Đã có shop nâng cấp.
- Đã có story overlay và chọn level.
- Đã có mini-game nướng chả.
- Chả cháy/non/quá lửa có thể bỏ và làm lại.
- Không thể đổ nồi khi đang nấu.
- Nguyên liệu chỉ hiện nếu thuộc công thức đã mở khóa.
- Đã thêm món/nguyên liệu mới: phở bò, bún bò Huế, cơm tấm, thịt bò, rau thơm, sa tế, v.v.
- Đồ uống đã là gameplay thật trong khu pha nước: trà đá, trà tắc, nước mía, cà phê sữa đá, rau má.
- Đã thêm khách mới: Anna, Marco, Kenji, sinh viên, bác công nhân.
- Đã thêm khách bí ẩn: food blogger, Việt kiều, khách im lặng.
- Economy đã được cân lại để giảm dư tiền.

### Phản Hồi Quan Trọng Của Người Dùng

- Ngân sách từng quá dư; cần giữ tiền có ý nghĩa.
- Trà đá và đồ uống không nên chỉ là bonus tự động. Cần có công thức/gameplay pha chế thật.
- Khách hàng còn nhạt. Cần có tính cách, thoại, cảm xúc, story hook và reaction rõ hơn.
- Làm được gì giúp game hay hơn thì làm luôn, miễn là không phá game.
- Sau mỗi thay đổi phải giữ game chạy được.

### Việc Ưu Tiên Cao Cho Claude

1. Biến đồ uống thành gameplay thật: công thức, nguyên liệu, UI/khu pha nước, trạng thái đồ uống đã pha, logic phục vụ món + nước.
2. Thêm công thức đồ uống:
   - Trà đá = trà + đá.
   - Trà tắc = trà + tắc + đá.
   - Nước mía = mía + đá.
   - Cà phê sữa đá = cà phê + sữa đặc + đá.
   - Rau má = rau má + đá.
3. Sai món chính vẫn fail. Sai/thiếu nước không fail toàn bộ đơn, nhưng mất bonus/tip và có thể giảm hài lòng.
4. Tăng chiều sâu khách hàng bằng thoại theo trạng thái: mới vào, mất kiên nhẫn, vui, sai món, sai nước, bỏ đi.
5. Thêm event cho late-game nếu an toàn: ngày nóng, lễ hội, mất điện, đoàn du khách, giờ cao điểm.
6. Nếu khả thi, đổi nâng cấp thành nhiều cấp. Nếu chưa, thêm nhiều nâng cấp mới với giá có ý nghĩa.
7. Cân lại economy sau khi thêm đồ uống/khách/nâng cấp.

### Kiểm Tra Bắt Buộc

- Parse JS bằng Node/new Function hoặc tương đương.
- Kiểm tra `onclick` trỏ đến function có thật.
- Kiểm tra static `getElementById` có id tương ứng.
- Kiểm tra nguyên liệu của công thức chưa mở khóa không xuất hiện sớm.
- Nếu có browser/Playwright, test flow: menu -> level -> nấu -> nướng -> pha nước -> phục vụ -> kết thúc level.
- Không stage file `test` untracked.

### Prompt Tiết Kiệm Token Cho Claude

```text
Đọc PROJECT_REQUIREMENTS_CURRENT.md, README.md, phần handoff mới nhất trong CLAUDE.md và các file runtime liên quan. Tiếp tục từ Beta v1.11.04.2.

Mục tiêu: làm game hay hơn, không giữ scope cũ nếu scope cũ làm game kém hơn.

Làm tiếp:
1. Biến đồ uống từ add-on tự động thành gameplay thật với công thức, nguyên liệu, UI/state pha nước và logic phục vụ.
2. Thêm công thức: trà đá = trà + đá; trà tắc = trà + tắc + đá; nước mía = mía + đá; cà phê sữa đá = cà phê + sữa đặc + đá; rau má = rau má + đá.
3. Sai nước chỉ mất bonus/tip, không fail toàn bộ đơn.
4. Thêm thoại/reaction cho khách khi đúng/sai món, đúng/sai nước, mất kiên nhẫn, bỏ đi.
5. Thêm hoặc cải thiện event late-game nếu an toàn.
6. Cân lại economy sau thay đổi để tiền vẫn có ý nghĩa.

Ràng buộc:
- Vanilla HTML/CSS/JS.
- Sửa index.html trực tiếp trừ khi tách file thật sự đáng.
- Không rewrite toàn bộ file.
- Không stage/push file test untracked.
- Sau khi xong chỉ báo file đã sửa, tính năng đã làm, test đã chạy.

Kiểm tra bắt buộc:
- JS parse check.
- onclick/function check.
- getElementById id check.
- ingredient unlock check.
```
