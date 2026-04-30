// === Screens + UI helpers ===
// Tutorial, cutscene, story overlay, level select, upgrade shop,
// festival mode, gallery, generic UI (notify/popup/confetti),
// pause overlay, navigation. Loads AFTER game.js so festival can
// override checkEndCondition.

// ─────────────────────────────────────────────
//  TUTORIAL
// ─────────────────────────────────────────────

let tutIdx=0;

function showTutorial(){
  tutIdx=0;
  document.getElementById('tutorialOverlay').classList.add('active');
  renderTutorial();
}

function renderTutorial(){
  const s=TUTORIAL[tutIdx];
  document.getElementById('tutorialIcon').textContent=s.icon;
  const secEl=document.getElementById('tutorialSection');
  if(secEl){secEl.textContent=s.section||'';secEl.style.display=s.section?'':'none';}
  const cntEl=document.getElementById('tutorialCounter');
  if(cntEl)cntEl.textContent=`Bước ${tutIdx+1} / ${TUTORIAL.length}`;
  document.getElementById('tutorialTitle').textContent=s.title;
  document.getElementById('tutorialText').textContent=s.text;
  document.getElementById('tutorialText').scrollTop=0;
  document.getElementById('tutorialNextBtn').textContent=tutIdx===TUTORIAL.length-1?'✅ Bắt đầu chơi!':'Tiếp theo →';
  document.getElementById('tutorialPrevBtn').style.display=tutIdx>0?'block':'none';
  // Progress pips
  const pBar=document.getElementById('tutorialProgress');
  pBar.innerHTML='';
  TUTORIAL.forEach((_,i)=>{
    const pip=document.createElement('div');
    pip.className='tutorial-pip'+(i<tutIdx?' done':i===tutIdx?' current':'');
    pBar.appendChild(pip);
  });
}

function nextTutorial(){
  tutIdx++;
  if(tutIdx>=TUTORIAL.length){closeTutorial();return;}
  renderTutorial();
}

function prevTutorial(){
  if(tutIdx>0){tutIdx--;renderTutorial();}
}

function closeTutorial(){
  document.getElementById('tutorialOverlay').classList.remove('active');
}

// ─────────────────────────────────────────────
//  CUTSCENE
// ─────────────────────────────────────────────

let dlgIdx=0,isTyping=false,typeTimer=null;

function startStory(){
  document.querySelectorAll('.screen,.end-screen').forEach(el=>el.classList.remove('active'));
  document.getElementById('cutsceneScreen').classList.add('active');
  dlgIdx=0;
  buildDots();showDialogue();
}

function buildDots(){
  const c=document.getElementById('dialogueDots');
  c.innerHTML='';
  DIALOGUES.forEach((_,i)=>{
    const d=document.createElement('div');d.className='dialogue-dot'+(i===0?' active':'');d.id='dot'+i;c.appendChild(d);
  });
}

function showDialogue(){
  if(dlgIdx>=DIALOGUES.length){document.getElementById('cutsceneScreen').classList.remove('active');startGame();return;}
  const d=DIALOGUES[dlgIdx];
  const imgEl=document.getElementById('cutsceneImage');
  if(d.image&&d.image.startsWith('svg:')){
    imgEl.innerHTML=`<img src="assets/portraits/${d.image.slice(4)}.svg" alt="${d.speaker}" style="width:280px;height:280px;object-fit:contain;animation:cutsceneIn 1.5s ease-out;">`;
  } else {
    imgEl.textContent=d.image;
  }
  document.getElementById('dialogueSpeaker').textContent=d.speaker;
  const el=document.getElementById('dialogueText');el.textContent='';
  DIALOGUES.forEach((_,i)=>{
    const dot=document.getElementById('dot'+i);
    if(dot) dot.className='dialogue-dot'+(i===dlgIdx?' active':i<dlgIdx?' done':'');
  });
  isTyping=true;let i=0;
  if(typeTimer)clearInterval(typeTimer);
  typeTimer=setInterval(()=>{
    if(i<d.text.length){el.textContent+=d.text[i++];}
    else{clearInterval(typeTimer);isTyping=false;}
  },28);
}

