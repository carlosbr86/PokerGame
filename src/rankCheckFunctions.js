import { countCardValues, getCardValue } from './helperFunctions'


// Function to check if a hand has four of a kind
export const isFourOfAKind = (hand) => Object.values(countCardValues(hand)).includes(4);

//card[0] = Suit
export const isFlush = (hand) => new Set(hand.map((card) => card.slice(-1))).size === 1;

export const isStraight = (hand) => {
  const handValues = hand.map((card) => getCardValue(card));
  handValues.sort((a, b) => a - b);// can be removed
  for (let i = 0; i < handValues.length - 1; i++) {
    if (handValues[i + 1] - handValues[i] !== 1) return false
  }
  return true;
};

// Function to check if a hand has three of a kind
export const hasThreeOfAKind = (hand) =>
  Object.values(countCardValues(hand)).includes(3)

// Function to check if a hand has a pair
export const hasPair = (hand) => Object.values(countCardValues(hand)).includes(2);

// Function to check if a hand has two pairs
export const isTwoPairs = (hand) => {
  const counts = countCardValues(hand);
  const pairCounts = Object.values(counts).filter((count) => count === 2);
  return pairCounts.length === 2;
};

export const isOnePair = (hand) => new Set(hand.map((card) => getCardValue(card))).size === 4;