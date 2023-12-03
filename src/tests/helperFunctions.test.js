import {
  getCardValue,
  compareCards,
  countCardValues,
  convertAndSortPokerString,
  pokerToNumericValueTransform,
  numericToPokerTransform,
} from '../helperFunctions';

describe('getCardValue', () => {
  test('returns numerical value of the card', () => {
    expect(getCardValue('10D')).toBe('10');
    expect(getCardValue('JS')).toBe('J');
    expect(getCardValue('8S')).toBe('8');
    expect(getCardValue('99S')).toBe('99');
  });
});

describe('compareCards', () => {
  test('compares numeric value of two cards', () => {
    expect(compareCards('2H', '3D')).toBe(-1);
    expect(compareCards('13D', '10S')).toBe(3);
    expect(compareCards('3D', '3S')).toBe(0);
    expect(compareCards('100D', '50S')).toBe(50);
  });
});

describe('countCardValues', () => {
  test('counts occurrences of each card value in a hand', () => {
    const hand = ['2H', '3D', '2S', '4C', '11H'];
    expect(countCardValues(hand)).toEqual({ '2': 2, '3': 1, '4': 1, '11':1});
    const hand2 = ['2H', '2D', '2S', '2C', '2H'];
    expect(countCardValues(hand2)).toEqual({ '2': 5});
  });
});

describe('convertAndSortPokerString', () => {
  test('converts and sorts poker string', () => {
    const inputString = '2D, 10H, QS, 3C, 4S';
    const expectedOutput = ['2d', '3c', '4s', '10h', '12s'];
    expect(convertAndSortPokerString(inputString)).toEqual(expectedOutput);
  });
});

describe('pokerToNumericValueTransform', () => {
  test('transforms poker value to numeric value', () => {
    expect(pokerToNumericValueTransform('j')).toBe(11);
    expect(pokerToNumericValueTransform('a')).toBe(14);
    expect(pokerToNumericValueTransform(10)).toBe(10);
    expect(pokerToNumericValueTransform('x')).toBe(undefined);

  });
});

describe('numericToPokerTransform', () => {
  test('transforms numeric value to poker value', () => {
    expect(numericToPokerTransform('11S')).toBe('jS');
    expect(numericToPokerTransform('14D')).toBe('aD');
  });
});