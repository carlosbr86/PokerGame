// Function to get numerical value of the card
export const getCardValue = (card) => card.slice(0, -1);

// Function to compare numeric value of two cards
export const compareCards = (card1, card2) => getCardValue(card1) - getCardValue(card2);

// Function returns count the occurrences of each card value in a hand
export const countCardValues = (hand) => {
  const counts = {};
  for (const card of hand) {
    const value = card.slice(0, -1);
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
};

// Convert the array to a string
export const convertAndSortPokerString = (inputString) => {
  const inputArray = inputString.toLowerCase().split(',').map(card => card.trim());

  const convertedArray = inputArray.map(card => {
    const initialValue = card.slice(0, -1);
    const value = pokerToNumericValueTransform(initialValue)
    const suit = card.slice(-1);
    return `${value}${suit}`; // improvement interpolation
  });

  const sortedArray = convertedArray.sort((a, b) => {
    const valueA = parseInt(a.slice(0, -1));
    const valueB = parseInt(b.slice(0, -1));
    return valueA - valueB; //ascending order
  });

  return sortedArray;
}

// Function returns a number equivalent to the poker value.
export const pokerToNumericValueTransform = (initialValue) => {
  if (isNaN(initialValue)) {
    if (initialValue === 'j') return 11
    if (initialValue === 'q') return 12
    if (initialValue === 'k') return 13
    if (initialValue === 'a') return 14
  } else return parseInt(initialValue)
}

// Function returns a poker character equivalent to the number value.
export const numericToPokerTransform = (hand) => {
  const initialValue = parseInt(hand.slice(0, -1))
  let value = initialValue
  const suit = hand.slice(-1)
  if (typeof (initialValue) === 'number') {
    if (initialValue === 11) value = 'j'
    if (initialValue === 12) value = 'q'
    if (initialValue === 13) value = 'k'
    if (initialValue === 14) value = 'a'
  }
  return (value + suit)
}

