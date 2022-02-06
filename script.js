"use strict";
//selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const score0TotalEl = document.querySelector("#current--0");
const score1TotalEl = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const section0 = document.querySelector(".player--0");
const section1 = document.querySelector(".player--1");

//starting Condtion
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
document.querySelector(".win").classList.add("hidden");
let playing = true;

var score0 = 0;
var score0Total = 0;

var score1 = 0;
var score1Total = 0;

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    var x = Math.floor(Math.random() * 6 + 1);
    if (section0.classList.contains("player--active") === true) {
      if (x === 1) {
        diceEl.classList.remove("hidden");
        document.querySelector(".dice").src = "dice-1.png";
        score0TotalEl.textContent = 0;
        score0Total = 0;
        score0 = 0;
        section1.classList.add("player--active");
        section0.classList.remove("player--active");
        console.log(section0.classList.contains("player--active"));
      } else {
        document.querySelector(".dice").src = `dice-${x}.png`;
        diceEl.classList.remove("hidden");
        score0 += x;
        score0El.textContent = score0;
      }
    } else if (section0.classList.contains("player--active") === false) {
      if (x === 1) {
        diceEl.classList.remove("hidden");
        document.querySelector(".dice").src = "dice-1.png";
        score1TotalEl.textContent = 0;
        score1Total = 0;
        score1 = 0;
        section0.classList.add("player--active");
        section1.classList.remove("player--active");
      } else {
        document.querySelector(".dice").src = `dice-${x}.png`;
        diceEl.classList.remove("hidden");
        score1 += x;
        score1El.textContent = score1;
      }
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (playing) {
    if (section0.classList.contains("player--active") === true) {
      score0Total += score0;
      score0TotalEl.textContent = score0Total;
      score0 = 0;
      score0El.textContent = 0;
      section1.classList.add("player--active");
      section0.classList.remove("player--active");
      if (score0Total >= 20) {
        section0.classList.add("player--winner");
        document.querySelector(".win").classList.remove("hidden");
        diceEl.classList.add("hidden");
        playing = false;
      }
    } else {
      score1Total += score1;
      score1TotalEl.textContent = score1Total;
      score1 = 0;
      score1El.textContent = 0;
      section0.classList.add("player--active");
      section1.classList.remove("player--active");
      if (score1Total >= 20) {
        section1.classList.add("player--winner");
        document.querySelector(".win").classList.remove("hidden");
        diceEl.classList.add("hidden");
        playing = false;
      }
    }
  }
});

function reload() {
  reload = location.reload();
}
document.querySelector(".btn--new").addEventListener("click", reload, false);
