# Bep Viet: Tiem Bun So 7 - Ke Hoach Cap Nhat v1.10

## 0. Dinh Huong Moi - Uu Tien Chat Luong Tuyet Doi

Tu thoi diem nay, bo tat ca rang buoc va muc tieu goc neu chung lam game kem hay hon.

Muc tieu duy nhat:

> Lam "Bep Viet: Tiem Bun So 7" tro thanh game hay nhat, hap dan nhat, co ban sac Viet Nam ro nhat va dang choi lau dai nhat co the trong kha nang hien tai.

Nguyen tac moi:

- Chat luong gameplay quan trong hon viec giu dung scope cu.
- Neu mot yeu cau cu lam game lap lai, nong, thieu vui hoac kho mo rong, duoc phep bo.
- Neu can them he thong moi de game hay hon, duoc phep them.
- Neu mot tinh nang trong danh sach "co the lam" co the implement gon va khong pha game, hay lam luon thay vi de sau.
- Neu can tach file de code de bao tri hon, duoc phep tach file.
- Neu can thay doi cau truc chuong, kinh te, mon an, khach hang, nang cap, UI hoac story, duoc phep thay doi.
- Ban sac Viet Nam, cam xuc ve quan an gia dinh va do vui khi choi la uu tien cao nhat.
- Khong hy sinh trai nghiem nguoi choi chi de giu mot quyet dinh thiet ke cu.
- Moi thay doi nen phuc vu mot trong ba muc tieu: vui hon, sau hon, Viet Nam hon.
- Khong can doi den "ban sau" cho cac y tuong ro rang tot hon neu co the lam ngay trong pham vi code hien tai.

Nhung rang buoc cu khong con bat buoc:

- Khong con bi gioi han boi pham vi 3 mon, 3 chuong, 3 NPC hay vanilla one-file neu dieu do lam game kem hon.
- Khong con bat buoc giu Bun doc mung la trung tam moi chuong neu dieu do gay lap lai.
- Khong con bat buoc giu gameplay don gian neu viec them he thong moi lam game hap dan hon.
- Khong con uu tien "ship nhanh" hon chat luong tong the.

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

- Can bang lai kinh te 15 chuong de game cong bang, co tien trien va khong phat nguoi choi qua muc.
- Sua logic bo cha chay, huy mon va trang thai bep de gameplay bot uc che.
- Save/load that su bang localStorage hoac mot co che local tuong duong.
- Khach hang da dang hon, co khach Tay, khach Viet, khach bi an va cau chuyen phu.
- Giam lap Cu ong va Bun doc mung; bien Cu ong thanh yeu to cam xuc, khong phai mot noi dung bi lap.
- Mo rong mon an, nuoc uong, nguyen lieu va combo neu giup game phong phu hon.
- Nang cap nhieu cap, tao duong phat trien dai han.
- Moi nhom chuong phai co chu de, su kien hoac co che rieng de khong lap lai.
- Uu tien bat ky thay doi nao lam game hay hon, ke ca khi vuot ngoai pham vi ban dau.

### Nen co

- Combo mon + nuoc.
- Nhiem vu phu cua khach bi an.
- Su kien theo chuong: mua, le hoi, doan du khach, ngay nong, ngay mat dien.
- Endless Mode co ban.
- UI/UX tot hon neu giao dien hien tai can tro trai nghiem.
- Tach code thanh nhieu file neu index.html qua kho bao tri.

### Co the lam neu giup game tot hon

Tinh than: muc nay khong phai backlog xa. Neu lam duoc trong luc implement v1.10 ma khong gay vo game, hay lam luon.

- Challenge Mode day du.
- Festival Mode rieng.
- Mini game phuc tap.
- Achievement system.
- Gallery ky uc.
- He thong thanh pho/vung mien rong hon.
- He thong danh tieng cua quan.
- He thong nguyen lieu va ton kho.
- He thong nhan vien/phu bep neu duoc lam gon va vui.
- He thong do uong co gameplay rieng, khong chi la item cong tien.
- He thong tinh cach khach hang: moi khach co cau noi, thoi quen, cam xuc, ky niem, phan ung khi vui/buon.
- He thong tin don khu pho: khach hai long se ke ban be den, khach that vong lam giam danh tieng.
- He thong su kien nho bat ngo trong ca choi: het da, thieu rau, mua lon, khach quen ghe tham, food blogger quay clip.
- He thong so tay quan: ghi lai mon da mo khoa, khach da gap, cau chuyen da mo.

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

### 6.0 Muc tieu moi cho customer

Khach hien tai bi nhat vi chu yeu la mot avatar + mon goi + thanh kien nhan. v1.10 can bien khach thanh nguoi co tinh cach, thoi quen va cau chuyen nho.

Moi khach quan trong nen co:

- Ten rieng.
- Vai tro trong doi song Viet Nam: sinh vien, xe om, co giao, viet kieu, food blogger, nguoi lao dong, khach du lich.
- Mon thich va mon ghe.
- Kieu goi mon: noi thang, noi vong, goi combo, doi it cay, doi them rau, doi khong mam tom.
- 2-4 cau thoai ngan theo trang thai: moi vao, sap het kien nhan, duoc phuc vu dung, bi phuc vu sai.
- Mot "hook" ca nhan: nho nha, di lam muon, an mon cu cua me, quay review, tim ky uc cu, tiec tien, an rat kho tinh.
- Phan thuong/anh huong neu phuc vu tot: tip, tang danh tieng, mo khoa cau chuyen, ke them khach moi.

Khach khong nen chi khac nhau bang emoji. Moi nhom khach phai tao cam giac khac khi choi:

