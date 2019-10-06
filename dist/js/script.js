const style = document.createElement("style");
document.head.appendChild(style);

const cards = document.querySelectorAll(".box__card");

const newCards = cards.forEach(el => {
  el.style.background = `url('./img/ciri.png') `;
});
