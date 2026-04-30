# Bếp Việt: Tiệm Bún Số 7 - Kế Hoạch Cập Nhật v1.10

## 0. Định Hướng Mới - Ưu Tiên Chất Lượng Tuyệt Đối

Từ thời điểm này, bỏ tất cả ràng buộc và mục tiêu gốc nếu chúng làm game kém hay hơn.

Mục tiêu duy nhất:

> Làm “Bếp Việt: Tiệm Bún Số 7” trở thành game hay nhất, hấp dẫn nhất, có bản sắc Việt Nam rõ nhất và đáng chơi lâu dài nhất có thể trong khả năng hiện tại.

Nguyên tắc mới:

- Chất lượng gameplay quan trọng hơn việc giữ đúng scope cũ.
- Nếu một yêu cầu cũ làm game lặp lại, nông, thiếu vui hoặc khó mở rộng, được phép bỏ.
- Nếu cần thêm hệ thống mới để game hay hơn, được phép thêm.
- Nếu một tính năng trong danh sách “có thể làm” có thể triển khai gọn và không phá game, hãy làm luôn thay vì để sau.
- Nếu cần tách file để code dễ bảo trì hơn, được phép tách file.
- Nếu cần thay đổi cấu trúc chương, kinh tế, món ăn, khách hàng, nâng cấp, UI hoặc story, được phép thay đổi.
- Bản sắc Việt Nam, cảm xúc về quán ăn gia đình và độ vui khi chơi là ưu tiên cao nhất.
- Không hy sinh trải nghiệm người chơi chỉ để giữ một quyết định thiết kế cũ.
- Mọi thay đổi nên phục vụ ít nhất một trong ba mục tiêu: vui hơn, sâu hơn, Việt Nam hơn.

Những ràng buộc cũ không còn bắt buộc:

- Không còn bị giới hạn bởi 3 món, 3 chương, 3 NPC hoặc một file nếu điều đó làm game kém hơn.
- Không còn bắt buộc giữ bún dọc mùng là trung tâm của mọi chương nếu điều đó gây lặp lại.
- Không còn bắt buộc giữ gameplay quá đơn giản nếu thêm hệ thống mới làm game hấp dẫn hơn.
- Không còn ưu tiên “ship nhanh” hơn chất lượng tổng thể.

## 1. Mục Tiêu Bản v1.10

Bản v1.10 tập trung biến v9 từ một bản 15 chương có thể chơi được thành một bản có chiều sâu hơn, ít lặp lại hơn, cân bằng kinh tế tốt hơn và thể hiện rõ bản sắc Việt Nam hơn.

Mục tiêu chính:

- Cân bằng lại tiền, chi phí và thưởng để người chơi không âm tiền quá sớm từ chương 5.
- Sửa các điểm gameplay gây ức chế: chả cháy không bỏ được, món đang nấu vẫn hủy được, trạng thái bếp chưa rõ.
- Mở rộng khách hàng, khách Tây, khách bí ẩn và các câu chuyện phụ.
- Thêm món ăn, nước uống, nguyên liệu và combo món + nước.
- Đổi hệ thống nâng cấp từ mua một lần thành nhiều cấp nhỏ có tác dụng cộng dồn.
- Thêm save/load thật sự bằng localStorage.
- Giảm lặp lại ở các chương sau bằng sự kiện, nhiệm vụ riêng, chủ đề vùng miền và mini game nhẹ.

## 2. Vấn Đề Hiện Tại

### 2.1 Kinh Tế Mất Cân Bằng

Người chơi kiếm tiền ít hơn về sau, trong khi chi phí cố định tăng quá mạnh. Từ chương 5 đã có nguy cơ âm tiền ngay cả khi người chơi phục vụ khá ổn.

Ở bản hiện tại, một phần đã được cân lại:

- Giảm thưởng cuối màn.
- Giảm tip/bonus đồ uống và khách bí ẩn.
- Tăng chi phí cố định.
- Tăng giá nâng cấp.

Tuy vậy, sau khi thêm đồ uống gameplay, nâng cấp mới hoặc event mới, cần kiểm tra lại economy.

### 2.2 Gameplay Bếp Chưa Hợp Lý

Vấn đề đã ghi nhận:

- Chả overcook/cháy không bỏ đi được để làm lại.
- Có lúc đang nấu vẫn bỏ món được, gây mất logic.
- Chưa có trạng thái rõ giữa chuẩn bị, đang nấu, món lỗi, món xong.

Đã sửa một phần:

