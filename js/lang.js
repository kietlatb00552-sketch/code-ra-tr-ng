/* ================= LANGUAGE DATA ================= */
const LANG_DATA = {
    vi: {
        logo: "DATN-2026",
        nav: {
            home: "Trang chủ",
            video: "Học qua khóa học",
            upload: "Luyện tập",
            ai: "AI chấm bài",
            login: "Đăng nhập"
        },
        label: {
            elements: "SỐ PHẦN TỬ",
            algorithm: "THUẬT TOÁN",
            speed: "TỐC ĐỘ",
            visual: "HIỂN THỊ"
        },
        btn: {
            sort: "SẮP XẾP",
            random: "NGẪU NHIÊN"
        },
        section: {
            desc: "Mô tả thuật toán",
            code: "Cài đặt mã nguồn",
            editor: "Trình soạn thảo code"
        },
        desc: {
            text: "Mô phỏng trực quan các thuật toán sắp xếp."
        },
        footer: {
            subtitle: "Trình mô phỏng thuật toán sắp xếp trực quan"
        }
    },

    en: {
        logo: "DATN-2026",
        nav: {
            home: "Home",
            video: "Courses",
            upload: "Practice",
            ai: "AI Grading",
            login: "Login"
        },
        label: {
            elements: "ELEMENTS",
            algorithm: "ALGORITHM",
            speed: "SPEED",
            visual: "VISUALIZATION"
        },
        btn: {
            sort: "SORT",
            random: "RANDOMIZE"
        },
        section: {
            desc: "Algorithm Description",
            code: "Code Implementations",
            editor: "Code Editor"
        },
        desc: {
            text: "Interactive visualization of sorting algorithms."
        },
        footer: {
            subtitle: "Interactive Sorting Algorithm Visualizer"
        }
    }
};

/* ================= HELPER ================= */
function getLangValue(obj, path) {
    return path.split(".").reduce((o, k) => o && o[k], obj);
}

/* ================= APPLY LANGUAGE ================= */
function applyLanguage(lang) {
    const data = LANG_DATA[lang];
    if (!data) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const value = getLangValue(data, key);
        if (value) el.textContent = value;
    });

    document.querySelectorAll(".lang-bubble .bubble").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "vi";
    applyLanguage(savedLang);

    document.querySelectorAll(".lang-bubble .bubble").forEach(bubble => {
        bubble.addEventListener("click", () => {
            applyLanguage(bubble.dataset.lang);
        });
    });
});
