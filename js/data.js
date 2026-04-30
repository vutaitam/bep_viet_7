// === Bếp Việt: Tiệm Bún Số 7 — DATA ===
// Recipes, ingredients, drinks, NPCs, levels, upgrades, achievements,
// dialogues, tutorial, save/version constants. Pure data — no functions.

const RECIPES = {
  bun_doc_mung:{
    name:'Bún dọc mùng',emoji:'🍜',image:'assets/icons/recipes/bun_doc_mung.svg',
    ingredients:['bun','suon','doc_mung','ca_chua'],
    cookTime:8,needsGrill:false,price:40000,score:25,
    isSignature:true,desc:'Đặc sản Hà Nội — Món tâm huyết của Cụ Ông'
  },
  banh_mi:{
    name:'Bánh mì',emoji:'🥖',image:'assets/icons/recipes/banh_mi.svg',
    ingredients:['banh_mi_loaf','pate','thit_nguoi','rau_song'],
    cookTime:4,needsGrill:false,price:25000,score:15,
    desc:'Bánh mì Sài Gòn — Nhanh, gọn, ngon'
  },
  bun_cha:{
    name:'Bún chả',emoji:'🍢',image:'assets/icons/recipes/bun_cha.svg',
    ingredients:['bun','rau_song','nuoc_cham'],
    cookTime:6,needsGrill:true,grillIngredient:'cha',
    price:35000,score:22,
    desc:'Đặc sản Hà Nội — Cần nướng chả đúng độ'
  },
  mi_quang:{
    name:'Mì Quảng',emoji:'🍝',image:'assets/icons/recipes/mi_quang.svg',
    ingredients:['mi_quang_noodle','thit_heo','tom','rau_song'],
    cookTime:7,needsGrill:false,price:45000,score:28,
    availableFrom:6,
    desc:'Đặc sản Quảng Nam — Mì vàng nghệ béo ngậy'
  },
  hu_tieu:{
    name:'Hủ tiếu Nam Vang',emoji:'🍜',image:'assets/icons/recipes/hu_tieu.svg',
    ingredients:['hu_tieu_noodle','thit_heo','tom','nuoc_dung'],
    cookTime:6,needsGrill:false,price:50000,score:30,
    availableFrom:11,
    desc:'Đặc sản Sài Gòn — Nước dùng trong ngọt thanh'
  },
  pho_bo:{
    name:'Phở bò',emoji:'🍲',image:'assets/icons/recipes/pho_bo.svg',
    ingredients:['pho_noodle','thit_bo','rau_thom','nuoc_dung'],
    cookTime:7,needsGrill:false,price:60000,score:34,
    availableFrom:4,
    desc:'Tô phở nóng, thơm quế hồi — hợp ngày mưa và khách du lịch'
  },
  bun_bo_hue:{
    name:'Bún bò Huế',emoji:'🌶️',image:'assets/icons/recipes/bun_bo_hue.svg',
    ingredients:['bun','thit_bo','sa_te','rau_thom'],
    cookTime:8,needsGrill:false,price:65000,score:38,
    availableFrom:8,
    desc:'Vị cay nồng miền Trung — bán rất tốt ở chương lễ hội'
  },
  com_tam:{
    name:'Cơm tấm',emoji:'🍚',image:'assets/icons/recipes/com_tam.svg',
    ingredients:['com_tam_rice','thit_heo','nuoc_cham','rau_song'],
    cookTime:6,needsGrill:false,price:70000,score:40,
    availableFrom:12,
    desc:'Món Sài Gòn chắc bụng, hợp khách văn phòng và người lao động'
  },
  goi_cuon:{
    name:'Gỏi cuốn',emoji:'🌯',image:'assets/icons/recipes/goi_cuon.svg',
    ingredients:['banh_trang','tom','rau_song','bun'],
    cookTime:5,needsGrill:false,price:32000,score:19,
    availableFrom:6,
    desc:'Đặc sản miền Nam — Thanh mát, không dầu mỡ, hợp khách Tây và khách ăn chay nhẹ'
  },
  bun_rieu:{
    name:'Bún riêu',emoji:'🍛',image:'assets/icons/recipes/bun_rieu.svg',
    ingredients:['bun','rieu_cua','ca_chua','rau_thom'],
    cookTime:7,needsGrill:false,price:48000,score:27,
    availableFrom:3,
    desc:'Vị riêu cua đồng thơm ngon — Bán tốt ngày mưa và mùa lạnh'
  }
};

const INGREDIENTS = {
  bun:{name:'Bún tươi',emoji:'🍜'},
  suon:{name:'Sườn heo',emoji:'🥩'},
  doc_mung:{name:'Dọc mùng',emoji:'🌿',special:true},
  ca_chua:{name:'Cà chua',emoji:'🍅'},
  banh_mi_loaf:{name:'Bánh mì',emoji:'🥖'},
  pate:{name:'Pate',emoji:'🟫'},
  thit_nguoi:{name:'Thịt nguội',emoji:'🥓'},
  rau_song:{name:'Rau sống',emoji:'🥬'},
  cha:{name:'Chả (cần nướng)',emoji:'🍖',needsGrill:true},
  nuoc_cham:{name:'Nước chấm',emoji:'🥣'},
  mi_quang_noodle:{name:'Mì Quảng',emoji:'🍝'},
  thit_heo:{name:'Thịt heo',emoji:'🥩'},
  tom:{name:'Tôm',emoji:'🦐'},
  hu_tieu_noodle:{name:'Hủ tiếu',emoji:'🍜'},
  nuoc_dung:{name:'Nước dùng',emoji:'🫕'},
  pho_noodle:{name:'Bánh phở',emoji:'🍜'},
  thit_bo:{name:'Thịt bò',emoji:'🥩'},
  rau_thom:{name:'Rau thơm',emoji:'🌿'},
  sa_te:{name:'Sa tế',emoji:'🌶️'},
  com_tam_rice:{name:'Cơm tấm',emoji:'🍚'},
  banh_trang:{name:'Bánh tráng',emoji:'🫓'},
  rieu_cua:{name:'Riêu cua',emoji:'🦀'},
  ga_xe:{name:'Gà xé',emoji:'🍗'},
  // ── Drink ingredients ──
  tra_la:{name:'Trà',emoji:'🍵',isDrink:true},
  da:{name:'Đá viên',emoji:'🧊',isDrink:true},
  tac:{name:'Quả tắc',emoji:'🍋',isDrink:true},
  mia:{name:'Mía',emoji:'🎋',isDrink:true},
  ca_phe_bot:{name:'Cà phê',emoji:'☕',isDrink:true},
  sua_dac:{name:'Sữa đặc',emoji:'🥛',isDrink:true},
  rau_ma_la:{name:'Lá rau má',emoji:'🌿',isDrink:true}
};

