const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(round) {
    this.currentRound = round;
  }
  start() {
    const startCard = prototypeQuestions.map(question => {
      const cardInPlay = new Card(question.id, question.question, question.answers, question.correctAnswer)
      return cardInPlay
    }) 
    const startDeck = new Deck(startCard)
    const startRound = new Round(startDeck)

    this.printMessage(startDeck);
    this.printQuestion(startRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;