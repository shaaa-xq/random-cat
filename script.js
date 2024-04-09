// generator
const btn = document.getElementById("btn1");
const img = document.querySelector("div.container div#img img");
const desc = document.querySelector("div.container div.car-name");

const descs = ["smile car", "angy car", "wooo car", "panda car", "smack car", "😐 car", "sus car", "gaman dekinai car", "tuxedo car", "shy car", "🤣👉"];

btn.addEventListener("click", function () {
  var randomImg = Math.floor(Math.random() * 11);
  img.src = "assets/" + randomImg + ".jpg";
  desc.textContent = descs[randomImg];
});

// dark mode theme
const toggle = document.getElementById("darkmode-icon");
const body = document.querySelector("body");
const header = document.getElementsByClassName("header")[0];
const hello = document.querySelector("div.container h2");
const about = document.querySelector("div.container p");
const border = document.querySelector("div.car-name");

toggle.addEventListener("click", function () {
  desc.style.color = "#fffffe";
  body.style.backgroundColor = "#0f0e17";
  header.style.color = "#fffffe";
  hello.style.color = "#fffffe";
  about.style.color = "#a7a9be";
  border.style.border = "1px solid #fffffe";
  btn.style.backgroundColor = "#ff8906";
  btn.style.color = "#fffffe";
});

// function darkMode(){
//   desc.style.color = "#fffffe";
//   body.style.backgroundColor = "#0f0e17";
//   header.style.color = "#fffffe";
//   hello.style.color = "#fffffe";
//   about.style.color = "#a7a9be";
//   border.style.border = "1px solid #fffffe";
//   btn.style.backgroundColor = "#ff8906";
//   btn.style.color = "#fffffe";
// }
