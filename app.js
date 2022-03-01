"use strict";
// function toglerMenu() {
//   const menu = document.querySelector(".togler");
//   menu.classList.toggle("togler-open");
// }
// const btn = document.querySelector(".info-img");
// btn.addEventListener("click", function () {
//   toglerMenu();
// });

const btn = document.querySelector(".info-img");

function togler() {
  const bar = document.querySelector(".navigation-bar");
  bar.classList.toggle("add-nav");
}
btn.addEventListener("click", function () {
  togler();
});
