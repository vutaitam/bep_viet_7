# Bep Viet: Tiem Bun So 7 - Ke Hoach Cap Nhat v1.10

## 1. Muc Tieu Ban v1.10

Ban v1.10 tap trung bien v9 tu mot ban co 15 chuong co the choi duoc thanh mot ban co chieu sau hon, it lap lai hon, can bang kinh te tot hon va the hien ro ban sac Viet Nam hon.

Muc tieu chinh:

- Can bang lai tien, chi phi va thuong de nguoi choi khong bi am tien qua som tu chuong 5.
- Sua cac diem gameplay gay uc che: cha bi chay khong bo duoc, mon dang nau van huy duoc, trang thai bep chua ro.
- Mo rong khach hang, khach Tay, khach bi an va cac cau chuyen phu.
- Them mon an, nuoc uong, nguyen lieu va combo mon + nuoc.
- Doi he thong nang cap tu mua mot lan thanh nhieu cap nho co tac dung cong don.
- Them save/load that su bang localStorage.
- Giam lap lai o cac chuong sau bang su kien, nhiem vu rieng, chu de vung mien va mini game nhe.

## 2. Van De Hien Tai

### 2.1 Kinh te mat can bang

Nguoi choi kiem tien it hon ve sau, trong khi chi phi co dinh tang qua manh. Tu chuong 5 da co nguy co am tien ngay ca khi nguoi choi phuc vu kha on.

### 2.2 Gameplay bep chua hop ly

- Cha overcook/chay khong bo di duoc de lam lai.
- Co luc dang nau van bo mon duoc, gay mat logic.
- Chua co trang thai ro giua chuan bi, dang nau, mon loi, mon xong.

### 2.3 Khach va cau chuyen lap lai

- Cu ong xuat hien/lien quan qua nhieu den bun doc mung nen bi nham.
- Khach Tay chua da dang ten, tinh cach, khau vi.
- Thieu khach la, khach bi an co ti le xuat hien va nhiem vu rieng.

### 2.4 Noi dung Viet Nam chua du dam

Ve sau cau truc moi chuong lap lai, chua co nhieu khong khi vung mien, le hoi, cho sang, hem pho, quan via he, ky uc gia dinh.

### 2.5 Nang cap qua ngan

Nang cap chi dung duoc mot lan, khong tao duong phat trien dai han.

### 2.6 Save/load chua ro

Can co luu tien trinh that su, cho phep tiep tuc game va reset save.

## 3. Pham Vi v1.10

### Bat buoc co

- Can bang lai kinh te 15 chuong.
- Sua logic bo cha chay va huy mon.
- Save/load bang localStorage.
- Khach Tay moi va khach bi an co ti le xuat hien.
- Giam lap Cu ong an bun doc mung.
- Them it nhat 5 mon an, 3 nuoc uong, 5 nguyen lieu.
- Nang cap nhieu cap.
- Moi nhom chuong co chu de/variation rieng.

### Nen co

- Combo mon + nuoc.
- Nhiem vu phu cua khach bi an.
- Su kien theo chuong: mua, le hoi, doan du khach, ngay nong, ngay mat dien.
- Endless Mode co ban.

### De sau neu thieu thoi gian

- Challenge Mode day du.
- Festival Mode rieng.
- Mini game phuc tap.
- Achievement system.
- Gallery ky uc.

## 4. Thiet Ke Kinh Te Moi

### 4.1 Nguyen tac can bang

- Nguoi choi trung binh phuc vu dung 65-75% khach phai co lai nhe.
- Nguoi choi gioi phuc vu 85-100% khach phai du tien mua nang cap.
- Nguoi choi yeu van co the am tien, nhung khong nen thua ngay tu chuong 5.
- Chi phi co dinh tang cham hon doanh thu tiem nang.
- Gia mon va bonus chuong sau phai tang theo do kho.

### 4.2 Cong thuc goi y

Doanh thu chuong:

- base dish revenue x so khach phuc vu
- combo bonus
- speed bonus
- regular customer tip
- mystery customer reward
- chapter objective reward

Chi phi chuong:

- rent
- ingredient cost
- utility cost
- waste penalty
- event penalty neu co

Loi nhuan:

- revenue - fixedCost - ingredientCost - wastePenalty + missionReward

### 4.3 Dieu chinh chi phi co dinh

Giai doan 1, chuong 1-4:

- Chi phi thap, de nguoi choi hoc game.
- Fixed cost chi nen an 35-45% doanh thu trung binh.

Giai doan 2, chuong 5-9:

