# Đánh Giá Đồ Họa - Emoji Art Replacement v1.12

Tài liệu này ghi lại đánh giá nội bộ nhiều góc nhìn cho patch thay emoji bằng icon ảnh SVG tự tạo.

## Phạm Vi

- Thay emoji hiển thị trong UI bằng ảnh SVG data URI tự sinh trong `js/emoji-art.js`.
- Giữ phong cách Bếp Việt: đỏ/gold, giấy dó, bát/đũa, hình học phẳng.
- Không dùng Twemoji, asset ngoài, icon CDN hay dependency.
- Mục tiêu patch này là thống nhất visual trước; portrait nhân vật chi tiết vẫn là bước tiếp theo.

## Hội Đồng Đánh Giá

### 1. Art Director

Đánh giá: **7.5/10**

Điểm mạnh:
- Đồng bộ bảng màu với UI hiện tại.
- Hình ảnh có motif bát/đũa riêng, không còn cảm giác emoji hệ điều hành.
- SVG data URI giúp nét rõ ở nhiều kích thước.

Cần cải thiện:
- Một số icon đang dùng nhãn chữ ngắn thay vì minh họa riêng từng vật.
- Nhân vật như Bác Tâm, Cô Lan, John cần portrait riêng để có cảm xúc thật.

Kết luận: đủ tốt cho patch thay emoji toàn cục, chưa phải final art.

### 2. UI/UX Designer

Đánh giá: **8/10**

Điểm mạnh:
- Kích thước icon ổn trong button, card khách, gallery, tutorial.
- Không phá layout vì icon dùng `em`, co giãn theo font.
- Có `alt/title`, tốt hơn emoji thuần về khả năng mô tả.

Cần cải thiện:
- Một số cụm text dài có nhiều icon liên tiếp hơi dày.
- Cần test mobile nhỏ để chắc line-height không đội chiều cao quá nhiều.

Kết luận: hợp để ship thử, cần playtest mobile.

### 3. Game Artist

Đánh giá: **7/10**

Điểm mạnh:
- Có identity Việt rõ hơn emoji mặc định.
- Motif bát, đũa, giấy dó hợp chủ đề quán bún.
- Có thể mở rộng bằng map label mà không đổi data gameplay.

Cần cải thiện:
- Món ăn nên có icon riêng thật sự: bún, phở, bánh mì, cơm tấm không nên chỉ khác chữ.
- NPC cần portrait/bust art thay cho icon nhãn.

Kết luận: đây là foundation tốt, sprint sau nên thay nhóm NPC/món chính bằng asset minh họa riêng.

### 4. Frontend Engineer

Đánh giá: **8/10**

Điểm mạnh:
- Không thêm dependency.
- Không phải sửa hàng trăm chuỗi tutorial/data.
- MutationObserver phủ cả nội dung render động như notify, gallery, customer card.

Rủi ro:
- DOM walker cần theo dõi performance nếu một màn hình render quá nhiều text.
- Regex emoji phụ thuộc browser hiện đại hỗ trợ Unicode property escapes.

Kết luận: chấp nhận được cho GitHub Pages hiện đại; nếu cần hỗ trợ browser cũ, thêm fallback.

### 5. Producer

Đánh giá: **7.5/10**

Điểm mạnh:
- Tăng cảm giác sản phẩm tự làm.
- Chi phí thấp, ít rủi ro, không kéo dài production.
- Có đường nâng cấp rõ: thay icon sinh tự động bằng PNG/SVG vẽ tay từng nhóm.

Ưu tiên tiếp theo:
1. Portrait Bác Tâm, Cô Lan, John.
2. Icon riêng cho 10 món chính.
3. Icon riêng cho 5 nước.
4. OG/social image dùng art thật.

## Kết Luận

Patch hiện tại phù hợp làm **v1.12 art foundation**. Nó thay emoji hiển thị bằng ảnh tự tạo đồng bộ style, nhưng chưa phải gói art cuối cùng. Bước tiếp theo nên là asset thủ công cho NPC và món ăn quan trọng.
