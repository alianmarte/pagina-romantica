
const startDate = new Date("2024-09-15T21:30:00");

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) diff = 0;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

    const years = Math.floor(daysTotal / 365);
    const months = Math.floor((daysTotal % 365) / 30);
    const days = (daysTotal % 365) % 30;

    document.getElementById("timer").innerText =
        `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTimer, 1000);

// Corações caindo
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

// Carrossel simples: uma imagem por vez deslizando para a esquerda
const images = [
    "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg",
    "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
    "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;
const imgElement = document.getElementById("carousel-img");

function showNextImage() {
    imgElement.style.transform = "translateX(-100%)";
    setTimeout(() => {
        current = (current + 1) % images.length;
        imgElement.src = images[current];
        imgElement.style.transform = "translateX(100%)";
        setTimeout(() => {
            imgElement.style.transform = "translateX(0)";
        }, 50);
    }, 900);
}
setInterval(showNextImage, 3000);

// Loop de música com atraso
const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
    setTimeout(() => {
        audio.play();
    }, 5000);
});
