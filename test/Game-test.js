const chai = require('chai');
const expect = chai.expect; 

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function'); 
  })
 
  it('should be an instance of Game', function() {
    const game = new Game(); 
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const deck = new Deck();
    const round = new Round(deck)
    const game = new Game(round);

    expect(game.currentRound).to.equal(round)
  })
})