- Chả cháy/non/quá lửa có thể bỏ và làm lại.
- Không thể đổ nồi khi đang nấu.
- Món đã xong hoặc món hỏng có thể bỏ với penalty hợp lý.

### 2.3 Khách Và Câu Chuyện Còn Nhạt

Vấn đề:

- Cụ ông xuất hiện/lặp lại quanh bún dọc mùng quá nhiều nên dễ nhàm.
- Khách Tây chưa đủ đa dạng tên, tính cách và khẩu vị.
- Thiếu khách lạ, khách bí ẩn có tỉ lệ xuất hiện và nhiệm vụ riêng.
- Khách hiện tại nhiều khi chỉ là avatar + món gọi + thanh kiên nhẫn.

Mục tiêu:

- Mỗi khách quan trọng cần có tên, vai trò, món thích/ghét, kiểu gọi món, câu thoại và phản ứng riêng.
- Khách bí ẩn phải đáng nhớ và có phần thưởng/câu chuyện riêng.
- Cụ ông nên là yếu tố cảm xúc/story, không phải nội dung lặp gây nhàm.

### 2.4 Nội Dung Việt Nam Chưa Đủ Đậm

Về sau cấu trúc mỗi chương còn lặp lại. Cần thêm không khí vùng miền, lễ hội, chợ sáng, hẻm phố, quán vỉa hè, ký ức gia đình và đời sống Việt Nam.

### 2.5 Nâng Cấp Quá Ngắn

Nâng cấp hiện vẫn còn ít. Cần hướng tới nâng cấp nhiều cấp hoặc thêm nhiều nâng cấp có giá cao hơn để tiền có ý nghĩa lâu dài.

### 2.6 Đồ Uống Chưa Là Gameplay Thật

Đồ uống như trà đá, trà tắc, nước mía, cà phê sữa đá, rau má hiện mới là add-on trong đơn hàng. Chúng chưa có:

- Công thức.
- Nguyên liệu.
- Khu pha nước.
- Trạng thái đồ uống đã pha.
- Kiểm tra đúng/sai nước khi phục vụ.

Đây là ưu tiên cao nhất cho lượt phát triển tiếp theo.

## 3. Phạm Vi v1.10

### Bắt Buộc Có

- Cân bằng lại kinh tế 15 chương để game công bằng, có tiến triển và không phạt người chơi quá mức.
- Sửa logic bỏ chả cháy, hủy món và trạng thái bếp để gameplay bớt ức chế.
- Save/load thật sự bằng localStorage hoặc cơ chế local tương đương.
- Khách hàng đa dạng hơn, có khách Tây, khách Việt, khách bí ẩn và câu chuyện phụ.
- Giảm lặp cụ ông và bún dọc mùng; biến cụ ông thành yếu tố cảm xúc thay vì nội dung bị lặp.
- Mở rộng món ăn, nước uống, nguyên liệu và combo nếu giúp game phong phú hơn.
- Nâng cấp nhiều cấp hoặc nhiều nâng cấp mới để tạo đường phát triển dài hạn.
- Mỗi nhóm chương phải có chủ đề, sự kiện hoặc cơ chế riêng để không lặp lại.
- Ưu tiên bất kỳ thay đổi nào làm game hay hơn, kể cả khi vượt ngoài phạm vi ban đầu.

### Nên Có

- Combo món + nước.
- Nhiệm vụ phụ của khách bí ẩn.
- Sự kiện theo chương: mưa, lễ hội, đoàn du khách, ngày nóng, mất điện.
- Endless Mode cơ bản.
- UI/UX tốt hơn nếu giao diện hiện tại cản trở trải nghiệm.
- Tách code thành nhiều file nếu `index.html` quá khó bảo trì.

### Có Thể Làm Nếu Giúp Game Tốt Hơn

Tinh thần: mục này không phải backlog xa. Nếu làm được trong lúc triển khai v1.10 mà không gây vỡ game, hãy làm luôn.

- Challenge Mode đầy đủ.
- Festival Mode riêng.
- Mini game phức tạp hơn.
- Achievement system.
- Gallery ký ức.
- Hệ thống thành phố/vùng miền rộng hơn.
- Hệ thống danh tiếng của quán.
- Hệ thống nguyên liệu và tồn kho.
- Hệ thống nhân viên/phụ bếp nếu làm gọn và vui.
- Hệ thống đồ uống có gameplay riêng.
- Hệ thống tính cách khách hàng: mỗi khách có câu nói, thói quen, cảm xúc, ký ức, phản ứng khi vui/buồn.
- Hệ thống tin đồn khu phố: khách hài lòng sẽ kéo thêm khách, khách thất vọng làm giảm danh tiếng.
- Sự kiện nhỏ bất ngờ trong ca chơi: hết đá, thiếu rau, mưa lớn, khách quen ghé thăm, food blogger quay clip.
- Sổ tay quán: ghi lại món đã mở khóa, khách đã gặp, câu chuyện đã mở.

