const pepsi = document.querySelector(".pepsi-option");
const img = document.querySelector(".pepsi-img");
pepsi.addEventListener("click", function (e) {
  const colorName = e.target.dataset.color;
  const id = e.target.dataset.id;
  if (!colorName) return;
  document.body.style.backgroundColor = colorName;
  img.setAttribute("src", `img/pepsi00${id}.png`);
});

const header = document.querySelector(".header");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");

open.addEventListener("click", function () {
  header.classList.toggle("open");
});
close.addEventListener("click", function () {
  header.classList.toggle("open");
});
