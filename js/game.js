// === Core gameplay loop ===
// startGame, tickTimer, customer spawn/patience, cooking + grill
// + drink station mechanics, serve logic, end-level scoring.

// ─────────────────────────────────────────────
//  GAME INIT
// ─────────────────────────────────────────────

function startGame(){
  const lv=LEVELS[PROG.levelIdx]||LEVELS[0];
  // clear old intervals + any leftover notify timers + achievement queue
  [timerInterval,spawnInterval,patienceInterval,grillInterval,drinkInterval,blackoutInterval].forEach(iv=>{if(iv)clearInterval(iv);});
  timerInterval=spawnInterval=patienceInterval=grillInterval=drinkInterval=blackoutInterval=null;
  clearPendingNotifyTimers();
  _sessionAchievementQueue=[];
  // reset state
  const tTime=lv.time+[0,20,35,50][upgradeLevel('extra_time')];
  const tCustomers=lv.customers+upgradeLevel('extra_seat')+upgradeLevel('neon_sign');
  G.money=0;G.score=0;G.timeRemaining=tTime;G._levelTime=tTime;G._npcRate=lv.npcRate;G._cost=lv.cost;
  G.customersServed=0;G.customersLeft=0;G.totalCustomers=tCustomers;G.customersSpawned=0;G.customers=[];
  G.pot={ingredients:[],status:'idle',finishedDish:null};
  G.grill={status:'idle',progress:0,flipped:false,quality:null,flipQuality:null};
  G.drinkStation={ingredients:[],status:'idle',finishedDrink:null};
  G.selectedCustomer=null;G.isPaused=false;G.isGameOver=false;
  G.perfectGrills=0;G.burntGrills=0;G.streak=0;G.maxStreak=0;
  G.drinksServedCorrect=0;G.isFestival=false;G.recipeOverallOverride=null;
  G.npcServed={bac_tam:0,co_lan:0,john:0};
  // hide all, show game
  document.querySelectorAll('.screen,.end-screen,.cutscene').forEach(el=>el.classList.remove('active'));
  document.getElementById('gameScreen').classList.add('active');
  // update chapter bar
  const chNames=['','🏮 Chương 1: Hà Nội','🌸 Chương 2: Hội An','⭐ Chương 3: Sài Gòn'];
  document.getElementById('chapterBarInfo').innerHTML=`<span class="chapter-bar-name">${chNames[lv.ch]}</span> · Chương ${lv.overall||PROG.levelIdx+1}: ${lv.name}`;
  document.getElementById('totalDisplay').textContent=tCustomers;
  const mm=Math.floor(tTime/60),ss=tTime%60;
  document.getElementById('timeDisplay').textContent=`${mm}:${ss.toString().padStart(2,'0')}`;
  document.getElementById('timerBar').style.width='100%';
  buildDayPips();resetPot();resetGrill();resetDrinkStation();
  renderIngredients();renderRecipes();renderDrinks();renderDrinkIngredients();renderNPCList();updateUI();
  G._event=lv.event||null;
  G._bossNpc=lv.bossNpc||null;
  G._bossSpawned=false;
  G._burnPenalty=false;
  showStoryOverlay(lv,()=>{
    setTimeout(()=>spawnCustomer(),900);
    if(lv.event==='festival'){setTimeout(()=>spawnCustomer(),1500);}  // 2 customers (was 3) — first at 900ms, second at 1500ms
    else{setTimeout(()=>spawnCustomer(),4200);}
    const maxActive=3+(hasUpgrade('extra_seat')?1:0);
    const spawnMs=lv.event==='rush'||lv.event==='peak'?7000:10000;
    spawnInterval=setInterval(()=>{
      if(G.isPaused||G.isGameOver)return;
      if(G.customersSpawned<G.totalCustomers&&G.customers.filter(c=>!c.served&&!c.left).length<maxActive)spawnCustomer();
    },spawnMs);
    timerInterval=setInterval(()=>{if(!G.isPaused&&!G.isGameOver)tickTimer();},1000);
    patienceInterval=setInterval(()=>{if(!G.isPaused&&!G.isGameOver)tickPatience();},1000);
  });
}

function buildDayPips(){
  const c=document.getElementById('dayPips');c.innerHTML='';
  const lv=LEVELS[PROG.levelIdx]||LEVELS[0];
  const chStart=(lv.ch-1)*5;
  for(let i=0;i<5;i++){
    const idx=chStart+i;
    const done=PROG.levelStars[idx]!==undefined;
    const cur=idx===PROG.levelIdx;
    const p=document.createElement('div');
    p.className='day-pip'+(cur?' current':done?' done':'');
    c.appendChild(p);
  }
}

// ─────────────────────────────────────────────
//  GAME TIMER
// ─────────────────────────────────────────────

function tickTimer(){
  G.timeRemaining--;
  const m=Math.floor(G.timeRemaining/60),s=G.timeRemaining%60;
  document.getElementById('timeDisplay').textContent=`${m}:${s.toString().padStart(2,'0')}`;
  document.getElementById('timerBar').style.width=(G.timeRemaining/(G._levelTime||180)*100)+'%';
  if(G.timeRemaining<=0){endLevel('timeout');return;}
  checkEndCondition();
}

// ─────────────────────────────────────────────
//  SPAWN CUSTOMERS
// ─────────────────────────────────────────────

function currentOverall(){
  if(G.recipeOverallOverride)return G.recipeOverallOverride;
  return LEVELS[PROG.levelIdx]?.overall||1;
}

function isUnlockedItem(item){
  return !item.availableFrom||item.availableFrom<=currentOverall();
}

function availableRecipeEntries(){
  return Object.entries(RECIPES).filter(([,r])=>isUnlockedItem(r));
}

function availableRecipeKeys(){
  return availableRecipeEntries().map(([k])=>k);
}

function availableDrinkKeys(){
  return Object.keys(DRINKS).filter(k=>isUnlockedItem(DRINKS[k]));
}

function visibleIngredientKeys(){
  const keys=new Set();
  availableRecipeEntries().forEach(([,r])=>{
    r.ingredients.forEach(k=>keys.add(k));
    if(r.needsGrill&&r.grillIngredient)keys.add(r.grillIngredient);
  });
  return [...keys].filter(k=>INGREDIENTS[k]&&!INGREDIENTS[k].isDrink);
}

function visibleDrinkIngredientKeys(){
  const keys=new Set();
  availableDrinkKeys().forEach(k=>{
    (DRINKS[k].ingredients||[]).forEach(ing=>keys.add(ing));
  });
  return [...keys].filter(k=>INGREDIENTS[k]);
}