## 4. Thiết Kế Kinh Tế Mới

### 4.1 Nguyên Tắc Cân Bằng

- Người chơi trung bình phục vụ đúng 65-75% khách phải có lãi nhẹ hoặc ít nhất không bị phạt quá nặng.
- Người chơi giỏi phục vụ 85-100% khách phải đủ tiền mua nâng cấp.
- Người chơi yếu vẫn có thể âm tiền, nhưng không nên thua ngay từ chương 5.
- Chi phí cố định tăng chậm hơn doanh thu tiềm năng.
- Giá món và bonus chương sau phải tăng theo độ khó.
- Nâng cấp cần đủ đắt để người chơi phải lựa chọn, không mua hết quá sớm.

### 4.2 Công Thức Gợi Ý

Doanh thu chương:

- Doanh thu món chính x số khách phục vụ.
- Bonus combo.
- Speed bonus.
- Tip khách quen.
- Reward khách bí ẩn.
- Thưởng mục tiêu chương.

Chi phí chương:

- Chi phí cố định.
- Chi phí nguyên liệu.
- Penalty bỏ món/chả.
- Penalty sự kiện nếu có.

Lợi nhuận:

- Doanh thu - chi phí cố định - chi phí nguyên liệu - hao phí + thưởng nhiệm vụ.

### 4.3 Điều Chỉnh Chi Phí

Giai đoạn 1, chương 1-4:

- Chi phí thấp, để người chơi học game.
- Fixed cost nên ăn khoảng 35-45% doanh thu trung bình.

Giai đoạn 2, chương 5-9:

- Chi phí tăng nhưng có thêm combo, nước uống, khách đặc biệt.
- Fixed cost nên ăn khoảng 45-55% doanh thu trung bình.

Giai đoạn 3, chương 10-15:

- Chi phí cao hơn nhưng món đắt hơn, reward lớn hơn.
- Fixed cost nên ăn khoảng 50-60% doanh thu trung bình.

### 4.4 Thưởng Mới

- Perfect Service: phục vụ đúng tất cả khách trong chương.
- No Waste: không bỏ món/chả.
- Combo Master: phục vụ đủ số combo yêu cầu.
- Khách Quý: phục vụ khách bí ẩn thành công.
- Ký Ức Cụ Ông: hoàn thành nhiệm vụ liên quan gia truyền.

Các thưởng này phải được cân lại sau mỗi lần thêm món/nước/nâng cấp mới.

## 5. Sửa Gameplay Bếp

### 5.1 Trạng Thái Nồi

Nồi cần có các trạng thái:

- `idle`: chưa có nguyên liệu.
- `preparing`: đã có nguyên liệu, chưa nấu.
- `cooking`: đang nấu, không cho hủy trực tiếp.
- `done`: món đã xong, có thể phục vụ hoặc bỏ.
- `ruined`: món sai/hỏng, có thể bỏ.

Quy tắc:

- Đang `cooking` không được bỏ món.
- Nếu muốn hủy khi đang nấu, hiện thông báo: “Món đang nấu, không thể bỏ lúc này.”
- Món `done` có thể bỏ, mất chi phí nguyên liệu.
- Món `ruined` có thể bỏ và làm lại.

### 5.2 Trạng Thái Lò Nướng Chả

Lò nướng cần có:

- `idle`
- `grilling`
- `good`
- `perfect`
- `overcooked`
- `burnt`
- `ruined`

Quy tắc:

- Nếu overcooked/burnt/undercooked, nút gắp dùng để bỏ mẻ hỏng.
- Bỏ chả sẽ reset lò nướng và trừ chi phí nhỏ.
- Nếu đang grilling, chỉ cho lật/gắp theo logic mini game.

### 5.3 UX Cần Có

- Nút “Bỏ món” có thông báo rõ.
- Nút “Bỏ chả” hoặc dùng nút gắp với trạng thái rõ.
- Tooltip ngắn: “Mất nguyên liệu khi bỏ”.
- Notification khi bỏ thành công: “Đã bỏ chả hỏng. Làm mẻ mới nhé.”

