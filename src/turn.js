class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
    this.isCorrect = '';
    this.feedback = '';
  }
  returnGuess() {
    return this.userGuess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.userGuess !== this.card.correctAnswer) {
      return this.isCorrect = false
    }
  }
  giveFeedback() {
    if (this.isCorrect === false) {
      return this.feedback = 'incorrect!'
    } else if (this.isCorrect === true) {
      return this.feedback = 'correct!'
    }
    else {
      return 'Please evaluate your guess'
    }
  }
}

module.exports = Turn;
