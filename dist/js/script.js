const style = document.createElement("style");
document.head.appendChild(style);

let turnCounter = 0;
const turnCounterBox = document.querySelector(".counter__paragraph>i");

const cards = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png"
];

cards.sort(() => {
  return Math.random() - 0.5;
});

const countTurn = () => {
  turnCounter++;
  turnCounterBox.innerHTML = `Turn counter: ${turnCounter}`;
};

let oneRevealed;
let oneRevealedId;
let actualCard;

const revealCard = el => {
  let cardId = el.target.id;

  cardId = cardId.substr(1);

  if (cardId == actualCard) {
    return false;
  }

  if (cards[cardId] == oneRevealed) {
    const firstCard = document.getElementById(`${oneRevealedId}`);
    firstCard.style.visibility = `hidden`; //firstCard
    el.target.style.visibility = `hidden`; //secondCard
    countTurn();
  }
  style.innerHTML = `
    #${el.target.id} {
      background: url('./img/${cards[cardId]}');
      background-size: cover;
    } `;

  oneRevealed = cards[cardId];
  oneRevealedId = el.target.id;

  actualCard = cardId;

  if (turnCounter >= 6) {
    setTimeout(() => {
      alert("WYGRAŁEŚ");
    }, 1000);
  }
};

const c0 = document.getElementById("c0");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");
const c10 = document.getElementById("c10");
const c11 = document.getElementById("c11");

c0.addEventListener("click", revealCard);
c1.addEventListener("click", revealCard);
c2.addEventListener("click", revealCard);
c3.addEventListener("click", revealCard);
c4.addEventListener("click", revealCard);
c5.addEventListener("click", revealCard);
c6.addEventListener("click", revealCard);
c7.addEventListener("click", revealCard);
c8.addEventListener("click", revealCard);
c9.addEventListener("click", revealCard);
c10.addEventListener("click", revealCard);
c11.addEventListener("click", revealCard);
