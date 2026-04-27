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

**Repository**: https://github.com/Jacob-Vu/Pho7

**Demo live**: https://jacob-vu.github.io/Pho7/ (GitHub Pages)

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

## 📐 PHẠM VI (FINAL - sau nhiều iteration)

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

## 🎨 TÍNH NĂNG CHÍNH

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

## 🛠️ KIẾN TRÚC CODE

### Files chính
```
Pho7/
├── index.html (file chính, deploy lên GitHub Pages)
├── CLAUDE.md (file này)
└── README.md
```

### Modules dự kiến (tách ra cho v1)
- `state.js` - Game state management
- `recipes.js` - Công thức món ăn
- `customers.js` - NPC + customer logic
- `cooking.js` - Logic nấu ăn
- `grill.js` - Mini-game nướng
- `business.js` - Chi phí, P&L, KPI Dashboard
- `upgrades.js` - Upgrade system
- `signature.js` - Bún dọc mùng cấp 1-4
- `cutscenes.js` - Story dialogues
- `audio.js` - Music + SFX
- `ui.js` - Render functions

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

- **Repo**: https://github.com/Jacob-Vu/Pho7
- **Demo**: https://jacob-vu.github.io/Pho7/
- **Tài liệu Excel chi tiết**: `Du_an_Bep_Viet_Tiem_Bun_So_7_v6.xlsx` (15 sheets, 95 formulas)

---

## 💬 GHI CHÚ CHO CLAUDE TRONG SESSION TIẾP THEO

Khi làm việc tiếp với dự án này, lưu ý:

### Người dùng
- Là người Việt, làm dự án solo
- Mục tiêu chính: học HTML/JS + portfolio
- Đã có tài khoản GitHub `jacob-vu`
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

### Trạng thái hiện tại (cập nhật cuối)
- ✅ Đã hoàn thành demo v7 với 3 món, mini-game nướng, 5 NPCs, tutorial, pause
- ✅ Đã fix bug "Chơi luôn không vào game" (CSS specificity)
- ✅ Đã deploy lên GitHub Pages
- ✅ Đã test với Playwright (screenshot xác nhận)
- 🔄 Đang chờ user upload bản v7.1 fixed lên GitHub
- ⏭️ Bước tiếp theo: Bắt đầu code v1 đầy đủ với 3 chương

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
