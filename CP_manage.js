// Deklarasi variabel awal
var color_set = 0; 
const btn_next = document.querySelector(".next");
const btn_previous = document.querySelector(".previous");
const color_rgb = document.querySelector(".color_rgb");

// Database warna
const RGB = [
    {
        background_color: "#0f172a",
        text_color: "#f8fafc",
        secondary_color: "#334155",
        btn_clr1: "#38bdf8",
        btn_clr2: "#0ea5e9"
    },
    {
        background_color: "#fff5f5",
        text_color: "#2d3748",
        secondary_color: "#fed7d7",
        btn_clr1: "#f687b3",
        btn_clr2: "#ed64a6"
    },
    {
        background_color: "#f0f4f1",
        text_color: "#1a202c",
        secondary_color: "#e2e8f0",
        btn_clr1: "#48bb78",
        btn_clr2: "#2f855a"
    },
    {
        background_color: "#1a1a1a",
        text_color: "#ffffff",
        secondary_color: "#333333",
        btn_clr1: "#fbbf24",
        btn_clr2: "#d97706"
    },
    {
        background_color: "#000000",
        text_color: "#00ff41",
        secondary_color: "#1a1a1a",
        btn_clr1: "#ff003f",
        btn_clr2: "#ab003c"
    }
];

// Fungsi untuk update tampilan
function updateColors() {
    const p = RGB[color_set]; // Kita definisikan 'p' di sini
    const root = document.documentElement;

    // Ganti variabel di CSS
    root.style.setProperty('--background_color', p.background_color);
    root.style.setProperty('--text_color', p.text_color);
    root.style.setProperty('--secondary_color', p.secondary_color);
    root.style.setProperty('--btn_clr1', p.btn_clr1);
    root.style.setProperty('--btn_clr2', p.btn_clr2);

    // Tampilkan teks kode warna
    color_rgb.innerText = `
        BG: ${p.background_color}
        Text: ${p.text_color}
        Sec: ${p.secondary_color}
        Btn1: ${p.btn_clr1}
        Btn2: ${p.btn_clr2}
    `;
}

// Jalankan sekali saat pertama kali dibuka
updateColors();

// Logika tombol Next
btn_next.addEventListener("click", function() {
    if (color_set < RGB.length - 1) {
        color_set++;
        updateColors();
    }
    
    if (color_set === RGB.length - 1) {
        btn_next.disabled = true;
        btn_next.innerText = "End";
    }
    btn_previous.disabled = false;
});

// Logika tombol Previous
btn_previous.addEventListener("click", function() {
    if (color_set > 0) {
        color_set--;
        updateColors();
    }

    if (color_set === 0) {
        btn_previous.disabled = true;
    }
    btn_next.disabled = false;
    btn_next.innerText = "Next";
});