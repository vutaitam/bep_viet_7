const INIT = [
  { id: 1, stt: 1, so: "09", ten: "TDũng", pos: "GK", doi: "FC Mobile", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 2, stt: 2, so: "07", ten: "BKhang", pos: "CB", doi: "FC Mobile", rating: 3, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 3, stt: 3, so: "06", ten: "NPhong", pos: "CM", doi: "FC Mobile", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 4, stt: 4, so: "90", ten: "AQuân", pos: "ST", doi: "FC Mobile", rating: 4, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 5, stt: 5, so: "25", ten: "ĐQuang", pos: "ST", doi: "FC Mobile", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 6, stt: 6, so: "01", ten: "NMinh", pos: "CB", doi: "FC Mobile", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 7, stt: 7, so: "12", ten: "GBách", pos: "LW", doi: "FC Mobile", rating: 1, val: 50, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 8, stt: 8, so: "02", ten: "MKhang", pos: "RW", doi: "FC Mobile", rating: 2, val: 75, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 27, stt: 27, so: "", ten: "QThắng", pos: "ST", doi: "FC Mobile", rating: 4, val: 500, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 9, stt: 9, so: "06", ten: "TMinh", pos: "GK", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 10, stt: 10, so: "08", ten: "GHưng", pos: "ST", doi: "FC Bựa Dâm", rating: 4, val: 400, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 11, stt: 11, so: "3", ten: "QKhải", pos: "CM", doi: "FC Bựa Dâm", rating: 4, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 12, stt: 12, so: "10", ten: "TKhang", pos: "CM", doi: "FC Bựa Dâm", rating: 3, val: 300, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 13, stt: 13, so: "23", ten: "Vanh", pos: "CB", doi: "FC Bựa Dâm", rating: 3, val: 200, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 14, stt: 14, so: "5", ten: "MHưng", pos: "CB", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 15, stt: 15, so: "1", ten: "Phiệp", pos: "RW", doi: "FC Bựa Dâm", rating: 3, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 16, stt: 16, so: "9", ten: "ĐThắng", pos: "LW", doi: "FC Bựa Dâm", rating: 2, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 17, stt: 17, so: "21", ten: "XPhúc", pos: "ST", doi: "FC Bựa Dâm", rating: 2, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 18, stt: 18, so: "", ten: "SLong", pos: "GK", doi: "FC Sĩ Gái", rating: 4, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 19, stt: 19, so: "", ten: "KNguyên", pos: "ST", doi: "FC Sĩ Gái", rating: 4, val: 400, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 20, stt: 20, so: "", ten: "AĐức", pos: "CM", doi: "FC Sĩ Gái", rating: 3, val: 325, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 21, stt: 21, so: "", ten: "MĐức", pos: "CB", doi: "FC Sĩ Gái", rating: 2, val: 150, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 22, stt: 22, so: "", ten: "KMinh", pos: "LW", doi: "FC Sĩ Gái", rating: 3, val: 325, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 23, stt: 23, so: "", ten: "GBảo", pos: "RW", doi: "FC Sĩ Gái", rating: 4, val: 300, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 24, stt: 24, so: "", ten: "MQuang", pos: "ST", doi: "FC Sĩ Gái", rating: 5, val: 350, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 25, stt: 25, so: "", ten: "KMinh1", pos: "CB", doi: "FC Sĩ Gái", rating: 3, val: 100, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
  { id: 26, stt: 26, so: "", ten: "ĐMinh", pos: "GK", doi: "FC Sĩ Gái", rating: 1, val: 50, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: "superadmin" },
];

const ADMIN_H = ((s) => {
  let v = 0;
  for (let i = 0; i < s.length; i += 1) {
    v = ((v << 5) - v) + s.charCodeAt(i);
    v |= 0;
  }
  return v.toString(36);
})("hanhnguyen110312");

function h(s) {
  let v = 0;
  for (let i = 0; i < s.length; i += 1) {
    v = ((v << 5) - v) + s.charCodeAt(i);
    v |= 0;
  }
  return v.toString(36);
}

const BONUSES = [
  { id: "vdich", lbl: "Vô địch", tag: "🏆 Đội", type: "team_win", amt: 20, cls: "", desc: "GK/HV +35▪, còn lại +20▪", by: "superadmin" },
  { id: "vuabt", lbl: "Vua bàn thắng", tag: "+50", type: "val", amt: 50, cls: "special", desc: "Cầu thủ ghi nhiều bàn nhất +50", by: "superadmin" },
  { id: "vuakt", lbl: "Vua kiến tạo", tag: "+25", type: "val", amt: 25, cls: "special", desc: "Cầu thủ kiến tạo nhiều nhất +25", by: "superadmin" },
  { id: "cxsnhat", lbl: "CĐ xuất sắc nhất", tag: "+50", type: "val", amt: 50, cls: "special", desc: "Cầu thủ XS nhất mùa giải +50", by: "superadmin" },
  { id: "qbv", lbl: "Quả bóng vàng", tag: "+50", type: "qbv", amt: 50, cls: "special", desc: "QBV +50 (giới hạn 3 mùa/cầu thủ)", by: "superadmin" },
  { id: "puskas", lbl: "Puskas", tag: "+20", type: "val", amt: 20, cls: "special", desc: "Bàn thắng đẹp nhất +20", by: "superadmin" },
  { id: "hvtm", lbl: "HV Thủ môn", tag: "+20", type: "gk", amt: 20, cls: "gk", desc: "Thủ môn +20 mỗi lần tăng chỉ số", by: "superadmin" },
];

const VER = "v8";
if (localStorage.getItem("tmV") !== VER) {
  localStorage.removeItem("tmD");
  localStorage.removeItem("tmBL");
  localStorage.removeItem("tmSUGG");
  localStorage.removeItem("tmCB");
  localStorage.setItem("tmV", VER);
}

let DATA = JSON.parse(localStorage.getItem("tmD") || JSON.stringify(INIT));
let BL = JSON.parse(localStorage.getItem("tmBL") || "[]");
let SUGG = JSON.parse(localStorage.getItem("tmSUGG") || "[]");
let CUSTOM_BONUSES = JSON.parse(localStorage.getItem("tmCB") || "[]");
let USERS = initUsers();
let CU = null;
let cF = "all";
let cS = "val";
let eId = null;
let c1 = null;
let c2 = null;
let _vdichTeam = "";

const TC = { "FC Mobile": "#185FA5", "FC Bựa Dâm": "#27ae60", "FC Sĩ Gái": "#8e44ad" };
const TL = { "FC Mobile": "#d6eaf8", "FC Bựa Dâm": "#d5f5e3", "FC Sĩ Gái": "#e8daef" };
const TD = { "FC Mobile": "#0c3460", "FC Bựa Dâm": "#1e8449", "FC Sĩ Gái": "#6c3483" };
const TEAMS = ["FC Mobile", "FC Bựa Dâm", "FC Sĩ Gái"];

function initUsers() {
  const us = JSON.parse(localStorage.getItem("tmU") || "[]");
  const vq = us.find((u) => u.un === "vquyetthang");
  if (!vq) us.push({ un: "vquyetthang", h: ADMIN_H, role: "superadmin", ok: true, ep: [] });
  else {
    vq.role = "superadmin";
    vq.ok = true;
  }
  localStorage.setItem("tmU", JSON.stringify(us));
  return us;
}

function fbReady() {
  return new Promise((res) => {
    if (window._fbReady) res();
    else window.addEventListener("fbReady", res, { once: true });
  });
}

async function fbSet(path, val) {
  try {
    await fbReady();
    const { db, ref, set } = window._fb;
    await set(ref(db, path), val);
  } catch (e) {
    console.warn("fbSet error", e);
  }
}

async function fbGet(path) {
  try {
    await fbReady();
    const { db, ref, get } = window._fb;
    const s = await get(ref(db, path));
    return s.exists() ? s.val() : null;
  } catch {
    return null;
  }
}

function objToUsers(obj) {
  return obj ? Object.values(obj) : [];
}

async function fbSetUser(u) {
  await fbSet(`users/${u.un}`, u);
}

async function fbGetUsers() {
  const obj = await fbGet("users");
  return objToUsers(obj);
}

function sd() {
  localStorage.setItem("tmD", JSON.stringify(DATA));
  localStorage.setItem("tmU", JSON.stringify(USERS));
  localStorage.setItem("tmBL", JSON.stringify(BL));
  localStorage.setItem("tmSUGG", JSON.stringify(SUGG));
  localStorage.setItem("tmCB", JSON.stringify(CUSTOM_BONUSES));
  fbSet("data/players", DATA);
  fbSet("data/bonusLog", BL.length ? BL : null);
  fbSet("data/suggestions", SUGG.length ? SUGG : null);
  fbSet("data/customBonuses", CUSTOM_BONUSES.length ? CUSTOM_BONUSES : null);
}

async function loadFromFirebase() {
  showLoading(true);
  try {
    const [fbP, fbU, fbBL, fbSUGG, fbCB] = await Promise.all([
      fbGet("data/players"),
      fbGetUsers(),
      fbGet("data/bonusLog"),
      fbGet("data/suggestions"),
      fbGet("data/customBonuses"),
    ]);
    if (Array.isArray(fbP) && fbP.length > 0) {
      DATA = fbP;
      localStorage.setItem("tmD", JSON.stringify(DATA));
    }
    if (Array.isArray(fbU) && fbU.length > 0) {
      const vq = fbU.find((u) => u.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
      if (CU) {
        const fresh = USERS.find((u) => u.un === CU.un);
        if (fresh) {
          if (fresh.un === "vquyetthang") fresh.role = "superadmin";
          CU = fresh;
        }
      }
    }
    if (Array.isArray(fbBL)) {
      BL = fbBL;
      localStorage.setItem("tmBL", JSON.stringify(BL));
    }
    if (Array.isArray(fbSUGG)) {
      SUGG = fbSUGG;
      localStorage.setItem("tmSUGG", JSON.stringify(SUGG));
    }
    if (Array.isArray(fbCB)) {
      CUSTOM_BONUSES = fbCB;
      localStorage.setItem("tmCB", JSON.stringify(CUSTOM_BONUSES));
    }
    if (!fbP) fbSet("data/players", DATA);
    if (Array.isArray(fbU) && fbU.length === 0) USERS.forEach((u) => fbSetUser(u));
  } catch (e) {
    console.warn("Firebase load error:", e);
  }
  showLoading(false);
  const cur = document.querySelector(".nav-item.active")?.textContent?.trim() || "";
  if (cur === "Thị trường") {
    rStats();
    rTable();
    rCharts();
  }
  if (cur === "Thưởng sau trận") rBonus();
  if (cur === "Admin") {
    rAdmin();
    renderSuggApprove();
  }
}

function showLoading(on) {
  let el = document.getElementById("fbLoader");
  if (!el) {
    el = document.createElement("div");
    el.id = "fbLoader";
    el.style = "position:fixed;top:58px;left:50%;transform:translateX(-50%);background:#1a5276;color:#fff;padding:5px 16px;border-radius:20px;font-size:12px;z-index:9999;display:none;box-shadow:0 2px 8px rgba(0,0,0,.3)";
    el.textContent = "Đang đồng bộ...";
    document.body.appendChild(el);
  }
  el.style.display = on ? "block" : "none";
}

function canE() { return CU && (CU.role === "superadmin" || CU.role === "admin"); }
function isSuperAdmin() { return CU && CU.role === "superadmin"; }
function isAdmin() { return CU && (CU.role === "admin" || CU.role === "superadmin"); }
function stars(r) { return `${"★".repeat(r)}${"☆".repeat(5 - r)}`; }
function ini(n) { return n.substring(0, 2).toUpperCase(); }
function itot(idx) { return (idx.toc || 0) + (idx.suc || 0) + (idx.ky || 0) + (idx.tong || 0); }
function sq(s) { return `<span style="display:inline-block;width:${s}px;height:${s}px;background:currentColor;vertical-align:middle;margin-left:1px"></span>`; }
function esc(s) { return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;"); }

function idxB(p) {
  const ks = ["toc", "suc", "ky", "tong"];
  const ls = ["Tốc", "Sức", "Kỹ", "Tổng"];
  const pts = ks
    .filter((k) => p.idx[k] !== 0)
    .map((k) => {
      const v = p.idx[k];
      const color = v > 0 ? "#1e8449" : v < 0 ? "#922b21" : "#666";
      const label = ls[ks.indexOf(k)];
      return `<span style="font-size:10px;color:${color}">${label} ${v > 0 ? "+" : ""}${v}</span>`;
    });
  return pts.length ? pts.join(" ") : '<span style="font-size:11px;color:#aaa">—</span>';
}

function toast(msg, t = "") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = `toast ${t}`;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2800);
}

function switchTab(tab) {
  document.querySelectorAll(".auth-tab").forEach((b, i) => b.classList[i === (tab === "login" ? 0 : 1) ? "add" : "remove"]("active"));
  document.getElementById("panelLogin").classList[tab === "login" ? "add" : "remove"]("show");
  document.getElementById("panelRegister").classList[tab === "register" ? "add" : "remove"]("show");
}

async function doLogin() {
  const u = document.getElementById("lUser").value.trim();
  const p = document.getElementById("lPass").value;
  const m = document.getElementById("lMsg");
  if (!u || !p) {
    m.innerHTML = '<div class="auth-msg err">Vui lòng điền đầy đủ</div>';
    return;
  }
  m.innerHTML = '<div class="auth-msg warn">Đang đăng nhập...</div>';
  try {
    const fbU = await fbGetUsers();
    if (fbU && fbU.length > 0) {
      const vq = fbU.find((x) => x.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
    } else {
      USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
    }
  } catch {
    USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  }
  const usr = USERS.find((x) => x.un === u && x.h === h(p));
  if (!usr) {
    m.innerHTML = '<div class="auth-msg err">Sai tên đăng nhập hoặc mật khẩu</div>';
    return;
  }
  if (usr.un === "vquyetthang") usr.role = "superadmin";
  m.innerHTML = "";
  CU = usr;
  enterApp();
}

async function doRegister() {
  const u = document.getElementById("rUser").value.trim();
  const p = document.getElementById("rPass").value;
  const p2 = document.getElementById("rPass2").value;
  const m = document.getElementById("rMsg");
  if (!u || !p) {
    m.innerHTML = '<div class="auth-msg err">Vui lòng điền đầy đủ</div>';
    return;
  }
  if (p !== p2) {
    m.innerHTML = '<div class="auth-msg err">Mật khẩu không khớp</div>';
    return;
  }
  if (u.length < 3) {
    m.innerHTML = '<div class="auth-msg err">Username ít nhất 3 ký tự</div>';
    return;
  }
  if (p.length < 6) {
    m.innerHTML = '<div class="auth-msg err">Mật khẩu ít nhất 6 ký tự</div>';
    return;
  }
  m.innerHTML = '<div class="auth-msg warn">Đang kiểm tra...</div>';
  const fbU = await fbGetUsers();
  if (fbU && fbU.length > 0) {
    const vq = fbU.find((x) => x.un === "vquyetthang");
    if (vq) {
      vq.role = "superadmin";
      vq.ok = true;
    }
    USERS = fbU;
    localStorage.setItem("tmU", JSON.stringify(USERS));
  } else {
    USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  }
  if (USERS.find((x) => x.un === u)) {
    m.innerHTML = '<div class="auth-msg err">Username đã tồn tại</div>';
    return;
  }
  const newUser = { un: u, h: h(p), role: "guest", ok: true, ep: [] };
  USERS.push(newUser);
  localStorage.setItem("tmU", JSON.stringify(USERS));
  fbSetUser(newUser);
  m.innerHTML = '<div class="auth-msg ok">Tạo tài khoản thành công! Đang chuyển hướng...</div>';
  document.getElementById("rUser").value = "";
  document.getElementById("rPass").value = "";
  document.getElementById("rPass2").value = "";
  setTimeout(() => switchTab("login"), 1500);
}

function doLogout() {
  CU = null;
  sessionStorage.removeItem("tmSession");
  document.getElementById("authScreen").style.display = "flex";
  document.getElementById("mainApp").style.display = "none";
  document.getElementById("appCont").style.display = "none";
  document.getElementById("lUser").value = "";
  document.getElementById("lPass").value = "";
  document.getElementById("lMsg").innerHTML = "";
}

function enterApp() {
  sessionStorage.setItem("tmSession", CU.un);
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("mainApp").style.display = "block";
  document.getElementById("appCont").style.display = "block";
  const b = document.getElementById("hBadge");
  b.textContent = CU.role === "superadmin" ? "SUPER ADMIN" : CU.role === "admin" ? "Admin" : "Guest";
  b.className = `ubadge ${CU.role === "guest" ? "guest" : "admin"}`;
  document.getElementById("hName").textContent = CU.un;
  document.getElementById("navAdmin").style.display = isAdmin() ? "block" : "none";
  const btnRA = document.getElementById("btnReqAdmin");
  if (btnRA) btnRA.style.display = CU.role === "guest" ? "inline-block" : "none";
  updateReqAdminBtn();
  showPage("Market");
  if (window._fbReady) loadFromFirebase();
  else window.addEventListener("fbReady", () => loadFromFirebase(), { once: true });
}

function showPage(p) {
  ["Market", "Bonus", "Admin"].forEach((x) => { document.getElementById(`page${x}`).style.display = "none"; });
  document.getElementById(`page${p}`).style.display = "block";
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  const idx = { Market: 0, Bonus: 1, Admin: 2 }[p];
  document.querySelectorAll(".nav-item")[idx]?.classList.add("active");
  if (p === "Market") {
    rStats();
    rTable();
    rCharts();
    const sp = document.getElementById("suggPlayerSection");
    if (sp) sp.style.display = CU && CU.role === "guest" ? "block" : "none";
    renderMySugg();
  }
  if (p === "Bonus") rBonus();
  if (p === "Admin") {
    rAdmin();
    renderSuggApprove();
  }
}

function getF() {
  const d = cF === "all" ? [...DATA] : DATA.filter((p) => p.doi === cF);
  if (cS === "val") d.sort((a, b) => b.val - a.val);
  else if (cS === "rating") d.sort((a, b) => b.rating - a.rating);
  else if (cS === "stt") d.sort((a, b) => a.stt - b.stt);
  else if (cS === "idx") d.sort((a, b) => itot(b.idx) - itot(a.idx));
  else if (cS === "pos") d.sort((a, b) => (a.pos || "CM").localeCompare(b.pos || "CM"));
  return d.map((p, i) => ({ ...p, rank: i + 1 }));
}

function rStats() {
  const tot = DATA.reduce((s, p) => s + p.val, 0);
  let html = `<div class="stat-box"><div class="stat-lbl">Tổng giá trị</div><div class="stat-val">${tot.toLocaleString()} ${sq(11)}</div><div class="stat-sub">${DATA.length} cầu thủ</div></div>`;
  const cls = ["mob", "bua", "gai"];
  TEAMS.forEach((t, i) => {
    const ps = DATA.filter((p) => p.doi === t);
    const tv = ps.reduce((s, p) => s + p.val, 0);
    const avg = ps.length ? Math.round(tv / ps.length) : 0;
    html += `<div class="stat-box ${cls[i]}"><div class="stat-lbl">${t}</div><div class="stat-val" style="color:${TC[t]}">${tv.toLocaleString()} ${sq(10)}</div><div class="stat-sub">${ps.length} cầu thủ · TB ${avg.toLocaleString()} ${sq(8)}</div></div>`;
  });
  document.getElementById("statsRow").innerHTML = html;
}

function rTable() {
  const d = getF();
  const maxV = d.length ? Math.max(...d.map((p) => p.val)) : 1;
  const dc = cF === "all" ? "#e8a317" : TC[cF];
  const lbl = cF === "all" ? `Tất cả — ${d.length} người` : `${cF} — ${d.length} cầu thủ`;
  document.getElementById("secBar").innerHTML = `<span class="sec-dot" style="background:${dc}"></span><span>${lbl}</span>`;
  document.getElementById("tbody").innerHTML = d.map((p) => {
    const tc = TC[p.doi];
    const tl = TL[p.doi];
    const tdk = TD[p.doi];
    const bw = Math.round((p.val / maxV) * 100);
    const rk = p.rank <= 3 ? `t${p.rank}` : "";
    const rd = p.rank <= 3 ? ["🥇", "🥈", "🥉"][p.rank - 1] : p.rank;
    const ce = !!CU && (CU.role === "superadmin" || (CU.role === "admin" && p.by !== "superadmin"));
    const pos = p.pos || "CM";
    const dis = ce ? "" : "disabled";
    const editBtn = ce ? `<button class="edbtn" onclick="openModal(${p.id})">Sửa</button>` : '<span style="font-size:11px;color:#ddd">—</span>';
    return `<tr><td class="rnk ${rk}">${rd}</td><td><div class="pcell"><div class="av" style="background:${tl};color:${tdk};border-color:${tc}">${ini(p.ten)}</div><div><div class="pname">${esc(p.ten)}</div><div class="pso">${p.so ? `#${esc(p.so)}` : ""}</div></div></div></td><td><span class="tbadge" style="background:${tl};color:${tdk}">${esc(p.doi.replace("FC ", ""))}</span></td><td><span class="pos-badge pos-${pos}">${pos}</span></td><td><span class="stars">${stars(p.rating)}</span></td><td class="vcell" style="color:${tc}">${p.val.toLocaleString()} ${sq(9)}</td><td><input type="number" class="vi" id="vi-${p.id}" value="${p.val}" ${dis} onchange="qSave(${p.id},this)" oninput="this.classList.add('changed')" title="${ce ? "Nhập giá trị" : "Không có quyền"}"></td><td>${idxB(p)}</td><td><div class="bar-bg"><div class="bar-fill" style="width:${bw}%;background:${tc}"></div></div></td><td>${editBtn}</td></tr>`;
  }).join("");
}

function qSave(id, inp) {
  const v = parseInt(inp.value, 10) || 0;
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    inp.value = p.val;
    inp.classList.remove("changed");
    toast("Admin không thể sửa cầu thủ của Super Admin!", "warn");
    return;
  }
  p.val = v;
  sd();
  rStats();
  rCharts();
  inp.classList.remove("changed");
  toast(`${p.ten}: ${v.toLocaleString()} ${sq(9)}`, "success");
}

function setFilter(f, btn) {
  cF = f;
  document.querySelectorAll(".filter-bar .fb").forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  rTable();
}

function setSort(s) {
  cS = s;
  ["sVal", "sRat", "sStt", "sPos"].forEach((id) => document.getElementById(id)?.classList.remove("active"));
  const mp = { val: "sVal", rating: "sRat", stt: "sStt", pos: "sPos" };
  if (mp[s]) document.getElementById(mp[s])?.classList.add("active");
  rTable();
}

function openModal(id) {
  eId = id;
  const p = DATA.find((x) => x.id === id);
  if (!p) return;
  const tc = TC[p.doi];
  const tl = TL[p.doi];
  const tdk = TD[p.doi];
  document.getElementById("mTitle").textContent = `Chỉnh sửa — ${p.ten}`;
  document.getElementById("mName").textContent = p.ten;
  document.getElementById("mMeta").textContent = `${p.doi}${p.so ? ` · #${p.so}` : ""}`;
  const av = document.getElementById("mAv");
  av.textContent = ini(p.ten);
  av.style.background = tl;
  av.style.color = tdk;
  av.style.borderColor = tc;
  document.getElementById("iVal").value = p.val;
  document.getElementById("iRat").value = p.rating;
  document.getElementById("iPos").value = p.pos || "CM";
  document.getElementById("iToc").value = p.idx.toc || "";
  document.getElementById("iSuc").value = p.idx.suc || "";
  document.getElementById("iKy").value = p.idx.ky || "";
  document.getElementById("iTong").value = p.idx.tong || "";
  document.getElementById("modalOv").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOv").classList.remove("open");
  eId = null;
}

function saveModal() {
  const p = DATA.find((x) => x.id === eId);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    closeModal();
    toast("Admin không thể sửa cầu thủ của Super Admin!", "warn");
    return;
  }
  p.val = parseInt(document.getElementById("iVal").value, 10) || p.val;
  p.rating = parseInt(document.getElementById("iRat").value, 10) || p.rating;
  p.pos = document.getElementById("iPos").value;
  p.idx.toc = parseInt(document.getElementById("iToc").value, 10) || 0;
  p.idx.suc = parseInt(document.getElementById("iSuc").value, 10) || 0;
  p.idx.ky = parseInt(document.getElementById("iKy").value, 10) || 0;
  p.idx.tong = parseInt(document.getElementById("iTong").value, 10) || 0;
  sd();
  rStats();
  rTable();
  rCharts();
  closeModal();
  toast(`Đã cập nhật ${p.ten}`, "success");
}

