const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyy! 💖 I knew you’d say yes 😍";
});

.photo {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px 0;
  border: 4px solid #ff4d6d;
}
