function updateTime() {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll("nav a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});

updateTime();
setInterval(updateTime, 1000);
