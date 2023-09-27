const deckSuit1 = [
  {
    name: "1",
    suit: "♠",
    value: 1,
  },

  {
    name: "2",
    suit: "♠",
    value: 2,
  },
  {
    name: "3",
    suit: "♠",
    value: 3,
  },
  {
    number: "4",
    suit: "♠",
    value: 4,
  },
  {
    number: "5",
    suit: "♠",
    value: 5,
  },
  {
    number: "6",
    suit: "♠",
    value: 6,
  },
  {
    number: "7",
    suit: "♠",
    value: 7,
  },
  {
    number: "8",
    suit: "♠",
    value: 8,
  },
  {
    number: "9",
    suit: "♠",
    value: 9,
  },
  {
    number: "10",
    suit: "♠",
    value: 10,
  },
  {
    number: "J",
    suit: "♠",
    value: 11,
  },
  {
    number: "Q",
    suit: "♠",
    value: 12,
  },
  {
    number: "K",
    suit: "♠",
    value: 13,
  },
  {
    number: "A",
    suit: "♠",
    value: 14,
  },
];

const deckSuit2 = deckSuit1.map((card) => {
  card.suit = "♣";
  return card;
});

const deckSuit3 = deckSuit1.map((card) => {
  card.suit = "♦";
  return card;
});

const deckSuit4 = deckSuit1.map((card) => {
  card.suit = "♥";
  return card;
});

const getDeck = deckSuit1.concat(deckSuit2, deckSuit3, deckSuit4);

console.log(getDeck);