function chooseNpcKey(existing){
  const lv=LEVELS[PROG.levelIdx]||LEVELS[0];
  const r=Math.random();
  const bossAt=Math.floor(G.totalCustomers*0.4);
  if(G._bossNpc&&G.customersSpawned===bossAt&&!G._bossSpawned&&!existing.includes(G._bossNpc)){
    G._bossSpawned=true;return G._bossNpc;
  }
  if(G.customersSpawned===0&&!G.isFestival)return 'bac_tam';
  const mystery=['food_blogger','viet_kieu','khach_im_lang'].filter(k=>!existing.includes(k));
  const mysteryRate=G.isFestival?0.18:lv.overall>=6?0.10:lv.overall>=3?0.05:0;
  if(mystery.length&&r<mysteryRate)return mystery[Math.floor(Math.random()*mystery.length)];
  const regulars=['bac_tam','co_lan','john'];
  const locals=['sinh_vien','bac_cong_nhan','co_ban_hoa','chu_xe_om','ba_cu_cho','anh_shipper'];
  const ovr=G.isFestival?15:lv.overall;
  const tourists=ovr>=6?['anna','marco','kenji','sophie','david']:ovr>=4?['anna','marco','kenji']:[];
  // Tour event: bias toward tourists
  if(G._event==='tour'&&tourists.length&&r<0.65){
    const pool=tourists.filter(k=>!existing.includes(k));
    if(pool.length)return pool[Math.floor(Math.random()*pool.length)];
  }
  let pool=r<(G._npcRate||0.6)?regulars.concat(locals,tourists):locals.concat(tourists,'khach_thuong');
  pool=pool.filter(k=>!existing.includes(k));
  return pool.length?pool[Math.floor(Math.random()*pool.length)]:'khach_thuong';
}

function spawnCustomer(){
  if(G.customersSpawned>=G.totalCustomers)return;
  const existing=G.customers.filter(c=>!c.served&&!c.left).map(c=>c.npcKey);
  let npcKey=chooseNpcKey(existing);
  const npc=NPCS[npcKey];
  // Filter recipe to available dishes for current chapter
  const availRecipes=availableRecipeKeys();
  let recipe=npc.favorite&&availRecipes.includes(npc.favorite)?npc.favorite:availRecipes[Math.floor(Math.random()*availRecipes.length)];
  if(npcKey==='khach_im_lang'&&availRecipes.includes('bun_cha'))recipe='bun_cha';
  const drinkKeys=availableDrinkKeys();
  const wantsDrink=drinkKeys.length&&(Math.random()<0.25||npc.drink);
  const drink=wantsDrink&&(npc.drink&&drinkKeys.includes(npc.drink)?npc.drink:drinkKeys[Math.floor(Math.random()*drinkKeys.length)]);
  let pat=npc.patience;
  if(drink&&DRINKS[drink]?.patienceBoost)pat+=DRINKS[drink].patienceBoost;
  const lcLv=upgradeLevel('loyal_card');
  if(npc.isRegular&&lcLv>0)pat=Math.floor(pat*[1,1.20,1.35,1.52][lcLv]);
  if(G._event==='peak')pat=Math.floor(pat*0.8);  // rush/peak: shorter patience
  // heat day: keep drink price +30% bonus, but no patience nerf — too punishing combined
  const c={
    id:Date.now()+Math.random(),npcKey,
    name:npc.name,emoji:npc.emoji,portrait:npc.portrait,trait:npc.trait,
    isRegular:npc.isRegular,isBoss:npc.isBoss||false,
    failOnLeave:npc.failOnLeave||false,
    tip:npc.tip,quotes:npc.quotes,
    order:recipe,drink:drink||null,patience:pat,maxPatience:pat,
  };
  PROG.metCustomers[npcKey]=(PROG.metCustomers[npcKey]||0)+1;
  saveProg();
  c.justSpawned=true;
  G.customers.push(c);G.customersSpawned++;
  renderCustomers();
  // Boss arrival is important — keep notify for boss only + body class for visual
  if(npc.isBoss){
    notify(`⚠️ BOSS đến quán — ${npc.name}: "${npc.quotes.arrive}"`,'error');
    document.body.classList.add('boss-active');
  }
  // Clear justSpawned cờ sau bubble fade (3.5s) để re-render không phát lại bubble
  setTimeout(()=>{c.justSpawned=false;},3600);
}

function updateBossActiveClass(){
  const bossStillIn=G.customers.some(c=>c.isBoss&&!c.served&&!c.left);
  document.body.classList.toggle('boss-active',bossStillIn);
}


// ─────────────────────────────────────────────
//  PATIENCE
// ─────────────────────────────────────────────

function tickPatience(){
  let changed=false;
  G.customers.forEach(c=>{
    if(c.served||c.left)return;
    c.patience--;changed=true;
    if(c.patience<=0){
      c.left=true;G.customersLeft++;
      if(c.isBoss)updateBossActiveClass();
      G.streak=0;updateStreak();
      const angryLine=(c.quotes&&c.quotes.angry)||'Tôi đi quán khác đây!';
      notify(`😡 ${c.name}: "${angryLine}"`, 'error');
      G.score=Math.max(0,G.score-(c.isRegular?15:5));
      PROG.reputation=Math.max(0,(PROG.reputation||0)-(c.isMystery?3:c.isRegular?2:1));
      saveProg();
      if(typeof checkAchievements==='function')checkAchievements({type:'leave',customer:c});
      // Festival strike warnings
      if(G.isFestival&&G._festivalLeftLimit){
        const remaining=G._festivalLeftLimit-G.customersLeft;
        if(remaining===2)notifyDelayed(800,()=>notify('⚠️ Còn 2 lần lỡ — cố lên!','warning'));
        else if(remaining===1)notifyDelayed(800,()=>notify('🚨 Lần lỡ cuối! Đừng để khách bỏ đi nữa!','error'));
      }
      if(c.failOnLeave){endLevel('boss_fled');return;}
      setTimeout(()=>{G.customers=G.customers.filter(x=>x.id!==c.id);renderCustomers();checkEndCondition();},1400);
    }
  });
  if(changed)renderCustomers();
  updateUI();
  // Rush feedback toggle
  const isRush=G.customers.some(c=>!c.served&&!c.left&&c.patience<=c.maxPatience*0.3);
  document.querySelector('.game-header')?.classList.toggle('rush',isRush);
}