- Chi phi tang nhung co them combo, nuoc uong, khach dac biet.
- Fixed cost chi nen an 45-55% doanh thu trung binh.

Giai doan 3, chuong 10-15:

- Chi phi cao hon nhung mon dat hon, reward lon hon.
- Fixed cost chi nen an 50-60% doanh thu trung binh.

### 4.4 Thuong moi

- Perfect Service: phuc vu dung tat ca khach trong chuong, +20% doanh thu.
- No Waste: khong bo mon/cha, +10% loi nhuan.
- Combo Master: phuc vu du 3 combo, +50.000d den +200.000d theo chuong.
- Khach Quy: phuc vu khach bi an thanh cong, thuong tien hoac mo khoa.
- Ky Uc Cu Ong: hoan thanh nhiem vu lien quan gia truyen, mo khoa recipe bonus.

## 5. Sua Gameplay Bep

### 5.1 Trang thai noi

Noi can co cac trang thai:

- idle: chua co nguyen lieu.
- preparing: da co nguyen lieu, chua nau.
- cooking: dang nau, khong cho huy truc tiep.
- done: mon da xong, co the phuc vu hoac bo.
- ruined: mon sai/hong, co the bo.

Quy tac:

- Dang cooking khong duoc bo mon.
- Neu muon huy khi cooking, hien thong bao: "Mon dang nau, khong the bo luc nay."
- Mon done co the bo, mat chi phi nguyen lieu.
- Mon ruined co the bo va lam lai.

### 5.2 Trang thai lo nuong cha

Lo nuong can co:

- idle
- grilling
- good
- perfect
- overcooked
- burnt

Quy tac:

- Neu overcooked/burnt, nut "Bo cha" bat len.
- Bo cha se reset lo nuong va tru chi phi nho.
- Neu dang grilling, chi cho lat cha/tiep tuc, khong cho lay neu chua den nguong.

### 5.3 UX can them

- Nut "Bo mon" co icon/thong bao ro.
- Nut "Bo cha" rieng cho lo nuong.
- Tooltip ngan: "Mat nguyen lieu khi bo".
- Notification khi bo thanh cong: "Da bo cha chay. Lam me moi nhe."

## 6. Khach Hang Va Khach Bi An

### 6.1 Khach Tay moi

Them danh sach khach Tay co ten va khau vi:

- Anna: thich mon it cay, uu tien pho/banh mi.
- Marco: thich mon nuong, hay goi bun cha.
- Sophie: thich mon thanh, hay goi goi cuon/tra da.
- David: thich combo lon, kien nhan trung binh.
- Kenji: thich mon nong, hay goi bun bo Hue nhung yeu cau it cay.

Khach Tay khong nen chi la "John" lap lai.

### 6.2 Khach Viet moi

- Co ban hoa.
- Chu xe om.
- Bac cong nhan.
- Sinh vien xa nha.
- Nhan vien van phong.
- Ba cu di cho.
- Co giao ve huu.
- Anh shipper.

Moi nguoi co mot cau noi ngan, mon thich va muc kien nhan khac nhau.

### 6.3 Khach bi an

Khach bi an co ti le xuat hien thap, chi 5-12% tuy chuong.

Danh sach de xuat:

- Nha phe binh am thuc: yeu cau mon dung va nhanh, thuong mo khoa gia mon.
- Food blogger: neu hai long, chuong sau tang luong khach.
- Viet kieu ve que: mo khoa cau chuyen ve mon an ky uc.
- Ban cu cua Cu Ong: mo khoa cutscene nho.
- Khach im lang: dua goi y mo ho, nguoi choi phai doan mon.
- Nguoi giao nguyen lieu bi mat: ban nguyen lieu dac biet gia re neu phuc vu dung.
- Dau bep doi thu: thu thach lam mon kho, thang se co thuong lon.

Moi khach bi an can co:

- id
- name
- emoji
- appearRate
- unlockFromChapter
- preferredDish
- requestText
- successReward
- failureConsequence
- storyFlag

## 7. Giam Lap Cu Ong

Cu Ong khong nen xuat hien nhu khach thuong xuyen an mot mon.

Dung Cu Ong theo 4 cach:

- Ky uc dau chuong.
- Loi nhan trong so tay cong thuc.
- Cutscene sau milestone.
- Nhiem vu gia truyen dac biet.

Neu Cu Ong co lien quan mon an, luan phien:

- Bun doc mung.
- Pho bo.
- Bun rieu.
- Banh mi.
- Com tam.
- Nuoc mam pha.

## 8. Mon An, Nuoc Uong, Nguyen Lieu Moi

