// === Emoji Art Replacement ===
// Converts visible emoji text into project-owned SVG image glyphs.
// The generated icons are data-URI SVGs, styled to match the Bep Viet palette.

const EMOJI_ART_LABELS = {
  '🥢':'Đũa','🏮':'Đèn','🧪':'Beta','⚡':'Nhanh','🎑':'Hội','📔':'Sổ','❓':'Hỏi','🗑':'Bỏ',
  '🕯':'Nến','👋':'Chào','💰':'Tiền','🔥':'Lửa','👥':'Khách','🍳':'Bếp','🔄':'Lật',
  '✋':'Gắp','🍽':'Dọn','🥕':'NL','📖':'Sổ','🥤':'Nước','📊':'Số','🛒':'Shop',
  '🏠':'Nhà','🎯':'Mục','🏆':'Cúp','🏅':'Huy','✅':'OK','❌':'Sai','⚠':'Cẩn',
  '🚨':'Gấp','😊':'Vui','😡':'Giận','😅':'Chậm','😢':'Buồn','💔':'Vỡ','👍':'Tốt',
  '✨':'Sáng','⭐':'Sao','🌟':'Sao','💎':'Kim','📣':'Tin','🎀':'Mở','🛡':'Khiên',
  '🍜':'Bún','🥖':'Mì','🍢':'Chả','🍝':'Mì','🍲':'Phở','🌶':'Cay','🍚':'Cơm',
  '🌯':'Cuốn','🍛':'Riêu','🥩':'Thịt','🌿':'Rau','🍅':'Cà','🟫':'Pa','🥓':'Nguội',
  '🥬':'Rau','🍖':'Chả','🥣':'Mắm','🦐':'Tôm','🫕':'Súp','🫓':'Tráng','🦀':'Cua',
  '🍗':'Gà','🍵':'Trà','🧊':'Đá','🍋':'Tắc','🎋':'Mía','☕':'Cafe','🥛':'Sữa',
  '🍹':'Pha','👴':'Tâm','👩‍💼':'Lan','🧔':'John','👱‍♀️':'Anna','🤌':'Ý','🧑‍💼':'Ken',
  '🎒':'SV','👷':'Thợ','📱':'Vlog','🧳':'Việt','🎩':'Lặng','🧑':'Khách','🧣':'Tây',
  '🧢':'Mỹ','💐':'Hoa','🛵':'Xe','🧓':'Bà','🚴':'Ship','🧐':'PB','👨‍🍳':'Bếp',
  '🌧':'Mưa','🤝':'Bạn','🌏':'Tour','📈':'Đông','🌆':'SG','🌀':'Quạt','🪑':'Ghế',
  '💳':'Thẻ','📋':'Menu','💸':'Phí','💼':'Quỹ','▶':'Đi','⏸':'Dừng','⏭':'Bỏ',
  '↻':'Xoay','☀':'Nắng','🌡':'Nóng','🔒':'Khóa','💡':'Mẹo'
};

const EMOJI_ART_COLORS = [
  ['#C62828','#FFD700','#FFF8E1'],
  ['#2E7D32','#FFE082','#E8F5E9'],
  ['#1565C0','#90CAF9','#E3F2FD'],
  ['#7B4F2E','#E6BE3C','#FFF8E1'],
  ['#4527A0','#FFCC80','#F3E5F5'],
  ['#BF360C','#FFAB40','#FFF3E0']
];

const EMOJI_RE = /((?:\p{Extended_Pictographic}|[▶⏸⏭↻✓✔✕×])(?:\uFE0F|\uFE0E)?(?:\u200D(?:\p{Extended_Pictographic}|[▶⏸⏭↻✓✔✕×])(?:\uFE0F|\uFE0E)?)*)/gu;

function normalizeEmojiKey(emoji){
  return emoji.replace(/\uFE0F|\uFE0E/g,'');
}

function hashEmoji(str){
  let h=0;
  for(const ch of str)h=(h*31+ch.codePointAt(0))>>>0;
  return h;
}