const DRINKS = {
  tra_da:{name:'Trà đá',emoji:'🧊',image:'assets/icons/drinks/tra_da.svg',price:5000,score:2,patienceBoost:3,availableFrom:1,
    ingredients:['tra_la','da'],mixTime:2,desc:'Vỉa hè Việt Nam — đơn giản mà mát'},
  tra_tac:{name:'Trà tắc',emoji:'🍋',image:'assets/icons/drinks/tra_tac.svg',price:10000,score:4,patienceBoost:5,availableFrom:4,
    ingredients:['tra_la','tac','da'],mixTime:3,desc:'Chua ngọt — hợp ngày nóng và bánh mì'},
  nuoc_mia:{name:'Nước mía',emoji:'🥤',image:'assets/icons/drinks/nuoc_mia.svg',price:14000,score:5,patienceBoost:4,availableFrom:6,
    ingredients:['mia','da'],mixTime:4,desc:'Ép tay — cần thời gian nhưng lợi nhuận cao'},
  ca_phe_sua_da:{name:'Cà phê sữa đá',emoji:'☕',image:'assets/icons/drinks/ca_phe_sua_da.svg',price:18000,score:6,patienceBoost:2,availableFrom:9,
    ingredients:['ca_phe_bot','sua_dac','da'],mixTime:4,desc:'Đậm đà — khách Tây và dân văn phòng mê'},
  rau_ma:{name:'Rau má',emoji:'🌿',image:'assets/icons/drinks/rau_ma.svg',price:12000,score:5,patienceBoost:5,availableFrom:11,
    ingredients:['rau_ma_la','da'],mixTime:3,desc:'Mát thanh — đặc sản miền Nam'}
};

// ── ACHIEVEMENTS ──
const ACHIEVEMENTS=[
  {id:'first_serve',name:'Mở hàng',emoji:'🎀',desc:'Phục vụ khách đầu tiên',hidden:false},
  {id:'first_perfect_grill',name:'Lửa nướng vàng',emoji:'🔥',desc:'Nướng PERFECT lần đầu',hidden:false},
  {id:'first_drink_combo',name:'Quán có nước',emoji:'🥤',desc:'Phục vụ đúng món + nước lần đầu',hidden:false},
  {id:'streak_5',name:'Đôi tay nhanh',emoji:'⚡',desc:'Streak 5 lần liên tiếp',hidden:false},
  {id:'streak_10',name:'Bậc thầy quán nhỏ',emoji:'🌟',desc:'Streak 10 lần liên tiếp',hidden:false},
  {id:'no_waste_chapter',name:'Tiết kiệm như Cụ',emoji:'🥢',desc:'Hoàn thành 5 ngày liên tiếp không cháy chả',hidden:false},
  {id:'meet_all_regulars',name:'Quán quen',emoji:'⭐',desc:'Gặp đủ Bác Tâm, Cô Lan, John',hidden:false},
  {id:'meet_food_blogger',name:'Lên sóng',emoji:'📱',desc:'Phục vụ Linh Review',hidden:false},
  {id:'meet_viet_kieu',name:'Vị quê hương',emoji:'🧳',desc:'Phục vụ Chú Phúc Việt kiều',hidden:false},
  {id:'meet_silent',name:'Hiểu lòng người',emoji:'🎩',desc:'Phục vụ Khách im lặng đúng món',hidden:false},
  {id:'beat_tuan',name:'Vượt nhà phê bình',emoji:'🧐',desc:'Đánh bại Nhà phê bình Tuấn',hidden:false},
  {id:'beat_khang',name:'Truyền nhân Cụ',emoji:'👨‍🍳',desc:'Đánh bại Đầu bếp Khang',hidden:false},
  {id:'beat_iron_chef',name:'Đầu bếp 3 miền',emoji:'🏆',desc:'Hoàn thành Iron Chef Việt',hidden:false},
  {id:'all_drinks_made',name:'Pha hết menu nước',emoji:'🍹',desc:'Pha thành công đủ 5 loại đồ uống',hidden:false},
  {id:'rich_500k',name:'Có vốn liếng',emoji:'💰',desc:'Tích lũy 500.000đ',hidden:false},
  {id:'rich_2m',name:'Quán phất lên',emoji:'💎',desc:'Tích lũy 2.000.000đ',hidden:false},
  {id:'reputation_50',name:'Tiếng tăm khu phố',emoji:'📣',desc:'Đạt 50 điểm danh tiếng',hidden:false},
  {id:'festival_500',name:'Vua lễ hội',emoji:'🎑',desc:'Đạt 500.000đ trong Lễ hội',hidden:false},
  {id:'all_recipes',name:'Đầu bếp toàn năng',emoji:'📖',desc:'Mở khóa đủ 10 món chính',hidden:false},
  {id:'no_burn_boss',name:'Tay lửa vững',emoji:'🛡️',desc:'Đánh bại Khang mà không cháy chả',hidden:true}
];

