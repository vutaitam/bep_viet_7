# Yêu Cầu Dự Án Hiện Tại - Bếp Việt: Tiệm Bún Số 7

Tài liệu này là nguồn trạng thái hiện tại cho các session tiếp theo. Các plan cũ như `PLAN_v1.10.md` và `PLAN_v1.11.01.md` là tài liệu lịch sử/spec nền, không còn phản ánh đầy đủ bản đang chạy.

## 1. Mục Tiêu Hiện Tại

Mục tiêu duy nhất: làm **Bếp Việt: Tiệm Bún Số 7** trở thành game hay hơn, sâu hơn và Việt Nam hơn.

Các ràng buộc scope cũ như số món, số NPC, single-file hay phạm vi nhỏ không còn bắt buộc nếu chúng làm game kém hấp dẫn. Tuy vậy, thay đổi mới vẫn phải thực dụng: không phá save, không rewrite lớn nếu chưa cần, và luôn giữ game chạy được.

## 2. Trạng Thái Hiện Tại

- Version trong game: **Demo v1.11.03 (NPC Portraits)**.
- Commit nền balance: `072a058 beta v1.11.04.1: balance fixes from expert round 5`.
- File chơi chính: `index.html`.
- Code runtime: `css/styles.css`, `js/data.js`, `js/state.js`, `js/game.js`, `js/screens.js`.
- Công nghệ: HTML/CSS/JavaScript thuần, không framework, không build step.
- Deploy: GitHub Pages từ branch `main`, folder `/`.
- Repo: `https://github.com/vutaitam/bep_viet_7`.
- Demo: `https://vutaitam.github.io/bep_viet_7/`.
- Save key hiện tại: `bv_prog_v111`, có migration từ `bv_prog_v110` và `bv_prog_v9`.
- File local untracked không tự stage/push: `A1.png`, `A2.png`, `A3.png` và nếu có `test`.

## 3. Kiến Trúc Hiện Tại

```text
index.html          HTML markup, meta, screen containers, load order
css/styles.css      Toàn bộ giao diện, responsive, animation, portrait styling
js/data.js          Pure data: món, nguyên liệu, nước, NPC, level, upgrade, tutorial
js/state.js         Progress state, save/load/migration, achievement queue, timers
js/game.js          Core loop: spawn khách, nấu, nướng, pha nước, phục vụ, kết ngày
js/screens.js       Menu, tutorial, cutscene, story overlay, level select, shop, festival, gallery
assets/portraits/   3 SVG portrait Cụ Ông + 3 WebP portrait NPC chính + preview
```

Load order bắt buộc:

```html
<script src="js/data.js"></script>
<script src="js/state.js"></script>
<script src="js/game.js"></script>
<script src="js/screens.js"></script>
```

`screens.js` phải load cuối vì festival mode override `checkEndCondition` từ `game.js`.

## 4. Những Phần Đã Có

- 15 level qua 3 chương: Hà Nội -> Hội An -> Sài Gòn.
- Menu chính, chọn level, story overlay, cutscene, pause, end screen.
- Save/load bằng localStorage + migration save cũ.
- 10 món Việt, có unlock theo tiến trình.
- Drink station gameplay thật với 5 công thức:
  - Trà đá = trà + đá.
  - Trà tắc = trà + tắc + đá.
  - Nước mía = mía + đá.
  - Cà phê sữa đá = cà phê + sữa đặc + đá.
  - Rau má = lá rau má + đá.
- Sai món chính fail đơn; sai/thiếu nước không fail toàn đơn nhưng mất bonus/điểm/chi phí.
- Mini-game nướng chả với PERFECT zone và nâng cấp lò nướng.
- 21 NPC: khách quen, khách Tây, khách Việt vai phụ, khách bí ẩn, boss.
- Khách có speech bubble, quote vui/sai/chậm/bỏ đi theo type.
- Mystery story flags + bonus lần đầu phục vụ đúng khách bí ẩn.
- 20 achievements, queue defer cuối level để giảm spam.
- 7 event ngày: rain, festival, rush, peak, heat, blackout, tour.
- Festival endless mode: mở toàn bộ món/nước, 5 strike, warning ở strike 3/4, lưu best score.
- Sổ tay quán 4 tab: thành tựu, khách đã gặp, câu chuyện, thống kê.
- 7 nâng cấp đa cấp: bếp ga, bảng menu, quạt mát, bàn ghế, lò nướng, biển hiệu, thẻ khách quen.
- 3 SVG portrait Cụ Ông: young, old, spirit.
- 3 portrait NPC chính dạng WebP: Bác Tâm, Cô Lan, John.
- Refactor khỏi single-file sang cấu trúc runtime 6 file.

## 5. Vấn Đề Cần Theo Dõi

### 5.1 Tài Liệu Và Encoding

