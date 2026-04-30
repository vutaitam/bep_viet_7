# 🎨 Prompt Pack — Đồ họa Bếp Việt v1.12

> **Trạng thái 2026-04-30**: bản code hiện tại là **Demo v1.11.03 (NPC Portraits)**. Đã có 3 SVG portrait Cụ Ông và 3 portrait WebP cho Bác Tâm, Cô Lan, John; tài liệu này dùng cho vòng asset tiếp theo, đặc biệt portrait NPC và background/UI art v1.12.

> Tài liệu này chứa prompt chi tiết để dán vào **Gemini (Imagen 3/4)**, **Midjourney**, hoặc bất kỳ image generator nào tương tự. Tổ chức theo độ ưu tiên: Sprint A (essential, làm trước) → Sprint B (nice-to-have, làm sau).
>
> **Cách dùng**: copy prompt từng mục, paste vào Gemini, generate 4 variation, chọn 1, refine bằng follow-up prompt nếu cần. Lưu file vào folder `assets/` của repo.

## 0. Master Art Direction (đọc trước, áp dụng cho mọi prompt)

```text
ART STYLE LOCK — áp dụng cho mọi tranh:
- Style: flat 2D hand-drawn Vietnamese illustration, with subtle ink lines
  and watercolor washes. Inspired by Đông Hồ folk art but with modern
  cleaner geometry. NOT anime, NOT pixel art, NOT photorealistic, NOT 3D.
- Color palette (must include at least 2 of these):
  · Vietnamese red #C62828 (slightly desaturated to #B23A3A for warmth)
  · Imperial gold #FFD700 (softened to #E6BE3C)
  · Wood brown #7B4F2E
  · Cream paper #FFF8E1
  · Pho broth steam grey #C7BBA5
- Avoid: harsh saturated colors, neon, gradient overload,
  Western fast-food aesthetic, Chinese imperial style (must feel
  Vietnamese specifically — humble, warm, neighborhood, ngõ phố cổ).
- Vietnamese motifs to weave in: đèn lồng (lanterns), lá tre
  (bamboo leaves), hoa sen (lotus), bát gốm Bát Tràng (Bát Tràng
  ceramic bowl), đôi đũa (chopsticks), nón lá (conical hat),
  vải thổ cẩm pattern (ethnic woven fabric), giấy dó texture
  (Vietnamese mulberry paper).
- Era anchor: contemporary Vietnam 2020s but with old-quarter
  nostalgia, NOT colonial-era, NOT futuristic.
- Lighting: soft warm golden hour or lantern-lit evening.
  Avoid harsh studio lighting.
```

Khi prompt một mục cụ thể, hãy **paste khối ART STYLE LOCK ở trên trước**, rồi mới đến nội dung subject. Hoặc dùng "negative prompt" cho generator có hỗ trợ.

---

## 0.5 ⚠️ Bài học từ lần gen đầu — RULE BỔ SUNG cho PORTRAIT in-game

Sau khi gen thử 3 portrait (Bác Tâm, Cụ Ông trẻ, Linh Review) với prompt gốc, phát hiện:

