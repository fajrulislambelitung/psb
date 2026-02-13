// Import fungsi dari CDN Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Konfigurasi Firebase Abah (PSB 2026)
const firebaseConfig = {
    apiKey: "AIzaSyCAli9QZXUUX84P-AVwvi5ciYRIEV3ACrI",
    authDomain: "psb2026-a3f4c.firebaseapp.com",
    projectId: "psb2026-a3f4c",
    storageBucket: "psb2026-a3f4c.firebasestorage.app",
    messagingSenderId: "14751170883",
    appId: "1:14751170883:web:cbb332b060322cedf92ff6"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export SEMUA fungsi agar bisa dipakai di file lain (Admin & Form)
export { db, collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc, query, orderBy };