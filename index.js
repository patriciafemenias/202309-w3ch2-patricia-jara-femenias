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
        cardName: cardValues,
        cardSuit: cardSuits,
        value: cardPosition + 2,
      });
    });
  });
  return deck;
};

console.log(getDeck());