### 8.1 Nguyen lieu moi

Them it nhat:

- thit bo
- ga xe
- nem ran
- dau phu
- rau thom
- gia do
- mam tom
- hanh phi
- sa te
- chanh
- ot
- sua dac
- ca phe
- mia

### 8.2 Mon an moi

Them it nhat 5 mon trong v1.10:

- Pho bo
- Bun bo Hue
- Bun rieu
- Bun thit nuong
- Bun dau mam tom
- Banh mi thit
- Com tam
- Mi Quang
- Cao lau
- Hu tieu
- Goi cuon

Khong can them het neu gay qua tai. Uu tien 5-7 mon co gameplay khac nhau.

### 8.3 Nuoc uong

Them it nhat 3:

- Tra da
- Nuoc mia
- Ca phe sua da
- Nuoc chanh
- Sua dau nanh
- Rau ma

### 8.4 Combo

Combo gom:

- mon chinh + nuoc
- mon chinh + mon phu
- dac san vung mien + nuoc phu hop

Sai nuoc:

- Khong fail don.
- Mat combo bonus.

Dung combo:

- +10-20% tien.
- +diem hai long.

## 9. Nang Cap Nhieu Cap

Chuyen nang cap thanh multi-level.

### 9.1 Danh sach nang cap

- Noi lon cap 1-5: giam thoi gian nau 3% moi cap.
- Bep than cap 1-5: mo rong vung perfect grill.
- Dao thot cap 1-5: giam thoi gian chuan bi.
- Bang menu cap 1-5: tang gia ban 2% moi cap.
- Ghe ngoi cap 1-5: tang kien nhan khach 3% moi cap.
- Tu lanh cap 1-5: giam waste penalty.
- Quat may cap 1-3: giam tac dong ngay nong.
- Phu bep cap 1-3: tu dong ho tro mot thao tac don gian.

### 9.2 Nguyen tac gia nang cap

- Cap sau dat hon cap truoc.
- Tac dung moi cap nho nhung cong don.
- Nguoi choi khong the mua het qua som.

Cong thuc goi y:

- cost = baseCost * levelMultiplier * chapterScale
- effect = baseEffect * level

## 10. Save / Load Game

### 10.1 Du lieu can luu

- unlockedChapters
- currentChapter
- totalMoney
- upgrades
- unlockedRecipes
- unlockedDrinks
- discoveredMysteryCustomers
- completedSideQuests
- storyFlags
- bestScoreByChapter
- settings

### 10.2 UI can co

Menu chinh:

- Tiep tuc
- Choi moi
- Chon chuong
- Xoa save

Trong game:

- Tu dong luu sau moi chuong.
- Tu dong luu sau khi mua nang cap.
- Thong bao ngan: "Da luu tien trinh".

### 10.3 Quy tac New Game

Neu da co save, bam Choi moi phai xac nhan:

"Bat dau lai se xoa tien trinh hien tai. Tiep tuc?"

## 11. Giam Lap Lai Theo 15 Chuong

### 11.1 Chu de tung cum chuong

Chuong 1-3: Giu quan gia dinh

- Hoc cong thuc co ban.
- Khach quen khu pho.
- Cu Ong xuat hien qua ky uc.

Chuong 4-6: Khu pho thuc su song day

- Them khach van phong, sinh vien, shipper.
- Them combo nuoc.
- Su kien mua/khach dong bat ngo.

Chuong 7-9: Le hoi am thuc Viet

- Them khach Tay, food blogger.
- Them dac san mien Trung.
- Co mini game pha nuoc mam hoac nuong cha.

Chuong 10-12: Mo rong ba mien

- Them mon mien Nam, mien Trung.
- Khach bi an xuat hien nhieu hon.
- Co ngay nong, ngay mat dien, doan khach du lich.

Chuong 13-15: Bao ve thuong hieu Bep Viet

- Dau bep doi thu.
- Nha phe binh am thuc.
- Chuong cuoi tong hop tat ca co che.
- Ket thuc nhan manh di san Cu Ong va ban sac quan.

### 11.2 Bien the su kien

- Mua rao: khach goi mon nong nhieu hon, thoi gian di lai cham.
- Ngay nong: khach mat kien nhan nhanh hon, nuoc uong ban chay hon.
- Le hoi: nhieu combo, thuong cao.
- Mat dien: thoi gian nau tang, nhung co thuong neu vuot qua.
- Doan du khach: nhieu khach Tay, yeu cau it cay/mon signature.
- Ngay cho sang: nguyen lieu re hon, nhung khach den som hon.

## 12. Che Do Choi Va Mini Game

