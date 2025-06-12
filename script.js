const startDate = new Date("2024-09-15T21:30:00");

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

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

const images = [
    "imgs/img1.jpg", "imgs/img3.jpg",
    "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
    "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;
setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("carousel-img").src = images[current];
}, 5000); // 5 segundos por foto

const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
    setTimeout(() => {
        audio.play();
    }, 3000); // 3 segundos após acabar a música
});

// Coraçãozinho caindo continua legal
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";

    const directions = ['left', 'right', 'straight'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    heart.classList.add(direction);

    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);