function rCharts() {
  const tots = TEAMS.map((t) => DATA.filter((p) => p.doi === t).reduce((s, p) => s + p.val, 0));
  const cols = TEAMS.map((t) => TC[t]);
  document.getElementById("chartLeg").innerHTML = TEAMS.map((t, i) => `<span><b style="background:${cols[i]}"></b>${t}: ${tots[i].toLocaleString()} ▪</span>`).join("");
  if (c1) c1.destroy();
  c1 = new Chart(document.getElementById("c1"), {
    type: "bar",
    data: { labels: TEAMS.map((t) => t.replace("FC ", "")), datasets: [{ data: tots, backgroundColor: cols.map((c) => `${c}BB`), borderColor: cols, borderWidth: 1.5, borderRadius: 3 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 11, family: "Oswald" } } }, y: { ticks: { callback: (v) => `${v.toLocaleString()} ▪`, font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.05)" } } } },
  });
  const sorted = [...DATA].sort((a, b) => a.stt - b.stt);
  if (c2) c2.destroy();
  c2 = new Chart(document.getElementById("c2"), {
    type: "bar",
    data: { labels: sorted.map((p) => p.ten), datasets: [{ data: sorted.map((p) => p.val), backgroundColor: sorted.map((p) => `${TC[p.doi]}99`), borderColor: sorted.map((p) => TC[p.doi]), borderWidth: 1, borderRadius: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 45, autoSkip: false } }, y: { ticks: { callback: (v) => `${v.toLocaleString()} ▪`, font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.05)" } } } },
  });
}

function renderBonusCard(b, ok, opts, teamOpts) {
  if (b.type === "team_win") {
    return `<div class="bcard"><div class="bcard-ttl"><span class="btag">🏆 Đội</span>${esc(b.lbl)}</div><div class="bdesc">${esc(b.desc)}</div><div class="brow"><select class="bsel" id="bs-${b.id}">${teamOpts}</select><button class="bapply" onclick="applyB('${b.id}')" ${ok ? "" : "disabled"}>Áp dụng</button></div></div>`;
  }
  const delBtn = isAdmin() && b.by !== "superadmin" ? `<button class="bsm bsm-del" onclick="deleteCustomBonus('${b.id}')" style="margin-left:4px">✕</button>` : "";
  const addedBy = b.addedBy ? `<span style="font-size:10px;color:#aaa"> (${esc(b.addedBy)})</span>` : "";
  return `<div class="bcard"><div class="bcard-ttl"><span class="btag ${b.cls}">${esc(b.tag)} ▪</span>${esc(b.lbl)}${addedBy}</div><div class="bdesc">${esc(b.desc)}</div><div class="brow"><select class="bsel" id="bs-${b.id}">${opts}</select><button class="bapply" onclick="applyB('${b.id}')" ${ok ? "" : "disabled"}>Áp dụng</button>${delBtn}</div></div>`;
}

function rBonus() {
  const ok = canE();
  const sb = document.getElementById("suggBonusSection");
  if (sb) sb.style.display = CU && CU.role === "guest" ? "block" : "none";
  const sSel = document.getElementById("suggPlayerSel");
  if (sSel) sSel.innerHTML = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})</option>`).join("");
  renderMySugg();
  const opts = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))} ${p.val.toLocaleString()}▪)</option>`).join("");
  const teamOpts = TEAMS.map((t) => `<option value="${t}">${t}</option>`).join("");
  const allBonuses = [...BONUSES, ...CUSTOM_BONUSES];
  document.getElementById("bonusNotice").innerHTML = ok ? "" : '<div style="background:#fef9e7;border:1px solid #f9e79f;padding:10px;border-radius:3px;font-size:12px;color:#7d6608;margin-bottom:12px">Chỉ Admin mới có thể áp dụng thưởng trực tiếp.</div>';
  const bgEl = document.getElementById("bonusGrid");
  bgEl.innerHTML = allBonuses.map((b) => renderBonusCard(b, ok, opts, teamOpts)).join("");
  if (ok) {
    bgEl.insertAdjacentHTML("beforeend", '<div class="bcard" style="border:2px dashed #ccc;background:#fafafa;display:flex;align-items:center;justify-content:center;cursor:pointer;min-height:90px" onclick="document.getElementById(\'addBonusForm\').style.display=\'grid\'"><div style="text-align:center;color:#aaa"><div style="font-size:22px">+</div><div style="font-size:12px">Thêm loại thưởng</div></div></div><div id="addBonusForm" style="display:none;grid-column:1/-1;border:1px solid var(--bd);border-radius:4px;padding:12px;background:#f9f9f9"><div style="font-weight:600;font-size:13px;margin-bottom:9px">Thêm loại thưởng mới</div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:9px;margin-bottom:9px"><div><label class="form-label">Tên thưởng</label><input class="form-input" id="cbLbl" placeholder="vd: Hattrick"></div><div><label class="form-label">Giá trị +</label><input class="form-input" type="number" id="cbAmt" placeholder="30"></div><div><label class="form-label">Mô tả</label><input class="form-input" id="cbDesc" placeholder="Ghi chú..."></div></div><div style="display:flex;gap:8px"><button class="btn-save" style="padding:7px 14px;font-size:13px" onclick="addCustomBonus()">Thêm</button><button class="btn-cancel" style="padding:7px 14px;font-size:13px" onclick="document.getElementById(\'addBonusForm\').style.display=\'none\'">Huỷ</button></div></div>');
  }
  rBH();
}

