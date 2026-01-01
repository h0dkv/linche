let current = 0;
const screens = document.querySelectorAll(".screen");

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  if (screens[current]) {
    screens[current].classList.add("active");
  }
}

const messages = [
  "That was cute 😳",
  "You’re adorable 💕",
  "You make me smile",
  "Okay I really like you 💖"
];

let tapCount = 0;

function beatHeart() {
  const heart = document.getElementById("heart");
  const text = document.getElementById("heartText");

  heart.style.transform = "scale(1.3)";
  setTimeout(() => heart.style.transform = "scale(1)", 150);

  if (navigator.vibrate) navigator.vibrate(30);

  text.innerText = messages[tapCount % messages.length];
  tapCount++;
}
