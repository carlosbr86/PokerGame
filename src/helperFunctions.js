
export const convertAndSortPokerString = (inputString) => {

  const inputArray = inputString.toLowerCase().split(',').map(card => card.trim());

  const convertedArray = inputArray.map(card => {
    const initialValue = card.slice(0, -1);
    const value = isNaN(initialValue) ? (initialValue === 'j' ? 11 : initialValue === 'q' ? 12 : initialValue === 'k' ? 13 : 14) : parseInt(initialValue);
    const suit = card.slice(-1);
    return suit + value;
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