| Vấn đề | Nguyên nhân | Fix |
|---|---|---|
| Background quá chi tiết (bamboo awning, kệ bát, hoa sen lớn) | Prompt gốc mô tả setting rich | Đổi background → cream paper trống, max 1 motif nhỏ corner |
| Nhân vật chỉ chiếm 50% frame | Background cạnh tranh | Yêu cầu character chiếm 70-80% canvas |
| Recipe book có chữ Vietnamese giả (gibberish) | Gemini hallucinate text | Cấm "readable text" / "writing" trong prompt; nếu cần book/phone screen → "abstract shapes only, no text" |
| Watermark Gemini ✨ ở góc | Imagen luôn có | Crop tay sau khi gen (10s) |
| Background không transparent thật | Gemini không reliable | Workflow đúng: gen với cream BG → dùng [remove.bg](https://remove.bg) cắt nền sau |

### 🔁 ART STYLE LOCK PORTRAIT MODE (dùng riêng cho 12 portrait dùng trong customer card)

Khi cần portrait dùng trong UI customer card (96-256px), **paste khối này thay cho ART STYLE LOCK gốc**:

```text
ART STYLE LOCK — PORTRAIT MODE (for in-game character cards):
- Style: flat 2D hand-drawn Vietnamese illustration with clean ink
  outlines and soft watercolor washes. Inspired by Đông Hồ folk art
  with modern minimal geometry. NOT anime, NOT pixel art, NOT
  photorealistic, NOT 3D, NOT manga.
- Color palette: Vietnamese red #C62828, imperial gold #FFD700,
  wood brown #7B4F2E, cream paper #FFF8E1, soft sage green for
  bamboo. Slightly desaturated, warm tone overall.
- BACKGROUND RULE FOR PORTRAITS: keep background extremely simple
  — flat warm cream paper #FFF8E1 or very soft watercolor wash.
  No detailed scenery, no furniture, no recipe books, no shelves.
  At most ONE small motif accent in a corner (e.g., a single
  bamboo leaf top-right, or a small lantern top-left, faded 60%
  opacity). Character must occupy 70-80% of the frame.
- NO READABLE TEXT anywhere in the image (no signs, no books with
  legible writing, no phone screens with text). If a book or
  phone is shown, render only abstract lines/shapes inside.
- Vietnamese motifs allowed as small accents (lantern, bamboo
  leaf, lotus, conical hat) but secondary to subject.
- Era: contemporary Vietnam 2020s with old-quarter nostalgia.
- Lighting: soft warm even illumination, no harsh shadows, no
  studio backlight.
- Avoid: anime eyes, manga style, K-pop polished face, generic
  Asian elder/woman caricature, Chinese imperial style, neon,
  saturated rainbow colors, Western fashion magazine pose.
```

### 🛠 Workflow xử lý sau gen

1. **Gen 4 variation** trong Gemini (default)
2. **Pick 1** ưng nhất
3. **Crop watermark Gemini ✨** (góc phải dưới) bằng Paint/Photoshop/Pixelmator
4. **Remove background** bằng [remove.bg](https://remove.bg) (free 1 ảnh/ngày, chất lượng tốt) hoặc [Pixelcut](https://pixelcut.ai) (free unlimited, mobile app)
5. **Resize** xuống 256×256 hoặc 512×512 PNG (cho game card 96-128px)
6. **Lưu** vào `assets/portraits/<character-name>.png`

---

## A.0 PORTRAIT REVISED — 3 prompt đã refined sau lần gen đầu

Đây là 3 prompt đã được tinh chỉnh, **dùng thay** cho prompt A.1.1 / A.2.1 / A.3.1 gốc khi gen portrait dùng trong customer card. Mỗi prompt nhấn:

- Background TRỐNG (cream paper) + max 1 motif corner
- Character 70-80% frame
- Cấm text readable
- Tuổi/clothing/expression cụ thể hơn

### A.0.1 — Bác Tâm (revised)

```text
[ART STYLE LOCK PORTRAIT MODE]

Subject: A Vietnamese elderly man, exactly 68 years old, with a
slightly stooped shoulder and a kind quiet face. Salt-and-pepper
hair, slightly thinning on top, neatly combed. Soft crow's feet,
gentle age spots on cheekbones. Eyes warm, patient, looking
directly toward the viewer with a small almost-smile.

Clothing: a traditional Vietnamese cotton pyjama shirt with thin
vertical grey-and-cream stripes, slightly loose fit, long sleeves
rolled to mid-forearm, top button open, breast pocket. Simple
dark loose trousers (only top portion visible).

In his hands, held at chest level: a small worn brown leather
wallet, edges fraying, held gently with both hands as if about
to pay. Hands have visible blue veins and a slight tremor
suggested by line work.

Composition: 3/4 portrait, character framed from chest to top of
head, occupying 75% of canvas height, centered slightly right.
Soft warm even lighting, no harsh shadows.

Background: flat cream paper #FFF8E1, completely empty except a
single small red Vietnamese lantern in the upper-left corner at
30% opacity (decorative accent only, not detailed). NO awning,
NO shop, NO furniture, NO bamboo, NO ceramic bowls.

Output: 1024×1024 PNG, ready to be cut out via remove.bg.

Avoid: photorealism, anime, dress shirt, sunglasses, smartphone,
detailed shop background, awning, shelves with bowls, K-pop look,
overly cheerful smile, military uniform, full-length suit.
```

### A.0.2 — Cụ Ông trẻ (revised)

```text
[ART STYLE LOCK PORTRAIT MODE]

Subject: A Vietnamese man, exactly 45 years old, owner of a small
neighborhood noodle shop in 1990s Hanoi. Visibly mature face: slight
crow's feet around eyes, faint forehead lines, lean cheeks, light
beard stubble (3-day growth), tan weathered skin from decades over
a hot stove. Black hair with two strands of grey at temples,
slightly disheveled. Honest hopeful eyes, mouth in a small genuine
half-smile, NOT a beaming grin.

Clothing: a faded white cotton short-sleeve button-up shirt, top
button open, slightly rumpled. Over it, a cream cotton apron with
faint rice-flour stains and one small darker brown stain. Sleeves
showing forearms with subtle vein detail.

Holding in front of him at chest level with both hands: a steaming
ceramic Bát Tràng bowl (white with classic blue lotus motif on rim)
of bún dọc mùng noodle soup. Visible inside the bowl: green dọc
mùng (taro stem) leaves, red tomato slice, white noodles, two pork
ribs. Three soft white steam swirls rise from the bowl.

Composition: 3/4 portrait, character framed from waist to top of
head, occupying 80% of canvas, centered. Soft warm afternoon
lighting.

Background: flat cream paper #FFF8E1, completely empty except a
single tiny red lantern in upper-left at 25% opacity (suggestion
only). ABSOLUTELY NO recipe book visible. NO shelves. NO altar.
NO bamboo leaves. NO lotus flowers visible. Just empty cream
backdrop.

Output: 1024×1024 PNG, isolated character ready for removal of
background.

Avoid: photorealism, anime, K-pop perfect face, character looking
under 35 years old, recipe book or any book with text, lotus
visible in scene, detailed kitchen interior, shelves with bowls,
incense altar, K-drama style smile, formal portrait pose.
```

### A.0.3 — Linh Review (revised)

```text
[ART STYLE LOCK PORTRAIT MODE]

Subject: A Vietnamese woman, exactly 26 years old, food blogger
and TikTok content creator. Trendy contemporary Hanoi millennial
look. Long straight black hair to mid-back with subtle warm brown
highlights, parted center. Round oversized tortoiseshell glasses
(prominent feature). Subtle natural makeup, gentle warm smile
toward camera. Small gold hoop earrings. Two thin gold layered
necklaces.

Clothing: an oversized soft pastel-pink cropped knit sweater,
sleeves slightly pushed up. High-waist light-wash denim wide-leg
jeans visible. Slung across body: a small woven raffia (NOT
rainbow stripe) bag in natural beige with a single embroidered
red Vietnamese lotus motif.

Action: holding her smartphone vertically up at chest level with
both hands, framing a shot of a Vietnamese food bowl off-screen
(the food is OUTSIDE the frame, viewer's POV is the food). Phone
screen shows ABSTRACT colored shapes only (no text, no readable
content) — small swirls of red and brown suggesting a Vietnamese
noodle soup viewed from above, but stylized abstract not literal.

Composition: 3/4 portrait, framed from waist to top of head,
character occupies 75% of canvas, centered slightly left. Soft
warm even lighting.

Background: flat cream paper #FFF8E1 background, otherwise EMPTY.
NO ring light. NO lotus flowers visible. NO bamboo plants. NO
food bowl visible. NO lantern. Just clean cream backdrop.

Output: 1024×1024 PNG, character isolated for easy bg removal.

Avoid: K-pop idol aesthetic, plasticky CGI face, anime, generic
Vietnamese girl stereotype, rainbow stripe bag, ring light visible
in frame, food visible in frame, busy background with multiple
objects, phone screen showing legible text, dim sum or pizza shape
on phone (must be Vietnamese soup if anything), Western fashion
magazine pose.
```

### 📝 Pattern để revise các portrait còn lại

Dùng cùng cấu trúc cho 9 portrait còn lại (Cô Lan, John, Chú Phúc, Khách im lặng, Tuấn, Khang, Iron Chef, Cụ Ông già, Cụ Ông spirit):

1. Bắt đầu với `[ART STYLE LOCK PORTRAIT MODE]`
2. **Subject**: tuổi cụ thể, vóc dáng, biểu cảm cụ thể (KHÔNG dùng tính từ chung "kind", "elegant" — phải có chi tiết visual: "crow's feet", "lean cheeks", "small almost-smile")
3. **Clothing**: liệt kê từng item cụ thể, có chỉ dấu Việt Nam (motif, vải, kiểu áo Vietnamese specific)
4. **Action/Pose**: hành động cụ thể với props (đang cầm gì, ở vị trí nào)
5. **Composition**: ghi 3/4 portrait, character 70-80% frame, vị trí trong canvas
6. **Background**: lặp lại RULE — flat cream + max 1 motif accent corner. Liệt kê các thứ KHÔNG được có
7. **Output**: 1024×1024 PNG ready for bg removal
8. **Avoid**: list dài các thứ tránh (anime, K-pop, photorealism, busy BG, text in image, etc.)

Đặc biệt với Cụ Ông spirit (A.1.3) và Iron Chef (A.4.3): những nhân vật này có "glow" hoặc "ethereal" — yêu cầu glow vẫn đơn giản, không hào quang Hollywood.

---

## SPRINT A — Essential (làm trước, ~10 portrait + 5 cutscene + 3 BG + logo)

### A.1 Portrait — Cụ Ông (3 trạng thái)

> ⚠️ **Note**: Các prompt A.1.1 / A.2.1 / A.3.1 dưới đây giữ background chi tiết — phù hợp cho **cutscene panel rộng** hoặc **feedback box** lớn. Để dùng portrait trong **customer card UI** (96-256px), dùng prompt revised ở mục **A.0** ở trên (background trống cream + character 75% frame).

**Use case**: Cutscene chính + feedback box cuối ngày. Đây là nhân vật cảm xúc số 1 của game.

**Output**: 3 PNG vuông 1024×1024, nền transparent hoặc trong suốt mềm.

#### A.1.1 — Cụ Ông trẻ (40s, đang nấu)

```text
[ART STYLE LOCK]

Subject: A Vietnamese man in his 40s standing in a small noodle shop
in 1990s Hanoi old quarter. Wearing a faded white short-sleeved
button-up shirt and dark trousers, an apron with rice-flour stains.
Smiling warmly with crow's feet around the eyes. Holding a steaming
bowl of bún dọc mùng (Vietnamese sour pork rib noodle soup) with
floating green dọc mùng leaves and red tomato slices visible. Behind
him: wooden shelves with ceramic Bát Tràng bowls, a hand-written
recipe book in Vietnamese, a small altar with incense.

Composition: 3/4 portrait from chest up, character looking softly
toward camera, slight tilt to feel candid. Warm afternoon golden
light from screen-left.

Mood: warm, hopeful, the start of his journey as a noodle shop
owner. He is the player character's grandfather.

Output: 1024×1024 PNG, transparent background OR very soft cream
paper texture background.

Avoid: anime style, photorealism, sad expression, modern clothing,
Chinese imperial aesthetic, dark lighting.
```

#### A.1.2 — Cụ Ông già (70s, di nguyện)

```text
[ART STYLE LOCK]

Subject: The same Vietnamese man now in his 70s, kindly weathered
face with white hair and beard, holding the same recipe book—now
worn, dog-eared, with bookmarks. Wearing a pale beige cardigan and
faded grey trousers. Sitting on a low wooden stool in front of his
old noodle shop in Hanoi old quarter. Eyes half-closed in
contentment, a small sad smile. The recipe book is held to his
chest as if precious.

Composition: 3/4 portrait, character slightly turned, looking
into the distance. Lantern-lit evening light, golden warm.

Mood: bittersweet, wisdom, legacy, end-of-life peace. This is the
image used in the "feedback box" speech bubble after each level.

Output: 1024×1024 PNG, transparent background.

Avoid: dramatic crying, modern designer clothing, anime style,
Photorealism, white-haired stereotype caricature.
```

#### A.1.3 — Cụ Ông spirit / di nguyện (ghostly overlook)

```text
[ART STYLE LOCK]

Subject: The elderly Vietnamese grandfather from before, now
ethereal and translucent, floating gently above his old noodle
shop in Hanoi old quarter. Soft golden light radiates around him.
He looks down with proud, watching, encouraging eyes — both hands
clasped near his chest. Wearing the same cardigan but with hints
of mist trailing from his sleeves. Below: a tiny silhouette of
his grandchild (the player) tending to the noodle pot, unaware
he is watching.

Composition: vertical 9:16 OR square, character centered slightly
upper, scene below. Whole image bathed in warm twilight gold.

Mood: ending-cutscene level emotional weight. Cụ Ông has passed
but watches over his grandchild's restaurant.

Output: 1024×1024 PNG, semi-transparent edges fading into
background.

Avoid: scary ghost imagery, halloween spirit, generic Western
guardian-angel halo, Chinese folk religion red robes.
```

---

### A.2 Portrait — 3 khách quen (Bác Tâm, Cô Lan, John)

#### A.2.1 — Bác Tâm

```text
[ART STYLE LOCK]

Subject: A Vietnamese man in his late 60s, kind face, slight
shoulder stoop. Wearing a striped pyjama-style cotton shirt
(Vietnamese style), dark loose pants, slip-on sandals. Holding
a small black leather wallet, looking expectantly toward the
viewer. He has a few age spots, kind crow's feet, salt-and-pepper
hair, slightly thinning. Standing under a bamboo awning of a
small noodle shop. He is "Bác Tâm" — old friend of the deceased
shop owner, comes every day for bún dọc mùng.

Composition: 3/4 portrait from waist up, slight smile, eyes warm
and patient. Morning light from the side.

Mood: trustworthy elder, regular customer, has known the family
for decades.

Output: 1024×1024 PNG, transparent background.

Avoid: military uniform, formal business attire, sunglasses, anime
style, generic Asian elder cliché.
```

#### A.2.2 — Cô Lan

```text
[ART STYLE LOCK]

Subject: A Vietnamese woman in her late 30s, sharp businesswoman
look. Wearing a fitted modern Vietnamese áo dài blazer (or smart
business attire with subtle Vietnamese collar detail) in muted
navy. Hair pulled back into a low bun. Holding a large smartphone
to her ear, half-attentive, glancing at her wristwatch. A leather
handbag hangs from her shoulder.

Composition: 3/4 portrait waist-up, in motion as if rushing,
slight forward lean. Brisk morning street light, urban Hanoi
office area in background (out of focus).

Mood: busy, no-nonsense, but secretly enjoys quick tasty bánh
mì breakfast at this small shop. Tip well.

Output: 1024×1024 PNG, transparent background.

Avoid: glamour-shot model pose, traditional full-length áo dài,
overly fashionable, anime style.
```

#### A.2.3 — John

```text
[ART STYLE LOCK]

Subject: A bearded American man in his early 30s, backpacker
style. Wearing a faded tropical-print short-sleeve shirt over
a plain white tee, khaki shorts, hiking sandals, a worn-in
canvas backpack with travel patches. Friendly enthusiastic
smile, slightly sunburned skin, sandy-blond beard, messy hair
under a baseball cap. Holding a small Vietnamese phrasebook.

Composition: 3/4 portrait waist-up, looking around in delighted
curiosity at a Vietnamese street scene.

Mood: respectful curious tourist who has tried bún chả at street
stalls all over Hanoi and now reviews them. Will rate this shop
generously if served quickly.

Output: 1024×1024 PNG, transparent background.

Avoid: stereotype loud-American, hippie dreadlocks, full hipster
beard, anime, photoshopped studio look.
```

---

### A.3 Portrait — 3 khách bí ẩn (Linh Review, Chú Phúc, Khách im lặng)

#### A.3.1 — Linh Review (food blogger)

```text
[ART STYLE LOCK]

Subject: A Vietnamese woman in her mid-20s, trendy food blogger
style. Wearing oversized hipster glasses, a pastel cropped
sweater, denim wide-leg pants, white sneakers, gold layered
necklaces. Holding her smartphone vertically up to film a bowl
of food, ring light visible at edge. Carrying a colorful crochet
tote bag. Hair in long straight black with subtle highlights.
Confident influencer pose, cheek tucked toward shoulder.

Composition: 3/4 portrait waist-up, mid-action filming, partial
smile to camera (the shop owner — player). Phone screen visible
showing food close-up.

Mood: chic young Vietnamese food blogger. Mystery customer — if
served well, the next chapter has more customers (in-game effect).

Output: 1024×1024 PNG, transparent background.

Avoid: K-pop idol look, plastic-surgery smooth face, anime, Western
fashion-magazine pose.
```

#### A.3.2 — Chú Phúc (Việt kiều)

```text
[ART STYLE LOCK]

Subject: A Vietnamese-American man in his early 50s, slightly
overweight, wearing a polo shirt tucked into khaki shorts (typical
Việt kiều Mỹ tourist look), tube socks with leather sandals, a
fanny pack. Slightly weathered skin, salt-and-pepper hair. Looking
down at a small old photograph in his hand — a faded photo of a
woman who could be his mother. Standing holding a worn travel
suitcase. Slight tear in his eye but a quiet smile.

Composition: 3/4 portrait waist-up, contemplative, holding photo
chest-level. Warm afternoon light from sunset.

Mood: emotional homecoming after 30 years abroad, looking for the
taste of his mother's cooking. Mystery customer — unlocks a story
flag when served correctly.

Output: 1024×1024 PNG, transparent background.

Avoid: comedic tourist caricature, hawaiian-shirt cliché, sunburn
red, anime, fake tears.
```

#### A.3.3 — Khách im lặng (silent guest)

```text
[ART STYLE LOCK]

Subject: A mysterious Vietnamese man of indeterminate age (40s-60s),
wearing an old-fashioned dark grey ao dai (long Vietnamese tunic)
over wide trousers, a black fedora hat shadows half his face.
Sitting calmly with hands folded in his lap. Around his neck a
single jade pendant. He has a faint half-smile but his eyes are
not visible under the hat brim. A weathered leather satchel rests
beside him. The character feels like he stepped out of an old
photograph.

Composition: 3/4 portrait waist-up, very still, looking slightly
to the side as if remembering something. Light coming from a
window left, casting shadow on right side of face.

Mood: enigmatic, poetic, possibly an old friend of the dead
grandfather, possibly a spirit, possibly just a quiet poet.
Speaks only in metaphors. Mystery customer.

Output: 1024×1024 PNG, transparent background.

Avoid: actual ghost imagery, Western detective trench-coat, comedic
mysterious-stranger, anime, magical aura.
```

---

### A.4 Portrait — 3 Boss

#### A.4.1 — Nhà phê bình Tuấn (Critic Tuấn)

```text
[ART STYLE LOCK]

Subject: A Vietnamese man in his mid-40s, stern and intellectual.
Wearing a tailored dark grey blazer over a black turtleneck,
designer wire-rim glasses, a fountain pen in chest pocket, a
leather notebook in one hand and a fork in the other. Hair slicked
back, clean-shaven. Stern frowning expression with one eyebrow
slightly raised in skeptical judgment.

Composition: 3/4 portrait waist-up, stern straight posture,
inspecting the food being served toward him. Cool dramatic
side-lighting from screen-left.

Mood: feared food critic whose review can make or break a
restaurant. Boss-level customer in chapter 1.

Output: 1024×1024 PNG, transparent background, optional subtle
red glow ring around character to indicate "boss".

Avoid: villain mustache cliché, anime, Hollywood food-critic
fat-jolly archetype, Western fashion editorial.
```

#### A.4.2 — Đầu bếp Khang (Chef Khang)

```text
[ART STYLE LOCK]

Subject: A Vietnamese man in his late 50s, weathered chef. Wearing
a stained traditional white chef's tunic with rolled sleeves
revealing burn-scarred forearms, a traditional red cloth tied
around his head as a band. Crossed arms, biceps strong, broad
shoulders. Goatee, dark eyes narrowed in challenge. Slight scowl.
Holding a Vietnamese cleaver knife at his side. Standing in front
of a rival noodle shop with red signage.

Composition: 3/4 portrait waist-up, slight power-pose, intimidating
forward stance. Strong dramatic warm side-light suggesting kitchen
fire.

Mood: old rival of the deceased grandfather. Boss-level customer
chapter 2. Hates burnt grilled meat.

Output: 1024×1024 PNG, transparent background, optional red
glow ring.

Avoid: anime samurai, anger-cartoon caricature, Western iron-chef
TV-show aesthetic, oversized muscles.
```

#### A.4.3 — Iron Chef Việt

```text
[ART STYLE LOCK]

Subject: A Vietnamese man in his 60s, legendary chef. Wearing an
ornate ceremonial chef's outfit — dark navy tunic with gold
Vietnamese embroidery (lotus and dragon motifs subtly), a
traditional embroidered hat. Long thin white beard, calm wise
eyes that have seen everything. Holding a single perfect bowl
of pho with both hands as if it were a jewel. Standing on a
ceremonial dais.

Composition: full portrait or 3/4 from chest up, ceremonial
straight posture, eyes looking gently at camera. Cinematic golden
divine lighting from above.

Mood: top-of-his-craft master chef judging the player's final
challenge. Boss of chapter 3 (finale). His judgment grants the
title "Đầu bếp 3 miền" — the player's ultimate goal.

Output: 1024×1024 PNG, transparent background, gold glow ring
around character.

Avoid: anime sage-master, Chinese imperial robes (must be
specifically Vietnamese embroidery), god-like halo, generic East
Asian elder.
```

---

### A.5 Cutscene — 5 panel cốt truyện chính (16:9, 1920×1080)

#### A.5.1 — Hospital scene (cutscene #1 mở đầu)

```text
[ART STYLE LOCK]

Scene: Interior of a modest Vietnamese hospital room at night. An
elderly Vietnamese man (Cụ Ông, the grandfather, the same character
as A.1.2) lies in a hospital bed, eyes closed, peaceful expression.
A worn wooden recipe book rests on his chest, hands folded over it.
A vase of yellow daffodils on the bedside table. A grandchild
silhouette (out of focus, viewer's POV) sits beside the bed,
holding the old man's hand. A single bedside lamp casts warm
glow. Outside the window, distant Hanoi night.

Composition: cinematic wide 16:9, slight dutch tilt, viewer's POV
from grandchild's seat. Lamp warm pool of light center, rest of
room in soft shadow.

Mood: quiet farewell. The opening moment of the story.

Output: 1920×1080 JPG/PNG, full bleed background (no transparency).

Avoid: gore, medical equipment overload, dramatic crying, anime,
sad Hollywood movie cliché.
```

#### A.5.2 — Bàn thờ + cuốn sổ (cutscene #2)

```text
[ART STYLE LOCK]

Scene: A traditional Vietnamese ancestral altar in a small living
room. Black-framed photograph of Cụ Ông (grandfather, see A.1.2)
sits center-altar. Three lit incense sticks, smoke curling
upward. A small bowl of steamed rice and a pair of chopsticks
laid across as offering. The grandchild's hand reaches out from
right side of frame to pick up the worn recipe book sitting on
the altar — close to the photograph. The recipe book's cover is
visible: hand-drawn lotus and noodle bowl, Vietnamese title
"Sổ Công Thức Gia Truyền" (Heirloom Recipe Book).

Composition: medium shot, focus on altar + book + reaching hand.
Warm reverent lighting from votive candles, deep shadows on
sides.

Mood: solemn inheritance, the moment the player accepts the legacy.

Output: 1920×1080 PNG, full bleed.

Avoid: Buddhist temple grandeur (must be home-altar humble),
Chinese ancestor altar style (must be Vietnamese specifically —
narrower, simpler), photorealism, anime.
```

#### A.5.3 — Quán bún ngõ phố cổ ngày đầu mở lại (cutscene #3)

```text
[ART STYLE LOCK]

Scene: Early dawn in a narrow alley (ngõ) in Hanoi old quarter.
A small noodle shop with the sign "Tiệm Bún Số 7" being unlocked
by a pair of hands. Light starting to seep into the alley from
the right. Bicycles leaning against walls. A few red lanterns
hanging. A bamboo broom by the door. Damp stone-tile ground from
last night's rain. Steam already rising from a pot inside the
shop.

Composition: cinematic wide angle 16:9, the shop entrance center,
alley extending into both directions. Misty morning, soft cool
blue tones with warm accent from inside the shop.

Mood: a fresh start, the first day. Quiet hope.

Output: 1920×1080 PNG, full bleed.

Avoid: tourist-postcard generic Hanoi, anime, photorealistic,
Chinese alleyway aesthetic.
```

#### A.5.4 — Bác Tâm chờ trước cổng (cutscene #4)

```text
[ART STYLE LOCK]

Scene: An elderly Vietnamese man (Bác Tâm — see A.2.1) sits on a
small plastic stool just outside the noodle shop, waiting
patiently. His back slightly stooped, holding a folded newspaper
in his lap. Looking at the still-closed shop door with calm
expectation. Behind him, the alley wakes up: a vendor pushes a
flower cart, a cat slinks past. Above his head a red lantern.

Composition: 16:9, side angle from across the alley. Bác Tâm
center-left, the shop door right of frame. Soft morning light.

Mood: he has been coming here for 30 years and is not going to
stop just because the owner has passed. Quiet loyalty.

Output: 1920×1080 PNG, full bleed.

Avoid: pity-old-man composition, dramatic lighting, anime.
```

#### A.5.5 — Cụ Ông spirit nhìn xuống (ending cutscene)

```text
[ART STYLE LOCK]

Scene: Aerial view of the bustling noodle shop "Tiệm Bún Số 7" at
golden-hour evening. The shop is full of happy customers — many
recognizable from the cast (Bác Tâm, Cô Lan, John, Anna, Marco,
the grandchild player serving them). Above the shop, in the
twilight sky, an ethereal translucent figure of Cụ Ông
(grandfather, see A.1.3) floats with arms gently outstretched,
watching with proud quiet smile. Subtle gold light radiating
from him onto the shop below. Soft cherry-blossom-like petals or
yellow daffodil petals drift down.

Composition: vertical-leaning 16:9 to fit both shop and sky,
shop occupies bottom 60%, spirit and sky upper 40%. Cinematic
warm glow.

Mood: emotional finale. The legacy continues. The grandfather
is at peace.

Output: 1920×1080 PNG, full bleed.

Avoid: religious heaven imagery, ghost-horror style, anime, K-drama
finale dramatic.
```

---

### A.6 Background chương — 3 tỉnh thành (1920×1080)

#### A.6.1 — Hà Nội (chương 1)

```text
[ART STYLE LOCK]

Scene: A Hanoi old quarter alley (ngõ phố cổ) in early morning
mist. Narrow stone-tile lane between aged ochre and cream walls,
with red-tile rooftops visible above. A few hanging lanterns,
laundry on lines, tangled black electrical wires (typical Hanoi),
a small altar at the corner of an alley. Wooden shutters partly
open. A street vendor pushes a flower cart in the distance.
Slight haze and steam in the air.

Composition: deep-perspective alley shot, vanishing point center,
low camera height. Cool morning palette with warm orange-red
lantern accents.

Mood: nostalgic, intimate, quiet. The setting for chapters 1–5.

Output: 1920×1080 PNG, no characters (background plate).

Avoid: tourist-brochure Hanoi, neon, modern skyscraper visible,
Chinese alleyway, anime.
```

#### A.6.2 — Hội An (chương 2)

```text
[ART STYLE LOCK]

Scene: Hội An ancient town at evening. Yellow stucco walls glow
in the lantern light. Hundreds of colorful silk lanterns
(red, yellow, blue, pink) hang above the cobblestone street. A
canal reflects the lanterns. Wooden balconies with ornate
shutters. A small bridge in the distance. Soft purple-blue
twilight sky.

Composition: medium-wide street shot, lanterns dominating top
third, street center, canal hint at left edge. Romantic
atmospheric lighting.

Mood: warm festive evening. The setting for chapters 6–10.

Output: 1920×1080 PNG, no characters.

Avoid: tourist crowds, modern signage, Chinese town-style
buildings, anime, neon.
```

#### A.6.3 — Sài Gòn (chương 3)

```text
[ART STYLE LOCK]

Scene: Saigon (Hồ Chí Minh City) street at dusk. Busy intersection
with hundreds of motorbikes (xe máy), street food carts on
sidewalks, neon signs in Vietnamese (phở, bún, café), tangled
electrical wires above. Tall narrow buildings with rooftop water
tanks. A few trees and a small altar. Cool urban purple-pink
sky with golden neon highlights below.

Composition: wide angle from sidewalk POV, street curving
right, buildings rising up. Energetic dynamic movement
suggested through bike-light streaks.

Mood: vibrant, fast, modern Vietnam. The setting for chapters 11–15.

Output: 1920×1080 PNG, no characters.

Avoid: Western downtown skyline, anime cyberpunk, generic Asian
megacity, Hong Kong / Tokyo aesthetic.
```

---

### A.7 Logo "Bếp Việt"

```text
[ART STYLE LOCK]

Subject: A custom Vietnamese-themed logo for a cooking game called
"Bếp Việt: Tiệm Bún Số 7" (Vietnamese Kitchen: Noodle Shop No. 7).

Composition:
- Top: stylized Vietnamese calligraphy of "Bếp Việt" in deep red
  brush-stroke style, with small gold serif accents.
- Center: a single steaming bowl of noodle soup viewed from 3/4
  angle, with red-and-blue Bát Tràng porcelain pattern visible on
  the bowl rim.
- Crossing the bowl: a pair of bamboo chopsticks at a 45° angle.
- Bottom: smaller Vietnamese subtitle "Tiệm Bún Số 7" in clean
  modern serif, gold color.
- Optional accent: two small lotus-leaf elements flanking left
  and right of the bowl.

Style: flat 2D vector logo, hand-drawn quality, transparent
background, ready for SVG export. NOT photorealistic, NOT 3D,
NOT bevel/emboss, NOT gradient overload.

Color: red #C62828, gold #FFD700, cream #FFF8E1, and small accent
of fresh green for lotus leaf.

Output: 1024×1024 PNG transparent background. Square aspect.
Should also work scaled down to 256px and 64px without losing
readability.

Avoid: overly traditional Chinese calligraphy (must be Vietnamese
brush style, less rigid), Western typography, generic Asian
restaurant logo, anime, complex shading.
```

---

### A.8 Favicon

```text
[ART STYLE LOCK]

Subject: A simple iconic mark for the game's favicon and app icon.

Two options to generate (pick one after seeing both):

OPTION A — Bowl + chopsticks:
A single steaming bowl of red bún noodle soup viewed from above,
with two crossed bamboo chopsticks on top. Three small steam
swirls above. Color: red bowl, gold steam, cream background.

OPTION B — Just chopsticks "7":
A pair of crossed Vietnamese chopsticks shaped subtly like the
number "7" (referencing "Tiệm Bún Số 7"). Held by a tiny gold
hand-drawn knot at the crossing point.

Style: flat 2D minimal icon, very legible at 16×16, instantly
recognizable. Bold outline.

Output: 256×256 PNG transparent background. Should remain
readable when scaled down to 16×16 favicon size.

Avoid: detailed illustration (won't survive downscaling), photo,
3D render, anime.
```

---

### A.9 Open Graph social card

```text
[ART STYLE LOCK]

Subject: A horizontal social-share card for Reddit/Facebook/Twitter
preview when sharing the game URL.

Composition (1200×630 horizontal):
- Left half: artistic illustration of a Hanoi alley noodle shop
  with steam rising, red lanterns, the shop sign visible reading
  "Tiệm Bún Số 7", a young person inside cooking. Cinematic warm
  evening atmosphere. (Reuse style from A.5.3 if possible.)
- Right half: the logo "Bếp Việt" prominently in upper right,
  followed by the tagline in clean typography:
    "Game cooking miễn phí về cháu kế nghiệp quán bún Hà Nội"
  and below in smaller text:
    "15 ngày · 3 chương · 21 nhân vật · Lễ hội mode endless"
- Bottom right corner: small badge "Chơi miễn phí trên trình duyệt"
  in gold accent.

Color: red, gold, cream, with deep brown shadows. Vietnamese
cultural visual identity.

Output: 1200×630 PNG, full bleed.

Avoid: cluttered text, Western Steam-store-card style, anime,
generic indie-game layout.
```

---

## SPRINT B — Nice-to-have (làm sau, 11 portrait còn lại + decoration)

### B.1 — 5 khách Tây (Anna, Marco, Kenji, Sophie, David)

Style anchor giống A.2.3 John (backpacker tourist Western look). Cấu trúc prompt mỗi người:

```text
[ART STYLE LOCK]

Subject: [DETAILS BELOW]

Composition: 3/4 portrait waist-up, friendly tourist energy.

Output: 1024×1024 PNG transparent background.

Avoid: stereotype, anime, photorealism.
```

#### Anna (French)
```
A French woman in her late 20s, slim build, blonde shoulder-length
hair under a wide-brim straw sun hat. Wearing a flowing pastel
linen dress with subtle floral print, tan leather sandals. Holding
a small Vietnamese phrasebook and a paper map of Hanoi. Curious
gentle smile, slight blush. Sunglasses pushed up on her head.
Doesn't like spicy food.
```

#### Marco (Italian)
```
An Italian man early 30s, athletic build, olive skin, dark wavy
hair. Wearing a fitted slim navy polo, beige chinos, designer
sunglasses hanging from collar. Olive-green canvas messenger bag.
Confident charming smile, expressive Italian gesturing — one hand
making the "perfect" pinched-fingers gesture toward food.
Loves grilled meat.
```

#### Kenji (Japanese)
```
A Japanese man late 30s, business-casual style. Wearing a
short-sleeve button-up shirt over a t-shirt, slim chinos, modern
sneakers. Compact build, neat hair. Polite slight bow forward,
small reserved smile. Holding a Japanese phrasebook. Enjoys
strong-flavored food but avoids extreme spice.
```

#### Sophie (French elegant)
```
A French woman early 30s, elegant style. Wearing a navy-and-white
striped breton top, cream wide-leg trousers, vintage tortoiseshell
sunglasses on her head. Hair short brown bob. Carrying a small
woven raffia handbag. Refined poised smile, looking
contemplatively at a menu.
```

#### David (American)
```
An American man early 40s, tall, broad-shouldered. Wearing a
plain crew-neck black t-shirt, cargo shorts, baseball cap with
American flag patch, white sneakers. Hearty wide grin, slightly
sunburned. Holding two large Vietnamese coffees. Big appetite
energy.
```

### B.2 — 6 khách Việt vai phụ

Style anchor giống A.2.1 Bác Tâm (everyday Vietnamese citizen).
Cấu trúc prompt giống.

```
[ART STYLE LOCK]

Subject: [INDIVIDUAL]

[same composition / output / avoid as before]
```

#### Sinh viên Minh
```
A Vietnamese male university student early 20s, lanky build,
backpack with textbooks. Wearing a plain blue t-shirt, jeans,
worn-in sneakers. Cheap headphones around neck. Slight tired
smile. Holding a cheap rice cooker / lunch box. Lives away from
home, misses mom's cooking.
```

#### Bác công nhân Hòa
```
A middle-aged Vietnamese male construction worker, ~55, sun-browned
skin, weathered hands. Wearing a tucked-in faded green workshirt,
canvas trousers, rubber boots, a yellow hard hat tucked under arm.
Hearty satisfied smile. Carrying a small thermos of coffee. Loves
hearty cơm tấm meals.
```

#### Cô Mai bán hoa
```
A Vietnamese woman in her 40s, flower-shop owner. Wearing a
floral-print short-sleeve blouse, dark trousers, conical nón lá
hat slung on her back. Holding a small bouquet of fresh chrysanthemums.
Bright morning-energy smile. Small canvas bag of vegetables.
```

#### Chú Tuấn xe ôm
```
A Vietnamese man in his 50s, motorbike taxi (xe ôm) driver. Wearing
a faded green army-style jacket over a t-shirt, dark trousers, helmet
hanging from his hand, motorbike keys in the other. Slightly
impatient eye-roll smile. Lean weathered build.
```

#### Bà cụ Năm chợ
```
A Vietnamese grandmother in her 70s, after-market woman. Wearing
traditional dark Vietnamese áo bà ba (loose tunic and pants in
muted brown), a conical nón lá hat, carrying a woven basket with
vegetables. Slow gentle smile, kind crinkly eyes. Walks with
slight stoop.
```

#### Anh Hải shipper
```
A Vietnamese man late 20s, food-delivery rider. Wearing a bright
green or red food-app uniform t-shirt, helmet, cross-body delivery
bag, riding a battered motorbike. Phone in one hand checking
orders, harried tense expression. Always in a rush.
```

### B.3 — Decoration / texture

#### B.3.1 — Hoa văn border (Đông Hồ pattern)

```text
A horizontal seamless tileable decorative border pattern in
Vietnamese Đông Hồ folk art style. Features stylized lotus
flowers, bamboo leaves, and abstract wave motifs. Color: deep red
#C62828 and warm gold #E6BE3C on cream paper background. Pattern
should tile perfectly horizontally.

Output: 1920×120 PNG (very wide and short), tileable. Used as
top/bottom decorative border in game UI.

Avoid: Chinese cloud pattern (must be specifically Vietnamese
Đông Hồ folk style), modern geometric, mandala.
```

#### B.3.2 — Texture giấy dó

```text
A subtle seamless tileable Vietnamese mulberry-paper (giấy dó)
texture. Cream-warm color, with very faint fiber inclusions, soft
horizontal grain. Looks aged but clean. To be used as a 5%-opacity
overlay on game backgrounds.

Output: 1024×1024 PNG, tileable, can be used at 10% opacity over
any background. Light cream / paper white.

Avoid: visible damage / wrinkles / yellowing (must look clean
contemporary handmade paper), grunge texture, any specific design.
```

---

## C. Variation prompt — khi cần tinh chỉnh

Sau khi generate lần 1, dùng các prompt sau để tinh chỉnh:

```text
"Same character, but [more / less] [smile / serious / detail / contrast].
Keep the same Vietnamese illustration style, same color palette."

"Make the background slightly more [warm / cool / faded / saturated]."

"Move the character to [3/4 view / front / side profile]."

"Add a subtle Vietnamese motif (lotus / lantern / bamboo) in the
top-right corner."
```

---

## D. Folder structure đề xuất

Sau khi có hết asset, organize trong repo:

```
assets/
├── portraits/
│   ├── cu-ong-young.png
│   ├── cu-ong-old.png
│   ├── cu-ong-spirit.png
│   ├── bac-tam.png
│   ├── co-lan.png
│   ├── john.png
│   ├── linh-review.png
│   ├── chu-phuc.png
│   ├── khach-im-lang.png
│   ├── tuan-pb.png
│   ├── khang.png
│   └── iron-chef.png
├── cutscenes/
│   ├── cs1-hospital.png
│   ├── cs2-altar.png
│   ├── cs3-shop-opening.png
│   ├── cs4-bac-tam-waiting.png
│   └── cs5-spirit-overlook.png
├── backgrounds/
│   ├── bg-hanoi.png
│   ├── bg-hoian.png
│   └── bg-saigon.png
├── ui/
│   ├── logo-bep-viet.svg (or .png)
│   ├── favicon.png
│   ├── og-card.png
│   ├── border-dong-ho.png
│   └── texture-giay-do.png
└── tourists/, locals/  (Sprint B)
```

Sau đó update `index.html`:

- Thêm `<link rel="icon" href="assets/ui/favicon.png">`
- Thêm Open Graph meta tags
- Thay emoji NPC bằng `<img src="assets/portraits/...">` trong `renderCustomers`
- Thay cutscene emoji bằng `<img>` trong `cutscene-image`
- Thêm `body.ch1 { background-image: url('assets/backgrounds/bg-hanoi.png'); }` cho mỗi chương

## E. Budget & timeline

| Asset | Số lượng | Tool | Cost | Time |
|---|---|---|---|---|
| Portrait Sprint A | 12 | Gemini Imagen + tinh chỉnh tay | Free Gemini credit | 2-3h |
| Cutscene panel | 5 | Gemini Imagen | Free | 2h |
| Background chương | 3 | Gemini Imagen | Free | 1h |
| Logo + favicon + OG card | 3 | Gemini Imagen + Inkscape clean-up | Free + 30 phút manual | 2h |
| Border + texture | 2 | Gemini Imagen | Free | 30 phút |
| **Tổng Sprint A** | 25 | | **0đ** (chỉ tốn Gemini credit) | **~8h** |
| Portrait Sprint B | 11 | Gemini | Free | 2h |
| **Tổng Sprint B** | 11 | | 0đ | 2h |

Nếu Gemini Imagen tier free hết credit, cân nhắc:
- Midjourney $10/tháng (250 image)
- Leonardo AI free tier (150 image/ngày)
- Stable Diffusion local (DreamShaper, FLUX) — free, cần GPU 8GB+

## F. Quality checklist mỗi asset

Sau khi generate, check:

- [ ] Style nhất quán với ART STYLE LOCK?
- [ ] Bảng màu đúng đỏ-vàng-nâu Việt Nam?
- [ ] Có ít nhất 1 motif Việt Nam thị giác (lá tre / nón lá / lưới Đông Hồ / Bát Tràng)?
- [ ] Không trông như Chinese / Japanese / Korean style?
- [ ] Không trông như anime?
- [ ] Background transparent (cho portrait)?
- [ ] Resolution đủ cao (≥1024px cho portrait, ≥1920px cho BG)?
- [ ] File size hợp lý (PNG portrait <500KB, BG <2MB)?
- [ ] Tên file đúng convention `kebab-case.png`?

---

*PROMPTS_ART_v1.12.md — Prompt pack cho thế hệ tài sản đồ họa đầu tiên của Bếp Việt. Cập nhật khi style guide thay đổi.*
