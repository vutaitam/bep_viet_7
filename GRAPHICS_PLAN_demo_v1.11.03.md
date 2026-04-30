# Ke Hoach Do Hoa - Demo v1.11.03

> Ngay lap: 2026-04-30  
> Ten ban theo yeu cau: **Demo v1.11.03**  
> Pham vi: ke hoach cap nhat do hoa va dot tich hop dau tien cho portrait NPC.

Tai lieu nay chot huong do hoa moi cho Bep Viet: Tiem Bun So 7 sau khi ban thay emoji bang SVG runtime bi go bo vi gay loi hinh qua lon. Ban nay uu tien art co kiem soat kich thuoc, tai nguyen that trong `assets/`, va tich hop tung phan nho de khong pha layout.

## 0. Trang Thai Thuc Hien

Da hoan thanh dot dau:
- Tao 3 portrait WebP: `assets/portraits/bac-tam.webp`, `assets/portraits/co-lan.webp`, `assets/portraits/john.webp`.
- Gan portrait vao NPC data cho Bac Tam, Co Lan, John.
- Render portrait trong customer card va gallery, co fallback ve emoji neu anh loi.
- Kiem tra bang Chromium headless:
  - Desktop customer portrait: 68 x 68 px; card: 168 x 244 px.
  - Mobile customer portrait: 60 x 60 px; card: 350 x 228 px.
  - Gallery portrait: 88 x 88 px.

Ket luan: kich thuoc phu hop, khong lap lai loi anh qua to cua ban thay emoji hang loat.

## 1. Hoi Dong 5 Chuyen Gia

### 1. Hoa si minh hoa van hoa Viet

Goc nhin: ban sac Viet phai den tu vat lieu, boi canh va con nguoi, khong chi la them den long hay mau do-vang.

De xuat:
- Giu chat "tranh minh hoa am ap" lay cam hung tu giay do, Dong Ho va quan an pho co.
- Dung duong vien ro, mat nhan vat doc duoc o kich thuoc nho.
- Moi vung mien co dau hieu rieng: Ha Noi tram am, Hoi An vang den, Sai Gon sang va dong.

Canh bao:
- Tranh qua nhieu chi tiet se bi vo tren card khach hang.
- Dung anh nen qua toi se lam UI kho doc.

### 2. Game UI/UX artist

Goc nhin: do hoa phai lam game de choi hon, khong chi dep hon.

De xuat:
- Uu tien visual hierarchy: khach, mon goi, timer, nut phuc vu phai doc nhanh trong 1 giay.
- Portrait NPC chi nen vao card khach, gallery, cutscene va feedback; khong thay icon nho trong text dong.
- Tao khung portrait co kich thuoc co dinh de khong day layout.

Canh bao:
- Khong dung runtime thay tat ca emoji bang anh. Loi ban art icon cu cho thay cach nay kho kiem soat.
- Moi asset phai co `width`, `height`, `object-fit` va fallback text.

### 3. Character concept artist

Goc nhin: NPC can nhan dien bang silhouette, trang phuc, vat dung cam tay va bieu cam.

De xuat:
- Lam 6 portrait dau tien: Bac Tam, Co Lan, John, Linh Review, Chu Phuc, Khach im lang.
- Moi portrait co 3 trang thai can ban neu can mo rong: neutral, happy, angry.
- Boss can co bo cuc rieng, khac khach thuong: Tuấn nghiem, Khang tu tin, Iron Chef trang trong.

Canh bao:
- Neu lam du 21 NPC ngay lap tuc se rat de lech style.
- Nen co 1 style sheet portrait truoc khi san xuat hang loat.

### 4. Technical artist / web performance

Goc nhin: GitHub Pages va vanilla JS can asset nhe, ro, de cache.

De xuat:
- Dung file asset rieng trong `assets/portraits/`, `assets/food/`, `assets/ui/`.
- Uu tien SVG cho UI decoration don gian, PNG/WebP cho portrait/phong nen.
- Target file size: portrait < 250 KB, background < 900 KB, icon < 30 KB.
- Khong nhung anh lon bang data URI trong CSS/JS tru khi rat nho.

Canh bao:
- Anh lon khong co responsive constraints se lap lai loi "qua to".
- Can test mobile 360px va desktop 1366px truoc khi ship.

### 5. Brand / marketing visual designer

Goc nhin: hinh anh phai dung duoc cho game, screenshot, social post va GitHub README.

