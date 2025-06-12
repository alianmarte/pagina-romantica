// Data inicial do contador: 15/09/2024 21:30:00
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

// Carrossel 3D circular
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const angle = 360 / itemCount;
let currentIndex = 0;

function rotateCarousel() {
  const rotation = currentIndex * -angle;
  carousel.style.transform = `translateZ(-288px) rotateY(${rotation}deg)`;

  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === currentIndex) {
      item.classList.add("active");
    }
  });

  currentIndex = (currentIndex + 1) % itemCount;
}

rotateCarousel();
setInterval(rotateCarousel, 3000);

// Player loop com delay de 5s após a música acabar
const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
  setTimeout(() => {
    audio.play();
  }, 5000);
});