## 6. Khách Hàng Và Khách Bí Ẩn

### 6.0 Mục Tiêu Mới Cho Customer

Khách hiện tại bị nhạt vì chủ yếu là avatar + món gọi + thanh kiên nhẫn. v1.10 cần biến khách thành người có tính cách, thói quen và câu chuyện nhỏ.

Mỗi khách quan trọng nên có:

- Tên riêng.
- Vai trò trong đời sống Việt Nam: sinh viên, xe ôm, cô giáo, Việt kiều, food blogger, người lao động, khách du lịch.
- Món thích và món ghét.
- Kiểu gọi món: nói thẳng, nói vòng, gọi combo, đòi ít cay, đòi thêm rau, đòi không mắm tôm.
- 2-4 câu thoại theo trạng thái: mới vào, sắp hết kiên nhẫn, được phục vụ đúng, bị phục vụ sai.
- Một hook cá nhân: nhớ nhà, đi làm muộn, ăn món cũ của mẹ, quay review, tìm ký ức cũ, tiết kiệm, khó tính.
- Phần thưởng/ảnh hưởng nếu phục vụ tốt: tip, tăng danh tiếng, mở khóa câu chuyện, kéo thêm khách mới.

Nhóm khách nên tạo cảm giác khác nhau khi chơi:

- Khách văn phòng: ít kiên nhẫn, thường gọi combo nhanh.
- Sinh viên: ít tiền, tip thấp nhưng hay quay lại nếu được đối xử tốt.
- Người lao động: thích phần nhiều, món nóng, kiên nhẫn vừa.
- Khách du lịch: trả cao hơn, hay yêu cầu ít cay/không mắm tôm.
- Khách quen: có câu chuyện tăng dần qua nhiều lần gặp.
- Khách bí ẩn: ít xuất hiện nhưng mỗi lần gặp phải đáng nhớ.

### 6.1 Khách Tây Mới

Khách Tây cần đa dạng hơn, không chỉ có John.

Gợi ý:

- Anna: thích món ít cay, ưu tiên phở/bánh mì.
- Marco: thích món nướng, hay gọi bún chả.
- Sophie: thích món thanh, hay gọi gỏi cuốn/trà tắc.
- David: thích combo lớn, kiên nhẫn trung bình.
- Kenji: thích món nóng, hay gọi bún bò Huế ít cay.

Reaction riêng:

- Anna hay hỏi “món này có cay không?”, nếu đúng ý sẽ tăng review tốt.
- Marco thích món nướng, nếu chả perfect sẽ tip cao.
- Sophie thích đồ uống mát và món thanh.
- David gọi combo lớn, nếu chậm sẽ mất kiên nhẫn nhanh.
- Kenji thích vị đậm nhưng không ăn cay quá.

### 6.2 Khách Việt Mới

Gợi ý:

- Cô bán hoa.
- Chú xe ôm.
- Bác công nhân.
- Sinh viên xa nhà.
- Nhân viên văn phòng.
- Bà cụ đi chợ.
- Cô giáo về hưu.
- Anh shipper.

Chiều sâu gợi ý:

- Cô bán hoa: đến sớm, thích trà đá và bánh mì, nếu phục vụ tốt sẽ tăng khách buổi sáng.
- Chú xe ôm: gọi nhanh, kiên nhẫn thấp, tip nhỏ nhưng xuất hiện thường.
- Bác công nhân: thích cơm tấm/bún bò, phần nhiều, dễ tính.
- Sinh viên xa nhà: thích món rẻ, có chuỗi câu chuyện nhỏ về nhớ nhà.
- Nhân viên văn phòng: gọi combo, trả cao hơn, mất kiên nhẫn nhanh giờ trưa.
- Bà cụ đi chợ: thích vị truyền thống, nếu đúng món sẽ mở ký ức về cụ ông.
- Cô giáo về hưu: chậm rãi, kiên nhẫn cao, có thể cho lời khuyên/câu chuyện.
- Anh shipper: gọi mang đi, cần tốc độ, nếu nhanh sẽ tăng combo delivery.

### 6.3 Khách Bí Ẩn

Khách bí ẩn có tỉ lệ xuất hiện thấp, khoảng 5-12% tùy chương.

Gợi ý:

