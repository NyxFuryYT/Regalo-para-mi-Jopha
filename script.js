// ================================
// PERSONALIZA ESTA FECHA
// Formato: AAAA-MM-DDTHH:MM:SS
// Ejemplo: "2026-09-03T20:00:00"
// ================================
const START_DATE = "2026-09-03T20:00:00";

const hearts = document.getElementById("hearts");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const modal = document.getElementById("modal");
const surpriseBtn = document.getElementById("surpriseBtn");
const closeModal = document.getElementById("closeModal");
const photo = document.getElementById("couplePhoto");
const placeholder = document.getElementById("photoPlaceholder");

// Corazones flotantes
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = ["♡", "♥", "✦", "✧"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 17}px`;
  heart.style.animationDuration = `${7 + Math.random() * 8}s`;
  heart.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}
setInterval(createHeart, 650);

// Aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contador
function updateCounter() {
  const start = new Date(START_DATE);
  const now = new Date();

  if (Number.isNaN(start.getTime())) return;

  let diff = Math.max(0, now - start);

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
setInterval(updateCounter, 1000);

// Foto: si falta, muestra el placeholder.
photo.addEventListener("error", () => {
  photo.style.display = "none";
  placeholder.style.display = "grid";
});

// Música: el navegador puede exigir interacción del usuario.
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.classList.add("playing");
      musicBtn.textContent = "♫";
    } catch {
      alert("Agrega tu archivo assets/musica.mp3 y vuelve a tocar el botón.");
    }
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
    musicBtn.textContent = "♫";
  }
});

// Modal
function openModal() {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  closeModal.focus();
}

function hideModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

surpriseBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
