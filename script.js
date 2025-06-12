const startDate = new Date("2025-09-15T21:30:00");

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) return;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));*
