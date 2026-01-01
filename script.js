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
