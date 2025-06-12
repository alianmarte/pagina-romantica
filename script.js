const startDate = new Date("2025-09-15T21:30:00");

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("timer").innerText = "Ainda não começou!";
        return;
    }

    const secondsTotal = Math.floor(diff / 1000);

    // Cálculo exato de anos, meses, dias, horas, minutos e segundos:
    let years = 0,
        months = 0,
        days = 0;

    let date1 = new Date(startDate);
    let date2 = new Date(now);

    // Contar anos
    years = date2.getFullYear() - date1.getFullYear();

    // Ajustar se ainda não completou o ano atual
    if (
        date2.getMonth() < date1.getMonth() ||
        (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
    ) {
        years--;
    }

    // Ajustar meses
    months = date2.getMonth() - date1.getMonth();
    if (date2.getDate() < date1.getDate()) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }

    // Ajustar dias
    const startDay = date1.getDate();
    const nowDay = date2.getDate();

    if (nowDay >= startDay) {
        days = nowDay - startDay;
    } else {
        const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
        days = prevMonth.getDate() - startDay + nowDay;
    }

    // Horas, minutos e segundos
    let hours = date2.getHours() - date1.getHours();
    let minutes = date2.getMinutes() - date1.getMinutes();
    let seconds = date2.getSeconds() - date1.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
        if (days < 0) {
            months--;
            if (months < 0) {
                months = 11;
                years--;
            }
            const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
            days += prevMonth.getDate();
        }
    }

    document.getElementById(
        "timer"
    ).innerText = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateTimer, 1000);

// Coração caindo (se quiser, deixa ativo, senão pode comentar)
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

// Carousel fotos, troca a cada 5 segundos sem texto "carrossel de fotos"
const images = [
    "imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg",
    "imgs/img4.jpg", "imgs/img5.jpg", "imgs/img6.jpg",
    "imgs/img7.jpg", "imgs/img8.jpg", "imgs/img9.jpg"
];
let current = 0;
setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById("carousel-img").src = images[current];
}, 5000);

// Música loop com delay de 3 segundos
const audio = document.getElementById("audio");
audio.addEventListener("ended", () => {
    setTimeout(() => {
        audio.play();
    }, 3000);
});