- Nhà phê bình ẩm thực: yêu cầu món đúng và nhanh, thưởng mở khóa giá món.
- Food blogger: nếu hài lòng, chương sau tăng lượng khách.
- Việt kiều về quê: mở khóa câu chuyện về món ăn ký ức.
- Bạn cũ của cụ ông: mở khóa cutscene nhỏ.
- Khách im lặng: đưa gợi ý mơ hồ, người chơi phải đoán món.
- Người giao nguyên liệu bí mật: bán nguyên liệu đặc biệt giá rẻ nếu phục vụ đúng.
- Đầu bếp đối thủ: thử thách làm món khó, thắng sẽ có thưởng lớn.

Mỗi khách bí ẩn nên có:

- `id`
- `name`
- `emoji`
- `appearRate`
- `unlockFromChapter`
- `preferredDish`
- `requestText`
- `successReward`
- `failureConsequence`
- `storyFlag`

## 7. Giảm Lặp Cụ Ông

Cụ ông không nên xuất hiện như khách thường xuyên ăn một món.

Dùng cụ ông theo 4 cách:

- Ký ức đầu chương.
- Lời nhắn trong sổ công thức.
- Cutscene sau milestone.
- Nhiệm vụ gia truyền đặc biệt.

Nếu cụ ông có liên quan món ăn, hãy luân phiên:

- Bún dọc mùng.
- Phở bò.
- Bún riêu.
- Bánh mì.
- Cơm tấm.
- Nước mắm pha.

## 8. Món Ăn, Nước Uống, Nguyên Liệu Mới

### 8.1 Nguyên Liệu Mới

Gợi ý:

- Thịt bò.
- Gà xé.
- Nem rán.
- Đậu phụ.
- Rau thơm.
- Giá đỗ.
- Mắm tôm.
- Hành phi.
- Sa tế.
- Chanh/tắc.
- Ớt.
- Sữa đặc.
- Cà phê.
- Mía.
- Đá.
- Trà.
- Rau má.

### 8.2 Món Ăn Mới

Gợi ý:

- Phở bò.
- Bún bò Huế.
- Bún riêu.
- Bún thịt nướng.
- Bún đậu mắm tôm.
- Bánh mì thịt.
- Cơm tấm.
- Mì Quảng.
- Cao lầu.
- Hủ tiếu.
- Gỏi cuốn.

Không cần thêm tất cả nếu gây quá tải. Ưu tiên 5-7 món có gameplay khác nhau.

### 8.3 Nước Uống

Đồ uống không nên chỉ là “thêm tiền”. Cần có cảm giác riêng và ảnh hưởng gameplay.

Gợi ý đồ uống:

- Trà đá: rẻ, nhanh, đi kèm hầu hết món; tăng nhẹ kiên nhẫn khách Việt.
- Trà tắc: hợp ngày nóng; combo tốt với bánh mì, bún thịt nướng.
- Nước mía: bán chạy ngày nóng/lễ hội; lợi nhuận tốt nhưng mất thời gian ép.
- Cà phê sữa đá: hợp khách văn phòng/khách Tây; nếu pha đúng tăng tip.
- Bạc xỉu: biến thể cà phê nhẹ hơn, hợp khách trẻ.
- Sữa đậu nành: hợp buổi sáng, khách lớn tuổi, combo với bánh mì.
- Nước chanh: giải nhiệt, giảm tác động ngày nóng.
- Rau má: thức uống vỉa hè, hợp khách thích đồ mát.
- Sâm dứa: mở khóa về sau, bán tốt trong lễ hội/miền Nam.
- Chè đậu xanh: giữa món tráng miệng và đồ uống, có thể là combo đặc biệt.

Cơ chế pha nước:

- Đồ uống nhanh: trà đá, sữa đậu nành.
- Đồ uống cần canh tỉ lệ: cà phê sữa đá, bạc xỉu.
- Đồ uống cần thời gian máy: nước mía.
- Đồ uống theo sự kiện: nước chanh, rau má, trà tắc bán mạnh ngày nóng.

Trạng thái đồ uống:

- `normal`: dùng được.
- `ngon`: tăng tip/combo bonus.
- `nhạt`: khách vẫn nhận nhưng mất bonus.
- `quá ngọt/quá đắng`: khách không vui, trừ nhẹ danh tiếng.

Combo món + nước nên có bản sắc:

- Bánh mì + cà phê sữa đá.
- Bún chả + trà đá.
- Bún bò Huế + nước chanh/trà tắc.
- Cơm tấm + trà đá/nước mía.
- Gỏi cuốn + rau má.
- Bún đậu mắm tôm + trà tắc.
- Hủ tiếu + sữa đậu nành buổi sáng.

Mini game đồ uống ưu tiên:

