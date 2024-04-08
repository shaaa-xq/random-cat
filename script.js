const btn = document.getElementById("btn1");
const img = document.querySelector("div.container div#img img");
const desc = document.querySelector("div.container div.car-name");

const descs = ["smile car", "angy car", "wooo car", "panda car", "smack car", "😐 car", "sus car", "gaman dekinai car", "tuxedo car", "shy car", "🤣👉"];

btn.addEventListener("click", function () {
  var randomImg = Math.floor(Math.random() * 11);
  img.src = "assets/" + randomImg + ".jpg";
  desc.textContent = descs[randomImg];
});
