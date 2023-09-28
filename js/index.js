const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const cardSuits = ["♥", "♦", "♣", "♠"];

const getDeck = () => {
  const deck = [];

  cardValues.forEach((cardValues, cardPosition) => {
    cardSuits.forEach((cardSuits) => {
      deck.push({
        name: cardValues,
        suit: cardSuits,
        score: cardPosition + 2,
      });
    });
  });

  return deck;
};

const getRandomCard = () => {
  const deck = getDeck();
  return deck[Math.floor(Math.random() * deck.length)];
};

const setCard = (element, card) => {
  element.querySelector(".card-top").textContent = card.name;
  element.querySelector(".card-middle").textContent = card.suit;
  element.querySelector(".card-botton").textContent = card.name;
};

const randomUserCard = getRandomCard();
const randomComputerCard = getRandomCard();

const cardTop = document.querySelector(".card-top");
const cardtMiddle = document.querySelector(".card-middle");
const cardBotton = document.querySelector(".card-botton");
const startButton = document.querySelector(".start-button");
const greaterButton = document.querySelector(".greater-button");
const smallerButton = document.querySelector(".smaller-button");
const fullGameContainer = document.querySelector(".full-game-container");
const computerCard = document.querySelector(".computer-card");
const userCard = document.querySelector(".user-card");

startButton.addEventListener("click", (event) => {
  startButton.classList.add("hidden");
  const mainContainerElement = document.querySelector(".main-container");
  mainContainerElement.classList.remove("hidden");
});

greaterButton.addEventListener("click", (event) => {
  computerCard.classList.remove("back-card");
  setCard(computerCard, randomComputerCard);
});

smallerButton.addEventListener("click", (event) => {
  computerCard.classList.remove("back-card");
  setCard(computerCard, randomComputerCard);
});

cardTop.textContent = "A";
cardtMiddle.textContent = "♥";
cardBotton.textContent = "A";

setCard(userCard, randomUserCard);
