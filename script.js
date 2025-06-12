
const startDate = new Date("2025-09-15T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  if(diff < 0) diff = 0; // evita negativo

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

const carouselContainer = document.getElementById("carousel-container");
const imgs = carouselContainer.getElementsByTagName("img");
const imgCount = imgs.length;

let angle = 0;
const rotateStep = 360 / imgCount;
const radius = 250;

function positionCarousel() {
  for (let i = 0; i < imgCount; i++) {
    const img = imgs[i];
    const imgAngle = (i * rotateStep + angle) % 360;

    const rad = (imgAngle * Math.PI) / 180;

    const x = radius * Math.sin(rad);
    const z = radius * Math.cos(rad);

    img.style.transform = `translateX(${x}px) translateZ(${z}px)`;

    if (Math.abs(imgAngle) < rotateStep / 2 || Math.abs(imgAngle - 360) < rotateStep / 2) {
      img.style.filter = "blur(0)";
      img.style.zIndex = 10;
      img.style.width = "240px";
      img.style.height = "180px";
    } else {
      img.style.filter = "blur(2px)";
      img.style.zIndex = 1;
      img.style.width = "200px";
      img.style.height = "150px";
    }
  }
}

setInterval(() => {
  angle -= rotateStep;
  carouselContainer.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
  positionCarousel();
}, 3000);

positionCarousel();

const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
  setTimeout(() => {
    audio.play();
  }, 5000);
});
