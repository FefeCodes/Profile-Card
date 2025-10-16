function updateTime() {
  const timeEl = document.getElementById("time");
  if (timeEl) {
    timeEl.textContent = Date.now();
  }
}

updateTime();

setInterval(updateTime, 1000);
