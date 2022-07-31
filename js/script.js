"use strict";

const num = document.querySelector(".num");
const btn = document.querySelector(".btn");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const ratingBox = document.querySelector(".ratingBox");
const rates = document.querySelectorAll(".rate");

for (const rate of rates) {
  rate.addEventListener("click", function () {
    for (const i of rates) {
      i.classList.remove("checked");
    }
    rate.classList.add("checked");
  });
}

btn.addEventListener("click", function () {
  first.classList.toggle("hidden");
  second.classList.toggle("hidden");

  for (const rate of rates) {
    if (rate.classList.contains("checked")) {
      num.textContent = rate.textContent;
    }
  }
});
