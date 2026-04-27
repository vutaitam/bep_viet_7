# Bếp Việt: Tiệm Bún Số 7

Demo game web mô phỏng kinh doanh quán bún Việt — viết bằng HTML/CSS/JavaScript thuần, một file duy nhất (`index.html`), không cần build.

## Chơi online

👉 **https://vutaitam.github.io/bep_viet_7/**

## Chơi local

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
python -m http.server 8000
# rồi mở http://localhost:8000
```

## Tính năng

- Menu chính, cutscene mở đầu, hướng dẫn (tutorial)
- Vòng lặp game: khách vào theo thời gian, chế biến món, phục vụ
- Đếm ngược thời gian, tính điểm, kết thúc màn (hoàn thành / hết giờ)
- Tạm dừng, thông báo, giao diện tiếng Việt

## Cấu trúc

```
.
├── index.html   # Toàn bộ game (HTML + CSS + JS inlined)
└── README.md
```

## Deploy

Repo này được publish bằng **GitHub Pages**: Settings → Pages → Source: `main` branch, folder `/ (root)`.
