const particlesContainer = document.querySelector('.particles');
const numParticles = 150;
const maxTranslate = 100;
const directionChangeInterval = 1000;


for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particlesContainer.appendChild(particle);
}

const particles = document.querySelectorAll('.particle');

particles.forEach((particle) => {
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;

  particle.style.animationDelay = `${Math.random() * 2}s`;
  particle.style.animationDuration = `${1 + Math.random() * 2}s`;

  let translateX = 0;
  let translateY = 0;
  let currentDirectionChangeTime = Date.now() + Math.random() * directionChangeInterval;

  const updateParticleDirection = () => {
    const randomTranslateX = (Math.random() * maxTranslate * 2) - maxTranslate;
    const randomTranslateY = (Math.random() * maxTranslate * 2) - maxTranslate;
    translateX = randomTranslateX;
    translateY = randomTranslateY;
    currentDirectionChangeTime = Date.now() + Math.random() * directionChangeInterval;
  };

  updateParticleDirection();

  particle.style.transform = `translate(${translateX}px, ${translateY}px)`;

  particle.addEventListener('animationiteration', () => {
    const currentTime = Date.now();

    if (currentTime >= currentDirectionChangeTime) {
      updateParticleDirection();
    }

    particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});


var trailer = document.getElementById("trailer");
var mouseX = 0;
var mouseY = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", handleMouseMove);
  requestAnimationFrame(updateTrailerPosition);
});

function handleMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
  trailer.style.opacity = 1;
}

function updateTrailerPosition() {
  var trailerX = parseFloat(trailer.style.left) || 0;
  var trailerY = parseFloat(trailer.style.top) || 0;

  var vx = (mouseX - trailerX) * 0.1;
  var vy = (mouseY - trailerY) * 0.1;

  trailerX += vx;
  trailerY += vy;

  trailer.style.left = trailerX + "px";
  trailer.style.top = trailerY + "px";
  

  requestAnimationFrame(updateTrailerPosition);
}
