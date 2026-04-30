# 🥢 Bếp Việt: Tiệm Bún Số 7

> Game cooking miễn phí về cháu kế nghiệp quán bún ngõ phố cổ Hà Nội.
> Cụ Ông qua đời, để lại cuốn sổ công thức 30 năm. Hành trình của bạn bắt đầu...

**▶ Chơi ngay**: <https://vutaitam.github.io/bep_viet_7/>

[![Demo v1.11.02](https://img.shields.io/badge/demo-v1.11.02-gold)](https://vutaitam.github.io/bep_viet_7/)
[![Vanilla JS](https://img.shields.io/badge/stack-vanilla_HTML%2FCSS%2FJS-blue)](#)
[![No deps](https://img.shields.io/badge/deps-0-green)](#)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#)

---

## ✨ Điểm nhấn

- **Cốt truyện cảm động** — Cụ Ông, sổ công thức gia truyền, 4 cutscene xuyên suốt
- **3 chương · 15 ngày** — Hà Nội → Hội An → Sài Gòn, kết thúc với danh hiệu *"Đầu bếp 3 miền"*
- **10 món Việt** — bún dọc mùng (signature), phở bò, bún bò Huế, bún chả, cơm tấm, mì Quảng, hủ tiếu, gỏi cuốn, bún riêu, bánh mì
- **5 nước thật** — pha tay trà đá, trà tắc, nước mía, cà phê sữa đá, rau má (có công thức + nguyên liệu + thời gian)
- **Mini-game nướng chả** — vùng PERFECT 40-60%, lật đúng lúc, gắp đúng lúc
- **21 NPC có tính cách** — 3 khách quen của Cụ Ông, 5 khách Tây, 6 khách Việt vai phụ, 3 khách bí ẩn, 3 boss
- **7 loại nâng cấp đa cấp** — bếp ga, bảng menu, lò nướng, ghế ngồi, biển hiệu, thẻ khách quen, quạt mát
- **20 thành tựu** — săn streak, mystery customer, boss-clean, festival best
- **🎑 Lễ hội mode endless** — phục vụ vô hạn, độ khó tăng mỗi 60s, best score lưu lại
- **📔 Sổ tay quán** — 4 tab (thành tựu / khách đã gặp / câu chuyện / thống kê)
- **7 sự kiện ngày** — mưa, lễ hội, giờ cao điểm, ngày nóng, mất điện, đoàn du khách, peak hour

## 🎮 Cách chơi

1. Mở demo → "▶ Bắt đầu câu chuyện" hoặc "⚡ Chơi ngay"
2. Tutorial 17 step bao gồm cách đọc card khách, vòng kiên nhẫn, sổ công thức, mini-game nướng chả, khu pha nước, khách bí ẩn, boss, sự kiện, upgrade shop, festival, gallery
3. Click nguyên liệu → vào nồi · click chả → lò than · click nguyên liệu pha → cốc
4. Chọn khách (viền vàng) trước khi nhấn "🍽 Phục vụ"
5. Đúng món + đúng nước = combo bonus + tip cao

Có thể xem lại tutorial mọi lúc từ menu chính hoặc pause overlay.

## 🛠 Tech stack

- **HTML + CSS + Vanilla JavaScript** — không framework, không build step
- **Single file** — toàn bộ ~117KB, deploy GitHub Pages free tier
- **Save bằng `localStorage`** — auto migration v9 → v110 → v111
- **Tested** — JS parse, onclick/getElementById sanity, data integrity check trên Node

```text
.
├── index.html           # Toàn bộ game (~2700 lines, HTML+CSS+JS inlined)
├── PLAN_v1.10.md        # Spec gốc v1.10 (15 chương, drink gameplay, mystery)
├── PLAN_v1.11.01.md     # Patch plan sau hội đồng review
├── MARKETING_v1.11.md   # Marketing playbook 7-day
├── PROJECT_REQUIREMENTS_CURRENT.md
├── CLAUDE.md            # Context handoff cho AI assistant
└── README.md
```

## 🏃‍♂️ Chơi local

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
# Python
python -m http.server 8000

# Node (nếu có npx)
npx http-server . -p 8000

# rồi mở http://localhost:8000
```

## 🚀 Deploy

Repo này publish bằng **GitHub Pages**: Settings → Pages → Source: `main` branch, folder `/ (root)`. Build sau ~2 phút mỗi commit. Hard reload (`Ctrl+Shift+R`) để bypass cache.

## 🗺 Roadmap

Hiện tại: **v1.11.02** (tutorial 17 bước + polish patch)

Sắp tới:
- **v1.11.03** — Plausible analytics + Discord button
- **v1.12** — EN toggle, audio (đàn bầu / sáo trúc), Festival Mode UI polish
- **v1.13** — Tết DLC chapter, achievement cumulative stats, surprise level *"Cụ Ông trong giấc mơ"*

Plan chi tiết: xem [PLAN_v1.11.01.md](./PLAN_v1.11.01.md)

## 🎯 Trạng thái thị trường

Đây là dự án portfolio cá nhân — solo dev, vanilla JS, hoàn thành trong 6 tuần. Hiện đang trong giai đoạn marketing pilot (xem [MARKETING_v1.11.md](./MARKETING_v1.11.md)). Phản hồi rất được hoan nghênh:

- 🐛 **Bug report**: tạo issue trong tab Issues
- 💡 **Feature request**: cũng tạo issue, gắn nhãn `enhancement`
- 🌟 **Yêu thích game?** Star repo, chia sẻ cho bạn bè Việt Nam thích game nấu ăn

## 📊 Số liệu

- 1714 dòng JavaScript
- 30 nguyên liệu, 10 món, 5 nước, 21 NPC
- 15 cấp độ chiến dịch + endless festival mode
- 17 bước tutorial · 20 thành tựu

## 🤝 Đóng góp

Solo dev đón chào contributor. Đặc biệt cần:

- **Sound design** — đàn bầu, sáo trúc, SFX bếp Việt
- **Pixel art** — sprite NPC thay emoji (giữ phong cách Việt Nam)
- **Localization** — bản dịch tiếng Anh cho v1.12
- **Playtest** — feedback từ người chơi thực tế

Xem [PLAN_v1.11.01.md](./PLAN_v1.11.01.md) để biết những gì đã out-of-scope cần làm.

## 📜 License

MIT — xem [LICENSE](LICENSE) (sẽ thêm). Cốt truyện và tài sản sáng tạo (nhân vật, công thức, story) ©2026 vutaitam — vui lòng không sao chép trực tiếp cho project thương mại khác.

## 🙏 Cảm ơn

- Lấy cảm hứng từ những quán bún ngõ phố cổ Hà Nội
- Font [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) — Google Fonts
- Cộng đồng web indie game Việt Nam

---

*Bếp Việt: Tiệm Bún Số 7 — vutaitam · 2026*