- Khach van phong: it kien nhan, thuong goi combo nhanh.
- Sinh vien: it tien, tip thap nhung hay quay lai neu duoc doi xu tot.
- Nguoi lao dong: thich phan nhieu, mon nong, kien nhan vua.
- Khach du lich: tra cao hon, hay yeu cau it cay/khong mam tom.
- Khach quen: co cau chuyen tang dan qua nhieu lan gap.
- Khach bi an: it xuat hien nhung moi lan gap phai dang nho.

### 6.1 Khach Tay moi

Them danh sach khach Tay co ten va khau vi:

- Anna: thich mon it cay, uu tien pho/banh mi.
- Marco: thich mon nuong, hay goi bun cha.
- Sophie: thich mon thanh, hay goi goi cuon/tra da.
- David: thich combo lon, kien nhan trung binh.
- Kenji: thich mon nong, hay goi bun bo Hue nhung yeu cau it cay.

Khach Tay khong nen chi la "John" lap lai.

Them reaction rieng:

- Anna: hay hoi "mon nay co cay khong?", neu dung y se tang review tot.
- Marco: thich mon nuong, neu cha perfect se tip cao.
- Sophie: thich do uong mat va mon thanh, hop voi goi cuon/tra tac.
- David: goi combo lon, neu cham se mat kien nhan rat nhanh.
- Kenji: thich vi dam nhung khong an cay qua, phu hop bun bo Hue it sa te.

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

Them chieu sau cho khach Viet:

- Co ban hoa: den som, thich tra da va banh mi, neu phuc vu tot se tang khach buoi sang.
- Chu xe om: goi nhanh, kien nhan thap, tip nho nhung xuat hien thuong.
- Bac cong nhan: thich com tam/bun bo, phan nhieu, neu sai mon tru danh tieng it vi de tinh.
- Sinh vien xa nha: thich mon re, co chuoi cau chuyen nho ve nho nha.
- Nhan vien van phong: goi combo, tra cao hon, rat mat kien nhan gio trua.
- Ba cu di cho: thich vi truyen thong, neu dung mon se mo ky uc ve Cu Ong.
- Co giao ve huu: cham rai, kien nhan cao, co the cho loi khuyen/cau chuyen.
- Anh shipper: goi mang di, can toc do, neu nhanh se tang combo delivery.

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

Nuoc uong khong nen chi la "them tien". Can co cam giac rieng va anh huong gameplay.

Nhom nuoc uong de xuat:

- Tra da: re, nhanh, di kem hau het mon; tang nhe kien nhan khach Viet.
- Tra tac: re-vua, hop ngay nong; combo tot voi banh mi, bun thit nuong.
- Nuoc mia: ban chay ngay nong/le hoi; loi nhuan tot nhung mat thoi gian ep.
- Ca phe sua da: dat hon, hop khach van phong/khach Tay; neu pha dung tang tip.
- Bac xiu: bien the ca phe nhe hon, hop khach tre/khach it uong dang.
- Sua dau nanh: hop buoi sang, khach lon tuoi, combo voi banh mi.
- Nuoc chanh: giai nhiet, giam tac dong su kien ngay nong.
- Rau ma: thuc uong dac san via he, hop khach thich do mat.
- Sam dua: mo khoa ve sau, ban tot trong le hoi/chuong mien Nam.
- Che dau xanh: gan giua mon trang mieng va do uong, co the la combo dac biet.

Co che pha nuoc:

- Do uong nhanh: tra da, sua dau nanh - bam la xong, tien it.
- Do uong can canh ti le: ca phe sua da, bac xiu - can chon ty le sua/ca phe/da de dat "ngon".
- Do uong can thoi gian may: nuoc mia - bat may ep, cho tien trinh, co nguy co bi cham.
- Do uong theo su kien: nuoc chanh/rau ma/tra tac ban manh ngay nong.

Trang thai do uong:

- normal: dung duoc.
- ngon: tang tip/combo bonus.
- nhat: khach van nhan nhung mat bonus.
- qua ngot/qua dang: khach khong vui, tru nhe danh tieng.

Combo mon + nuoc nen co ban sac:

- Banh mi + ca phe sua da.
- Bun cha + tra da.
- Bun bo Hue + nuoc chanh/tra tac.
- Com tam + tra da/nuoc mia.
- Goi cuon + rau ma.
- Bun dau mam tom + tra tac.
- Hu tieu + sua dau nanh buoi sang.

Mini game do uong uu tien:

- Pha ca phe sua da: canh 3 thanh ca phe/sua/da.
- Ep nuoc mia: giu may trong vung xanh, qua lau se ket may.
- Pha tra tac: can bang chua/ngot/da.

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
2. Them 6-10 nuoc uong neu co the lam gon, it nhat 3 nuoc phai co gameplay/bonus rieng.
3. Them combo mon + nuoc co ban sac Viet, khong chi cong tien thuan tuy.
4. Them reaction khach theo do uong dung/sai/qua cham.
5. Cap nhat UI don hang de hien mon chinh, nuoc, yeu cau dac biet.
6. Cap nhat scoring, tip, danh tieng va reward.

### Sprint 5 - Nang cap va su kien chuong

1. Doi upgrade thanh multi-level.
2. Them 5 loai nang cap dau tien.
3. Them event theo chuong.
4. Cap nhat 15 chuong de moi cum co chu de rieng.

### Sprint 6 - Che do moi

1. Them Endless Mode co ban.
2. Them 2 challenge nho.
3. Them 1 mini game uu tien: nuong cha hoac pha nuoc mam.
4. Neu lam duoc them ma khong vo game, lam tiep Festival Mode, Achievement, Gallery ky uc.
5. Neu co the, them mini game do uong: pha ca phe sua da hoac ep nuoc mia.

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
