const Turn = require("./turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard())
    this.turns += 1
    const cardInPlay = this.deck.cards.shift()
    if (turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(cardInPlay.id)
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const wins = this.turns - this.incorrectGuesses.length
    return wins / this.turns * 100
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;