De xuat:
- Tao mot key visual menu: bat bun, doi dua, bang hieu "Bep Viet", ngo pho co.
- Mau chu dao khong chi do-vang; them xanh la rau thom, nau go, kem giay do, xanh men gom.
- Mot so man hinh can co diem chup anh dep: menu, gallery, festival, end screen 3 sao.

Canh bao:
- Neu UI qua mot mau, screenshot se kho noi bat.
- Khong nen bien game thanh landing page; man dau van phai la menu choi that.

## 2. Quyet Dinh Chung

1. **Ten ban do hoa moi la Demo v1.11.03.**
2. **Khong hoi sinh runtime thay emoji hang loat va khong thay tat ca emoji bang anh.**
3. **Lam art theo asset co dinh**, chen vao dung vi tri co kich thuoc rang buoc.
4. **Uu tien portrait NPC truoc**, sau do moi den food icon, background va UI decoration.
5. **Moi dot tich hop phai co test layout desktop/mobile** de tranh loi anh qua lon.

## 3. Pham Vi Demo v1.11.03

### Bat buoc

- Style guide 1 trang cho do hoa Bep Viet.
- 6 portrait NPC uu tien:
  - Bac Tam.
  - Co Lan.
  - John.
  - Linh Review.
  - Chu Phuc.
  - Khach im lang.
- 1 key visual menu dung cho screenshot marketing.
- 3 background theo chuong:
  - Ngo pho co Ha Noi.
  - Pho den long Hoi An.
  - Hem quan an Sai Gon.
- CSS khung portrait co kich thuoc co dinh cho card/gallery/cutscene.
- Tai lieu QA asset va quy tac file size.

### Khong lam trong Demo v1.11.03

- Khong thay toan bo emoji mon an/nguyen lieu.
- Khong them animation nang hoac canvas moi.
- Khong doi gameplay, balance, save key.
- Khong doi version runtime hien tai neu chi moi lap plan.
- Khong dua asset vao game khi chua co kich thuoc va fallback.

## 4. Huong My Thuat

### Style lock

- Vietnamese warm illustration.
- Soft watercolor wash, grain nhe nhu giay do.
- Clean shape, ro mat, ro silhouette.
- Khong anime, khong pixel art, khong 3D, khong photorealistic.
- UI can tram, de doc, uu tien gameplay.

### Bang mau

- Nen am: `#1a0a04`, `#2c1810`, `#FFF8E1`.
- Nhan dien Bep Viet: `#C62828`, `#FFD700`, `#7B4F2E`.
- Mau phu can them: xanh rau thom `#2E7D32`, xanh men gom `#1565C0`, cam Hoi An `#F9A825`.
- Tranh de giao dien bi mot mau do-vang lien tuc.

### Shape language

- Portrait: dau/vai ro, mat doc duoc, vat dung ca nhan lon vua du.
- Food: hinh khoi don gian, mau thuc an that, khong bong 3D.
- Background: chi tiet du de nhan biet dia diem, nhung khong tranh voi UI.

## 5. Cau Truc Asset De Xuat

```text
assets/
  portraits/
    bac-tam-neutral.webp
    co-lan-neutral.webp
    john-neutral.webp
    linh-review-neutral.webp
    chu-phuc-neutral.webp
    khach-im-lang-neutral.webp
  backgrounds/
    chapter-hanoi.webp
    chapter-hoian.webp
    chapter-saigon.webp
  ui/
    menu-key-visual.webp
    frame-portrait.svg
  food/
    bun-doc-mung.webp
    bun-cha.webp
    pho-bo.webp
```

Quy tac ten file: lowercase, khong dau, dung dau gach ngang.

## 6. Thong So Ky Thuat

### Portrait NPC

- Source generate: 1024 x 1024.
- Export game: 512 x 512 WebP hoac PNG.
- Display card: 56-72 px.
- Display gallery: 96-128 px.
- Display cutscene/feedback: toi da 280 px.
- CSS bat buoc: `width`, `height`, `aspect-ratio:1`, `object-fit:cover` hoac `contain`.

### Background

- Source generate: 1920 x 1080.
- Export game: 1600 x 900 WebP.
- File size target: < 900 KB.
- Khong dat text trong background.
- Phai co safe area de UI phu len ma van doc duoc.

### UI decoration

- SVG nho, co `viewBox` ro.
- Khong dung SVG inline qua lon trong HTML.
- Khong replace text emoji bang data URI hang loat.

## 7. Ke Hoach Trien Khai

### Sprint 0 - Audit va style sheet

Muc tieu: chot 1 trang style guide va danh sach asset.

