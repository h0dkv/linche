const screens = document.querySelectorAll(".screen");
let index = 0;

function next() {
  screens[index].classList.remove("active");
  index++;
  screens[index].classList.add("active");
}

function restart() {
  screens[index].classList.remove("active");
  index = 0;
  screens[index].classList.add("active");
}

function mood(type) {
  const text = {
    happy: "I like that 😊",
    okay: "That’s valid 🙂",
    tired: "I hope this helps a bit 😴"
  };
  document.getElementById("moodText").innerText = text[type];
  next();
}

let taps = 0;
const heartMessages = [
  "That was cute 😳",
  "You’re really sweet",
  "You make me smile",
  "Okay… I like you 💕",
  "Yep. Definitely you 💖"
];

function tapHeart() {
  const heart = document.getElementById("heart");
  const msg = document.getElementById("heartMsg");

  heart.style.transform = "scale(1.3)";
  setTimeout(() => heart.style.transform = "scale(1)", 150);

  msg.innerText = heartMessages[taps % heartMessages.length];
  taps++;
}

const smileMessages = [
  "Hey Lina 💛 I hope this helped even a little 😊",
  "You’re doing better than you think 🌸",
  "Just a reminder: you matter 💖",
  "I’m rooting for you ✨"
];

function smileBoost() {
  const screen = screens[index];
  const msg = document.getElementById("heartMsg");

  screen.classList.add("smile");
  spawnFloaters();
  playSound();

  msg.innerText =
    smileMessages[Math.floor(Math.random() * smileMessages.length)];

  setTimeout(() => {
    screen.classList.remove("smile");
  }, 600);
}

const spinMessages = [
  "You’re doing great 💛",
  "This spin was rigged — you win 😊",
  "Hey Lina 🌸 take a breath",
  "Something good is coming ✨",
  "You make things brighter 💖"
];

function spinSmile() {
  const screen = screens[index];
  const result = document.getElementById("spinResult");

  screen.classList.add("spin");
  spawnFloaters();

  setTimeout(() => {
    result.innerText =
      spinMessages[Math.floor(Math.random() * spinMessages.length)];
    screen.classList.remove("spin");
  }, 600);
}

/* Cheer overlay */
const cheerBtn = document.getElementById("cheerBtn");
const cheerOverlay = document.getElementById("cheerOverlay");
const cheerText = document.getElementById("cheerText");

cheerBtn.addEventListener("click", () => {
  cheerText.innerText =
    smileMessages[Math.floor(Math.random() * smileMessages.length)];
  cheerOverlay.classList.add("active");
  spawnFloaters();
});

cheerOverlay.addEventListener("click", () => {
  spawnFloaters();
});

function closeCheer() {
  cheerOverlay.classList.remove("active");
}

/* Floating emojis */
const emojis = ["💛", "🌸", "✨", "😊", "💖"];

function spawnFloaters() {
  const container = document.querySelector(".floaters");

  for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.className = "floater";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.fontSize = 20 + Math.random() * 20 + "px";
    container.appendChild(span);
    setTimeout(() => span.remove(), 4000);
  }
}

/* Tiny sound */
const smileSound = document.getElementById("smileSound");
smileSound.volume = 0.25;

function playSound() {
  smileSound.currentTime = 0;
  smileSound.play();
}
