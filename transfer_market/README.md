# Transfer Market

Ứng dụng web tĩnh để quản lý thị trường chuyển nhượng nội bộ cho `Marusys FC`, gồm đăng nhập, phân quyền, quản lý cầu thủ, thưởng sau trận và đồng bộ Firebase Realtime Database.

## Cấu trúc

- `index.html`: khung giao diện chính.
- `assets/styles.css`: toàn bộ CSS.
- `assets/firebase.js`: khởi tạo Firebase và expose API lên `window._fb`.
- `assets/app.js`: logic ứng dụng, dữ liệu mẫu, render UI, auth, admin, bonus, export CSV.

## Chức năng hiện có

- Đăng nhập/đăng ký tài khoản.
- Phân quyền `guest`, `admin`, `superadmin`.
- Xem, lọc, sắp xếp danh sách cầu thủ.
- Cập nhật giá trị, vị trí, đánh giá, chỉ số tăng trưởng.
- Áp dụng thưởng, thêm thưởng tùy chỉnh, xem lịch sử thưởng.
- Guest gửi đề xuất thêm cầu thủ hoặc đề xuất thưởng.
- Admin duyệt đề xuất và quản lý người dùng.
- Xuất dữ liệu cầu thủ ra CSV.
- Đồng bộ dữ liệu với Firebase Realtime Database.

## Cách chạy

Mở trực tiếp `index.html` trong trình duyệt. Vì dự án dùng CDN cho Firebase và Chart.js, máy cần có kết nối mạng.

Nếu muốn chạy ổn định hơn trong môi trường local server, có thể dùng một HTTP server tĩnh bất kỳ, ví dụ:

```powershell
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Rà soát và lỗi đã xử lý

- Tách file khỏi mô hình `single-file` để dễ bảo trì.
- Chuẩn hóa lại nội dung tiếng Việt bị lỗi mã hóa trong file cũ.
- Sửa các chuỗi HTML động bị sai dấu nháy trong phần render nút và danh sách động.
- Sửa export CSV bị xuống dòng sai trong JavaScript.
- Sửa bug modal vô địch: click checkbox trước đây có thể bị toggle ngược trạng thái.
- Tăng version local cache từ `v7` lên `v8` để tránh dùng dữ liệu cũ không tương thích.

## Lưu ý kỹ thuật

- Phân quyền và xác thực đang xử lý phía client, không an toàn cho môi trường production.
- Firebase config hiện được nhúng trực tiếp ở frontend.
- Chưa có test tự động.
- Dữ liệu vẫn phụ thuộc `localStorage` và đồng bộ mềm sang Firebase.
