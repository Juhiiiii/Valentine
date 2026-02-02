const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 400 - 200;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


yesBtn.addEventListener("click", () => {
  message.innerHTML = "YAYYY 💖 I knew you'd say yes, Ashish 😍";
  document.getElementById("gif").style.display = "block";
  launchConfetti();
});

.photo {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px 0;
  border: 4px solid #ff4d6d;
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.opacity = Math.random();
    confetti.style.zIndex = 1000;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
}