### 12.1 Endless Mode

Mo khoa sau chuong 5.

Quy tac:

- Khach den vo han.
- Moi 2 phut tang do kho.
- Luu best score.
- Khong can story dai.

### 12.2 Challenge Mode

Mo khoa sau chuong 8.

Vi du:

- Chi ban bun cha trong 3 phut.
- Khong duoc bo mon nao.
- Tat ca khach goi combo.
- Ngay mat dien.

### 12.3 Mini game uu tien

Uu tien mini game nhe, khong bien game thanh qua phuc tap.

- Nuong cha: canh lat dung luc.
- Pha nuoc mam: can bang chua/cay/man/ngot.
- Pha ca phe sua da: canh ty le ca phe/sua/da.
- Goi cuon: chon dung thu tu nguyen lieu.

Mini game chi nen xuat hien o chuong dac biet hoac de lay bonus, khong bat nguoi choi lam lien tuc.

## 13. Thu Tu Trien Khai

### Sprint 1 - Sua loi va can bang cot loi

1. Can bang lai doanh thu, gia mon, chi phi 15 chuong.
2. Sua bo cha chay.
3. Sua khong cho bo mon khi dang nau.
4. Them waste penalty hop ly.
5. Kiem tra lai chuong 1-6 de khong am tien qua som.

### Sprint 2 - Save/load va tien trinh

1. Them save data schema.
2. Luu unlocked chapters, money, upgrades, recipes.
3. Them Continue/New Game/Delete Save.
4. Luu sau moi chuong va sau nang cap.
5. Test reload browser van tiep tuc duoc.

### Sprint 3 - Khach moi va khach bi an

1. Them danh sach khach Tay.
2. Them khach Viet moi.
3. Them he thong mystery customer appearRate.
4. Them 3 khach bi an dau tien.
5. Them reward va story flag.

### Sprint 4 - Mon, nuoc, combo

1. Them 5 mon an moi.
2. Them 3 nuoc uong.
3. Them combo mon + nuoc.
4. Cap nhat UI don hang.
5. Cap nhat scoring va reward.

### Sprint 5 - Nang cap va su kien chuong

1. Doi upgrade thanh multi-level.
2. Them 5 loai nang cap dau tien.
3. Them event theo chuong.
4. Cap nhat 15 chuong de moi cum co chu de rieng.

### Sprint 6 - Che do moi

1. Them Endless Mode co ban.
2. Them 2 challenge nho.
3. Them 1 mini game uu tien: nuong cha hoac pha nuoc mam.

## 14. Tieu Chi Kiem Thu

### Gameplay

- Cha chay bo duoc va lam lai duoc.
- Dang nau khong bo mon duoc.
- Mon done/ruined bo duoc.
- Khach goi combo hien thi ro.
- Sai nuoc khong fail don, chi mat bonus.

### Kinh te

- Choi trung binh chuong 1-6 khong am tien qua nang.
- Choi tot co du tien mua it nhat 1-2 upgrade moi 2-3 chuong.
- Chi phi khong vuot doanh thu tiem nang o chuong 5.

### Save/load

- Reload browser van giu tien trinh.
- Continue vao dung chapter/unlocks.
- Delete Save xoa sach tien trinh.

### Noi dung

- Khach Tay khong chi lap mot ten.
- Cu Ong khong lap bun doc mung lien tuc.
- It nhat 3 khach bi an co reward rieng.
- Cac chuong 7-15 co su kien/chu de khac nhau.

## 15. Prompt Ngan Cho Claude Trien Khai v1.10

Dung prompt sau neu muon Claude implement tiep tiet kiem token:

```text
Doc PLAN_v1.10.md va index.html. Hay implement v1.10 theo thu tu uu tien Sprint 1 -> Sprint 3 truoc.

Yeu cau:
- Giu vanilla HTML/CSS/JS, khong them dependency.
- Khong rewrite toan bo neu khong can.
- Sua truc tiep index.html.
- Khong in lai toan bo file.
- Truoc khi sua, tom tat ke hoach toi da 8 bullet.
- Sau khi sua, chi bao file da sua, tinh nang da xong, cach test.

Pham vi lan nay:
1. Can bang lai kinh te 15 chuong de khong am tien qua som.
2. Sua bo cha chay/overcooked.
3. Khong cho bo mon khi dang nau.
4. Them save/load localStorage.
5. Them khach Tay moi va 3 khach bi an dau tien.
6. Giam lap Cu Ong va bun doc mung.

Tu kiem tra bang cach mo index.html hoac chay server tinh.
```