function checkEndCondition(){
  if(G.customersServed+G.customersLeft>=G.totalCustomers)endLevel('done');
}

// ─────────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────────

function renderCustomers(){
  const list=document.getElementById('customersList');
  const active=G.customers.filter(c=>!c.served&&!c.left);
  if(active.length===0&&G.customersSpawned===0){list.innerHTML='<div class="customers-empty">Đang chờ khách đầu tiên...</div>';return;}
  list.innerHTML='';
  G.customers.forEach(c=>{
    const card=document.createElement('div');
    if(c.served){card.className='customer-card served';card.innerHTML=`<div class="customer-emoji">😊</div><div class="customer-name">${c.name}</div><div class="customer-order-label">"${c.quotes.happy}"</div>`;list.appendChild(card);return;}
    if(c.left){card.className='customer-card angry';card.innerHTML=`<div class="customer-emoji">😡</div><div class="customer-name">${c.name}</div><div class="customer-order-label">"${c.quotes.angry}"</div>`;list.appendChild(card);return;}
    card.className='customer-card'+(G.selectedCustomer===c.id?' selected':'');
    if(c.isBoss)card.dataset.boss='1';
    card.style.position='relative';
    card.onclick=()=>selectCustomer(c.id);
    const pct=(c.patience/c.maxPatience)*100;
    const ringColor=pct>60?'#4CAF50':pct>30?'#FFC107':'#f44336';
    const badge=c.isRegular?'<div class="customer-badge">⭐</div>':'';
    const drinkLine=c.drink?`<br><span style="color:#1976D2">${DRINKS[c.drink].emoji} ${DRINKS[c.drink].name}</span>`:'';
    const bubble=c.justSpawned&&c.quotes&&c.quotes.arrive?`<div class="customer-bubble">${c.quotes.arrive}</div>`:'';
    card.innerHTML=`
      ${bubble}
      ${badge}
      ${customerVisual(c)}
      <div class="customer-name${c.isRegular?' regular':''}">${c.name}</div>
      <div class="customer-order-label">${RECIPES[c.order].emoji} ${RECIPES[c.order].name}${drinkLine}</div>
      <div class="patience-ring-wrap">
        <div class="patience-ring" style="--ring-pct:${pct}%;--ring-color:${ringColor}" data-sec="${Math.ceil(c.patience)}s"></div>
      </div>
      <div class="customer-trait">${c.trait}</div>`;
    list.appendChild(card);
  });
  document.getElementById('servedDisplay').textContent=G.customersServed;
}

function customerVisual(c){
  if(!c.portrait)return `<div class="customer-emoji">${c.emoji}</div>`;
  return `<div class="customer-emoji customer-avatar has-portrait">
    <img class="customer-portrait" src="${c.portrait}" alt="${c.name}" loading="lazy" width="68" height="68" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
    <span class="portrait-fallback">${c.emoji}</span>
  </div>`;
}

function selectCustomer(id){
  G.selectedCustomer=id;renderCustomers();updateServeBtn();

  const c=G.customers.find(x=>x.id===id);
  if(c)notify(`✓ Chọn: ${c.name} · cần ${RECIPES[c.order].name}${c.drink?' + '+DRINKS[c.drink].name:''}`,'info');
}

function renderIngredients(){
  const grid=document.getElementById('ingredientsGrid');grid.innerHTML='';
  visibleIngredientKeys().forEach(k=>{
    const ing=INGREDIENTS[k];
    const div=document.createElement('div');
    div.className='ingredient'+(ing.special?' special':'');div.id='ing-'+k;
    div.onclick=()=>ing.needsGrill?putOnGrill(k):addIngredient(k);
    div.innerHTML=`<span class="ingredient-emoji">${ing.emoji}</span><div class="ingredient-name">${ing.name}</div>`;
    grid.appendChild(div);
  });
}

function renderRecipes(){
  const list=document.getElementById('recipeList');list.innerHTML='';
  availableRecipeEntries().forEach(([key,r])=>{
    const div=document.createElement('div');
    div.className='recipe-item'+(r.isSignature?' signature':'');
    div.id='recipe-'+key;
    const ings=r.ingredients.map(k=>`${INGREDIENTS[k].emoji} ${INGREDIENTS[k].name}`).join(' + ');
    const grillExtra=r.needsGrill?`<br><span style="color:#FF8A65">+ ${INGREDIENTS[r.grillIngredient].emoji} ${INGREDIENTS[r.grillIngredient].name} (nướng)</span>`:'';
    div.innerHTML=`
      ${r.isSignature?'<div><span class="recipe-tag sig">⭐ Đặc biệt</span></div>':''}
      <div class="recipe-name">${r.emoji} ${r.name}</div>
      <div class="recipe-ings">${ings}${grillExtra}</div>
      <div class="recipe-stats">
        <span class="recipe-stat">💰 ${r.price.toLocaleString('vi-VN')}đ</span>
        <span class="recipe-stat">⏱ ${r.cookTime}s</span>
        <span class="recipe-stat">⭐ ${r.score}đ</span>
      </div>`;
    list.appendChild(div);
  });
}

function renderDrinks(){
  const keys=availableDrinkKeys();
  const sec=document.getElementById('drinkSection');
  sec.style.display=keys.length?'':'none';
  const list=document.getElementById('drinkList');list.innerHTML='';
  keys.forEach(k=>{
    const d=DRINKS[k];
    const ingsLabel=(d.ingredients||[]).map(ing=>INGREDIENTS[ing]?INGREDIENTS[ing].emoji+' '+INGREDIENTS[ing].name:ing).join(' + ');
    const row=document.createElement('div');row.className='drink-row';row.id='drink-row-'+k;
    row.onclick=()=>highlightDrinkRecipe(k);
    row.innerHTML=`<div style="flex:1;min-width:0;"><div style="font-weight:600;">${d.emoji} ${d.name} <span style="color:var(--gold);font-weight:700;">${d.price.toLocaleString('vi-VN')}đ</span></div><div class="drink-row-recipe">${ingsLabel}</div></div>`;
    list.appendChild(row);
  });
}

function renderDrinkIngredients(){
  const grid=document.getElementById('drinkIngsGrid');if(!grid)return;
  grid.innerHTML='';
  visibleDrinkIngredientKeys().forEach(k=>{
    const ing=INGREDIENTS[k];
    const div=document.createElement('div');
    div.className='drink-ing';div.id='dring-'+k;
    div.onclick=()=>addDrinkIng(k);
    div.innerHTML=`<span class="drink-ing-emoji">${ing.emoji}</span><span class="drink-ing-name">${ing.name}</span>`;
    grid.appendChild(div);
  });
}