- Pha cà phê sữa đá: canh 3 thanh cà phê/sữa/đá.
- Ép nước mía: giữ máy trong vùng xanh, quá lâu sẽ kẹt máy.
- Pha trà tắc: cân bằng chua/ngọt/đá.

### 8.4 Combo

Combo gồm:

- Món chính + nước.
- Món chính + món phụ.
- Đặc sản vùng miền + nước phù hợp.

Sai nước:

- Không fail đơn.
- Mất combo bonus/tip.
- Có thể giảm nhẹ hài lòng.

Đúng combo:

- Tăng tiền.
- Tăng điểm hài lòng.
- Có thể tăng danh tiếng quán.

## 9. Nâng Cấp Nhiều Cấp

Chuyển nâng cấp thành multi-level nếu có thể.

Gợi ý nâng cấp:

- Nồi lớn cấp 1-5: giảm thời gian nấu 3% mỗi cấp.
- Bếp than cấp 1-5: mở rộng vùng perfect grill.
- Dao thớt cấp 1-5: giảm thời gian chuẩn bị.
- Bảng menu cấp 1-5: tăng giá bán 2% mỗi cấp.
- Ghế ngồi cấp 1-5: tăng kiên nhẫn khách 3% mỗi cấp.
- Tủ lạnh cấp 1-5: giảm waste penalty.
- Quạt máy cấp 1-3: giảm tác động ngày nóng.
- Phụ bếp cấp 1-3: tự động hỗ trợ một thao tác đơn giản.

Nguyên tắc giá nâng cấp:

- Cấp sau đắt hơn cấp trước.
- Tác dụng mỗi cấp nhỏ nhưng cộng dồn.
- Người chơi không thể mua hết quá sớm.

## 10. Save / Load Game

### 10.1 Dữ Liệu Cần Lưu

- `unlockedChapters`
- `currentChapter`
- `totalMoney`
- `upgrades`
- `unlockedRecipes`
- `unlockedDrinks`
- `discoveredMysteryCustomers`
- `completedSideQuests`
- `storyFlags`
- `bestScoreByChapter`
- `settings`

### 10.2 UI Cần Có

Menu chính:

- Tiếp tục.
- Chơi mới.
- Chọn chương.
- Xóa save.

Trong game:

- Tự động lưu sau mỗi chương.
- Tự động lưu sau khi mua nâng cấp.
- Thông báo ngắn: “Đã lưu tiến trình”.

### 10.3 Quy Tắc New Game

Nếu đã có save, bấm Chơi mới phải xác nhận:

> “Bắt đầu lại sẽ xóa tiến trình hiện tại. Tiếp tục?”

## 11. Giảm Lặp Lại Theo 15 Chương

### 11.1 Chủ Đề Từng Cụm Chương

Chương 1-3: Giữ quán gia đình.

- Học công thức cơ bản.
- Khách quen khu phố.
- Cụ ông xuất hiện qua ký ức.

Chương 4-6: Khu phố sống dậy.

- Thêm khách văn phòng, sinh viên, shipper.
- Thêm combo nước.
- Sự kiện mưa/khách đông bất ngờ.

Chương 7-9: Lễ hội ẩm thực Việt.

- Thêm khách Tây, food blogger.
- Thêm đặc sản miền Trung.
- Có mini game pha nước mắm hoặc nướng chả.

Chương 10-12: Mở rộng ba miền.

- Thêm món miền Nam, miền Trung.
- Khách bí ẩn xuất hiện nhiều hơn.
- Có ngày nóng, mất điện, đoàn khách du lịch.

Chương 13-15: Bảo vệ thương hiệu Bếp Việt.

- Đầu bếp đối thủ.
- Nhà phê bình ẩm thực.
- Chương cuối tổng hợp tất cả cơ chế.
- Kết thúc nhấn mạnh di sản cụ ông và bản sắc quán.

### 11.2 Biến Thể Sự Kiện

- Mưa rào: khách gọi món nóng nhiều hơn, khách đến chậm hơn.
- Ngày nóng: khách mất kiên nhẫn nhanh hơn, nước uống bán chạy hơn.
- Lễ hội: nhiều combo, thưởng cao.
- Mất điện: thời gian nấu tăng, nhưng có thưởng nếu vượt qua.
- Đoàn du khách: nhiều khách Tây, yêu cầu ít cay/món signature.
- Ngày chợ sáng: nguyên liệu rẻ hơn, khách đến sớm hơn.

## 12. Chế Độ Chơi Và Mini Game