function skipCutscene(){
  if(typeTimer)clearInterval(typeTimer);
  document.getElementById('cutsceneScreen').classList.remove('active');
  startGame();
}

document.getElementById('cutsceneScreen').addEventListener('click',e=>{
  if(e.target.classList.contains('dialogue-skip'))return;
  if(isTyping){
    if(typeTimer)clearInterval(typeTimer);
    document.getElementById('dialogueText').textContent=DIALOGUES[dlgIdx].text;
    isTyping=false;
  } else {dlgIdx++;showDialogue();}
});

// ─────────────────────────────────────────────
//  UI HELPERS
// ─────────────────────────────────────────────

function updateUI(){
  document.getElementById('moneyDisplay').textContent=G.money.toLocaleString('vi-VN')+'đ';
  document.getElementById('scoreDisplay').textContent=G.score;
  document.getElementById('servedDisplay').textContent=G.customersServed;
}

function updateStreak(){
  const el=document.getElementById('streakBadge');
  const cnt=document.getElementById('streakCount');
  if(G.streak>=2){el.classList.add('visible');cnt.textContent=G.streak;}
  else{el.classList.remove('visible');}
}

function notify(text,type){
  const c=document.getElementById('notifContainer');
  const n=document.createElement('div');n.className='notif '+(type||'');n.textContent=text;
  c.appendChild(n);setTimeout(()=>n.remove(),3000);
}

function scorePopup(text){
  const p=document.createElement('div');p.className='score-popup';p.textContent=text;
  p.style.left=(20+Math.random()*60)+'%';p.style.top='45%';
  document.body.appendChild(p);setTimeout(()=>p.remove(),1400);
}

// Confetti — for perfect serve / combo / end-level 3-star celebration
function spawnConfetti(opts){
  opts=opts||{};
  const count=opts.count||14;
  const x=opts.x!=null?opts.x:window.innerWidth/2;
  const y=opts.y!=null?opts.y:window.innerHeight/2;
  const colors=['#FFD700','#C62828','#E6BE3C','#FFF8E1','#7B4F2E','#FF8A65'];
  for(let i=0;i<count;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.style.left=x+'px';
    c.style.top=y+'px';
    c.style.background=colors[i%colors.length];
    c.style.setProperty('--tx',(Math.random()-0.5)*420+'px');
    c.style.setProperty('--ty',(80+Math.random()*120)+'vh');
    c.style.setProperty('--rot',(360+Math.random()*720)+'deg');
    c.style.animationDelay=(i*25)+'ms';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),2200);
  }
}

// ─────────────────────────────────────────────
//  PAUSE
// ─────────────────────────────────────────────