function highlightDrinkRecipe(key){
  document.querySelectorAll('.drink-row').forEach(el=>el.classList.remove('drink-active'));
  if(key)document.getElementById('drink-row-'+key)?.classList.add('drink-active');
}

function findDrinkMatch(){
  const ings=[...G.drinkStation.ingredients].sort().join(',');
  return availableDrinkKeys().find(k=>[...(DRINKS[k].ingredients||[])].sort().join(',')===ings)||null;
}

function addDrinkIng(key){
  if(G.drinkStation.status==='preparing'||G.drinkStation.status==='done'){notify('Đang pha rồi!','warning');return;}
  if(G.drinkStation.ingredients.includes(key)){notify('Đã có nguyên liệu này.','warning');return;}
  if(G.drinkStation.ingredients.length>=4){notify('Quá nhiều nguyên liệu!','error');return;}
  G.drinkStation.ingredients.push(key);
  document.getElementById('dring-'+key)?.classList.add('in-cup');
  updateDrinkCup();
  const match=findDrinkMatch();
  if(match){
    document.getElementById('drinkMixBtn').disabled=false;
    document.getElementById('drinkStatus').textContent=`✅ Đủ cho: ${DRINKS[match].name}!`;
    highlightDrinkRecipe(match);
  }
}

function updateDrinkCup(){
  const tags=document.getElementById('drinkCupTags');tags.innerHTML='';
  G.drinkStation.ingredients.forEach(k=>{
    const t=document.createElement('span');t.className='drink-cup-tag';t.textContent=INGREDIENTS[k].emoji;t.title=INGREDIENTS[k].name;tags.appendChild(t);
  });
  if(!G.drinkStation.ingredients.length){
    document.getElementById('drinkStatus').textContent='Chọn nguyên liệu để pha';
    document.getElementById('drinkMixBtn').disabled=true;highlightDrinkRecipe(null);
  } else if(!findDrinkMatch()){
    document.getElementById('drinkStatus').textContent=`${G.drinkStation.ingredients.length} nguyên liệu — chưa khớp công thức`;
    document.getElementById('drinkMixBtn').disabled=true;
  }
}

function mixDrink(){
  const drink=findDrinkMatch();
  if(!drink){notify('Nguyên liệu chưa khớp công thức nước!','error');return;}
  G.drinkStation.status='preparing';G.drinkStation.finishedDrink=drink;
  document.getElementById('drinkStation').classList.add('preparing');
  document.getElementById('drinkMixBtn').disabled=true;
  document.getElementById('drinkStatus').textContent='🥤 Đang pha...';
  const t=DRINKS[drink].mixTime||3;let e=0;
  if(drinkInterval)clearInterval(drinkInterval);
  drinkInterval=setInterval(()=>{
    if(G.isPaused){return;}
    e+=0.1;const p=Math.min(100,e/t*100);
    document.getElementById('drinkProgressBar').style.width=p+'%';
    if(e>=t){
      clearInterval(drinkInterval);drinkInterval=null;
      G.drinkStation.status='done';
      document.getElementById('drinkStation').classList.remove('preparing');
      document.getElementById('drinkStation').classList.add('done');
      document.getElementById('drinkStatus').textContent=`✨ ${DRINKS[drink].name} — sẵn sàng!`;
      notify(`✅ Pha xong ${DRINKS[drink].name}!`,'success');
    }
  },100);
}

function discardDrink(){
  if(G.drinkStation.status==='preparing'){notify('Đang pha, đợi xong rồi đổ.','warning');return;}
  if(!G.drinkStation.ingredients.length&&G.drinkStation.status==='idle'){notify('Ly đang trống.','info');return;}
  if(G.drinkStation.status==='done'){
    G.money=Math.max(0,G.money-3000);
    notify('Đã đổ ly đã pha. Mất 3.000đ nguyên liệu.','warning');
    updateUI();
  } else {
    notify('Đã đổ ly và làm lại.','info');
  }
  resetDrinkStation();
}

function resetDrinkStation(){
  G.drinkStation={ingredients:[],status:'idle',finishedDrink:null};
  if(drinkInterval){clearInterval(drinkInterval);drinkInterval=null;}
  const st=document.getElementById('drinkStation');if(st){st.classList.remove('preparing','done');}
  const bar=document.getElementById('drinkProgressBar');if(bar)bar.style.width='0%';
  const stat=document.getElementById('drinkStatus');if(stat)stat.textContent='Chọn nguyên liệu để pha';
  const tags=document.getElementById('drinkCupTags');if(tags)tags.innerHTML='';
  const btn=document.getElementById('drinkMixBtn');if(btn)btn.disabled=true;
  document.querySelectorAll('.drink-ing.in-cup').forEach(el=>el.classList.remove('in-cup'));
  highlightDrinkRecipe(null);
}

function renderNPCList(){
  document.getElementById('npcList').innerHTML=`
    <div class="npc-card"><div class="npc-emoji">👴</div><div class="npc-text"><div class="npc-name">Bác Tâm</div><div class="npc-detail">Thích 🍜 Bún dọc mùng · Kiên nhẫn 75s · Tip ×1.3</div></div></div>
    <div class="npc-card"><div class="npc-emoji">👩‍💼</div><div class="npc-text"><div class="npc-name">Cô Lan</div><div class="npc-detail">Thích 🥖 Bánh mì · Vội (40s) · Tip ×1.5</div></div></div>
    <div class="npc-card"><div class="npc-emoji">🧔</div><div class="npc-text"><div class="npc-name">John</div><div class="npc-detail">Thích 🍢 Bún chả · Kiên nhẫn 90s · Tip ×2.0</div></div></div>
    <div class="npc-card"><div class="npc-emoji">👱‍♀️</div><div class="npc-text"><div class="npc-name">Khách du lịch</div><div class="npc-detail">Anna, Marco, Kenji · khẩu vị riêng · tip tốt hơn khách thường</div></div></div>
    <div class="npc-card"><div class="npc-emoji">📱</div><div class="npc-text"><div class="npc-name">Khách bí ẩn</div><div class="npc-detail">Tỉ lệ thấp · thưởng danh tiếng, tiền và câu chuyện nếu phục vụ tốt</div></div></div>`;
}

// ─────────────────────────────────────────────
//  COOKING
// ─────────────────────────────────────────────

