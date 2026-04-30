// === State + global helpers ===
// PROG persistent state, G transient game state, save/load,
// achievement queue, notify timer registry.

let PROG=Object.assign({},PROG_DEFAULT);

function saveProg(){try{localStorage.setItem(PROG_KEY,JSON.stringify(PROG));}catch(e){}}
function loadProg(){
  try{
    let raw=localStorage.getItem(PROG_KEY);
    if(!raw){for(const k of LEGACY_PROG_KEYS){const v=localStorage.getItem(k);if(v){raw=v;break;}}}
    if(raw){
      const d=JSON.parse(raw);
      if(d.ownedUpgrades&&!d.upgradeLevels){d.upgradeLevels={};(d.ownedUpgrades||[]).forEach(id=>{d.upgradeLevels[id]=1;});delete d.ownedUpgrades;}
      PROG=Object.assign({},PROG_DEFAULT,d);
      // ensure object fields after deep merge gaps
      ['upgradeLevels','levelStars','metCustomers','achievements','storyFlags','drinksMastered'].forEach(k=>{if(!PROG[k]||typeof PROG[k]!=='object')PROG[k]={};});
      saveProg();
    }
  }catch(e){}
}
function resetProg(){PROG=createEmptyProgress();saveProg();location.reload();}
function upgradeLevel(id){return PROG.upgradeLevels[id]||0;}
function hasUpgrade(id){return upgradeLevel(id)>0;}
function setStoryFlag(flag){if(!PROG.storyFlags[flag]){PROG.storyFlags[flag]=Date.now();saveProg();return true;}return false;}
function hasStoryFlag(flag){return !!PROG.storyFlags[flag];}

function unlockAchievement(id){
  if(PROG.achievements[id])return false;
  const a=ACHIEVEMENTS.find(x=>x.id===id);if(!a)return false;
  PROG.achievements[id]=Date.now();saveProg();
  // Defer the notify to end-of-level — popping mid-rush breaks focus
  _sessionAchievementQueue.push(a);
  return true;
}

function checkAchievements(ev){
  // Generic checks
  if(PROG.totalMoney>=500000)unlockAchievement('rich_500k');
  if(PROG.totalMoney>=2000000)unlockAchievement('rich_2m');
  if((PROG.reputation||0)>=50)unlockAchievement('reputation_50');
  // Met regulars
  if(PROG.metCustomers.bac_tam&&PROG.metCustomers.co_lan&&PROG.metCustomers.john)unlockAchievement('meet_all_regulars');
  // All drinks pha thành công
  if(['tra_da','tra_tac','nuoc_mia','ca_phe_sua_da','rau_ma'].every(k=>(PROG.drinksMastered||{})[k]))unlockAchievement('all_drinks_made');
  // All recipes (10 dishes)
  const recipeCount=Object.keys(RECIPES).length;
  const lvIdx=PROG.levelIdx;const ovr=LEVELS[lvIdx]?.overall||1;
  const unlockedRecipeCount=Object.values(RECIPES).filter(r=>!r.availableFrom||r.availableFrom<=ovr).length;
  if(unlockedRecipeCount>=recipeCount)unlockAchievement('all_recipes');
  if(!ev)return;
  if(ev.type==='serve'){
    unlockAchievement('first_serve');
    if(ev.grillQuality==='perfect')unlockAchievement('first_perfect_grill');
    if(ev.drinkResult==='match')unlockAchievement('first_drink_combo');
    if(G.streak>=5)unlockAchievement('streak_5');
    if(G.streak>=10)unlockAchievement('streak_10');
    if(ev.customer.npcKey==='food_blogger')unlockAchievement('meet_food_blogger');
    if(ev.customer.npcKey==='viet_kieu')unlockAchievement('meet_viet_kieu');
    if(ev.customer.npcKey==='khach_im_lang')unlockAchievement('meet_silent');
  }
  if(ev.type==='boss_won'){
    if(ev.bossNpc==='tuan_pb')unlockAchievement('beat_tuan');
    if(ev.bossNpc==='khang'){unlockAchievement('beat_khang');if(G.burntGrills===0)unlockAchievement('no_burn_boss');}
    if(ev.bossNpc==='iron_chef')unlockAchievement('beat_iron_chef');
  }
  if(ev.type==='chapter_clear_clean')unlockAchievement('no_waste_chapter');
  if(ev.type==='festival_score'&&ev.score>=500000)unlockAchievement('festival_500');
}

let G = {
  money:0,score:0,timeRemaining:180,
  customersServed:0,customersLeft:0,totalCustomers:6,customersSpawned:0,
  customers:[],
  pot:{ingredients:[],status:'idle',finishedDish:null},
  grill:{status:'idle',progress:0,flipped:false,quality:null,flipQuality:null},
  drinkStation:{ingredients:[],status:'idle',finishedDrink:null},
  selectedCustomer:null,
  isPaused:false,isGameOver:false,
  perfectGrills:0,burntGrills:0,
  streak:0,maxStreak:0,
  drinksServedCorrect:0,
  npcServed:{bac_tam:0,co_lan:0,john:0},
  isFestival:false
};

let timerInterval=null,spawnInterval=null,patienceInterval=null,grillInterval=null,drinkInterval=null,blackoutInterval=null;
let pendingNotifyTimers=[];
let _sessionAchievementQueue=[];

function notifyDelayed(ms,fn){
  const id=setTimeout(()=>{fn();pendingNotifyTimers=pendingNotifyTimers.filter(x=>x!==id);},ms);
  pendingNotifyTimers.push(id);
  return id;
}
function clearPendingNotifyTimers(){
  pendingNotifyTimers.forEach(id=>clearTimeout(id));
  pendingNotifyTimers=[];
}

// Defer achievement popups to end-of-level so they don't break focus mid-rush
function flushAchievementQueue(){
  if(!_sessionAchievementQueue.length)return;
  _sessionAchievementQueue.forEach((a,i)=>{
    notifyDelayed(800+i*1100,()=>notify(`🏅 Thành tựu mới: ${a.emoji} ${a.name}`,'success'));
  });
  _sessionAchievementQueue=[];
}