function emojiArtSvg(label, paletteIndex){
  const colors=EMOJI_ART_COLORS[paletteIndex%EMOJI_ART_COLORS.length];
  const safeLabel=String(label||'BV').replace(/[<>&"']/g,'');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${safeLabel}">
    <defs>
      <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${paletteIndex+3}"/><feColorMatrix values="0 0 0 0 .72 0 0 0 0 .58 0 0 0 0 .38 0 0 0 .18 0"/></filter>
    </defs>
    <rect width="64" height="64" rx="14" fill="${colors[2]}"/>
    <rect width="64" height="64" rx="14" filter="url(#paper)" opacity=".42"/>
    <circle cx="32" cy="32" r="25" fill="${colors[0]}" opacity=".94"/>
    <path d="M13 41c6 7 32 7 38 0v5c0 6-6 10-19 10S13 52 13 46z" fill="${colors[1]}" opacity=".9"/>
    <path d="M17 27c5-4 25-4 30 0" fill="none" stroke="${colors[1]}" stroke-width="4" stroke-linecap="round" opacity=".9"/>
    <path d="M19 17l26 26M29 15l21 21" fill="none" stroke="#7B4F2E" stroke-width="3" stroke-linecap="round" opacity=".75"/>
    <text x="32" y="37" text-anchor="middle" font-family="Be Vietnam Pro, Arial, sans-serif" font-size="${safeLabel.length>3?13:16}" font-weight="900" fill="#fff">${safeLabel}</text>
  </svg>`;
}

function emojiArtSrc(emoji){
  const key=normalizeEmojiKey(emoji);
  const label=EMOJI_ART_LABELS[key]||EMOJI_ART_LABELS[emoji]||'BV';
  const svg=emojiArtSvg(label, hashEmoji(key)%EMOJI_ART_COLORS.length);
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}

function emojiArtImg(emoji){
  const key=normalizeEmojiKey(emoji);
  const img=document.createElement('img');
  img.className='art-emoji';
  img.src=emojiArtSrc(emoji);
  img.alt=EMOJI_ART_LABELS[key]||emoji;
  img.title=EMOJI_ART_LABELS[key]||emoji;
  img.dataset.emojiArt='1';
  return img;
}

function shouldSkipEmojiArt(node){
  const el=node.nodeType===Node.ELEMENT_NODE?node:node.parentElement;
  return !el||el.closest('script,style,textarea,input,code,pre,.no-emoji-art,.art-emoji');
}

function artifyTextNode(node){
  const text=node.nodeValue;
  EMOJI_RE.lastIndex=0;
  if(!text||!EMOJI_RE.test(text))return;
  EMOJI_RE.lastIndex=0;
  const frag=document.createDocumentFragment();
  let last=0;
  for(const match of text.matchAll(EMOJI_RE)){
    const emoji=match[0];
    const index=match.index;
    if(index>last)frag.appendChild(document.createTextNode(text.slice(last,index)));
    frag.appendChild(emojiArtImg(emoji));
    last=index+emoji.length;
  }
  if(last<text.length)frag.appendChild(document.createTextNode(text.slice(last)));
  node.parentNode.replaceChild(frag,node);
}

function artifyEmojis(root){
  if(!root||shouldSkipEmojiArt(root))return;
  if(root.nodeType===Node.TEXT_NODE){artifyTextNode(root);return;}
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
    acceptNode(node){
      if(shouldSkipEmojiArt(node))return NodeFilter.FILTER_REJECT;
      EMOJI_RE.lastIndex=0;
      return EMOJI_RE.test(node.nodeValue||'')?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
    }
  });
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(artifyTextNode);
}

function startEmojiArtObserver(){
  artifyEmojis(document.body);
  const observer=new MutationObserver(mutations=>{
    for(const m of mutations){
      m.addedNodes.forEach(node=>artifyEmojis(node));
      if(m.type==='characterData')artifyEmojis(m.target);
    }
  });
  observer.observe(document.body,{childList:true,subtree:true,characterData:true});
}

window.artifyEmojis=artifyEmojis;
window.emojiArtSrc=emojiArtSrc;
window.addEventListener('DOMContentLoaded',startEmojiArtObserver);