function addIngredient(key){
  if(G.pot.status==='cooking'||G.pot.status==='done'){notify('Đang nấu rồi!','warning');return;}
  if(G.pot.ingredients.includes(key)){notify('Nguyên liệu đã có.','warning');return;}
  if(G.pot.ingredients.length>=5){notify('Quá nhiều nguyên liệu!','error');return;}
  G.pot.ingredients.push(key);
  document.getElementById('ing-'+key).classList.add('in-pot');
  updatePot();
  const match=findMatch();
  if(match){
    document.getElementById('cookBtn').disabled=false;
    document.getElementById('potStatus').textContent=`✅ Đủ cho: ${RECIPES[match].name}!`;
    highlightRecipe(match);
  }
}

function findMatch(){
  const ings=[...G.pot.ingredients].sort().join(',');
  return availableRecipeKeys().find(k=>[...RECIPES[k].ingredients].sort().join(',')===ings)||null;
}

function highlightRecipe(key){
  document.querySelectorAll('.recipe-item').forEach(el=>el.classList.remove('active'));
  if(key)document.getElementById('recipe-'+key)?.classList.add('active');
}

function updatePot(){
  const tags=document.getElementById('potIngredients');tags.innerHTML='';
  G.pot.ingredients.forEach(k=>{
    const t=document.createElement('span');t.className='pot-ing-tag';t.textContent=INGREDIENTS[k].emoji;t.title=INGREDIENTS[k].name;tags.appendChild(t);
  });
  if(!G.pot.ingredients.length){document.getElementById('potStatus').textContent='Chờ nguyên liệu';document.getElementById('cookBtn').disabled=true;highlightRecipe(null);}
  else if(!findMatch()){document.getElementById('potStatus').textContent=`${G.pot.ingredients.length} nguyên liệu — chưa khớp`;document.getElementById('cookBtn').disabled=true;}
}

function startCooking(){
  const recipe=findMatch();
  if(!recipe){notify('Nguyên liệu chưa khớp công thức!','error');return;}
  G.pot.status='cooking';G.pot.finishedDish=recipe;
  document.getElementById('pot').classList.add('cooking');
  document.getElementById('cookBtn').disabled=true;
  document.getElementById('potStatus').textContent='🔥 Đang nấu...';
  let t=RECIPES[recipe].cookTime*[1,0.85,0.75,0.62][upgradeLevel('faster_cook')];
  if(G._event==='blackout')t*=1.5;  // blackout: cook 50% slower
  let e=0;
  const iv=setInterval(()=>{
    if(G.isPaused)return;
    e+=0.1;const p=Math.min(100,e/t*100);
    document.getElementById('potProgressBar').style.width=p+'%';
    if(e>=t){
      clearInterval(iv);G.pot.status='done';
      document.getElementById('pot').classList.remove('cooking');document.getElementById('pot').classList.add('done');
      document.getElementById('potStatus').textContent=`✨ ${RECIPES[recipe].name} — Sẵn sàng!`;
      updateServeBtn();notify(`✅ Nấu xong ${RECIPES[recipe].name}!`,'success');
    }
  },100);
}

// ─────────────────────────────────────────────
//  GRILL
// ─────────────────────────────────────────────

function putOnGrill(key){
  if(G.grill.status!=='idle'){notify('Lò đang bận!','warning');return;}
  if(key!=='cha'){notify('Chỉ chả mới cần nướng.','warning');return;}
  G.grill.status='grilling';G.grill.progress=0;G.grill.flipped=false;
  document.getElementById('grill').classList.add('grilling');
  document.getElementById('grillStatus').textContent='🔥 Mặt 1 đang nướng...';
  document.getElementById('grillHint').textContent='Nhấn "Lật" khi vào vùng XANH (40–60%)';
  document.getElementById('grillFlipBtn').disabled=false;
  const gwLv=upgradeLevel('grill_wide');
  const pzW=gwLv>=2?'34%':gwLv>=1?'26%':'20%',pzL=gwLv>=2?'33%':gwLv>=1?'37%':'40%';
  const gwLabel=gwLv>=2?'33–67%':gwLv>=1?'37–63%':'40–60%';
  document.getElementById('grillPerfectZone').style.left=pzL;document.getElementById('grillPerfectZone').style.width=pzW;
  document.getElementById('grillHint').textContent=`Nhấn "Lật" khi vào vùng XANH (${gwLabel})`;
  if(grillInterval)clearInterval(grillInterval);
  grillInterval=setInterval(()=>{
    if(G.isPaused||G.grill.status==='idle'){clearInterval(grillInterval);return;}
    G.grill.progress+=0.8;
    document.getElementById('grillProgressBar').style.width=G.grill.progress+'%';
    if(G.grill.progress>112){
      G.grill.status='ruined';G.grill.quality='burnt';G.burntGrills++;
      clearInterval(grillInterval);
      document.getElementById('grill').classList.remove('grilling');
      document.getElementById('grillStatus').textContent='💀 CHÁY ĐEN!';
      document.getElementById('grillHint').textContent='Nhấn "Bỏ chả" để hủy và làm lại.';
      document.getElementById('grillProgressBar').style.background='#212121';
      document.getElementById('grillFlipBtn').disabled=true;
      const gb=document.getElementById('grillTakeBtn');gb.disabled=false;gb.textContent='🗑 Bỏ chả';
      notify('🔥 Chả bị cháy!','error');
      if(G._bossNpc==='khang'){G.money=Math.max(0,G.money-30000);notify('👨‍🍳 Khang phạt: -30.000đ vì cháy chả!','error');updateUI();}
    }
  },100);
}

function flipGrill(){
  if(G.grill.status!=='grilling'||G.grill.flipped)return;
  G.grill.flipped=true;const p=G.grill.progress;
  const gwLv2=upgradeLevel('grill_wide');
  const gMin=gwLv2>=2?33:gwLv2>=1?37:40,gMax=gwLv2>=2?67:gwLv2>=1?63:60;
  let q;
  if(p>=gMin&&p<=gMax){q='perfect';notify('✨ Lật PERFECT!','success');}
  else if(p>=30&&p<=70){q='good';notify('👍 Lật tốt','info');}
  else if(p<30){q='too_early';notify('⚠️ Lật quá sớm','warning');}
  else{q='too_late';notify('⚠️ Lật quá muộn','warning');}
  G.grill.flipQuality=q;G.grill.progress=0;
  document.getElementById('grillProgressBar').style.width='0%';
  document.getElementById('grillStatus').textContent='🔥 Mặt 2 đang nướng...';
  document.getElementById('grillHint').textContent='Nhấn "Gắp" khi vào vùng XANH (40–60%)';
  document.getElementById('grillFlipBtn').disabled=true;document.getElementById('grillTakeBtn').disabled=false;
}