const NPCS = {
  bac_tam:{name:'Bác Tâm',emoji:'👴',portrait:'assets/portraits/bac-tam.webp',favorite:'bun_doc_mung',trait:'Bạn cũ của Cụ Ông',patience:75,tip:1.3,isRegular:true,drink:'tra_da',
    quotes:{arrive:'Cho bác một tô bún dọc mùng như mọi khi nhé!',happy:'Đúng vị Cụ rồi đấy cháu...',angry:'Bác phải đi đây, hẹn lần sau...',wrong:'Cháu ơi, bác gọi bún dọc mùng cơ mà...',slow:'Lâu quá, nhưng vẫn ngon. Lần sau nhanh hơn nhé cháu.'}},
  co_lan:{name:'Cô Lan',emoji:'👩‍💼',portrait:'assets/portraits/co-lan.webp',favorite:'banh_mi',trait:'Doanh nhân vội vàng',patience:40,tip:1.5,isRegular:true,drink:'ca_phe_sua_da',
    quotes:{arrive:'Em ơi, một bánh mì nhanh nha, cô đang vội!',happy:'Nhanh thật! Cảm ơn em.',angry:'Lâu quá, cô đi quán khác đây!',wrong:'Cái này không phải món cô gọi đâu em...',slow:'Tý cô trễ họp rồi đấy nhé!'}},
  john:{name:'John',emoji:'🧔',portrait:'assets/portraits/john.webp',favorite:'bun_cha',trait:'Khách Tây ba lô (Mỹ)',patience:90,tip:1.7,isRegular:true,drink:'tra_tac',
    quotes:{arrive:'Hi! Một bún chả please!',happy:'Mmm, so good! Thank you!',angry:'Sorry, I have to go...',wrong:'Excuse me, this is not what I ordered.',slow:'Slow but tasty, cảm ơn!'}},
  anna:{name:'Anna',emoji:'👱‍♀️',favorite:'pho_bo',trait:'Du khách Pháp thích món ít cay',patience:72,tip:1.45,isRegular:false,drink:'tra_tac',
    quotes:{arrive:'Món nào thơm mà không quá cay vậy?',happy:'Tuyệt quá, rất Việt Nam!',angry:'Xin lỗi, tôi phải đi tiếp...'}},
  marco:{name:'Marco',emoji:'🤌',favorite:'bun_cha',trait:'Khách Ý mê món nướng',patience:68,tip:1.4,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Tôi muốn thử món nướng ngon nhất của quán!',happy:'Chả nướng rất thơm, bravo!',angry:'Tôi đói quá, hẹn dịp khác.'}},
  kenji:{name:'Kenji',emoji:'🧑‍💼',favorite:'bun_bo_hue',trait:'Khách Nhật thích vị đậm nhưng ít cay',patience:76,tip:1.35,isRegular:false,drink:'tra_tac',
    quotes:{arrive:'Cho tôi món nóng, nhưng đừng cay quá nhé.',happy:'Nước dùng rất sâu vị. Cảm ơn!',angry:'Tôi phải quay lại đoàn rồi.'}},
  sinh_vien:{name:'Minh',emoji:'🎒',favorite:'banh_mi',trait:'Sinh viên xa nhà, thích món rẻ mà ấm bụng',patience:58,tip:1.1,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Cho em món nào nhanh nhanh, còn kịp ca học ạ.',happy:'Ngon như ở nhà nấu vậy!',angry:'Em trễ giờ mất rồi...'}},
  bac_cong_nhan:{name:'Bác Hòa',emoji:'👷',favorite:'com_tam',trait:'Người lao động thích phần chắc bụng',patience:70,tip:1.25,isRegular:false,drink:'nuoc_mia',
    quotes:{arrive:'Cho bác phần nào no no chút nhé.',happy:'Đã bụng! Chiều làm khỏe rồi.',angry:'Bác phải ra công trình đây.'}},
  food_blogger:{name:'Linh Review',emoji:'📱',favorite:'bun_bo_hue',trait:'Khách bí ẩn: quay review cho quán',patience:55,tip:1.65,isRegular:false,isMystery:true,drink:'ca_phe_sua_da',
    quotes:{arrive:'Hôm nay mình review quán này nha mọi người!',happy:'Món này lên clip chắc viral đó!',angry:'Clip hôm nay chắc phải nói thật rồi...',wrong:'Ơ kìa, mình order cái khác mà nhỉ?',slow:'Khán giả ơi, đợi hơi lâu nhưng vẫn ngon nha!'}},
  viet_kieu:{name:'Chú Phúc',emoji:'🧳',favorite:'pho_bo',trait:'Khách bí ẩn: Việt kiều tìm lại vị quê',patience:85,tip:1.6,isRegular:false,isMystery:true,drink:'tra_da',
    quotes:{arrive:'Chú xa nhà lâu rồi, cho chú món nào có vị Hà Nội nhé.',happy:'Đúng rồi... vị này chú nhớ mấy chục năm.',angry:'Chắc hôm nay chưa có duyên rồi.',wrong:'Cháu ơi, chú không gọi món này đâu...',slow:'Chú đợi được, miễn là vị đúng.'}},
  khach_im_lang:{name:'Khách im lặng',emoji:'🎩',favorite:null,trait:'Khách bí ẩn: chỉ gọi món bằng gợi ý',patience:65,tip:1.8,isRegular:false,isMystery:true,drink:'rau_ma',
    quotes:{arrive:'Tôi muốn một món có khói bếp và ký ức phố cổ.',happy:'Bạn hiểu món ăn hơn lời nói.',angry:'Có lẽ bạn chưa hiểu ý tôi.',wrong:'Không... đây không phải thứ tôi nghĩ tới.',slow:'Lâu một chút, nhưng tôi không vội.'}},
  khach_thuong:{name:'Khách lạ',emoji:'🧑',favorite:null,trait:'Khách qua đường',patience:60,tip:1.0,isRegular:false,
    quotes:{arrive:'Cho tôi xem thực đơn nào.',happy:'Ngon đó, lần sau ghé lại!',angry:'Bỏ đi đây...'}},
  sophie:{name:'Sophie',emoji:'🧣',favorite:'goi_cuon',trait:'Du khách Pháp thích món thanh đạm',patience:65,tip:1.3,isRegular:false,drink:'tra_tac',
    quotes:{arrive:'Có món nào cuốn bánh tráng không?',happy:'Très délicieux! Rất tươi và ngon!',angry:'Pardon, tôi phải đi rồi...'}},
  david:{name:'David',emoji:'🧢',favorite:'com_tam',trait:'Du khách Mỹ thích phần ăn đầy đặn',patience:52,tip:1.8,isRegular:false,drink:'ca_phe_sua_da',
    quotes:{arrive:'I want the biggest and best combo you have!',happy:'Oh wow, this is amazing value!',angry:'Man, I really gotta run...'}},
  co_ban_hoa:{name:'Cô Mai bán hoa',emoji:'💐',favorite:'banh_mi',trait:'Cô bán hoa chợ sáng, đến mỗi ngày',patience:48,tip:1.2,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Cô cần bánh mì nhanh nha, còn phải ra chợ sớm.',happy:'Ngon lắm! Sáng nào cô cũng ghé đây.',angry:'Chợ sắp tan rồi, cô đi thôi...'}},
  chu_xe_om:{name:'Chú Tuấn xe ôm',emoji:'🛵',favorite:'bun_doc_mung',trait:'Chú xe ôm đầu ngõ, ăn nhanh trước khi đón khách',patience:35,tip:1.05,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Bún dọc mùng tô to, nhanh thôi cháu ơi!',happy:'Đã! Ăn vô là chạy xe cả ngày không mệt!',angry:'Thôi chú có khách gọi rồi, đi đây...'}},
  ba_cu_cho:{name:'Bà Năm',emoji:'🧓',favorite:'pho_bo',trait:'Bà đi chợ sáng, nhớ vị ngày xưa',patience:82,tip:1.15,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Cho bà tô phở nóng đi cháu, đi chợ về mệt quá.',happy:'Vị này... như hồi còn trẻ vậy. Cảm ơn cháu nhiều lắm.',angry:'Thôi bà về nấu ở nhà vậy...'}},
  anh_shipper:{name:'Anh Hải shipper',emoji:'🚴',favorite:'banh_mi',trait:'Shipper cần ăn nhanh giữa giờ giao hàng',patience:28,tip:1.1,isRegular:false,drink:'tra_da',
    quotes:{arrive:'Bánh mì nhanh nha anh còn 3 đơn!',happy:'Siêu nhanh! Cảm ơn bé ơi!',angry:'Trễ đơn rồi, thôi anh đi...'}},
  // Boss NPCs
  tuan_pb:{name:'Nhà phê bình Tuấn',emoji:'🧐',favorite:'bun_doc_mung',trait:'Nhà phê bình ẩm thực',patience:50,tip:0,isRegular:false,isBoss:true,failOnLeave:true,
    quotes:{arrive:'Tôi nghe danh quán này. Bún dọc mùng gia truyền — thật hay hư?',happy:'Xuất sắc. Tôi sẽ viết bài khen.',angry:'Thất vọng. Quán chưa xứng danh.'}},
  khang:{name:'Đầu bếp Khang',emoji:'👨‍🍳',favorite:'bun_cha',trait:'Đối thủ cũ của Cụ Ông',patience:45,tip:0,isRegular:false,isBoss:true,
    quotes:{arrive:'Hm. Xem cậu nấu có bằng Cụ không nhé.',happy:'Được rồi. Tôi công nhận tài năng.',angry:'Thua kém Cụ rồi cậu ơi.'}},
  iron_chef:{name:'Iron Chef Việt',emoji:'🏆',favorite:'bun_doc_mung',trait:'Đầu bếp số 1 cả nước',patience:50,tip:3.0,isRegular:false,isBoss:true,failOnLeave:true,
    quotes:{arrive:'Bún dọc mùng 30 năm gia truyền — thật sự đặc biệt hay chỉ là tin đồn?',happy:'Xuất sắc! Cháu của Cụ Ông xứng đáng danh hiệu "Đầu bếp 3 miền"!',angry:'Chưa đủ tốt. Tiếp tục rèn luyện.'}}
};

// ─────────────────────────────────────────────
//  LEVEL + UPGRADE DATA
// ─────────────────────────────────────────────

const LEVELS=[
  // ── Ch.1: HÀ NỘI ──
  {ch:1,lv:1,overall:1,name:'Khai trương Tiệm Bún',customers:6,time:180,cost:150000,npcRate:0.45,
    icon:'🕯️',story:'Cụ Ông vừa qua đời. Hôm nay là ngày đầu tiên bạn mở lại Tiệm Bún Số 7. Bác Tâm đứng chờ trước cổng từ sớm — ông muốn xem cháu Cụ có giữ được hương vị không.',
    objective:'Phục vụ ít nhất 4 khách · Doanh thu > 150.000đ'},
  {ch:1,lv:2,overall:2,name:'Khách quen trở lại',customers:7,time:190,cost:165000,npcRate:0.5,
    icon:'👴',story:'Tin đồn lan nhanh trong ngõ phố. Bác Tâm kể với hàng xóm về tô Bún dọc mùng "đúng vị Cụ". Hôm nay có thêm Cô Lan — doanh nhân hay ăn bánh mì buổi sáng.',
    objective:'Phục vụ ít nhất 5 khách · Phục vụ Bác Tâm 1 lần'},
  {ch:1,lv:3,overall:3,name:'Sáng có mưa rào',customers:8,time:200,cost:180000,npcRate:0.45,event:'rain',
    icon:'🌧️',story:'Mưa rào bất chợt ập đến. Khách ít hơn nhưng ai đến đều thật sự muốn ăn. Mưa làm bếp than khó nướng hơn — chú ý kỹ lò nướng.',
    objective:'Phục vụ ít nhất 5 khách · Doanh thu > 200.000đ'},
  {ch:1,lv:4,overall:4,name:'Bác Tâm dẫn bạn bè',customers:9,time:210,cost:205000,npcRate:0.6,
    icon:'🤝',story:'Bác Tâm tự hào dẫn cả nhóm bạn cũ của Cụ Ông đến ăn. Họ đã ăn ở đây cách đây 15 năm — tiêu chuẩn cao lắm đó. Phục vụ tốt để giữ tiếng quán.',
    objective:'Phục vụ ít nhất 6 khách · Streak >= 3 lần liên tiếp'},
  {ch:1,lv:5,overall:5,name:'Boss: Nhà phê bình Tuấn',customers:10,time:240,cost:240000,npcRate:0.65,isBoss:true,bossNpc:'tuan_pb',
    icon:'🧐',story:'Nhà phê bình ẩm thực Tuấn nghe tiếng. Ông ta nổi tiếng khắt khe — một bài đánh giá của ông có thể làm quán đóng cửa hoặc nổi tiếng rầm rộ. Đừng để ông chờ!',
    objective:'Phục vụ ít nhất 7 khách · KHÔNG để Tuấn bỏ đi'},
  // ── Ch.2: HỘI AN ──
  {ch:2,lv:1,overall:6,name:'Hội An: Ngày đầu mở quán',customers:8,time:200,cost:300000,npcRate:0.45,
    icon:'🏮',story:'Bác Tâm giới thiệu, bạn quyết định mang hương vị Hà Nội vào Hội An. Phố cổ nhỏ nhưng ấm áp. Khách du lịch nhiều hơn Hà Nội, họ tò mò và dễ tính hơn.',
    objective:'Phục vụ ít nhất 5 khách · Mì Quảng mở khóa',unlocks:'mi_quang'},
  {ch:2,lv:2,overall:7,name:'Phố Hội mùa lễ hội',customers:9,time:200,cost:330000,npcRate:0.5,event:'festival',
    icon:'🎑',story:'Hội An đang vào mùa lễ hội Trung Thu. Đèn lồng rực rỡ khắp phố cổ. Khách đến đông hơn bình thường — chuẩn bị tốt nguyên liệu!',
    objective:'Phục vụ ít nhất 6 khách · Doanh thu > 350.000đ'},
  {ch:2,lv:3,overall:8,name:'Đoàn khách du lịch Hàn Quốc',customers:10,time:210,cost:360000,npcRate:0.5,
    icon:'🌏',story:'Một đoàn 5 người Hàn Quốc đến tham quan. Họ không nói tiếng Việt nhưng dùng điện thoại dịch menu — đặt món bằng cách chỉ tay. Kiên nhẫn với họ nhé!',
    objective:'Phục vụ ít nhất 7 khách · Speed bonus >= 3 lần'},
  {ch:2,lv:4,overall:9,name:'Cuối tuần đông khách',customers:11,time:220,cost:400000,npcRate:0.6,event:'rush',
    icon:'📈',story:'Cuối tuần Hội An luôn đông. Quán bún đã có tiếng — người xếp hàng dài hơn bao giờ hết. Cần phục vụ nhanh, không được để khách chờ lâu.',
    objective:'Phục vụ ít nhất 8 khách · Streak >= 4 lần liên tiếp'},
  {ch:2,lv:5,overall:10,name:'Boss: Đầu bếp Khang thách đấu',customers:12,time:260,cost:460000,npcRate:0.65,isBoss:true,bossNpc:'khang',
    icon:'👨‍🍳',story:'Đầu bếp Khang — đối thủ cũ của Cụ Ông — nghe tin bạn vào Hội An. Ông thách đấu công khai. Cẩn thận: Khang rất ghét chả cháy!',
    objective:'Phục vụ ít nhất 9 khách · KHÔNG để cháy chả · Doanh thu > 500.000đ'},
  // ── Ch.3: SÀI GÒN ──
  {ch:3,lv:1,overall:11,name:'Sài Gòn: Buổi sáng náo nhiệt',customers:9,time:200,cost:500000,npcRate:0.45,event:'heat',
    icon:'🌆',story:'Sài Gòn về sáng — khói xe, tiếng còi, quán xá chen chúc. Người ta ăn nhanh để kịp đi làm. Hủ tiếu mở khóa — thêm vũ khí mới!',
    objective:'Phục vụ ít nhất 6 khách · Hủ tiếu mở khóa · Ngày nóng — bán nước chạy hơn',unlocks:'hu_tieu'},
  {ch:3,lv:2,overall:12,name:'Đoàn du khách Tây ba lô',customers:10,time:200,cost:540000,npcRate:0.7,event:'tour',
    icon:'🧔',story:'John dẫn cả nhóm bạn cũ — Anna, Marco, David, Sophie, Kenji. Đoàn du khách sẽ đông và đa dạng. Họ kén món, hợp combo món + nước hơn.',
    objective:'Phục vụ John + ít nhất 5 khách khác · Đoàn du khách — phần lớn là khách Tây'},
  {ch:3,lv:3,overall:13,name:'Giờ cao điểm + mất điện ngắn',customers:11,time:210,cost:590000,npcRate:0.55,event:'blackout',
    icon:'⚡',story:'12h trưa Sài Gòn vừa đông vừa nóng. Tự dưng cả khu phố cúp điện. Bếp vẫn cháy nhưng quạt đứng yên — nấu chậm hơn cho tới khi điện trở lại.',
    objective:'Phục vụ ít nhất 8 khách · Streak >= 5 lần · Mất điện — thời gian nấu tăng'},
  {ch:3,lv:4,overall:14,name:'Cuộc thi Ẩm thực 3 miền',customers:12,time:220,cost:650000,npcRate:0.6,event:'festival',
    icon:'🏅',story:'Cuộc thi "Ẩm thực 3 miền" tại TP.HCM. Bạn đại diện miền Bắc với Bún dọc mùng. Ban giám khảo khắt khe, đặc biệt quan tâm đến kỹ thuật nướng chả.',
    objective:'Phục vụ ít nhất 9 khách · 3 lần nướng PERFECT · Doanh thu > 600.000đ'},
  {ch:3,lv:5,overall:15,name:'FINALE: Iron Chef Việt',customers:15,time:300,cost:760000,npcRate:0.7,isBoss:true,bossNpc:'iron_chef',
    icon:'🏆',story:'Đêm chung kết. Iron Chef Việt — đầu bếp số 1 cả nước — đích thân đến thưởng thức. Cụ Ông đang nhìn từ trên cao... Đây là thời khắc quyết định sự nghiệp của bạn.',
    objective:'Phục vụ ít nhất 11 khách · Iron Chef không được bỏ đi · Doanh thu > 800.000đ'},
];

const UPGRADES=[
  {id:'faster_cook',name:'Bếp ga',emoji:'🔥',maxLv:3,levels:[
    {lv:1,desc:'Thời gian nấu -15%',price:200000,ch:1},
    {lv:2,desc:'Thời gian nấu -25%',price:360000,ch:1},
    {lv:3,desc:'Thời gian nấu -38%',price:560000,ch:2},
  ]},
  {id:'price_boost',name:'Bảng menu',emoji:'📋',maxLv:3,levels:[
    {lv:1,desc:'Giá mỗi món +8%',price:180000,ch:1},
    {lv:2,desc:'Giá mỗi món +15%',price:360000,ch:1},
    {lv:3,desc:'Giá mỗi món +22%',price:580000,ch:2},
  ]},
  {id:'extra_time',name:'Quạt mát',emoji:'🌀',maxLv:3,levels:[
    {lv:1,desc:'Thêm 20 giây mỗi ngày',price:160000,ch:1},
    {lv:2,desc:'Thêm 35 giây mỗi ngày',price:280000,ch:1},
    {lv:3,desc:'Thêm 50 giây mỗi ngày',price:440000,ch:2},
  ]},
  {id:'extra_seat',name:'Bàn ghế',emoji:'🪑',maxLv:2,levels:[
    {lv:1,desc:'Nhận thêm 1 khách cùng lúc',price:200000,ch:1},
    {lv:2,desc:'Nhận thêm 2 khách cùng lúc',price:380000,ch:2},
  ]},
  {id:'grill_wide',name:'Lò nướng',emoji:'🏆',maxLv:2,levels:[
    {lv:1,desc:'Vùng PERFECT: 37–63%',price:320000,ch:1},
    {lv:2,desc:'Vùng PERFECT: 33–67%',price:520000,ch:2},
  ]},
  {id:'neon_sign',name:'Biển hiệu',emoji:'✨',maxLv:2,levels:[
    {lv:1,desc:'Spawn thêm 1 khách mỗi ngày',price:430000,ch:2},
    {lv:2,desc:'Spawn thêm 2 khách mỗi ngày',price:680000,ch:3},
  ]},
  {id:'loyal_card',name:'Thẻ khách quen',emoji:'💳',maxLv:3,levels:[
    {lv:1,desc:'Khách quen kiên nhẫn +20%',price:240000,ch:1},
    {lv:2,desc:'Khách quen kiên nhẫn +35%',price:420000,ch:2},
    {lv:3,desc:'Khách quen kiên nhẫn +52%',price:660000,ch:3},
  ]},
];

// ─────────────────────────────────────────────
//  PROGRESS STATE (localStorage)
// ─────────────────────────────────────────────

const PROG_KEY='bv_prog_v111';
const LEGACY_PROG_KEYS=['bv_prog_v110','bv_prog_v9'];
const PROG_DEFAULT={levelIdx:0,totalMoney:0,upgradeLevels:{},levelStars:{},unlocked:1,metCustomers:{},reputation:0,achievements:{},storyFlags:{},bestFestival:0,bestEndless:0,drinksMastered:{}};

const DIALOGUES=[
  {image:'🕯️',speaker:'Người kể chuyện',text:'Hà Nội, một sáng mùa thu se lạnh... Trong ngõ nhỏ phố cổ, Cụ Ông vừa qua đời sau bao năm gắn bó với quán bún.'},
  {image:'📜',speaker:'Cháu (bạn)',text:'Cụ ơi... Cháu đã về. Cuốn sổ công thức này, Cụ đã viết suốt 30 năm để truyền lại cho cháu.'},
  {image:'svg:cu-ong-old',speaker:'Cụ Ông (di nguyện)',text:'Cháu của ông... Quán Tiệm Bún Số 7 này đã 30 năm. Bao nhiêu khách quen, bao nhiêu kỷ niệm. Ông tin cháu sẽ giữ được hương vị...'},
  {image:'svg:cu-ong-young',speaker:'Cụ Ông (di nguyện)',text:'Đặc biệt là Bún dọc mùng — đó là món ông tự hào nhất. Bí quyết nằm trong từng cọng dọc mùng cháu chọn, từng giờ ninh xương. Cố lên!'},
  {image:'🏮',speaker:'Người kể chuyện',text:'Sáng mai, Tiệm Bún Số 7 sẽ mở cửa lần đầu sau khi Cụ mất. Bác Tâm và những người bạn cũ đang chờ cháu...'}
];

const TUTORIAL=[
  {icon:'👋',section:'Bắt đầu',title:'Chào mừng đến Tiệm Bún Số 7!',
    text:'Bạn vừa thừa kế quán bún của Cụ Ông trong ngõ phố cổ. Hành trình: 15 ngày qua 3 chương Hà Nội → Hội An → Sài Gòn. Cuối hành trình là danh hiệu "Đầu bếp 3 miền".\n\nHướng dẫn này gồm 15 phần — bạn có thể bỏ qua bất cứ lúc nào và xem lại từ menu chính.'},
  {icon:'👀',section:'Khách hàng',title:'1. Đọc card khách',
    text:'Mỗi khách hiện một card vàng có:\n• Tên (đỏ = khách quen) + emoji nhân vật\n• Món gọi (món chính, đôi khi + nước)\n• Vòng kiên nhẫn (số giây + màu)\n• Đặc điểm ngắn (vai trò trong đời sống Việt)\n• Badge ⭐ nếu là khách quen của Cụ Ông\n\nClick vào card để CHỌN khách trước khi phục vụ — viền vàng = đang chọn.'},
  {icon:'⏱',section:'Khách hàng',title:'2. Vòng kiên nhẫn',
    text:'Vòng tròn quanh số giây cho biết thời gian khách sẽ chờ:\n• 🟢 Xanh (>60%): thoải mái\n• 🟡 Vàng (30–60%): nên nhanh tay\n• 🔴 Đỏ (<30%): cấp bách — header sẽ NHÁY ĐỎ\n\nHết kiên nhẫn = khách bỏ đi, mất danh tiếng + điểm. Khách quen mất 2 danh tiếng, khách bí ẩn mất 3.'},
  {icon:'📖',section:'Nấu ăn',title:'3. Sổ công thức',
    text:'Panel bên phải có "Sổ công thức" liệt kê các món đã mở khóa:\n• Tên + emoji\n• Nguyên liệu cần\n• Giá bán + thời gian nấu + điểm\n\nMón "Bún dọc mùng" có ⭐ đỏ — đây là món signature gia truyền của Cụ Ông, thưởng +20% giá. Nhiều món mở dần qua chương (Phở từ ch.4, Bún bò Huế từ ch.8, Cơm tấm từ ch.12...).'},
  {icon:'🥕',section:'Nấu ăn',title:'4. Cho nguyên liệu vào nồi',
    text:'Bên dưới sổ công thức là nguyên liệu — chỉ hiện những thứ thuộc món đã mở khóa.\n\nCách dùng:\n• Click nguyên liệu → vào nồi (tag emoji hiện trên nồi)\n• Tối đa 5 nguyên liệu/lần, không trùng\n• Đủ + đúng công thức → nút "🔥 Nấu nồi" sáng + công thức tương ứng được highlight xanh\n• Nhấn "Nấu" → nồi bắt đầu chạy progress bar\n\n⚠️ Đang nấu KHÔNG được đổ nồi — phải đợi xong rồi mới quyết. Nếu đổ món đã nấu xong → mất 10k chi phí.'},
  {icon:'🔥',section:'Nấu ăn',title:'5. Mini-game Nướng chả',
    text:'Bún chả cần CẢ nồi nước chấm + chả nướng. Lò than ở bên phải nồi:\n\n1. Click 🍖 chả → vào lò (lò bốc lửa)\n2. Đợi thanh đỏ vào VÙNG XANH (40–60%) → bấm "🔄 Lật" — đúng = PERFECT, lệch = good/early/late\n3. Đợi thanh quay lại vùng xanh → bấm "✋ Gắp"\n4. Cả 2 lần đều PERFECT → chả vàng ruộm + thưởng +15% giá\n\n💀 Quá 100% = CHÁY ĐEN. Bấm "🗑 Bỏ chả" để hủy mất 8k và làm lại.\n\n💡 Tip: Nâng cấp Lò nướng làm vùng PERFECT rộng hơn (37–63% rồi 33–67%).'},
  {icon:'🍽',section:'Phục vụ',title:'6. Phục vụ đúng cách',
    text:'Quy trình ĐÚNG:\n1. CLICK chọn khách (viền vàng)\n2. Đảm bảo món trong nồi khớp đơn khách\n3. Pha nước nếu khách gọi (xem mục 7)\n4. Nhấn "🍽 Phục vụ"\n\nKết quả:\n• Đúng món: tiền + điểm + tip (nếu khách quen) + speed bonus (nếu kiên nhẫn còn >70%)\n• Sai món: -5 điểm, reset streak, khách báo "không phải món tôi gọi"\n• Khách bí ẩn lần đầu: +30k bonus + mở khóa câu chuyện'},
  {icon:'🥤',section:'Pha nước',title:'7. Khu pha nước',
    text:'Khu pha nước (gradient xanh) ở panel phải, bên dưới sổ công thức.\n\n5 công thức cơ bản:\n• Trà đá = 🍵 Trà + 🧊 Đá (2s)\n• Trà tắc = 🍵 + 🍋 Tắc + 🧊 (3s)\n• Nước mía = 🎋 Mía + 🧊 (4s)\n• Cà phê sữa đá = ☕ Cà phê + 🥛 Sữa đặc + 🧊 (4s)\n• Rau má = 🌿 Lá rau má + 🧊 (3s)\n\nMỗi nước mở khóa theo chương. Click công thức để xem nguyên liệu cần.'},
  {icon:'🥃',section:'Pha nước',title:'8. Đúng/sai/thiếu nước',
    text:'Khách thường gọi món + 1 nước. Cách xử lý:\n\n✅ Đúng nước (pha + match đơn): cộng giá nước + combo bonus 5% giá món + tip cao hơn. Lễ hội cộng thêm.\n❌ Sai nước (đã pha nhưng không khớp): MẤT 3.000đ chi phí, -2 điểm, KHÔNG bonus. Món chính vẫn được tính đúng.\n⚪ Thiếu nước (không pha): -1 điểm, mất bonus. Món chính vẫn OK.\n\n💡 Sai nước không fail toàn đơn — đừng panic, tiếp tục phục vụ. Tốt nhất: kiểm tra đơn khách kỹ trước khi cho nguyên liệu vào cốc.'},
  {icon:'⭐',section:'Khách đặc biệt',title:'9. Khách quen & khách Tây',
    text:'Khách quen có badge ⭐, tip cao + thoại riêng:\n• 👴 Bác Tâm (bún dọc mùng, ×1.3) — bạn cũ Cụ Ông\n• 👩‍💼 Cô Lan (bánh mì, ×1.5) — doanh nhân vội\n• 🧔 John (bún chả, ×1.7) — Tây ba lô Mỹ\n\nKhách Tây mở dần (Anna, Marco, Kenji, Sophie, David) — tip 1.3-1.8, có sở thích vùng miền riêng.\n\nKhách Việt vai phụ: sinh viên, công nhân, cô bán hoa, xe ôm, bà cụ chợ, shipper — mỗi người một câu chuyện nhỏ.'},
  {icon:'🌟',section:'Khách đặc biệt',title:'10. Khách bí ẩn',
    text:'Hiếm khi xuất hiện (5–12% rate, cao hơn ở chương sau):\n• 📱 Linh Review — food blogger, gợi ý món hot\n• 🧳 Chú Phúc — Việt kiều tìm vị quê, kiên nhẫn cao\n• 🎩 Khách im lặng — gọi món bằng câu thơ, mặc định = bún chả\n\nPhục vụ đúng LẦN ĐẦU mỗi khách → mở khóa câu chuyện riêng (xem trong Sổ tay quán) + bonus 30.000đ + 20⭐.'},
  {icon:'⚠',section:'Khách đặc biệt',title:'11. Boss Level',
    text:'Cuối mỗi chương có Boss với viền HỒNG nháy + ribbon "⚠️ BOSS":\n• Ch.1: 🧐 Nhà phê bình Tuấn — kén ăn, kiên nhẫn 35s\n• Ch.2: 👨‍🍳 Đầu bếp Khang — đối thủ Cụ Ông, ghét chả cháy (-100k mỗi lần cháy!)\n• Ch.3: 🏆 Iron Chef Việt — finale, tip ×3.0 nếu happy\n\n🚨 ĐỪNG để Boss bỏ đi — sẽ thua CẢ ngày bất kể đã phục vụ bao nhiêu khách khác. Khi Boss spawn: header glow hồng, ưu tiên xử lý ngay.'},
  {icon:'🌧',section:'Sự kiện',title:'12. Sự kiện ngày',
    text:'Một số ngày có sự kiện đặc biệt (hiện trong story overlay):\n• 🌧 Mưa rào — khách đến chậm, hợp món nóng\n• 🎑 Lễ hội — 3 khách spawn cùng lúc, combo +20%\n• ⚡ Giờ cao điểm — khách đến liên tục\n• ☀️ Peak — kiên nhẫn -20%\n• 🌡 Ngày nóng — giá nước +30% (cơ hội kiếm tiền)\n• ⚡ Mất điện — cookTime ×1.5\n• 🌏 Đoàn du khách — chủ yếu khách Tây\n\nMỗi sự kiện đòi chiến lược khác. Đọc story trước ngày để chuẩn bị.'},
  {icon:'🛒',section:'Tiến trình',title:'13. Cửa hàng nâng cấp',
    text:'Cuối ngày → "🛒 Cửa hàng nâng cấp". 7 nâng cấp đa cấp (2-3 cấp/loại):\n• 🔥 Bếp ga — nấu nhanh -15→38%\n• 📋 Bảng menu — giá +8→22%\n• 🌀 Quạt mát — thêm 20→50s mỗi ngày\n• 🪑 Bàn ghế — thêm 1-2 khách cùng lúc\n• 🏆 Lò nướng — vùng PERFECT rộng hơn\n• ✨ Biển hiệu — thêm khách/ngày\n• 💳 Thẻ khách quen — kiên nhẫn quen +20→52%\n\n💡 Nâng cấp cấp cao mở theo chương — đừng cố mua hết ở ch.1. Ưu tiên Bếp ga + Bảng menu trước.'},
  {icon:'🎑',section:'Mode khác',title:'14. Lễ hội ẩm thực (endless)',
    text:'Menu chính → "🎑 Lễ hội ẩm thực":\n• Khách đến vô hạn\n• Mỗi 60s tăng độ khó (spawn nhanh hơn)\n• Mở khóa toàn bộ món + nước\n• Combo bonus +20%\n• Khi 5 khách bỏ đi → end. Có warning ở strike 3 và 4\n• Best score được lưu, 30% doanh thu vào ngân sách\n• Khách bí ẩn xuất hiện gấp đôi (18% rate)\n\n💡 Tốt cho luyện tay + cày tiền nâng cấp + săn thành tựu "🎑 Vua lễ hội".'},
  {icon:'📔',section:'Mode khác',title:'15. Sổ tay quán',
    text:'Menu chính → "📔 Sổ tay quán" có 4 tab:\n• 🏅 Thành tựu — 20 thành tựu để săn (1 ẩn)\n• 👥 Khách đã gặp — 21 NPC + số lần gặp\n• 📖 Câu chuyện — mở khi phục vụ khách bí ẩn lần đầu\n• 📊 Thống kê — tổng tiền, danh tiếng, sao, nước pha đúng, etc.\n\nKhám phá để biết bạn đang đứng ở đâu trong hành trình.'},
  {icon:'🏆',section:'Bắt đầu',title:'Bắt đầu hành trình',
    text:'Mục tiêu Ngày 1: phục vụ ít nhất 4/6 khách. Mỗi ngày Cụ Ông nhận xét cuối ngày qua mục di nguyện.\n\nNguyên tắc vàng:\n• Khách quen + bí ẩn ưu tiên\n• Boss tuyệt đối không để bỏ đi\n• Streak liên tục cho điểm cộng\n• Sai nước không fail — đừng hoảng\n• Tiết kiệm chi phí: ít cháy chả + ít đổ nồi\n\nCụ Ông luôn dõi theo từ trên cao. Chúc may mắn cháu!'}
];