### 12.1 Endless Mode

Mở khóa sau chương 5.

Quy tắc:

- Khách đến vô hạn.
- Mỗi 2 phút tăng độ khó.
- Lưu best score.
- Không cần story dài.

### 12.2 Challenge Mode

Mở khóa sau chương 8.

Ví dụ:

- Chỉ bán bún chả trong 3 phút.
- Không được bỏ món nào.
- Tất cả khách gọi combo.
- Ngày mất điện.

### 12.3 Mini Game Ưu Tiên

Ưu tiên mini game nhẹ, không biến game thành quá phức tạp.

- Nướng chả: canh lật đúng lúc.
- Pha nước mắm: cân bằng chua/cay/mặn/ngọt.
- Pha cà phê sữa đá: canh tỉ lệ cà phê/sữa/đá.
- Gỏi cuốn: chọn đúng thứ tự nguyên liệu.

Mini game chỉ nên xuất hiện ở chương đặc biệt hoặc để lấy bonus, không bắt người chơi làm liên tục.

## 13. Thứ Tự Triển Khai

### Sprint 1 - Sửa Lỗi Và Cân Bằng Cốt Lõi

1. Cân bằng lại doanh thu, giá món, chi phí 15 chương.
2. Sửa bỏ chả cháy.
3. Sửa không cho bỏ món khi đang nấu.
4. Thêm waste penalty hợp lý.
5. Kiểm tra lại chương 1-6 để không âm tiền quá sớm.

### Sprint 2 - Save/Load Và Tiến Trình

1. Thêm save data schema.
2. Lưu unlocked chapters, money, upgrades, recipes.
3. Thêm Continue/New Game/Delete Save.
4. Lưu sau mỗi chương và sau nâng cấp.
5. Test reload browser vẫn tiếp tục được.

### Sprint 3 - Khách Mới Và Khách Bí Ẩn

1. Thêm danh sách khách Tây.
2. Thêm khách Việt mới.
3. Thêm hệ thống mystery customer appearRate.
4. Thêm 3 khách bí ẩn đầu tiên.
5. Thêm reward và story flag.

### Sprint 4 - Món, Nước, Combo

1. Thêm 5 món ăn mới.
2. Thêm 6-10 nước uống nếu có thể làm gọn; ít nhất 3 nước phải có gameplay/bonus riêng.
3. Thêm combo món + nước có bản sắc Việt, không chỉ cộng tiền thuần túy.
4. Thêm reaction khách theo đồ uống đúng/sai/quá chậm.
5. Cập nhật UI đơn hàng để hiện món chính, nước, yêu cầu đặc biệt.
6. Cập nhật scoring, tip, danh tiếng và reward.

### Sprint 5 - Nâng Cấp Và Sự Kiện Chương

1. Đổi upgrade thành multi-level.
2. Thêm 5 loại nâng cấp đầu tiên.
3. Thêm event theo chương.
4. Cập nhật 15 chương để mỗi cụm có chủ đề riêng.

### Sprint 6 - Chế Độ Mới

1. Thêm Endless Mode cơ bản.
2. Thêm 2 challenge nhỏ.
3. Thêm 1 mini game ưu tiên: nướng chả hoặc pha nước mắm.
4. Nếu làm được thêm mà không vỡ game, làm tiếp Festival Mode, Achievement, Gallery ký ức.
5. Nếu có thể, thêm mini game đồ uống: pha cà phê sữa đá hoặc ép nước mía.

## 14. Tiêu Chí Kiểm Thử

### Gameplay

- Chả cháy bỏ được và làm lại được.
- Đang nấu không bỏ món được.
- Món done/ruined bỏ được.
- Khách gọi combo hiển thị rõ.
- Sai nước không fail đơn, chỉ mất bonus.

### Kinh Tế

- Chơi trung bình chương 1-6 không âm tiền quá nặng.
- Chơi tốt có đủ tiền mua ít nhất 1-2 upgrade mỗi 2-3 chương.
- Chi phí không vượt doanh thu tiềm năng ở chương 5.

### Save/Load

- Reload browser vẫn giữ tiến trình.
- Continue vào đúng chapter/unlocks.
- Delete Save xóa sạch tiến trình.

### Nội Dung

- Khách Tây không chỉ lặp một tên.
- Cụ ông không lặp bún dọc mùng liên tục.
- Ít nhất 3 khách bí ẩn có reward riêng.
- Các chương 7-15 có sự kiện/chủ đề khác nhau.