Viec lam:
- Kiem tra kich thuoc hien tai cua menu, customer card, gallery, cutscene.
- Tao class CSS portrait chuan: `.npc-portrait`, `.customer-portrait`, `.gallery-portrait`.
- Chot prompt base tu `PROMPTS_ART_v1.12.md`, rut gon thanh style lock cho Demo v1.11.03.

Definition of Done:
- Co style guide.
- Co CSS sizing nhung chua can gan asset that.
- Khong thay doi gameplay.

### Sprint 1 - 6 portrait NPC uu tien

Muc tieu: thay emoji nhan vat o nhung vi tri co gia tri nhat bang portrait co kiem soat.

Viec lam:
- Generate/chon 6 portrait.
- Toi uu file.
- Them mapping `portrait` vao NPC data cho 6 nhan vat.
- Render portrait trong customer card va gallery neu co file; fallback ve emoji neu khong co.

Definition of Done:
- 6 NPC co portrait hien dung kich thuoc.
- Card khach khong doi chieu rong/chieu cao khi anh load.
- Mobile 360px khong vo layout.

### Sprint 2 - Key visual menu va background chuong

Muc tieu: lam menu va chapter co ban sac hon nhung khong che UI.

Viec lam:
- Tao `menu-key-visual.webp`.
- Tao 3 background chuong.
- Them overlay gradient de text doc ro.
- Chi apply background o menu/story/chapter banner, khong chen vao gameplay dense area neu gay roi.

Definition of Done:
- Menu dep hon trong screenshot.
- Chu va nut van doc ro.
- Load lan dau khong cham ro ret.

### Sprint 3 - Food icon co chon loc

Muc tieu: tang chat mon an ma khong lap lai loi icon qua lon.

Viec lam:
- Lam icon cho 5 mon quan trong: bun doc mung, bun cha, pho bo, banh mi, com tam.
- Chi hien trong recipe book/gallery, chua thay ingredient grid.
- Moi icon co container 32-40 px.

Definition of Done:
- Food icon khong lam doi height recipe row qua nhieu.
- Neu asset loi, UI fallback ve emoji/text.

### Sprint 4 - Polish festival va end screen

Muc tieu: tao khoanh khac "thang/ngay hoi" de screenshot dep.

Viec lam:
- Festival banner art nho.
- End screen frame/medal decoration.
- Confetti giu nhe, khong them animation nang.

Definition of Done:
- Festival co ban sac rieng.
- End screen 3 sao chup anh dep hon.
- Khong anh huong gameplay loop.

## 8. Checklist QA Bat Buoc

- Desktop 1366 x 768: menu, game, gallery, festival khong vo layout.
- Mobile 390 x 844: card khach, nut, timer, menu khong bi chen.
- Landscape warning van hien dung.
- Tat network/cache lan dau: khong thay khung anh khong co kich thuoc.
- Anh missing file: fallback emoji/text hoat dong.
- File size tong them vao dot dau < 3 MB.
- `node --check` pass cho 4 file JS neu co sua code.
- Khong con runtime thay emoji hang loat trong code.

## 9. Thu Tu Uu Tien Neu Thieu Thoi Gian

1. Style guide + CSS sizing.
2. 3 portrait chinh: Bac Tam, Co Lan, John.
3. Gallery portrait fallback.
4. Menu key visual.
5. 3 portrait mystery.
6. Background chuong.
7. Food icon.
8. Festival/end screen polish.

## 10. Rủi Ro Va Cach Xu Ly

- Rui ro: anh qua lon trong UI.  
  Xu ly: container co dinh, `max-width`, `aspect-ratio`, `object-fit`, test mobile truoc khi push.

- Rui ro: lech style giua asset.  
  Xu ly: generate theo style lock, review batch 3 anh dau truoc khi lam tiep.

- Rui ro: game nang.  
  Xu ly: WebP, nen < 900 KB, portrait < 250 KB, lazy load neu can.

- Rui ro: mat ban sac gameplay vi qua nhieu trang tri.  
  Xu ly: UI/UX artist co quyen veto asset lam giam doc nhanh.

## 11. Ket Luan Hoi Dong

Demo v1.11.03 nen la ban **do hoa co kiem soat**, khong phai ban thay icon hang loat. Diem manh nhat cua Bep Viet la cau chuyen, khach quen va mon Viet; do hoa phai lam cac yeu to do ro hon trong khi giu game nhe, doc nhanh va khong vo layout.

Huong trien khai tot nhat: bat dau bang portrait NPC co kich thuoc co dinh, sau do moi mo rong sang menu/background/food icon.
