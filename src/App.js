import React, { useState } from 'react';
import { convertAndSortPokerString, countCardValues, numericToPokerTransform, compareCards } from './helperFunctions'
import { pokerHandsOrder } from './constants'
import { isStraight, isFlush, isFourOfAKind, hasThreeOfAKind, hasPair, isTwoPairs, isOnePair } from './rankCheckFunctions'
import './App.css';








// Function to get the rank of a hand
const getHandRank = (hand) => {
  if (isStraight(hand) && isFlush(hand)) return "Straight Flush";
  if (isFourOfAKind(hand)) return "Four of a Kind";
  if (hasThreeOfAKind(hand) && hasPair(hand)) return "Full House";
  if (isFlush(hand)) return "Flush";
  if (isStraight(hand)) return "Straight";
  if (hasThreeOfAKind(hand)) return "Three of a Kind";
  if (isTwoPairs(hand)) return "Two Pairs";
  if (isOnePair(hand)) return "Pair";
  return "High Card";
};

const isValidPokerHand = (hand) => {
  const pokerHandRegex = /^([2-9]|10|[jqka])[cdhs]$/i;
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
  const [hand1, setHand1] = useState('3H, 2S, 7H, 10C, JS');//Initial State, easier testing
  const [hand2, setHand2] = useState('2S, 10C, QH, 7D, KS');

  const [result, setResult] = useState('');

  // Function to compare two poker hands
  const compareHands = ({ hand1, hand2 }) => {
    let isValid = isValidPokerHand(hand1)
    isValid = isValid && isValidPokerHand(hand2)
    if (isValid) {
      const formattedHand1 = convertAndSortPokerString(hand1)
      const formattedHand2 = convertAndSortPokerString(hand2)
      const rank1 = getHandRank(formattedHand1);
      const rank2 = getHandRank(formattedHand2);
      const rankValue1 = pokerHandsOrder.indexOf(rank1)
      const rankValue2 = pokerHandsOrder.indexOf(rank2)

      if (rankValue1 > rankValue2) {
        // Different hand ranks
        setResult(`🎉 Hand 1 wins with a ${rank1}! 🏆 `);
        return pokerHandsOrder.indexOf(rank1) - pokerHandsOrder.indexOf(rank2);
      } else if (rankValue2 > rankValue1) {
        setResult(`🎉 Hand 2 wins with a ${rank2}! 🏆 `);
        return pokerHandsOrder.indexOf(rank1) - pokerHandsOrder.indexOf(rank2);
      } else {
        // Same hand rank, compare individual cards
        for (let i = 4; i >= 0; i--) {
          const result = compareCards(formattedHand1[i], formattedHand2[i]);
          const highestCard1 = numericToPokerTransform(formattedHand1[i]);
          const highestCard2 = numericToPokerTransform(formattedHand2[i]);

          if (result > 0) {
            setResult(`🎉 Hand 1 wins! 🏆${rank1} with a ${highestCard1.toUpperCase()} as highest card. Breaking the tie with ${highestCard2.toUpperCase()}. 🃏`);
            return;
          } else if (result < 0) {
            setResult(`🎉 Hand 2 wins! 🏆${rank2} with a ${highestCard2.toUpperCase()}  as highest card. Breaking the tie with ${highestCard1.toUpperCase()}. 🃏`);
            return;
          }
        }
        // If all cards are equal, it's a tie
        setResult(`Tie: ${rank1}!`);

        return 0;
      }
    } else setResult('❌Invalid Hand!❌');
  };


  return (
    <div className="container">
      <h1>♠️♥️Poker Hand Comparer♣️♦️</h1>
      <div>
        <label className="align-left">1st Hand:</label>
        <input
          type="text"
          value={hand1}
          onChange={(e) => setHand1(e.target.value)}
          placeholder="Enter hand 1"
        />
      </div>
      <div>
        <label className="align-left">2nd Hand:</label>
        <input
          type="text"
          value={hand2}
          onChange={(e) => setHand2(e.target.value)}
          placeholder="Enter hand 2"
        />
      </div>
      <button onClick={() => compareHands({ hand1, hand2 })}>Compare Hands</button>
      <div >
        <h2>{result ? "Result:" : ''}</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default PokerHandComparer;
