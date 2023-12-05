import {
  isFourOfAKind,
  isFlush,
  isStraight,
  hasThreeOfAKind,
  hasPair,
  isTwoPairs,
  isOnePair,
} from '../rankCheckFunctions'; // Replace with the correct path

describe('isFourOfAKind', () => {
  test('detects four of a kind in a hand', () => {
    expect(isFourOfAKind(['2h', '2d', '2s', '2c', '3h'])).toBe(true);
    expect(isFourOfAKind(['ah', 'ad', 'as', 'ac', '3h'])).toBe(true);
    expect(isFourOfAKind(['2h', 'ad', 'as', 'ac', '3h'])).toBe(false);
  });
});

describe('isFlush', () => {
  test('detects a flush in a hand', () => {
    expect(isFlush(['2H', '5H', '8H', 'JH', 'AH'])).toBe(true);
    expect(isFlush(['2H', '5H', '8D', 'JH', 'AH'])).toBe(false);
  });
});

describe('isStraight', () => {
  test('detects a straight in a hand', () => {
    expect(isStraight(['10H', '11H', '12S', '13C', '14H'])).toBe(true);
    expect(isStraight(['10H', '11H', '12S', '13C', '8H'])).toBe(false);
  });
});

describe('hasThreeOfAKind', () => {
  test('detects three of a kind in a hand', () => {
    expect(hasThreeOfAKind(['2H', '2D', '2S', '3C', '5H'])).toBe(true);
    expect(hasThreeOfAKind(['AH', 'AD', 'KS', 'QC', '3H'])).toBe(false);
  });
});

describe('hasPair', () => {
  test('detects a pair in a hand', () => {
    expect(hasPair(['2H', '2D', '5S', '8C', '9H'])).toBe(true);
    expect(hasPair(['AH', 'KD', '2S', 'QC', '3H'])).toBe(false);
  });
});

describe('isTwoPairs', () => {
  test('detects two pairs in a hand', () => {
    expect(isTwoPairs(['2H', '2D', '5S', '5C', '9H'])).toBe(true);
    expect(isTwoPairs(['AH', 'KD', 'QS', 'QC', '3H'])).toBe(false);
  });
});

describe('isOnePair', () => {
  test('detects one pair in a hand', () => {
    expect(isOnePair(['2H', '2D', '5S', '8C', '9H'])).toBe(true);
    expect(isOnePair(['AH', 'KD', 'QS', '2C', '3H'])).toBe(false);
  });
});