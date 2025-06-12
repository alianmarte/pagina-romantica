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

const images = [
  "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg",
  "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
  "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];

let current = 0;

function showImage(index) {
  const imgs = document.querySelectorAll(".carousel img");
  imgs.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

window.onload = () => {
  const carouselDiv = document.querySelector(".carousel");
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    carouselDiv.appendChild(img);
  });
  showImage(current);

  setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
  }, 3000);
};

const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
  setTimeout(() => {
    audio.play();
  }, 5000);
});
