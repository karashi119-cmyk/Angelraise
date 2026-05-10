/* =========================================
   画面切り替え機能
========================================= */
function showIntro() {
    document.getElementById("top").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("intro").style.display = "flex";
    window.scrollTo(0, 0);
}

function showBlog() {
    document.getElementById("top").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("blog").style.display = "flex";
    window.scrollTo(0, 0);
    updateDiary(); 
}

function backToTop() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("top").style.display = "flex";
    window.scrollTo(0, 0);
}

/* =========================================
   2. プロフィールとGAMEのポップアップ
========================================= */

// --- プロフィール (既存) ---
function openProfile() {
    document.getElementById("profilePopup").style.display = "flex";
}
function closeProfile() {
    document.getElementById("profilePopup").style.display = "none";
}

// --- 【追加】Coming Soon (GAMEボタン用) ---
function openComing() {
    document.getElementById("comingPopup").style.display = "flex";
}
function closeComing() {
    document.getElementById("comingPopup").style.display = "none";
}


/* =========================================
   日記のページめくり
========================================= */
let diaryPage = 1;
const maxPage = 3; // 画像の枚数に合わせて変更してね

function nextDiary() {
    if (diaryPage < maxPage) {
        diaryPage++;
        updateDiary();
    }
}

function prevDiary() {
    if (diaryPage > 1) {
        diaryPage--;
        updateDiary();
    }
}

function updateDiary() {
    const img = document.getElementById("diaryImage");
    if (img) {
        img.src = "img/diary" + diaryPage + ".png";
    }
    // ボタンの透明度調整
    const bBtn = document.getElementById("backBtn");
    const nBtn = document.getElementById("nextBtn");
    if (bBtn) bBtn.style.opacity = (diaryPage <= 1) ? "0.3" : "1";
    if (nBtn) nBtn.style.opacity = (diaryPage >= maxPage) ? "0.3" : "1";
}

/* =========================================
   カウンター
========================================= */
window.onload = function() {
    let count = localStorage.getItem("angel_count") || 0;
    count++;
    localStorage.setItem("angel_count", count);
    const el = document.getElementById("count");
    if (el) el.innerText = String(count).padStart(6, "0");
};