## 15. Prompt Tối Ưu Cho Claude Làm Tiếp

Dùng prompt sau để Claude tiếp tục làm phần còn lại, tối ưu token:

```text
Đọc PLAN_v1.10.md, phần handoff mới nhất trong CLAUDE.md và các phần liên quan của index.html. Tiếp tục hoàn thiện game “Bếp Việt: Tiệm Bún Số 7” theo mục tiêu mới: bỏ ràng buộc cũ, ưu tiên duy nhất là làm game hay hơn, sâu hơn, Việt Nam hơn.

Trạng thái hiện tại:
- index.html là bản Demo v1.10, vanilla HTML/CSS/JS một file.
- Đã có 15 level, save/load bằng localStorage, shop nâng cấp, story overlay, mini-game nướng chả, khách mới, khách bí ẩn, món mới.
- Đồ uống hiện mới là add-on trong đơn hàng, chưa có công thức và gameplay pha chế thật.
- Đã sửa: chả cháy/non/quá lửa có thể bỏ làm lại; không được đổ nồi khi đang nấu; nguyên liệu chỉ hiện theo công thức đã mở khóa; economy đã được cân lại bớt dư tiền.
- Có file test untracked, không động vào nếu không cần.

Yêu cầu:
- Giữ vanilla HTML/CSS/JS, không thêm dependency nếu không thật sự cần.
- Không rewrite toàn bộ file nếu không cần.
- Sửa trực tiếp index.html.
- Làm được phần nào giúp game hay hơn thì làm luôn, nhưng mỗi bước phải giữ game chạy được.
- Không in lại toàn bộ file. Sau khi xong chỉ báo file đã sửa, tính năng đã xong, cách test.

Việc ưu tiên cao:
1. Biến đồ uống thành gameplay thật: có công thức, nguyên liệu, UI/khu pha nước, trạng thái đồ uống đã pha, phục vụ món + nước.
2. Thêm công thức đồ uống: Trà đá = trà + đá; Trà tắc = trà + tắc + đá; Nước mía = mía + đá; Cà phê sữa đá = cà phê + sữa đặc + đá; Rau má = rau má + đá.
3. Cập nhật order: khách gọi món chính + nước. Sai nước không fail món chính nhưng mất bonus/tip.
4. Làm khách có cảm giác hơn: thêm 2-4 câu thoại theo nhóm khách, reaction khi đúng/sai/quá chậm, khách bí ẩn có reward/story flag riêng.
5. Nâng cấp shop thành multi-level nếu làm được gọn, hoặc ít nhất thêm nhiều upgrade mới có giá cao hơn để tiền có ý nghĩa.
6. Thêm event/variation cho chương sau để giảm lặp: ngày nóng bán nước chạy hơn, lễ hội combo nhiều hơn, mất điện nấu chậm hơn, du khách yêu cầu ít cay.
7. Kiểm tra lại economy sau khi thêm đồ uống gameplay để không quá giàu và không âm vô lý.

Kiểm tra bắt buộc:
- Parse JS bằng Node/new Function hoặc tương đương.
- Kiểm tra onclick function và getElementById không thiếu.
- Kiểm tra nguyên liệu chỉ hiện theo công thức đã mở khóa.
- Nếu có Playwright/browser thì test flow: menu -> level -> thêm nguyên liệu -> nấu -> nướng -> pha nước -> phục vụ -> end level.
- Không stage/push file test untracked.
```

## 16. Ghi Chú Trao Đổi Mới Nhất

- Người dùng muốn bỏ tất cả yêu cầu gốc nếu chúng cản trở chất lượng. Mục tiêu duy nhất: làm game tốt nhất có thể.
- Người dùng muốn “làm được gì thì làm luôn” với các hệ thống có ích: Challenge, Festival, mini game, achievement, gallery ký ức, thành phố/vùng miền, danh tiếng quán, tồn kho, phụ bếp.
- Người dùng nhận xét khách hàng còn nhạt, cần có tính cách, câu nói, cảm xúc, câu chuyện và reaction riêng.
- Người dùng nhận xét đồ uống như trà đá đã có trong order nhưng chưa có công thức/gameplay. Cần biến đồ uống thành hệ thống thật.
- Người dùng nhận xét ngân sách đang có quá nhiều tiền. Đã cân lại: giảm thưởng, giảm tip/bonus đồ uống/khách bí ẩn, tăng chi phí và giá nâng cấp.
- Người dùng muốn Claude làm tiếp phần còn lại sau khi Codex xử lý các phần chắc tay.
