# Yêu Cầu Dự Án Hiện Tại - Bếp Việt: Tiệm Bún Số 7

## 1. Mục Tiêu Hiện Tại

Mục tiêu duy nhất của dự án là làm game “Bếp Việt: Tiệm Bún Số 7” trở nên hay nhất có thể.

Các ràng buộc gốc như số món, số chương, số NPC, phạm vi nhỏ, hoặc giữ một file duy nhất không còn là bắt buộc nếu chúng làm game kém hấp dẫn hơn. Mọi thay đổi nên phục vụ ít nhất một trong ba hướng:

- Vui hơn.
- Sâu hơn.
- Việt Nam hơn.

## 2. Trạng Thái Hiện Tại

- File game chính: `index.html`.
- Phiên bản hiện tại trong game: Demo v1.10.
- Công nghệ: HTML/CSS/JavaScript thuần.
- Deploy: GitHub Pages.
- Repo: `https://github.com/vutaitam/bep_viet_7`.
- Demo: `https://vutaitam.github.io/bep_viet_7/`.
- Tài liệu kế hoạch chi tiết: `PLAN_v1.10.md`.
- Handoff cho Claude: `CLAUDE.md`.
- Có file local untracked tên `test`; không được stage/push nếu không có yêu cầu rõ.

## 3. Những Phần Đã Có

- 15 level/chương chơi.
- Menu chính, chọn level, màn kết thúc level.
- Story overlay/cutscene ngắn theo level.
- Save/load bằng localStorage.
- Shop nâng cấp.
- Mini-game nướng chả.
- Logic nồi nấu và phục vụ khách.
- Chả cháy/non/quá lửa có thể bỏ và làm lại.
- Không thể đổ nồi khi đang nấu.
- Nguyên liệu chỉ hiện nếu thuộc công thức đã mở khóa.
- Economy đã được cân lại để giảm dư tiền.
- Có khách thường, khách quen, khách Tây và khách bí ẩn.
- Có một số món mới: phở bò, bún bò Huế, cơm tấm.
- Có đồ uống trong order: trà đá, trà tắc, nước mía, cà phê sữa đá, rau má.

## 4. Vấn Đề Còn Tồn Tại

### 4.1 Đồ Uống Chưa Là Gameplay Thật

Đồ uống hiện mới là add-on tự động trong đơn hàng. Chưa có:

- Công thức đồ uống.
- Nguyên liệu pha nước.
- Khu pha nước.
- Trạng thái đồ uống đã pha.
- Logic kiểm tra đúng/sai nước khi phục vụ.

Yêu cầu mới: biến đồ uống thành hệ thống gameplay thật.

### 4.2 Khách Hàng Còn Nhạt

Khách hiện vẫn chưa tạo đủ cảm giác là người thật. Cần thêm:

- Tính cách riêng.
- Câu thoại theo trạng thái.
- Phản ứng khi đúng món, sai món, đúng nước, sai nước, quá chậm, bỏ đi.
- Câu chuyện nhỏ hoặc story hook cho khách quen/khách bí ẩn.
- Phần thưởng hoặc ảnh hưởng riêng khi phục vụ tốt.

### 4.3 Late Game Còn Lặp

Các chương sau cần khác nhau rõ hơn bằng:

- Sự kiện.
- Chủ đề vùng miền.
- Khách đặc biệt.
- Combo.
- Điều kiện chơi riêng.
- Mini game hoặc biến thể nhỏ.

### 4.4 Economy Cần Tiếp Tục Theo Dõi

Người chơi từng có quá nhiều tiền. Đã cân lại, nhưng sau khi thêm đồ uống gameplay, nâng cấp mới hoặc event mới, phải kiểm tra lại để:

- Không quá giàu.
- Không âm tiền vô lý.
- Nâng cấp vẫn có ý nghĩa.

## 5. Yêu Cầu Gameplay Ưu Tiên Cao

### 5.1 Hệ Thống Đồ Uống

Thêm đồ uống như một hệ thống riêng, không chỉ là bonus tự động.

Cần có:

- Công thức đồ uống.
- Nguyên liệu đồ uống.
- UI/khu pha nước.
- Trạng thái đồ uống đã pha.
- Logic phục vụ món chính + nước.
- Thưởng/phạt khi đúng hoặc sai nước.

Công thức tối thiểu:

- Trà đá = trà + đá.
- Trà tắc = trà + tắc + đá.
- Nước mía = mía + đá.
- Cà phê sữa đá = cà phê + sữa đặc + đá.
- Rau má = rau má + đá.

Quy tắc:

