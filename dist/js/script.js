const style = document.createElement("style");
document.head.appendChild(style);

const card = new Array();

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

function hideCards(first, second) {
  setTimeout(() => {
    first.style.visibility = `hidden`; //firstCard
    second.style.visibility = `hidden`; //secondCard
  }, 500);
}
const highlightCard = (first, second, cards, cardId) => {
  second.style.background = `url('./img/${cards[cardId]}')`;

  second.classList.add("pair");
  first.classList.add("pair");
  hideCards(first, second);
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

    highlightCard(firstCard, el.target, cards, cardId);
    countTurn();
  } else {
    style.innerHTML = `
    #${el.target.id} {
      background: url('./img/${cards[cardId]}');
      background-size: cover;
    } `;
  }

  oneRevealed = cards[cardId];
  oneRevealedId = el.target.id;

  actualCard = cardId;

  if (turnCounter >= 6) {
    setTimeout(() => {
      alert("WYGRAŁEŚ");
    }, 2000);
  }
};

for (i = 0; i <= 11; i++) {
  card.push(document.getElementById(`c${i}`));
}

for (i = 0; i <= 11; i++) {
  card[i].addEventListener("click", revealCard);
}

// correct the counter
