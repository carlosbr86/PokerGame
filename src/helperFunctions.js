
export const convertAndSortPokerString = (inputString) => {

  const inputArray = inputString.toLowerCase().split(',').map(card => card.trim());

  const convertedArray = inputArray.map(card => {
    const initialValue = card.slice(0, -1);
    const value = pokerToNumericValueTransform(initialValue)
    const suit = card.slice(-1);
    return value + suit;
  });

  const sortedArray = convertedArray.sort((a, b) => {
    const valueA = parseInt(a.slice(1));
    const valueB = parseInt(b.slice(1));
    return valueA - valueB;
  });

  return sortedArray;
}

// Function to count the occurrences of each card value in a hand
export const countCardValues = (hand) => {
  const counts = {};
  for (const card of hand) {
    const value = card.slice(1);
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
};

export const pokerToNumericValueTransform = (initialValue) =>
  isNaN(initialValue) ? (
    initialValue === 'j' ? 11 :
      initialValue === 'q' ? 12 :
        initialValue === 'k' ? 13 : 14) :
    parseInt(initialValue)

export const numericToPokerTransform = (hand) => {
  const initialValue = parseInt(hand.slice(0, -1))
  const suit = hand.slice(-1)
  console.log('suit', suit, 'value', initialValue)
  const pokerValue = typeof (initialValue) === 'number' ? (
    initialValue === 11 ? 'J' :
      initialValue === 12 ? 'Q' :
        initialValue === 13 ? 'K' :
          initialValue === 14 ? 'A' : initialValue) :
    initialValue
  return (pokerValue + suit)
}

