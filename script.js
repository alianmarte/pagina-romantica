// Configuração da data inicial
const startDate = new Date("2025-09-15T21:30:00");

// Função para atualizar o timer
function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("timer").innerText = "Ainda não começamos!";
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

// Carrossel de fotos
const images = [
    "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg",
    "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
    "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;
const carouselImg = document.getElementById("carousel-img");

function nextImage() {
    current = (current + 1) % images.length;
    carouselImg.src = images[current];
}
setInterval(nextImage, 5000);

// Player - repetir música com intervalo de 3 segundos
const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
    setTimeout(() => {
        audio.play();
    }, 3000);
});

// Corações caindo
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);
