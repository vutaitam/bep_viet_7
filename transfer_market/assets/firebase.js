import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoQeYa-u8mPWfBsN_wXLicR1lhuB9Upfk",
  authDomain: "transfer-market-fc.firebaseapp.com",
  databaseURL: "https://transfer-market-fc-default-rtdb.firebaseio.com",
  projectId: "transfer-market-fc",
  storageBucket: "transfer-market-fc.firebasestorage.app",
  messagingSenderId: "614323872667",
  appId: "1:614323872667:web:ac39494626415d29d5f73e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window._fb = { ref, set, get, onValue, db };
window._fbReady = true;
window.dispatchEvent(new Event("fbReady"));