function addCustomBonus() {
  const lbl = document.getElementById("cbLbl").value.trim();
  const amt = parseInt(document.getElementById("cbAmt").value, 10) || 0;
  const desc = document.getElementById("cbDesc").value.trim();
  if (!lbl || !amt) {
    toast("Nhập đủ tên và giá trị", "warn");
    return;
  }
  CUSTOM_BONUSES.push({ id: `cb_${Date.now()}`, lbl, amt, tag: `+${amt}`, desc, cls: "special", type: "val", by: CU.role, addedBy: CU.un });
  sd();
  document.getElementById("addBonusForm").style.display = "none";
  toast(`Đã thêm loại thưởng: ${lbl}`, "success");
  rBonus();
}

function deleteCustomBonus(id) {
  const b = CUSTOM_BONUSES.find((x) => x.id === id);
  if (!b) return;
  if (b.by === "superadmin" && CU.role === "admin") {
    toast("Admin không thể xoá thưởng của Super Admin!", "warn");
    return;
  }
  if (!confirm(`Xoá loại thưởng "${b.lbl}"?`)) return;
  CUSTOM_BONUSES = CUSTOM_BONUSES.filter((x) => x.id !== id);
  sd();
  toast(`Đã xóa ${b.lbl}`);
  rBonus();
}