function togglePause(){
  G.isPaused=!G.isPaused;
  const ov=document.getElementById('pauseOverlay');
  if(G.isPaused){
    ov.classList.add('active');
    document.getElementById('pauseStats').innerHTML=`
      <div class="pause-stat"><div class="pause-stat-val">${G.money.toLocaleString('vi-VN')}đ</div><div class="pause-stat-lbl">Doanh thu</div></div>
      <div class="pause-stat"><div class="pause-stat-val">${G.score}</div><div class="pause-stat-lbl">Điểm số</div></div>
      <div class="pause-stat"><div class="pause-stat-val">${G.customersServed}/${G.totalCustomers}</div><div class="pause-stat-lbl">Đã phục vụ</div></div>
      <div class="pause-stat"><div class="pause-stat-val">${G.streak}</div><div class="pause-stat-lbl">Streak</div></div>`;
  } else {ov.classList.remove('active');}
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
//  NAVIGATION HELPERS
// ─────────────────────────────────────────────

function hideAll(){document.querySelectorAll('.screen,.end-screen,.cutscene').forEach(el=>el.classList.remove('active'));}

function goToMenu(){hideAll();document.getElementById('menuScreen').classList.add('active');}

function showLevelSelect(){
  hideAll();
  lsChapter=LEVELS[PROG.levelIdx]?.ch||1;
  document.getElementById('levelSelectScreen').classList.add('active');
  renderLevelSelect();
}

function goToUpgradeShop(){hideAll();document.getElementById('upgradeShopScreen').classList.add('active');renderUpgradeShop();}

function createEmptyProgress(){
  return JSON.parse(JSON.stringify(PROG_DEFAULT));
}

function hasAnyProgress(){
  return Object.keys(PROG.levelStars||{}).length>0||PROG.totalMoney>0||
    Object.keys(PROG.upgradeLevels||{}).length>0||Object.keys(PROG.metCustomers||{}).length>0||
    Object.keys(PROG.achievements||{}).length>0||(PROG.bestFestival||0)>0||(PROG.bestEndless||0)>0;
}

function beginFresh(skipStory){
  if(hasAnyProgress()&&!confirm('Bắt đầu mới sẽ xóa tiến trình hiện tại. Tiếp tục?'))return;
  PROG=createEmptyProgress();saveProg();
  if(skipStory)startGame();else startStory();
}

function newGameWithStory(){beginFresh(false);}
function quickStart(){beginFresh(true);}

// ─────────────────────────────────────────────
//  STORY OVERLAY
// ─────────────────────────────────────────────

let _storyCallback=null;
function showStoryOverlay(lv,callback){
  _storyCallback=callback;
  const ov=document.getElementById('storyOverlay');
  const chNames=['','Chương 1: Hà Nội','Chương 2: Hội An','Chương 3: Sài Gòn'];
  document.getElementById('storyIcon').textContent=lv.icon||'📖';
  document.getElementById('storyChapterLabel').textContent=`${chNames[lv.ch]} · Ngày ${lv.lv}${lv.isBoss?' · BOSS 🏆':''}`;
  document.getElementById('storyTitleEl').textContent=lv.name;
  document.getElementById('storyTextEl').textContent=lv.story||'Hành trình tiếp tục...';
  const objLines=lv.objective?lv.objective.split('·').map(s=>`• ${s.trim()}`).join('\n'):'• Phục vụ khách tốt nhất có thể';
  document.getElementById('storyObjList').style.whiteSpace='pre-line';
  document.getElementById('storyObjList').textContent=objLines;
  // Add event badge if applicable
  const eventLabels={
    rain:'🌧️ Sự kiện: Mưa rào — khách đến chậm hơn, hợp món nóng',
    festival:'🎑 Sự kiện: Lễ hội — 3 khách xuất hiện cùng lúc, combo bonus +20%',
    rush:'⚡ Sự kiện: Giờ cao điểm — khách đến liên tục',
    peak:'☀️ Sự kiện: Giờ cao điểm — kiên nhẫn ngắn hơn',
    heat:'🌡️ Sự kiện: Ngày nóng — nước uống bán giá +30% (cơ hội kiếm tiền)',
    blackout:'⚡ Sự kiện: Mất điện — nấu chậm hơn 50%, đèn nhấp nháy',
    tour:'🌏 Sự kiện: Đoàn du khách — chủ yếu là khách Tây, tip cao hơn'
  };
  if(lv.event&&eventLabels[lv.event]){document.getElementById('storyObjList').textContent+='\n'+eventLabels[lv.event];}
  ov.classList.add('active');
}
function dismissStoryAndStart(){
  document.getElementById('storyOverlay').classList.remove('active');
  if(_storyCallback){_storyCallback();_storyCallback=null;}
}

function goNextLevel(){
  if(PROG.levelIdx+1>=LEVELS.length){notify('Bạn đã hoàn thành tất cả levels!','success');return;}
  PROG.levelIdx++;saveProg();showLevelSelect();
}


// ─────────────────────────────────────────────
//  LEVEL SELECT
// ─────────────────────────────────────────────

let lsChapter=1;
const CH_DESCS=['','Khai trương Tiệm Bún Số 7 trong ngõ phố cổ Hà Nội','Mang hương vị ra miền Trung — Phố cổ Hội An','Chinh phục Sài Gòn — Thành phố sôi động nhất'];

function switchChapter(ch){lsChapter=ch;renderLevelSelect();}

function renderLevelSelect(){
  document.getElementById('lsMoneyDisplay').textContent=PROG.totalMoney.toLocaleString('vi-VN')+'đ';
  const chLabels=['Ch.1: Hà Nội','Ch.2: Hội An','Ch.3: Sài Gòn'];
  [1,2,3].forEach(i=>{
    const tab=document.getElementById('chTab'+i);
    const chUnlocked=PROG.unlocked>(i-1)*5;
    tab.classList.toggle('active',i===lsChapter);
    tab.classList.toggle('ch-locked',!chUnlocked);
    tab.textContent=chLabels[i-1]+(chUnlocked?'':' 🔒');
    tab.disabled=!chUnlocked;
  });
  document.getElementById('chSubtitle').textContent=CH_DESCS[lsChapter];
  const grid=document.getElementById('chGrid');grid.innerHTML='';
  const startIdx=(lsChapter-1)*5;
  for(let i=0;i<5;i++){
    const idx=startIdx+i;const lv=LEVELS[idx];
    const isUnlocked=idx<PROG.unlocked;
    const stars=PROG.levelStars[idx];
    const isCurrent=idx===PROG.levelIdx;
    const card=document.createElement('div');
    card.className='level-card'+(lv.isBoss?' lc-boss':'')+(isCurrent&&isUnlocked?' lc-current':'')+(isUnlocked?'':' lc-locked');
    if(isUnlocked)card.onclick=()=>startLevelByIdx(idx);
    card.innerHTML=`<div class="level-card-num">Chương ${lv.overall||idx+1}${lv.isBoss?' · BOSS 🏆':''}</div>
      <div class="level-card-name">${lv.name}</div>
      <div class="level-card-stars">${stars?'⭐'.repeat(stars):(isUnlocked?'<span style="color:var(--text-mute);font-size:.72em;">Chưa chơi</span>':'🔒')}</div>`;
    grid.appendChild(card);
  }
}

function startLevelByIdx(idx){PROG.levelIdx=idx;saveProg();startGame();}

// ─────────────────────────────────────────────
//  UPGRADE SHOP
// ─────────────────────────────────────────────

function renderUpgradeShop(){
  document.getElementById('usMoneyDisplay').textContent=PROG.totalMoney.toLocaleString('vi-VN')+'đ';
  const list=document.getElementById('upgradeList');list.innerHTML='';
  const curCh=LEVELS[PROG.levelIdx]?.ch||1;
  UPGRADES.forEach(u=>{
    const curLv=upgradeLevel(u.id);
    const maxLv=u.maxLv||u.levels.length;
    const isMaxed=curLv>=maxLv;
    const nextLvData=!isMaxed?u.levels[curLv]:null;
    const canBuy=nextLvData&&nextLvData.ch<=curCh;
    const canAfford=canBuy&&PROG.totalMoney>=nextLvData.price;
    const pips=u.levels.map((_,i)=>`<span class="upg-pip${i<curLv?' on':''}">${i<curLv?'●':'○'}</span>`).join('');
    const curDesc=curLv>0?`<div class="upgrade-desc" style="color:#A5D6A7">✓ ${u.levels[curLv-1].desc}</div>`:'';
    const nextDesc=nextLvData&&canBuy?`<div class="upgrade-desc" style="color:#FFF176">▶ Cấp ${nextLvData.lv}: ${nextLvData.desc}</div>`:'';
    const lockedDesc=nextLvData&&!canBuy?`<div class="upgrade-desc" style="color:var(--text-mute)">🔒 Mở ở Chương ${nextLvData.ch}</div>`:'';
    let actionHtml;
    if(isMaxed) actionHtml='<span class="upgrade-owned-badge">✅ Tối đa</span>';
    else if(canBuy) actionHtml=`<button class="upgrade-buy-btn"${!canAfford?' disabled':''} onclick="buyUpgrade('${u.id}')">Cấp ${curLv+1}<br><small>${nextLvData.price.toLocaleString('vi-VN')}đ</small></button>`;
    else actionHtml='';
    const card=document.createElement('div');
    card.className='upgrade-card'+(isMaxed?' is-owned':canAfford?'':' cant-afford');
    card.innerHTML=`<div class="upgrade-emoji">${u.emoji}</div>
      <div class="upgrade-info">
        <div class="upgrade-name">${u.name} <span class="upg-pips">${pips}</span></div>
        ${curDesc}${nextDesc}${lockedDesc}
      </div>
      <div class="upgrade-action">${actionHtml}</div>`;
    list.appendChild(card);
  });
}

function buyUpgrade(id){
  const u=UPGRADES.find(x=>x.id===id);if(!u)return;
  const curLv=upgradeLevel(id);
  if(curLv>=u.levels.length){notify('Đã tối đa!','warning');return;}
  const nextLvData=u.levels[curLv];
  if(PROG.totalMoney<nextLvData.price){notify('Không đủ tiền!','error');return;}
  PROG.totalMoney-=nextLvData.price;
  PROG.upgradeLevels[id]=curLv+1;
  saveProg();
  notify(`✅ ${u.name} — Cấp ${curLv+1}!`,'success');
  renderUpgradeShop();
}


// ─────────────────────────────────────────────
//  FESTIVAL MODE (endless)
// ─────────────────────────────────────────────

function showFestival(){
  hideAll();
  document.getElementById('festBestDisplay').textContent=(PROG.bestFestival||0).toLocaleString('vi-VN')+'đ';
  document.getElementById('festivalScreen').classList.add('active');
}

function startFestival(){
  // Use levelIdx 14 (the highest unlocked) so all recipes/drinks open
  G.isFestival=true;
  G.money=0;G.score=0;G.timeRemaining=9999;G._levelTime=9999;G._npcRate=0.55;G._cost=0;
  G.customersServed=0;G.customersLeft=0;G.totalCustomers=9999;G.customersSpawned=0;G.customers=[];
  G.pot={ingredients:[],status:'idle',finishedDish:null};
  G.grill={status:'idle',progress:0,flipped:false,quality:null,flipQuality:null};
  G.drinkStation={ingredients:[],status:'idle',finishedDrink:null};
  G.selectedCustomer=null;G.isPaused=false;G.isGameOver=false;
  G.perfectGrills=0;G.burntGrills=0;G.streak=0;G.maxStreak=0;
  G.drinksServedCorrect=0;
  G.npcServed={bac_tam:0,co_lan:0,john:0};
  G._event='festival';G._bossNpc=null;G._bossSpawned=false;
  G._festivalStart=Date.now();
  // Force unlock everything via in-memory override (does not touch PROG)
  G.recipeOverallOverride=15;
  clearPendingNotifyTimers();
  _sessionAchievementQueue=[];
  [timerInterval,spawnInterval,patienceInterval,grillInterval,drinkInterval,blackoutInterval].forEach(iv=>{if(iv)clearInterval(iv);});
  timerInterval=spawnInterval=patienceInterval=grillInterval=drinkInterval=blackoutInterval=null;
  document.querySelectorAll('.screen,.end-screen,.cutscene').forEach(el=>el.classList.remove('active'));
  document.getElementById('gameScreen').classList.add('active');
  document.getElementById('chapterBarInfo').innerHTML='<span class="chapter-bar-name">🎑 Lễ hội ẩm thực</span> · Endless mode';
  document.getElementById('totalDisplay').textContent='∞';
  document.getElementById('timeDisplay').textContent='--:--';
  document.getElementById('timerBar').style.width='100%';
  buildDayPips();resetPot();resetGrill();resetDrinkStation();
  renderIngredients();renderRecipes();renderDrinks();renderDrinkIngredients();renderNPCList();updateUI();
  // Spawn 3 starting customers
  setTimeout(()=>spawnCustomer(),600);
  setTimeout(()=>spawnCustomer(),1200);
  setTimeout(()=>spawnCustomer(),1800);
  let spawnMs=6000;
  spawnInterval=setInterval(()=>{
    if(G.isPaused||G.isGameOver)return;
    if(G.customers.filter(c=>!c.served&&!c.left).length<5)spawnCustomer();
  },spawnMs);
  patienceInterval=setInterval(()=>{if(!G.isPaused&&!G.isGameOver)tickPatience();},1000);
  // Festival difficulty escalation timer
  timerInterval=setInterval(()=>{
    if(G.isPaused||G.isGameOver)return;
    G._festivalElapsed=Math.floor((Date.now()-G._festivalStart)/1000);
    const mm=Math.floor(G._festivalElapsed/60),ss=G._festivalElapsed%60;
    document.getElementById('timeDisplay').textContent=`+${mm}:${ss.toString().padStart(2,'0')}`;
    // Every 60s, spawn faster
    if(G._festivalElapsed>0&&G._festivalElapsed%60===0&&spawnMs>2500){
      spawnMs=Math.max(2500,spawnMs-700);
      clearInterval(spawnInterval);
      spawnInterval=setInterval(()=>{if(G.isPaused||G.isGameOver)return;if(G.customers.filter(c=>!c.served&&!c.left).length<5)spawnCustomer();},spawnMs);
      notify('⚡ Lễ hội nóng dần — khách đến nhanh hơn!','warning');
    }
  },1000);
  // Custom end condition: 5 customers leave (relaxed from 3 — endless mode should reward persistence)
  G._festivalLeftLimit=5;
  notify('🎑 Lễ hội bắt đầu! Phục vụ thật nhanh!','success');
}

function endFestival(reason){
  G.isFestival=false;
  G.recipeOverallOverride=null;
  const earned=G.money;
  if(earned>(PROG.bestFestival||0)){PROG.bestFestival=earned;saveProg();}
  PROG.totalMoney+=Math.floor(earned*0.3);  // 30% of festival earnings goes to bank
  saveProg();
  if(typeof checkAchievements==='function')checkAchievements({type:'festival_score',score:earned});
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('endScreen').classList.add('active');
  document.getElementById('endRating').textContent='🎑';
  document.getElementById('endTitle').textContent='Hết lễ hội!';
  document.getElementById('feedbackText').textContent=`Bạn đã trụ ${G._festivalElapsed||0} giây và phục vụ ${G.customersServed} khách. ${earned>=(PROG.bestFestival||0)?'🏆 KỶ LỤC MỚI!':'Cố lên lần sau!'}`;
  document.getElementById('endStatsServe').innerHTML=`
    <div class="end-row"><span>👥 Đã phục vụ</span><span><b>${G.customersServed}</b></span></div>
    <div class="end-row"><span>😡 Khách bỏ đi</span><span>${G.customersLeft}</span></div>
    ${G.perfectGrills?`<div class="end-row"><span>🌟 Nướng PERFECT</span><span>${G.perfectGrills}</span></div>`:''}
    ${G.drinksServedCorrect?`<div class="end-row"><span>🥤 Combo đúng nước</span><span>${G.drinksServedCorrect}</span></div>`:''}
    <div class="end-row"><span>🔥 Chuỗi dài nhất</span><span>${G.maxStreak} liên tiếp</span></div>
    <div class="end-row"><span>⭐ Điểm số</span><span><b>${G.score}</b></span></div>`;
  document.getElementById('endStatsFinance').innerHTML=`
    <div class="end-row"><span>💰 Doanh thu lễ hội</span><span>${earned.toLocaleString('vi-VN')}đ</span></div>
    <div class="end-row"><span>🏆 Best</span><span>${(PROG.bestFestival||0).toLocaleString('vi-VN')}đ</span></div>
    <div class="end-row total profit-pos"><span>💼 Vào ngân sách (30%)</span><span>+${Math.floor(earned*0.3).toLocaleString('vi-VN')}đ</span></div>`;
  document.getElementById('nextLevelBtn').style.display='none';
  // Flush deferred achievement notifications
  flushAchievementQueue();
}

// Override checkEndCondition for festival mode
const _origCheckEndCondition=checkEndCondition;
checkEndCondition=function(){
  if(G.isFestival){
    if(G.customersLeft>=(G._festivalLeftLimit||3))endLevel('festival_done');
    return;
  }
  return _origCheckEndCondition();
};

// ─────────────────────────────────────────────
//  GALLERY (sổ tay quán)
// ─────────────────────────────────────────────

let _galTab='ach';
function showGallery(){hideAll();document.getElementById('galleryScreen').classList.add('active');switchGalTab(_galTab);}
function switchGalTab(tab){
  _galTab=tab;
  ['ach','cust','stories','stats'].forEach(t=>{
    const btn=document.getElementById('galTab'+t.charAt(0).toUpperCase()+t.slice(1));
    if(btn)btn.classList.toggle('active',t===tab);
  });
  renderGallery();
}
function renderGallery(){
  const c=document.getElementById('galleryContent');
  if(_galTab==='ach'){
    c.innerHTML='<div class="gal-grid">'+ACHIEVEMENTS.map(a=>{
      const got=PROG.achievements[a.id];
      if(a.hidden&&!got)return `<div class="gal-card locked"><div class="gal-card-emoji">🔒</div><div class="gal-card-name">???</div><div class="gal-card-desc">Thành tựu ẩn</div></div>`;
      return `<div class="gal-card${got?'':' locked'}"><div class="gal-card-emoji">${a.emoji}</div><div class="gal-card-name">${a.name}</div><div class="gal-card-desc">${a.desc}</div>${got?`<div class="gal-card-meta">Mở: ${new Date(got).toLocaleDateString('vi-VN')}</div>`:''}</div>`;
    }).join('')+'</div>';
    const total=ACHIEVEMENTS.length;
    const got=Object.keys(PROG.achievements||{}).length;
    c.innerHTML=`<div style="margin-bottom:12px;color:var(--text-soft);">Đã mở: <b style="color:var(--gold)">${got}/${total}</b> thành tựu</div>`+c.innerHTML;
  } else if(_galTab==='cust'){
    const allKeys=Object.keys(NPCS);
    c.innerHTML='<div class="gal-grid">'+allKeys.map(k=>{
      const npc=NPCS[k];const cnt=PROG.metCustomers[k]||0;const met=cnt>0;
      if(!met)return `<div class="gal-card locked"><div class="gal-card-emoji">❓</div><div class="gal-card-name">???</div><div class="gal-card-desc">Chưa gặp</div></div>`;
      const fav=npc.favorite&&RECIPES[npc.favorite]?RECIPES[npc.favorite].name:'';
      const drink=npc.drink&&DRINKS[npc.drink]?DRINKS[npc.drink].name:'';
      return `<div class="gal-card">${galleryNpcVisual(npc)}<div class="gal-card-name">${npc.name}${npc.isMystery?' 🌟':''}</div><div class="gal-card-desc">${npc.trait}${fav?'<br>Thích: '+fav:''}${drink?'<br>Nước: '+drink:''}</div><div class="gal-card-meta">Đã gặp ${cnt} lần</div></div>`;
    }).join('')+'</div>';
  } else if(_galTab==='stories'){
    const flags=PROG.storyFlags||{};
    const stories=[
      {id:'mystery_food_blogger',emoji:'📱',name:'Linh Review lên sóng',unlocked:!!flags.mystery_food_blogger,text:'Linh Review đã quay clip về quán bạn. Cô ấy gọi đó là "ngôi sao ẩn của ngõ phố cổ". Hôm sau quán đông gấp đôi.'},
      {id:'mystery_viet_kieu',emoji:'🧳',name:'Vị quê hương',unlocked:!!flags.mystery_viet_kieu,text:'Chú Phúc xa quê 30 năm. Một tô phở của bạn làm chú khóc. Chú gửi lại cuốn sổ ảnh cũ — bạn nhận ra Cụ Ông trong đó.'},
      {id:'mystery_khach_im_lang',emoji:'🎩',name:'Khách im lặng',unlocked:!!flags.mystery_khach_im_lang,text:'Khách lạ gọi món bằng câu thơ. Bạn đoán đúng. Ông để lại một mảnh giấy: "Cụ Ông đã dạy tôi nấu cách đây 40 năm. Nay cháu xứng đáng."'}
    ];
    c.innerHTML='<div class="gal-grid">'+stories.map(s=>{
      if(!s.unlocked)return `<div class="gal-card locked"><div class="gal-card-emoji">🔒</div><div class="gal-card-name">???</div><div class="gal-card-desc">Phục vụ khách bí ẩn để mở</div></div>`;
      return `<div class="gal-card"><div class="gal-card-emoji">${s.emoji}</div><div class="gal-card-name">${s.name}</div><div class="gal-card-desc">${s.text}</div></div>`;
    }).join('')+'</div>';
  } else if(_galTab==='stats'){
    const totalServed=Object.values(PROG.metCustomers||{}).reduce((a,b)=>a+b,0);
    const totalUpgrades=Object.values(PROG.upgradeLevels||{}).reduce((a,b)=>a+b,0);
    const totalStars=Object.values(PROG.levelStars||{}).reduce((a,b)=>a+b,0);
    const totalDrinks=Object.values(PROG.drinksMastered||{}).reduce((a,b)=>a+b,0);
    c.innerHTML=`
      <div class="gal-stat-row"><span>💰 Tổng tiền tích lũy</span><span>${(PROG.totalMoney||0).toLocaleString('vi-VN')}đ</span></div>
      <div class="gal-stat-row"><span>📣 Danh tiếng quán</span><span>${PROG.reputation||0}</span></div>
      <div class="gal-stat-row"><span>👥 Lượt khách đã gặp</span><span>${totalServed}</span></div>
      <div class="gal-stat-row"><span>🥤 Nước đã pha đúng</span><span>${totalDrinks}</span></div>
      <div class="gal-stat-row"><span>⭐ Tổng sao đã đạt</span><span>${totalStars}/${LEVELS.length*3}</span></div>
      <div class="gal-stat-row"><span>🛒 Tổng cấp nâng cấp</span><span>${totalUpgrades}</span></div>
      <div class="gal-stat-row"><span>🏅 Thành tựu mở</span><span>${Object.keys(PROG.achievements||{}).length}/${ACHIEVEMENTS.length}</span></div>
      <div class="gal-stat-row"><span>🎑 Best lễ hội</span><span>${(PROG.bestFestival||0).toLocaleString('vi-VN')}đ</span></div>`;
  }
}

function galleryNpcVisual(npc){
  if(!npc.portrait)return `<div class="gal-card-emoji">${npc.emoji}</div>`;
  return `<div class="gal-card-visual">
    <img class="gal-card-portrait" src="${npc.portrait}" alt="${npc.name}" loading="lazy" width="88" height="88" onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
    <div class="gal-card-emoji portrait-fallback">${npc.emoji}</div>
  </div>`;
}


window.onerror=(msg,u,line)=>{console.error('[GAME]',msg,'line',line);return false;};

function checkOrientation(){
  const w=document.getElementById('rotateWarning');if(!w)return;
  w.style.display=(window.innerWidth<=900&&window.innerWidth>window.innerHeight&&window.innerHeight<500)?'flex':'none';
}

window.addEventListener('DOMContentLoaded',()=>{
  console.log('🥢 Bếp Việt: Tiệm Bún Số 7 — Demo v1.11.03 (NPC portraits)');
  loadProg();
  const hasSave=hasAnyProgress();
  if(hasSave){
    document.getElementById('menuBtnContinue').style.display='block';
    document.getElementById('menuBtnReset').style.display='block';
  }
  // Festival + Gallery always visible
  document.getElementById('menuBtnFestival').style.display='block';
  document.getElementById('menuBtnGallery').style.display='block';
  checkOrientation();
});
window.addEventListener('resize',checkOrientation);
window.addEventListener('orientationchange',()=>setTimeout(checkOrientation,200));
document.addEventListener('dblclick',e=>e.preventDefault(),{passive:false});
document.body.style.overscrollBehavior='none';
