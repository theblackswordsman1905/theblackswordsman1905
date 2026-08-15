const typing = document.querySelector(".typing");
const phrases = [
  "Computer Science Engineering Student",
  "Embedded Systems Enthusiast",
  "IoT Builder",
  "Python Developer"
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const phrase = phrases[phraseIndex];
  typing.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeLoop, 65);
  } else if (!deleting && charIndex === phrase.length) {
    deleting = true;
    setTimeout(typeLoop, 1300);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 30);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 250);
  }
}
typeLoop();

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const particles = document.querySelector(".particles");
for (let i = 0; i < 55; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.animationDuration = `${8 + Math.random() * 18}s`;
  p.style.animationDelay = `${Math.random() * -20}s`;
  particles.appendChild(p);
}

const style = document.createElement("style");
style.textContent = `
@keyframes float {
  0% { transform: translateY(0) translateX(0); opacity:.15; }
  50% { transform: translateY(-35px) translateX(15px); opacity:.65; }
  100% { transform: translateY(-75px) translateX(-10px); opacity:0; }
}`;
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu-btn").addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px";
  nav.style.right = "20px";
  nav.style.flexDirection = "column";
  nav.style.padding = "18px";
  nav.style.background = "rgba(5,6,8,.97)";
  nav.style.border = "1px solid rgba(255,255,255,.1)";
});