function applyB(bid) {
  const b = [...BONUSES, ...CUSTOM_BONUSES].find((x) => x.id === bid);
  if (!b) return;
  if (b.type === "team_win") {
    openVdich(document.getElementById(`bs-${bid}`).value);
    return;
  }
  const pid = parseInt(document.getElementById(`bs-${bid}`).value, 10);
  const p = DATA.find((x) => x.id === pid);
  if (!p) return;
  if (b.type === "qbv") {
    if ((p.qbv || 0) >= 3) {
      toast(`${p.ten} đã nhận QBV 3 mùa!`, "warn");
      return;
    }
    p.qbv = (p.qbv || 0) + 1;
  }
  p.val += b.amt;
  BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${b.lbl} +${b.amt}`, by: CU.un });
  if (BL.length > 60) BL.pop();
  sd();
  rBH();
  toast(`${p.ten} +${b.amt} ▪ (${b.lbl})`, "success");
  rBonus();
}

function rBH() {
  const el = document.getElementById("bonusHist");
  el.innerHTML = BL.length ? BL.slice(0, 20).map((x) => `<div class="hist-item"><span><b>${esc(x.pl)}</b> — ${esc(x.bn)}</span><span style="color:#aaa;font-size:10px">${esc(x.t)} · ${esc(x.by)}</span></div>`).join("") : '<div style="font-size:12px;color:#aaa;text-align:center;padding:10px">Chưa có lịch sử</div>';
}

function openVdich(team) {
  _vdichTeam = team;
  const members = DATA.filter((p) => p.doi === team);
  if (!members.length) {
    toast("Không tìm thấy cầu thủ!", "warn");
    return;
  }
  document.getElementById("vdichTeamName").textContent = team;
  const defPos = ["GK", "CB", "LB", "RB", "CDM"];
  document.getElementById("vdichPlayerList").innerHTML = members.map((p) => {
    const pos = p.pos || "CM";
    const isDef = defPos.includes(pos);
    return `<label class="vd-player-row${isDef ? " checked" : ""}" id="vdrow-${p.id}" onclick="toggleVdRow(this, event)"><input type="checkbox" id="vdchk-${p.id}" ${isDef ? "checked" : ""}><span class="pos-badge pos-${pos}">${pos}</span><span style="flex:1;font-weight:500">${esc(p.ten)}</span><span style="font-size:11px;color:#185FA5" id="vdbonus-${p.id}">${isDef ? "+35▪" : "+20▪"}</span></label>`;
  }).join("");
  document.getElementById("vdichModal").classList.add("open");
}

function toggleVdRow(row, event) {
  const chk = row.querySelector('input[type="checkbox"]');
  if (!chk) return;
  if (event?.target !== chk) chk.checked = !chk.checked;
  row.classList.toggle("checked", chk.checked);
  const pid = chk.id.replace("vdchk-", "");
  const bonusEl = document.getElementById(`vdbonus-${pid}`);
  if (bonusEl) bonusEl.textContent = chk.checked ? "+35▪" : "+20▪";
}

function closeVdich() {
  document.getElementById("vdichModal").classList.remove("open");
}

function confirmVdich() {
  const members = DATA.filter((p) => p.doi === _vdichTeam);
  let count = 0;
  members.forEach((p) => {
    const chk = document.getElementById(`vdchk-${p.id}`);
    const isGKHV = chk ? chk.checked : false;
    const bonus = isGKHV ? 35 : 20;
    p.val += bonus;
    count += 1;
    BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `Vô địch ${isGKHV ? "+35(GK/HV)" : "+20"} [${p.pos || "CM"}]`, by: CU.un });
  });
  if (BL.length > 60) BL.length = 60;
  sd();
  closeVdich();
  rBH();
  toast(`${_vdichTeam} vô địch! ${count} cầu thủ được thưởng`, "success");
  rBonus();
  rStats();
}

function submitPlayerSugg() {
  const ten = document.getElementById("spTen").value.trim();
  if (!ten) {
    toast("Nhập tên cầu thủ", "warn");
    return;
  }
  const so = document.getElementById("spSo").value.trim();
  const doi = document.getElementById("spDoi").value;
  const val = parseInt(document.getElementById("spVal").value, 10) || 100;
  SUGG.push({ id: `ps_${Date.now()}`, type: "player", data: { ten, so, doi, val }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("spTen").value = "";
  document.getElementById("spSo").value = "";
  document.getElementById("spVal").value = "";
  toast(`Đã gửi đề xuất thêm ${ten}`, "success");
  renderMySugg();
  renderSuggApprove();
}

function submitBonusSugg() {
  const bonusId = document.getElementById("suggBonusSel").value;
  const pid = parseInt(document.getElementById("suggPlayerSel").value, 10);
  const note = document.getElementById("suggNote").value.trim();
  const p = DATA.find((x) => x.id === pid);
  const b = BONUSES.find((x) => x.id === bonusId);
  if (!p || !b) return;
  SUGG.push({ id: `bs_${Date.now()}`, type: "bonus", data: { bonusId, pid, pname: p.ten, bname: b.lbl, amt: b.amt, note }, by: CU.un, status: "pending", time: new Date().toLocaleString("vi-VN") });
  sd();
  document.getElementById("suggNote").value = "";
  toast(`Đã gửi đề xuất thưởng cho ${p.ten}`, "success");
  renderMySugg();
  renderSuggApprove();
}

function approveSugg(id) {
  const s = SUGG.find((x) => x.id === id);
  if (!s) return;
  s.status = "approved";
  if (s.type === "player") {
    const { ten, so, doi, val } = s.data;
    const newId = Math.max(...DATA.map((p) => p.id)) + 1;
    const newStt = Math.max(...DATA.map((p) => p.stt)) + 1;
    DATA.push({ id: newId, stt: newStt, so: so || "", ten, pos: "CM", doi, rating: 3, val, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: CU.role });
    sd();
    toast(`Đã duyệt thêm cầu thủ ${ten}`, "success");
  } else if (s.type === "bonus") {
    const p = DATA.find((x) => x.id === s.data.pid);
    if (p) {
      p.val += s.data.amt;
      BL.unshift({ t: new Date().toLocaleString("vi-VN"), pl: p.ten, bn: `${s.data.bname} +${s.data.amt} (đề xuất)`, by: CU.un });
      sd();
    }
    toast(`Đã duyệt thưởng cho ${s.data.pname}`, "success");
  }
  sd();
  renderSuggApprove();
  rStats();
  rTable();
}

function rejectSugg(id) {
  const s = SUGG.find((x) => x.id === id);
  if (!s) return;
  s.status = "rejected";
  sd();
  renderSuggApprove();
  renderMySugg();
  toast("Đã từ chối đề xuất");
}

function renderMySugg() {
  if (!CU) return;
  const mine = SUGG.filter((s) => s.by === CU.un).slice(-5).reverse();
  const html = (arr, type) => arr.filter((s) => s.type === type).map((s) => `<div class="sugg-item"><span>${s.type === "player" ? `${esc(s.data.ten)} (${esc(s.data.doi.replace("FC ", ""))})` : `${esc(s.data.pname)} — ${esc(s.data.bname)}`}</span><span class="sugg-status ss-${s.status}">${s.status === "pending" ? "Chờ" : s.status === "approved" ? "✅" : "❌"}</span></div>`).join("") || '<div style="font-size:12px;color:#aaa;padding:6px">Chưa có đề xuất</div>';
  const pEl = document.getElementById("myPlayerSuggList");
  const bEl = document.getElementById("mySuggList");
  if (pEl) pEl.innerHTML = html(mine, "player");
  if (bEl) bEl.innerHTML = html(mine, "bonus");
}

function renderSuggApprove() {
  if (!isAdmin()) return;
  const pending = SUGG.filter((s) => s.status === "pending");
  const mkRow = (s) => `<div class="sugg-item" style="flex-direction:column;align-items:flex-start;gap:5px"><div><b>${s.type === "player" ? `${esc(s.data.ten)} | ${esc(s.data.doi)} | ${s.data.val}▪` : `${esc(s.data.pname)} — ${esc(s.data.bname)} +${s.data.amt}▪`}</b></div><div style="font-size:10px;color:#666">${esc(s.by)} · ${esc(s.time)}${s.data?.note ? ` · ${esc(s.data.note)}` : ""}</div><div style="display:flex;gap:5px"><button class="bsm bsm-ok" onclick="approveSugg('${s.id}')">✅ Duyệt</button><button class="bsm bsm-del" onclick="rejectSugg('${s.id}')">❌ Từ chối</button></div></div>`;
  const empty = '<div style="font-size:12px;color:#aaa;text-align:center;padding:8px">Không có đề xuất</div>';
  const pEl = document.getElementById("suggPlayerApprove");
  const bEl = document.getElementById("suggBonusApprove");
  if (pEl) pEl.innerHTML = pending.filter((s) => s.type === "player").map(mkRow).join("") || empty;
  if (bEl) bEl.innerHTML = pending.filter((s) => s.type === "bonus").map(mkRow).join("") || empty;
}

async function rAdmin() {
  try {
    const fbU = await fbGetUsers();
    if (fbU && fbU.length > 0) {
      const vq = fbU.find((x) => x.un === "vquyetthang");
      if (vq) {
        vq.role = "superadmin";
        vq.ok = true;
      }
      USERS = fbU;
      localStorage.setItem("tmU", JSON.stringify(USERS));
    }
  } catch {}
  document.getElementById("adminPageBadge").textContent = isSuperAdmin() ? "SUPER ADMIN" : "ADMIN";
  document.getElementById("memberMgmtSection").style.display = isSuperAdmin() ? "block" : "none";
  const approved = USERS.filter((u) => u.ok);
  const reqAdmin = USERS.filter((u) => u.reqAdmin && u.role === "guest");
  const pendEl = document.getElementById("pendingList");
  pendEl.innerHTML = reqAdmin.length ? reqAdmin.map((u) => `<div class="urow"><span>${esc(u.un)} <span class="urole r-guest">Guest</span></span><div style="display:flex;gap:4px"><button class="bsm bsm-ok" onclick="makeAdminU('${u.un}')">Duyệt → Admin</button><button class="bsm bsm-del" onclick="rejectAdminReq('${u.un}')">Từ chối</button></div></div>`).join("") : '<div style="font-size:12px;color:#aaa;text-align:center;padding:8px">Không có yêu cầu</div>';
  const allEl = document.getElementById("allUsers");
  allEl.innerHTML = approved.map((u) => {
    const rb = `<span class="urole r-${u.role}">${u.role === "superadmin" ? "Super Admin" : u.role === "admin" ? "Admin" : "Guest"}</span>`;
    const isSuper = isSuperAdmin();
    const canMakeAdmin = isSuper && u.role === "guest" && u.un !== "vquyetthang";
    const canDemote = isSuper && u.role === "admin";
    const canDel = isSuper && u.un !== "vquyetthang";
    const reqTag = u.reqAdmin ? '<span style="font-size:10px;background:#fef9e7;color:#856404;padding:1px 5px;border-radius:2px;border:1px solid #f9e79f;margin-left:4px">Xin Admin</span>' : "";
    return `<div class="urow"><div>${esc(u.un)} ${rb}${reqTag}</div><div style="display:flex;gap:4px;flex-wrap:wrap">${u.un === "vquyetthang" ? '<span style="font-size:11px;color:#aaa">Super Admin</span>' : `${canMakeAdmin ? `<button class="bsm" style="background:#fde8b0;color:#6d3a00;border-color:#e8a317" onclick="makeAdminU('${u.un}')">→ Admin</button>` : ""}${canDemote ? `<button class="bsm bsm-dg" onclick="demU('${u.un}')">→ Guest</button>` : ""}${canDel ? `<button class="bsm bsm-del" onclick="delU('${u.un}')">Xoá</button>` : ""}`}</div></div>`;
  }).join("");
  document.getElementById("delSel").innerHTML = DATA.map((p) => `<option value="${p.id}">${esc(p.ten)} (${esc(p.doi.replace("FC ", ""))})</option>`).join("");
}

function makeAdminU(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.role = "admin";
    u.reqAdmin = false;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`${un} → Admin`, "success");
    rAdmin();
  }
}

function rejectAdminReq(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.reqAdmin = false;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`Đã từ chối ${un}`);
    rAdmin();
  }
}

function demU(un) {
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === un);
  if (u) {
    u.role = "guest";
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    toast(`${un} → Guest`);
    rAdmin();
  }
}

function delU(un) {
  if (!confirm(`Xoá tài khoản "${un}"?`)) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  USERS = USERS.filter((x) => x.un !== un);
  localStorage.setItem("tmU", JSON.stringify(USERS));
  fbSet(`users/${un}`, null);
  toast(`Đã xoá ${un}`);
  rAdmin();
}

function addPlayer() {
  const ten = document.getElementById("nTen").value.trim();
  if (!ten) {
    toast("Nhập tên cầu thủ", "warn");
    return;
  }
  const so = document.getElementById("nSo").value.trim() || "";
  const doi = document.getElementById("nDoi").value;
  const val = parseInt(document.getElementById("nVal").value, 10) || 100;
  const pos = document.getElementById("nPos").value || "CM";
  const rating = parseInt(document.getElementById("nRat").value, 10) || 3;
  const newId = Math.max(...DATA.map((p) => p.id)) + 1;
  const newStt = Math.max(...DATA.map((p) => p.stt)) + 1;
  DATA.push({ id: newId, stt: newStt, so, ten, pos, doi, rating, val, idx: { toc: 0, suc: 0, ky: 0, tong: 0 }, qbv: 0, by: CU.role });
  sd();
  document.getElementById("nTen").value = "";
  document.getElementById("nSo").value = "";
  document.getElementById("nVal").value = "";
  toast(`Đã thêm ${ten}`, "success");
  rAdmin();
}

function deletePlayer() {
  const pid = parseInt(document.getElementById("delSel").value, 10);
  const p = DATA.find((x) => x.id === pid);
  if (!p) return;
  if (p.by === "superadmin" && CU.role === "admin") {
    toast("Admin không thể xoá cầu thủ của Super Admin!", "warn");
    return;
  }
  if (!confirm(`Xoá cầu thủ "${p.ten}"?`)) return;
  DATA = DATA.filter((x) => x.id !== pid);
  sd();
  toast(`Đã xoá ${p.ten}`);
  rAdmin();
}

function exportData() {
  const rows = ["STT,Tên,Vị trí,Đội,Số áo,Đánh giá,Giá trị,Tốc,Sức,Kỹ,Tổng"];
  DATA.forEach((p) => rows.push([p.stt, p.ten, p.pos || "CM", p.doi, p.so, `${p.rating}/5`, p.val, p.idx.toc || 0, p.idx.suc || 0, p.idx.ky || 0, p.idx.tong || 0].join(",")));
  const blob = new Blob([`\uFEFF${rows.join("\n")}`], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "transfer_market.csv";
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Đã xuất CSV", "success");
}

function updateReqAdminBtn() {
  const btn = document.getElementById("btnReqAdmin");
  if (!btn || !CU) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const u = USERS.find((x) => x.un === CU.un);
  if (u && u.reqAdmin) {
    btn.textContent = "Đang chờ duyệt...";
    btn.disabled = true;
    btn.style.opacity = ".6";
  } else {
    btn.textContent = "Xin lên Admin";
    btn.disabled = false;
    btn.style.opacity = "1";
  }
}

async function reqAdminFn() {
  await fbReady();
  const fbU = await fbGetUsers();
  if (fbU && fbU.length > 0) {
    USERS = fbU;
    localStorage.setItem("tmU", JSON.stringify(USERS));
  }
  const u = USERS.find((x) => x.un === CU?.un);
  if (u) {
    u.reqAdmin = true;
    localStorage.setItem("tmU", JSON.stringify(USERS));
    fbSetUser(u);
    updateReqAdminBtn();
    toast("Đã gửi yêu cầu lên Admin!", "success");
  }
}

document.getElementById("modalOv").addEventListener("click", function onOverlayClick(e) {
  if (e.target === this) closeModal();
});
document.getElementById("vdichModal").addEventListener("click", function onOverlayClick(e) {
  if (e.target === this) closeVdich();
});
document.getElementById("vdichPlayerList").addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    const row = e.target.closest(".vd-player-row");
    if (row) toggleVdRow(row, e);
  }
});
document.getElementById("lPass").addEventListener("keydown", (e) => {
  if (e.key === "Enter") doLogin();
});

(function restoreSession() {
  const savedUn = sessionStorage.getItem("tmSession");
  if (!savedUn) return;
  USERS = JSON.parse(localStorage.getItem("tmU") || "[]");
  const usr = USERS.find((x) => x.un === savedUn && x.ok);
  if (!usr) return;
  if (usr.un === "vquyetthang") usr.role = "superadmin";
  CU = usr;
  enterApp();
})();

Object.assign(window, {
  switchTab,
  doLogin,
  doRegister,
  doLogout,
  loadFromFirebase,
  reqAdminFn,
  showPage,
  setFilter,
  setSort,
  qSave,
  openModal,
  closeModal,
  saveModal,
  exportData,
  submitPlayerSugg,
  submitBonusSugg,
  applyB,
  deleteCustomBonus,
  addCustomBonus,
  toggleVdRow,
  closeVdich,
  confirmVdich,
  approveSugg,
  rejectSugg,
  makeAdminU,
  rejectAdminReq,
  demU,
  delU,
  addPlayer,
  deletePlayer,
});
