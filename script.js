const startDate = new Date("2024-09-15T21:30:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  if (diff < 0) {
    document.getElementById("timer").innerText = "O tempo ainda não começou.";
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

const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const angle = 360 / itemCount;
let currentIndex = 0;

function setCarouselPositions() {
  const radius = 350; // distância do centro do círculo para as imagens

  items.forEach((item, i) => {
    const rotateY = i * angle;
    item.style.transform = `rotateY(${rotateY}deg) translateZ(${radius}px)`;
    item.style.transition = "transform 1s ease";
    item.style.opacity = "0.4";
    item.style.filter = "blur(3px)";
  });
}

function rotateCarousel() {
  const rotation = currentIndex * -angle;
  carousel.style.transform = `translateZ(-${350}px) rotateY(${rotation}deg)`;
  carousel.style.transition = "transform 1s ease";

  items.forEach((item, i) => {
    if (i === currentIndex) {
      item.style.opacity = "1";
      item.style.filter = "blur(0)";
      item.style.zIndex = "10";
    } else {
      item.style.opacity = "0.4";
      item.style.filter = "blur(3px)";
      item.style.zIndex = "1";
    }
  });

  currentIndex = (currentIndex + 1) % itemCount;
}

setCarouselPositions();
rotateCarousel();
setInterval(rotateCarousel, 3000);

const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
  setTimeout(() => {
    audio.play();
  }, 5000);
});