Một số tài liệu cũ từng bị lệch version hoặc mojibake khi đọc bằng PowerShell. Tài liệu hiện tại đã được đồng bộ nội dung, nhưng nếu tiếp tục thấy ký tự lỗi trong terminal thì ưu tiên kiểm tra file bằng editor UTF-8.

### 5.2 Balance

Round balance gần nhất là **v1.11.04.1 balance fixes**. Sau mỗi thay đổi gameplay cần kiểm tra:

- Người chơi không dư tiền quá sớm.
- Không bị âm tiền vô lý.
- Upgrade vẫn có giá trị.
- Heat/blackout/peak không biến level thành bất khả thi.
- Festival có đủ áp lực nhưng không quá phạt người mới.

### 5.3 Nội Dung Art

Đã có portrait Cụ Ông và đã tích hợp portrait riêng cho Bác Tâm, Cô Lan, John trong customer card + sổ tay. `PROMPTS_ART_v1.12.md` là nguồn prompt cho asset art tiếp theo.

Kế hoạch đồ họa mới theo yêu cầu người dùng nằm ở `GRAPHICS_PLAN_demo_v1.11.03.md`. Tên bản đang triển khai là **Demo v1.11.03**.

### 5.4 Marketing

`MARKETING_v1.11.md` là playbook marketing pilot. Các mục analytics/Discord vẫn cần cân nhắc riêng tư, scope và thời điểm trước khi thêm vào game.

## 6. Ưu Tiên Tiếp Theo

1. Smoke test flow thực tế: menu -> level -> nấu -> nướng -> pha nước -> phục vụ -> kết ngày.
2. Đồng bộ README/CLAUDE/requirements sau mỗi commit lớn.
3. Playtest Chương 1 full để bắt regression sau refactor runtime.
4. Cân lại economy sau v1.11.04.1 bằng vài run level 1, 5, 10, 15 và festival 2 phút.
5. Tích hợp tiếp portrait Linh Review, Chú Phúc, Khách im lặng nếu asset đủ tốt.
6. Cân nhắc analytics nhẹ, privacy-friendly, sau khi demo ổn.

## 7. Ràng Buộc Kỹ Thuật

- Ưu tiên giữ vanilla HTML/CSS/JS.
- Không thêm dependency nếu không thật sự cần.
- Không rewrite toàn bộ file nếu thay đổi nhỏ có thể giải quyết vấn đề.
- Không phá save cũ nếu có thể tránh.
- Không stage/push file untracked cá nhân nếu không được yêu cầu rõ.
- Khi sửa code, giữ load order JS hiện tại.
- Sau thay đổi lớn phải đảm bảo game vẫn chạy được.

## 8. Kiểm Thử Bắt Buộc Sau Khi Sửa Code

Tối thiểu:

```bash
node --check js/data.js
node --check js/state.js
node --check js/game.js
node --check js/screens.js
```

Nên kiểm thêm:

- `onclick` trong HTML trỏ tới function tồn tại.
- `getElementById` tĩnh có id tương ứng.
- Công thức món/nước không dùng nguyên liệu chưa khai báo.
- Ingredient unlock không hiện nguyên liệu của món/nước chưa mở.
- Browser smoke flow nếu có Playwright hoặc mở thủ công.

## 9. Prompt Ngắn Cho Session Tiếp Theo

```text
Đọc PROJECT_REQUIREMENTS_CURRENT.md, phần handoff mới nhất trong CLAUDE.md, README.md và các file runtime liên quan.

Trạng thái hiện tại: Bếp Việt Demo v1.11.03 (NPC Portraits), vanilla HTML/CSS/JS, đã tách 6 file runtime: index.html, css/styles.css, js/data.js, js/state.js, js/game.js, js/screens.js.

Mục tiêu: làm game hay hơn, sâu hơn, Việt Nam hơn, nhưng không phá save và không rewrite lớn nếu chưa cần.

Ưu tiên:
1. Smoke test flow thực tế sau refactor/balance.
2. Sửa bug hoặc friction gameplay có bằng chứng.
3. Cân balance tiền/event/upgrade nếu phát hiện lệch.
4. Tích hợp tiếp art portrait NPC hoặc polish UI nếu asset đủ tốt.
5. Cập nhật tài liệu sau thay đổi lớn.

Ràng buộc:
- Vanilla HTML/CSS/JS.
- Không thêm dependency nếu không cần.
- Không stage/push A1.png, A2.png, A3.png hoặc file test nếu không được yêu cầu.
- Sau khi sửa code, báo file đã sửa, tính năng đã làm, test đã chạy.

Kiểm tra bắt buộc:
- node --check cho 4 file JS.
- onclick/function check.
- getElementById/id check.
- recipe/drink ingredient integrity.
```
