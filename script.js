// Contador desde 15/09/2025 21:30:00
const startDate = new Date("2025-09-15T21:30:00");

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("timer").innerText = "Ainda não começou...";
        return;
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

    const years = Math.floor(daysTotal / 365);
    const months = Math.floor((daysTotal % 365) / 30);
    const days = (daysTotal % 365) % 30;

    document.getElementById("timer").innerText =
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Carrossel imagens
const images = [
    "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg",
    "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
    "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;

const carouselImg = document.getElementById("carousel-img");
carouselImg.src = images[current];

// Cada imagem dura 5 segundos
setInterval(() => {
    current = (current + 1) % images.length;
    carouselImg.src = images[current];
}, 5000);

// Player com repetição da música e delay de 3 segundos
const audio = document.getElementById("audio");
const audioTimer = document.getElementById("audio-timer");

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

audio.addEventListener("loadedmetadata", () => {
    audioTimer.innerText = `00:00 / ${formatTime(audio.duration)}`;
});

audio.addEventListener("timeupdate", () => {
    audioTimer.innerText = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

audio.addEventListener("ended", () => {
    setTimeout(() => {
        audio.currentTime = 0;
        audio.play();
    }, 3000);
});

// Auto play ao carregar (se o navegador permitir)
window.onload = () => {
    audio.play().catch(() => {
        // Pode bloquear autoplay no navegador, aí só toca quando o usuário clicar.
    });
};
