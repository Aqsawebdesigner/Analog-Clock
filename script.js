const clock = document.getElementById("clock");
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

/* 1 se 12 tak numbers clock ke gird lagao */
function createNumbers() {
  for (let n = 1; n <= 12; n++) {
    const angle = (n * 30 - 90) * (Math.PI / 180);
    const radius = 38; // % mein, clock ke center se doori

    const el = document.createElement("div");
    el.className = "number";
    el.textContent = n;
    el.style.left = 50 + radius * Math.cos(angle) + "%";
    el.style.top = 50 + radius * Math.sin(angle) + "%";
    el.style.transform = "translate(-50%, -50%)";
    clock.appendChild(el);
  }
}

/* Hands ko current time ke hisaab se ghumao */
function updateClock() {
  const now = new Date();
  const ms = now.getMilliseconds();
  const sec = now.getSeconds() + ms / 1000;
  const min = now.getMinutes() + sec / 60;
  const hr = (now.getHours() % 12) + min / 60;

  secondHand.style.transform = `translateX(-50%) rotate(${sec * 6}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${min * 6}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hr * 30}deg)`;

  requestAnimationFrame(updateClock);
}

createNumbers();
updateClock();
