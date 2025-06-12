// Timer
const startDate = new Date("2024-09-15T21:30:00");
function updateTimer() {
  const now = new Date();
  let diff = now - startDate;
  if (diff < 0) {
    document.getElementById("timer").innerText = "Ainda não começou.";
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
    `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Carousel
const images = [
  "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg",
  "imgs/img5.jpg", "imgs/img6.jpg", "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;
setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("carousel-img").src = images[current];
}, 5000);

// Audio repeat
const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
  setTimeout(() => audio.play(), 3000);
});

// Hearts falling
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  // Posição inicial horizontal
  const startLeft = Math.random() * 100;
  heart.style.left = `${startLeft}vw`;

  // Duração da animação (2 a 5 segundos)
  heart.style.animationDuration = `${2 + Math.random() * 3}s`;

  // Movimento lateral aleatório (-30vw a +30vw)
  const xMove = (Math.random() * 60 - 30).toFixed(2); // -30 a +30
  heart.style.setProperty('--x-move', `${xMove}vw`);

  // Rotação aleatória entre -90 e +90 graus
  const rotation = (Math.random() * 180 - 90).toFixed(2);
  heart.style.setProperty('--rotation', `${rotation}deg`);

  // Aplica a animação
  heart.style.animationName = 'fallRandom';

  // Adiciona e remove depois
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