function takeGrill(){
  if(G.grill.status==='ruined'){
    G.money=Math.max(0,G.money-8000);
    notify('Đã bỏ mẻ chả hỏng. Mất 8.000đ nguyên liệu.','warning');
    updateUI();resetGrill();return;
  }
  if(G.grill.status!=='grilling'||!G.grill.flipped){notify('Chưa lật chả!','warning');return;}
  if(grillInterval)clearInterval(grillInterval);
  const p=G.grill.progress;
  const gwLv3=upgradeLevel('grill_wide');
  const tMin=gwLv3>=2?33:gwLv3>=1?37:40,tMax=gwLv3>=2?67:gwLv3>=1?63:60;
  let tq=p>=tMin&&p<=tMax?'perfect':p>=30&&p<=70?'good':p<30?'undercooked':'overcooked';
  const fq=G.grill.flipQuality;
  let final;
  if(fq==='perfect'&&tq==='perfect'){final='perfect';G.perfectGrills++;G.score+=5;notify('🌟 PERFECT! Chả vàng ruộm!','success');}
  else if((fq==='perfect'||fq==='good')&&(tq==='perfect'||tq==='good')){final='good';G.score+=2;notify('👍 Chả nướng tốt!','success');}
  else if(fq==='too_early'||tq==='undercooked'){final='undercooked';notify('⚠️ Chả còn sống','warning');}
  else{final='overcooked';notify('⚠️ Chả hơi cháy','warning');}
  G.grill.status=(final==='perfect'||final==='good')?'done':'ruined';G.grill.quality=final;
  document.getElementById('grill').classList.remove('grilling');
  const tb=document.getElementById('grillTakeBtn');
  document.getElementById('grillStatus').textContent=`🍖 Chả ${final.toUpperCase()}${G.grill.status==='done'?' — sẵn sàng!':' — không đạt!'}`;
  if(G.grill.status==='done'){
    document.getElementById('grillHint').textContent='Tự động dùng khi phục vụ Bún chả';
    tb.disabled=true;tb.textContent='✋ Gắp';
  } else {
    document.getElementById('grillHint').textContent='Nhấn "Bỏ chả" để hủy và nướng lại';
    tb.disabled=false;tb.textContent='🗑 Bỏ chả';
  }
  updateUI();
}

function resetGrill(){
  G.grill={status:'idle',progress:0,flipped:false,quality:null,flipQuality:null};
  if(grillInterval)clearInterval(grillInterval);
  document.getElementById('grill').classList.remove('grilling');
  document.getElementById('grillProgressBar').style.width='0%';
  document.getElementById('grillProgressBar').style.background='linear-gradient(90deg,#ff5722,#ff9800,#ffc107)';
  document.getElementById('grillStatus').textContent='🔥 Lò than nguội';
  document.getElementById('grillHint').textContent='Đặt chả vào lò để nướng';
  const rtb=document.getElementById('grillTakeBtn');
  document.getElementById('grillFlipBtn').disabled=true;rtb.disabled=true;rtb.textContent='✋ Gắp';
}

// ─────────────────────────────────────────────
//  SERVE
// ─────────────────────────────────────────────

function updateServeBtn(){
  const btn=document.getElementById('serveBtn');
  const ready=G.pot.status==='done'&&G.selectedCustomer;
  btn.disabled=!ready;
  if(ready)btn.classList.add('serve-ready');else btn.classList.remove('serve-ready');
}