- Sai món chính vẫn fail đơn.
- Sai hoặc thiếu nước không fail toàn bộ đơn.
- Sai nước làm mất bonus/tip và có thể giảm hài lòng.
- Đúng combo món + nước tăng tiền, điểm hoặc danh tiếng.

### 5.2 Khách Hàng Có Chiều Sâu

Mỗi nhóm khách nên có:

- Tên.
- Vai trò.
- Món/nước yêu thích.
- Kiểu gọi món.
- Mức kiên nhẫn.
- Tip.
- Câu thoại theo trạng thái.
- Phản ứng khi phục vụ đúng/sai.

Khách bí ẩn nên có:

- Tỉ lệ xuất hiện thấp.
- Yêu cầu riêng.
- Câu chuyện riêng.
- Reward hoặc story flag riêng.

### 5.3 Sự Kiện Và Biến Thể Chương

Ưu tiên thêm các event:

- Ngày nóng: khách gọi nước nhiều hơn, mất kiên nhẫn nhanh hơn.
- Lễ hội: nhiều combo, đông khách, thưởng cao hơn.
- Mất điện: nấu chậm hơn, cần vượt khó.
- Đoàn du khách: nhiều khách Tây, yêu cầu ít cay hoặc nước phù hợp.
- Giờ cao điểm: khách đến nhanh, áp lực cao.

### 5.4 Nâng Cấp

Ưu tiên chuyển shop nâng cấp thành multi-level nếu làm được gọn.

Nếu chưa làm multi-level, thêm nhiều nâng cấp mới với giá có ý nghĩa để người chơi không mua hết quá sớm.

Gợi ý:

- Bếp nhanh hơn.
- Nồi lớn hơn.
- Lò nướng dễ perfect hơn.
- Khu pha nước nhanh hơn.
- Tủ lạnh giảm hao phí.
- Ghế ngồi tăng kiên nhẫn.
- Biển hiệu tăng khách.
- Sổ công thức tăng điểm/danh tiếng.

## 6. Yêu Cầu Kỹ Thuật

- Ưu tiên giữ HTML/CSS/JavaScript thuần.
- Không thêm dependency nếu không thật sự cần.
- Không rewrite toàn bộ `index.html` nếu không cần.
- Có thể tách file nếu việc đó làm code dễ bảo trì hơn rõ ràng.
- Không stage/push file `test` untracked.
- Tránh làm mất save cũ nếu có thể.
- Sau mỗi thay đổi lớn phải đảm bảo game vẫn chạy được.

## 7. Kiểm Thử Bắt Buộc

Sau khi sửa code, cần kiểm tra:

- JavaScript parse được bằng Node/new Function hoặc tương đương.
- Các `onclick` trỏ tới function có thật.
- Các `getElementById` tĩnh có id tương ứng trong HTML.
- Nguyên liệu chỉ hiện khi công thức tương ứng đã mở khóa.
- Không có công thức nào dùng nguyên liệu chưa khai báo.
- Nếu có browser/Playwright, test flow:
  - Mở menu.
  - Vào level.
  - Thêm nguyên liệu.
  - Nấu món.
  - Nướng chả.
  - Pha nước.
  - Phục vụ khách.
  - Kết thúc level.

## 8. Prompt Ngắn Cho Claude

```text
Đọc PROJECT_REQUIREMENTS_CURRENT.md, PLAN_v1.10.md, phần handoff mới nhất trong CLAUDE.md và các phần liên quan của index.html.

Mục tiêu: làm “Bếp Việt: Tiệm Bún Số 7” hay hơn, sâu hơn, Việt Nam hơn. Không giữ scope cũ nếu scope cũ làm game kém hơn.

Ưu tiên làm tiếp:
1. Biến đồ uống từ add-on tự động thành gameplay thật: công thức, nguyên liệu, UI pha nước, trạng thái đồ uống và logic phục vụ món + nước.
2. Thêm công thức: trà đá = trà + đá; trà tắc = trà + tắc + đá; nước mía = mía + đá; cà phê sữa đá = cà phê + sữa đặc + đá; rau má = rau má + đá.
3. Sai nước chỉ mất bonus/tip, không fail toàn bộ đơn.
4. Thêm thoại/reaction cho khách khi đúng/sai món, đúng/sai nước, mất kiên nhẫn, bỏ đi.
5. Thêm event late-game nếu an toàn.
6. Cân lại economy sau thay đổi.

Ràng buộc:
- Vanilla HTML/CSS/JS.
- Không rewrite toàn bộ file nếu không cần.
- Không stage/push file test untracked.
- Sau khi xong, báo file đã sửa, tính năng đã làm, test đã chạy.

Kiểm tra bắt buộc:
- JS parse check.
- onclick/function check.
- getElementById id check.
- ingredient unlock check.
```

