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
  "Okay I like you 💕",
  "Yep… definitely you 💖"
];

function tapHeart() {
  const heart = document.getElementById("heart");
  const msg = document.getElementById("heartMsg");

  heart.style.transform = "scale(1.3)";
  setTimeout(() => heart.style.transform = "scale(1)", 150);

  if (navigator.vibrate) navigator.vibrate(30);

  msg.innerText = heartMessages[taps % heartMessages.length];
  taps++;
}

function choice(type) {
  const text = {
    cute: "You’re honestly adorable 🥺",
    funny: "You make things way more fun 😄",
    sweet: "I really enjoy talking to you 💕"
  };
  document.getElementById("choiceText").innerText = text[type];
  next();
}

function getCheerMessage() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return [
      "Good morning, Lina 🌸 I hope today treats you kindly",
      "A little reminder to start slow and be gentle with yourself 💛",
      "I hope this brings a soft smile to your morning 😊"
    ];
  } else if (hour < 18) {
    return [
      "Hey Lina 🌼 You’re doing great, even if today feels busy",
      "Just a small pause to remind you that you matter 💖",
      "I hope this gives you a tiny boost ✨"
    ];
  } else {
    return [
      "Good evening, Lina 🌙 You made it through today",
      "It’s okay to rest now. You deserve it 💛",
      "I hope this makes your night a little warmer 😊"
    ];
  }
}


const cheerBtn = document.getElementById("cheerBtn");
const cheerOverlay = document.getElementById("cheerOverlay");
const cheerText = document.getElementById("cheerText");

cheerBtn.addEventListener("click", () => {
  const msgs = getCheerMessage();
  cheerText.innerText = msgs[Math.floor(Math.random() * msgs.length)];
  cheerOverlay.classList.add("active");
  spawnFloaters();
  if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
});


function closeCheer() {
  cheerOverlay.classList.remove("active");
}

const emojis = ["💛", "🌸", "✨", "😊", "💖"];

function spawnFloaters() {
  const container = document.querySelector(".floaters");

  for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.className = "floater";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDelay = Math.random() * 1 + "s";
    span.style.fontSize = 20 + Math.random() * 20 + "px";

    container.appendChild(span);

    setTimeout(() => span.remove(), 4000);
  }
}
