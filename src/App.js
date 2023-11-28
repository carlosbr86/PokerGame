import React, { useState } from 'react';
import { convertAndSortPokerString, countCardValues } from './helperFunctions'
import { pokerHandsOrder } from './constants'


// Function to get numerical value of the card
const getCardValue = (card) => card.slice(1);

// Function to compare numeric value of two cards
const compareCards = (card1, card2) => getCardValue(card1) - getCardValue(card2);

//idea to save
// const isFullOrFour = (hand) => new Set(hand.map((card) => card.slice(1))).size === 2;
// const isTwoPairs = isThreeOrTwoPairs && !hasThreeOfAKind

// ****************************** RankCheck Functions ****************************//
// Function to check if a hand has four of a kind
const isFourOfAKind = (hand) => Object.values(countCardValues(hand)).includes(4);

//card[0] = Suit
const isFlush = (hand) => new Set(hand.map((card) => card[0])).size === 1;

const isStraight = (hand) => {
  const handValues = hand.map((card) => getCardValue(card));
  // handValues.sort((a, b) => a - b);// can be removed
  for (let i = 0; i < handValues.length - 1; i++) {
    if (handValues[i + 1] - handValues[i] !== 1) return false
  }
  return true;
};

const isThreeOrTwoPairs = (hand) => new Set(hand.map((card) => card.slice(1))).size === 3;
// Function to check if a hand has three of a kind
const hasThreeOfAKind = (hand) => Object.values(countCardValues(hand)).includes(3);
// Function to check if a hand has a pair
const hasPair = (hand) => Object.values(countCardValues(hand)).includes(2);

// Function to check if a hand has two pairs
const isTwoPairs = (hand) => {
  const counts = countCardValues(hand);
  const pairCounts = Object.values(counts).filter((count) => count === 2);
  return pairCounts.length === 2;
};

const isOnePair = (hand) => new Set(hand.map((card) => card.slice(1))).size === 4;

// ****************************************************************************//


// Function to get the rank of a hand
const getHandRank = (hand, rank: null) => {
  console.log('rank', rank)
  if (isStraight(hand) && isFlush(hand)) return "Straight Flush";
  if (isFourOfAKind(hand)) return "Four of a Kind";
  if (rank === "Four of a Kind") return null
  if (hasThreeOfAKind(hand) && hasPair(hand)) return "Full House";
  if (rank === "Full House") return null
  if (isFlush(hand)) return "Flush";
  if (rank === "Flush") return null
  if (isStraight(hand)) return "Straight";
  if (rank === "Straight") return null
  if (hasThreeOfAKind(hand)) return "Three of a Kind";
  if (rank === "Three of a Kind") return null
  if (isTwoPairs(hand)) return "Two Pairs";
  if (rank === "Two Pairs") return null
  if (isOnePair(hand)) return "Pair";
  return "High Card";
};

const isValidPokerHand = (hand) => {
  // Regular expression to match a valid poker hand
  //   const validNumericCardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  //   const validSuitCardValues = ['h', 'd', 'c', 's'] // Heart, Diamond, Club, Spade]
  const pokerHandRegex = /^([2-9]|10|[jqka])[cdhs]$/i;

  //   //repeated card when combining the 2 hands, not more than 3.
  //   //out of validNumeric or valid Suit values
  // Split the hand into individual cards and check each one
  const cards = hand.split(',').map(card => card.trim());
  if (cards.length !== 5) return false
  for (const card of cards) {
    if (!pokerHandRegex.test(card)) {
      return false; // Invalid card found
    }
  }

  return true; // All cards are valid
}


const PokerHandComparer = () => {
  const [hand1, setHand1] = useState('3h, 2s, 7h, 10c, js');
  const [hand2, setHand2] = useState('2s, 10c, Qh, 7d, Ks');

  const [result, setResult] = useState('');

  // Function to compare two poker hands
  const compareHands = (hand1, hand2) => {
    console.log('hands', hand1, hand2)
    const rank1 = getHandRank(hand1);
    const rank2 = getHandRank(hand2, rank1);
    if (rank1 > rank2) {
      // Different hand ranks
      setResult(`Hand 1 wins, with a ${rank1}`);
      return pokerHandsOrder.indexOf(rank1) - pokerHandsOrder.indexOf(rank2);
    } else if (rank2 > rank1) {
      setResult(`Hand 2 wins, with a ${rank2}`);
      return pokerHandsOrder.indexOf(rank1) - pokerHandsOrder.indexOf(rank2);
    } else {
      // Same hand rank, compare individual cards
      console.log('Tie!')
      for (let i = 4; i >= 0; i--) {
        const result = compareCards(hand1[i], hand2[i]);
        //parse it back the text
        if (result > 0) {
          setResult(`Hand 1 wins, with a ${rank1} breaking the Tie with ${hand1[i]} vs ${hand2[i]}`);
          return;
        } else if (result < 0) {
          setResult(`Hand 2 wins, with a ${rank2} breaking the Tie with ${hand2[i]} vs ${hand1[i]}`);
          return;
        }
      }
      // If all cards are equal, it's a tie
      setResult('Tie!');

      return 0;
    }
  };


  return (
    <div>
      <h1>Poker Hand Comparer</h1>
      <div>
        <label>Hand 1:</label>
        <input
          type="text"
          value={hand1}
          onChange={(e) => setHand1(e.target.value)}
          placeholder="Enter hand 1"
        />
      </div>
      <div>
        <label>Hand 2:</label>
        <input
          type="text"
          value={hand2}
          onChange={(e) => setHand2(e.target.value)}
          placeholder="Enter hand 2"
        />
      </div>
      <button onClick={() => compareHands(convertAndSortPokerString(hand1), convertAndSortPokerString(hand2))}>Compare Hands</button>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default PokerHandComparer;