function serveSelected(){
  if(G.pot.status!=='done'){notify('Chưa có món!','warning');return;}
  if(!G.selectedCustomer){notify('Chọn khách trước!','warning');return;}
  const c=G.customers.find(x=>x.id===G.selectedCustomer);
  if(!c||c.served||c.left){notify('Khách không còn ở quán.','error');return;}
  const ordered=RECIPES[c.order],finished=G.pot.finishedDish;
  if(c.order!==finished){
    const wrongLine=(c.quotes&&(c.quotes.wrong||c.quotes.angry))||'Không phải món tôi gọi mà...';
    notify(`❌ ${c.name}: "${wrongLine}"`, 'error');
    G.score=Math.max(0,G.score-5);G.streak=0;updateStreak();updateUI();return;
  }
  if(ordered.needsGrill&&(G.grill.status!=='done'||!G.grill.quality||G.grill.quality==='burnt'||G.grill.quality==='undercooked')){
    notify('⚠️ Bún chả cần chả nướng tốt!','warning');return;
  }
  // Calculate earnings
  let earned=ordered.price,sc=ordered.score,bonuses=[];
  const pbLv=upgradeLevel('price_boost');
  if(pbLv>0){const pm=[1,1.08,1.15,1.22][pbLv];earned=Math.floor(earned*pm);bonuses.push(`Menu +${[0,8,15,22][pbLv]}%`);}
  if(ordered.isSignature){earned=Math.floor(earned*1.2);sc+=5;bonuses.push('Signature +20%');}
  if(c.isRegular&&c.tip>1){earned=Math.floor(earned*c.tip);sc=Math.floor(sc*1.15);bonuses.push(`Tip ×${c.tip}`);}
  // Drink check (real gameplay): match prepared drink to ordered drink
  let drinkResult='none';
  if(c.drink){
    const d=DRINKS[c.drink];
    if(G.drinkStation&&G.drinkStation.status==='done'&&G.drinkStation.finishedDrink===c.drink){
      let drinkPrice=d.price;
      if(G._event==='heat')drinkPrice=Math.floor(drinkPrice*1.3);  // hot day: drinks +30%
      if(G._event==='festival')drinkPrice=Math.floor(drinkPrice*1.2);
      earned+=drinkPrice;sc+=d.score;
      bonuses.push(`${d.emoji} ${d.name} +${drinkPrice.toLocaleString('vi-VN')}đ`);
      // Combo bonus
      const comboBonus=Math.floor(ordered.price*(G._event==='festival'?0.10:0.05));
      earned+=comboBonus;bonuses.push(`Combo +${comboBonus.toLocaleString('vi-VN')}đ`);
      PROG.drinksMastered[c.drink]=(PROG.drinksMastered[c.drink]||0)+1;
      drinkResult='match';
      G.drinksServedCorrect=(G.drinksServedCorrect||0)+1;
      resetDrinkStation();
    } else if(G.drinkStation&&G.drinkStation.status==='done'&&G.drinkStation.finishedDrink){
      // Wrong drink prepared — 0% bonus only (no extra cost penalty per round 5 expert review)
      const wrongName=DRINKS[G.drinkStation.finishedDrink].name;
      sc-=1;
      bonuses.push(`Sai nước: ${wrongName} không phải đơn này`);
      drinkResult='wrong';
      resetDrinkStation();
    } else {
      // No drink prepared — silent miss, just no bonus
      sc-=1;bonuses.push(`Thiếu ${d.name} (mất bonus)`);
      drinkResult='miss';
    }
  }
  if(c.isMystery){
    earned=Math.floor(earned*1.15);sc+=8;PROG.reputation=(PROG.reputation||0)+2;
    bonuses.push('Khách bí ẩn +15%');
    // Mystery story flag — first-time bonus
    const flagId='mystery_'+c.npcKey;
    if(setStoryFlag(flagId)){
      const storyBonus=30000;
      earned+=storyBonus;sc+=20;
      bonuses.push(`📖 Mở câu chuyện +${storyBonus.toLocaleString('vi-VN')}đ`);
      notifyDelayed(800,()=>notify(`📖 Mở khóa câu chuyện: ${c.name}!`,'success'));
    }
  }
  if(ordered.needsGrill&&G.grill.quality==='perfect'){earned=Math.floor(earned*1.15);bonuses.push('Grill PERFECT +15%');}
  const pp=c.patience/c.maxPatience;
  if(pp>0.7){sc+=3;bonuses.push('Nhanh +3⭐');}
  else if(pp<0.25){
    // Slow service — happy still but with grumble
    const slow=(c.quotes&&c.quotes.slow)||null;
    if(slow)notifyDelayed(400,()=>notify(`😅 ${c.name}: "${slow}"`,'warning'));
  }
  G.money+=earned;G.score+=sc;c.served=true;G.customersServed++;
  G.npcServed[c.npcKey]=(G.npcServed[c.npcKey]||0)+1;
  PROG.reputation=(PROG.reputation||0)+1;
  if(c.isBoss)updateBossActiveClass();
  saveProg();
  G.streak++;if(G.streak>G.maxStreak)G.maxStreak=G.streak;
  updateStreak();
  const bonusStr=bonuses.length?' · '+bonuses.join(', '):'';
  notify(`🎉 +${earned.toLocaleString('vi-VN')}đ · +${sc}⭐${bonusStr}`,'success');
  scorePopup('+'+earned.toLocaleString('vi-VN')+'đ');
  // Confetti burst — perfect grill or combo correct or boss/mystery served
  if(G.grill.quality==='perfect'||drinkResult==='match'||c.isBoss||c.isMystery){
    const card=document.querySelector('.customer-card.selected')||document.querySelector('.customer-card');
    const rect=card?card.getBoundingClientRect():{left:window.innerWidth/2,top:window.innerHeight/2,width:0,height:0};
    spawnConfetti({x:rect.left+rect.width/2,y:rect.top+rect.height/2,count:c.isBoss||c.isMystery?22:14});
  }
  // Happy quote feedback — only for noteworthy customers (regular, mystery, boss, or high-tip tourist)
  const happyWorthy=c.isRegular||c.isMystery||c.isBoss||(c.tip||1)>=1.4;
  if(happyWorthy){
    const happyLine=(c.quotes&&c.quotes.happy)||'Cảm ơn quán nhé!';
    notifyDelayed(600,()=>notify(`😊 ${c.name}: "${happyLine}"`,'info'));
  }
  resetPot();if(ordered.needsGrill)resetGrill();
  // Achievement check after each successful serve
  if(typeof checkAchievements==='function'){
    checkAchievements({type:'serve',customer:c,recipe:ordered,grillQuality:G.grill.quality,drinkResult,bonuses});
    if(G._bossNpc&&c.npcKey===G._bossNpc)checkAchievements({type:'boss_won',bossNpc:G._bossNpc});
  }
  setTimeout(()=>{G.customers=G.customers.filter(x=>x.id!==c.id);G.selectedCustomer=null;renderCustomers();checkEndCondition();},1400);
  updateUI();renderCustomers();
}

function discardPot(){
  if(G.pot.status==='cooking'){
    notify('Món đang nấu, không thể đổ lúc này. Chờ xong rồi hãy bỏ nếu cần.','warning');
    return;
  }
  if(!G.pot.ingredients.length&&G.pot.status==='idle'){
    notify('Nồi đang trống.','info');
    return;
  }
  if(G.pot.status==='done'){
    G.money=Math.max(0,G.money-10000);
    notify('Đã bỏ món đã nấu. Mất 10.000đ nguyên liệu.','warning');
    updateUI();
  } else {
    notify('Đã đổ nồi và làm lại.','info');
  }
  resetPot();
}

function resetPot(){
  G.pot={ingredients:[],status:'idle',finishedDish:null};
  document.getElementById('pot').classList.remove('cooking','done');
  document.getElementById('potProgressBar').style.width='0%';
  document.getElementById('cookBtn').disabled=true;
  document.getElementById('serveBtn').disabled=true;
  document.getElementById('serveBtn').classList.remove('serve-ready');
  document.getElementById('potIngredients').innerHTML='';
  document.getElementById('potStatus').textContent='Chờ nguyên liệu';
  document.querySelectorAll('.ingredient.in-pot').forEach(el=>el.classList.remove('in-pot'));
  highlightRecipe(null);
}

// ─────────────────────────────────────────────
//  END LEVEL
// ─────────────────────────────────────────────

