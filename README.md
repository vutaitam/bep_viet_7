# Bếp Việt: Tiệm Bún Số 7

> Game cooking miễn phí về người cháu kế nghiệp quán bún nhỏ trong ngõ phố cổ Hà Nội.
> Cụ Ông qua đời, để lại cuốn sổ công thức 30 năm. Hành trình giữ lại hương vị gia truyền bắt đầu từ đây.

**Chơi ngay**: <https://vutaitam.github.io/bep_viet_7/>

[![Beta v1.11.04.2](https://img.shields.io/badge/beta-v1.11.04.2-gold)](https://vutaitam.github.io/bep_viet_7/)
[![Vanilla JS](https://img.shields.io/badge/stack-vanilla_HTML%2FCSS%2FJS-blue)](#)
[![No build step](https://img.shields.io/badge/build-none-green)](#)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#)

---

## Điểm Nổi Bật

- **Cốt truyện Cụ Ông**: cutscene, di nguyện, feedback cuối ngày và 3 portrait SVG tự vẽ.
- **Icon art tự tạo**: emoji hiển thị trong game được thay bằng ảnh SVG nội bộ, không dùng emoji hệ điều hành/CDN.
- **3 chương, 15 ngày**: Hà Nội -> Hội An -> Sài Gòn, kết thúc với danh hiệu "Đầu bếp 3 miền".
- **10 món Việt**: bún dọc mùng signature, phở bò, bún bò Huế, bún chả, cơm tấm, mì Quảng, hủ tiếu, gỏi cuốn, bún riêu, bánh mì.
- **5 đồ uống là gameplay thật**: trà đá, trà tắc, nước mía, cà phê sữa đá, rau má, có công thức, nguyên liệu, thời gian pha và logic đúng/sai.
- **Mini-game nướng chả**: lật và gắp đúng vùng PERFECT, có nâng cấp lò nướng mở rộng vùng chuẩn.
- **21 NPC có cá tính**: khách quen, khách Tây, khách Việt vai phụ, khách bí ẩn và boss cuối chương.
- **7 loại nâng cấp đa cấp**: bếp ga, bảng menu, quạt mát, bàn ghế, lò nướng, biển hiệu, thẻ khách quen.
- **20 thành tựu**: streak, đồ uống, khách bí ẩn, boss, festival best.
- **Lễ hội ẩm thực endless**: mở toàn bộ món/nước, tăng độ khó mỗi 60 giây, 5 strike, lưu best score.
- **Sổ tay quán**: thành tựu, khách đã gặp, câu chuyện bí ẩn, thống kê.
- **7 sự kiện ngày**: mưa, lễ hội, rush, peak, ngày nóng, mất điện, đoàn du khách.

## Cách Chơi

1. Mở demo, chọn **Bắt đầu câu chuyện** hoặc **Chơi ngay**.
2. Đọc tutorial 17 bước để nắm khách hàng, công thức, nồi nấu, lò nướng, khu pha nước, boss, event, nâng cấp, festival và sổ tay.
3. Click nguyên liệu để cho vào nồi, click chả để đưa lên lò, click nguyên liệu pha để cho vào cốc.
4. Click chọn khách trước khi bấm **Phục vụ**.
5. Đúng món + đúng nước sẽ cộng tiền, điểm, combo bonus và tip tốt hơn.

Tutorial có thể mở lại từ menu chính hoặc pause overlay.

## Tech Stack

- **HTML + CSS + Vanilla JavaScript**, không framework, không build step.
- **GitHub Pages**, chạy trực tiếp từ root repo.
- **localStorage save**, key hiện tại `bv_prog_v111`, có migration từ `bv_prog_v110` và `bv_prog_v9`.
- **Code runtime đã tách 7 file** để dễ bảo trì, không còn monolithic single-file.
- **Kiểm tra hiện tại**: `node --check` pass cho 5 file JS.

```text
.
├── index.html              # HTML markup, meta, screen containers, script load order
├── css/
│   └── styles.css          # Toàn bộ style UI/game
├── js/
│   ├── data.js             # RECIPES, INGREDIENTS, DRINKS, NPCS, LEVELS, UPGRADES, TUTORIAL
│   ├── state.js            # PROG/G state, save/load, achievement queue, notify timers
│   ├── emoji-art.js        # Thay emoji hiển thị bằng ảnh SVG tự tạo
│   ├── game.js             # Core gameplay: spawn, cook, grill, drink, serve, end level
│   └── screens.js          # Menu, tutorial, cutscene, level select, shop, festival, gallery
├── assets/
│   └── portraits/          # SVG portrait Cụ Ông young/old/spirit + preview
├── PROJECT_REQUIREMENTS_CURRENT.md
├── CLAUDE.md
├── PLAN_v1.10.md           # Tài liệu lịch sử/spec gốc
├── PLAN_v1.11.01.md        # Tài liệu lịch sử/patch plan đã áp dụng
├── MARKETING_v1.11.md      # Marketing playbook
├── PROMPTS_ART_v1.12.md    # Prompt pack tạo art asset
├── ART_REVIEW_v1.12.md     # Đánh giá đồ họa nhiều góc nhìn
└── README.md
```

## Chạy Local

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
python -m http.server 8000
# rồi mở http://localhost:8000
```

## Deploy

Repo publish bằng **GitHub Pages** từ branch `main`, folder `/ (root)`. Sau khi push, đợi khoảng 2 phút rồi hard reload (`Ctrl+Shift+R`) nếu trình duyệt còn cache.

## Trạng Thái Hiện Tại

Hiện tại: **Beta v1.11.04.2 (Art)**.

Commit nền gần nhất trước patch art:

```text
072a058 beta v1.11.04.1: balance fixes from expert round 5
```

Các mốc gần đây:

- **v1.11**: drink gameplay, achievements, festival mode, gallery, late-game events.
- **v1.11.01**: festival save fix, notification cleanup, boss + rush polish.
- **v1.11.02**: tutorial 17 bước + hotfix feedback.
- **v1.11.03**: favicon, Open Graph, giấy dó texture, confetti.
- **v1.11.04**: SVG portrait Cụ Ông + refactor 6-file.
- **v1.11.04.1**: balance fixes round 5.
- **v1.11.04.2**: thay emoji hiển thị bằng ảnh SVG tự tạo + đánh giá art review.

## Roadmap

- **v1.11.05**: đồng bộ tài liệu, dọn encoding/README, kiểm thử smoke flow.
- **v1.12**: tích hợp thêm portrait NPC, polish Festival UI, cân nhắc analytics riêng tư.
- **v1.13**: Tết DLC, achievement cumulative stats, surprise level "Cụ Ông trong giấc mơ".

## Số Liệu

- Khoảng 1.900+ dòng JavaScript tách trong 5 file.
- 30 nguyên liệu, 10 món, 5 nước, 21 NPC.
- 15 level campaign + endless festival mode.
- 17 bước tutorial, 20 thành tựu.

## Đóng Góp

Solo dev, ưu tiên feedback thực tế:

- **Bug report**: tạo issue trong GitHub.
- **Playtest**: ghi rõ level, hành động trước lỗi, trình duyệt, ảnh/video nếu có.
- **Art/Sound**: portrait NPC, SFX bếp Việt, nhạc nền đàn bầu/sáo trúc.
- **Localization**: bản tiếng Anh để dành sau khi bản Việt ổn.

## License

MIT cho code. Cốt truyện, nhân vật và tài sản sáng tạo thuộc dự án Bếp Việt, vui lòng không sao chép trực tiếp cho dự án thương mại khác.

---

*Bếp Việt: Tiệm Bún Số 7 — vutaitam · 2026*