function endLevel(reason){
  if(G.isGameOver)return;G.isGameOver=true;
  [timerInterval,spawnInterval,patienceInterval,grillInterval,drinkInterval,blackoutInterval].forEach(iv=>{if(iv)clearInterval(iv);});
  clearPendingNotifyTimers();
  document.querySelector('.game-header')?.classList.remove('rush');
  document.body.classList.remove('boss-active');
  if(G.isFestival){endFestival(reason);return;}
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('endScreen').classList.add('active');
  const lv=LEVELS[PROG.levelIdx]||LEVELS[0];
  const sr=G.customersServed/G.totalCustomers;
  // Stars: 3=100%, 2=67%+, 1=50%+, 0=fail
  let stars=0;
  if(sr>=1)stars=3;else if(sr>=0.67)stars=2;else if(sr>=0.5)stars=1;
  const missionReward=stars>0?Math.round((12000+(lv.overall||1)*3000)*stars):0;
  const noWasteReward=stars>0&&G.burntGrills===0?Math.round(5000+(lv.overall||1)*1000):0;
  const bankedProfit=stars>0?Math.max(0,G.money-lv.cost)+missionReward+noWasteReward:0;
  // Save progress if level passed
  if(stars>0){
    const prev=PROG.levelStars[PROG.levelIdx]||0;
    if(stars>prev)PROG.levelStars[PROG.levelIdx]=stars;
    // Unlock next level
    if(PROG.levelIdx+1>=PROG.unlocked)PROG.unlocked=PROG.levelIdx+2;
    // Add profit and completion rewards to bank
    PROG.totalMoney+=bankedProfit;
    saveProg();
  }
  // Rating display
  let rating,title,fb;
  if(reason==='boss_fled'){rating='😢';title='Boss bỏ đi!';stars=0;fb='Ông biết cháu có thể làm tốt hơn. Lần sau đừng để khách quan trọng chờ nhé!';}
  else if(stars===3){rating='⭐⭐⭐';title='🏆 Hoàn hảo!';fb=lv.isBoss?'Cháu đã vượt qua thử thách lớn nhất! Ông tự hào lắm. Hành trình tiếp tục...':'Cháu của ông... tất cả khách đều hài lòng. Ông tự hào lắm!';}
  else if(stars===2){rating='⭐⭐';title='🎉 Rất tốt!';fb='Còn vài khách bỏ đi nhưng điều đó bình thường. Quan trọng là cháu đã có lãi!';}
  else if(stars===1){rating='⭐';title='👍 Đạt yêu cầu';fb='Phục vụ được hơn nửa khách là khởi đầu tốt. Mai chú ý khách quen của ông nhé.';}
  else if(sr>=0.33){rating='💔';title='😅 Cần cố gắng thêm';fb='Ông cũng từng có ngày như vậy cháu ơi. Đừng nản lòng — thử lại nhé!';}
  else{rating='😢';title='Ngày khó khăn';fb='Cháu của ông... đừng bỏ cuộc. Mọi đầu bếp giỏi đều có ngày thất bại. Thử lại nhé!';}
  document.getElementById('endRating').textContent=rating;
  document.getElementById('endTitle').textContent=title;
  document.getElementById('feedbackText').textContent=fb;
  // Show unlock notification
  if(stars>0&&lv.unlocks){
    const unlockNames={mi_quang:'🍝 Mì Quảng',hu_tieu:'🍜 Hủ tiếu Nam Vang'};
    document.getElementById('feedbackText').textContent+=`\n\n🎉 MỞ KHÓA: ${unlockNames[lv.unlocks]||lv.unlocks}!`;
  }
  if(stars>0&&lv.overall===15){
    document.getElementById('feedbackText').textContent='🎉🎉🎉 CHÚC MỪNG! Cháu đã hoàn thành hành trình "Đầu bếp 3 miền"! Danh hiệu đã thuộc về cháu. Cụ Ông an nghỉ thật sự rồi...';
    const fp=document.getElementById('feedbackPortrait');if(fp)fp.src='assets/portraits/cu-ong-spirit.svg';
  } else {
    const fp=document.getElementById('feedbackPortrait');if(fp)fp.src='assets/portraits/cu-ong-old.svg';
  }
  const npcTotal=Object.values(G.npcServed).reduce((a,b)=>a+b,0);
  document.getElementById('endStatsServe').innerHTML=`
    <div class="end-row"><span>👥 Đã phục vụ</span><span><b>${G.customersServed} / ${G.totalCustomers}</b></span></div>
    <div class="end-row"><span>😡 Khách bỏ đi</span><span>${G.customersLeft}</span></div>
    ${npcTotal?`<div class="end-row"><span>⭐ Phục vụ khách quen</span><span>${npcTotal} lần</span></div>`:''}
    ${G.perfectGrills?`<div class="end-row"><span>🌟 Nướng PERFECT</span><span>${G.perfectGrills} lần</span></div>`:''}
    ${G.maxStreak>=3?`<div class="end-row"><span>🔥 Chuỗi dài nhất</span><span>${G.maxStreak} lần liên tiếp</span></div>`:''}
    <div class="end-row"><span>⭐ Điểm số</span><span><b>${G.score}</b></span></div>`;
  const rev=G.money,cost=lv.cost,profit=rev-cost;
  document.getElementById('endStatsFinance').innerHTML=`
    <div class="end-row"><span>💰 Doanh thu</span><span>${rev.toLocaleString('vi-VN')}đ</span></div>
    <div class="end-row cost"><span>💸 Chi phí cố định</span><span>−${cost.toLocaleString('vi-VN')}đ</span></div>
    ${missionReward?`<div class="end-row"><span>🎯 Thưởng mục tiêu</span><span style="color:var(--green-light)">+${missionReward.toLocaleString('vi-VN')}đ</span></div>`:''}
    ${noWasteReward?`<div class="end-row"><span>🥢 Thưởng ít hao phí</span><span style="color:var(--green-light)">+${noWasteReward.toLocaleString('vi-VN')}đ</span></div>`:''}
    ${stars>0?`<div class="end-row"><span>💼 Vào ngân sách</span><span style="color:var(--gold)">+${bankedProfit.toLocaleString('vi-VN')}đ</span></div>`:''}
    <div class="end-row total ${profit>=0?'profit-pos':'profit-neg'}">
      <span>${profit>=0?'✅ Lợi nhuận':'❌ Thua lỗ'}</span>
      <span>${profit.toLocaleString('vi-VN')}đ</span>
    </div>`;
  // Show/hide next level button
  const hasNext=PROG.levelIdx+1<LEVELS.length;
  document.getElementById('nextLevelBtn').style.display=(stars>0&&hasNext)?'block':'none';
  // Flush deferred achievement notifications (queued during gameplay)
  flushAchievementQueue();
  // Big confetti celebration for 3-star clear
  if(stars===3){
    setTimeout(()=>spawnConfetti({x:window.innerWidth/2,y:window.innerHeight*0.3,count:36}),300);
    setTimeout(()=>spawnConfetti({x:window.innerWidth*0.3,y:window.innerHeight*0.4,count:20}),700);
    setTimeout(()=>spawnConfetti({x:window.innerWidth*0.7,y:window.innerHeight*0.4,count:20}),900);
  } else if(stars===2){
    setTimeout(()=>spawnConfetti({x:window.innerWidth/2,y:window.innerHeight*0.3,count:18}),300);
  }
}
