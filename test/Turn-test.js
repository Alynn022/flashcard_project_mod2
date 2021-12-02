const chai = require('chai');
const expect = chai.expect; 

const Turn = require('../src/turn'); 
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn(); 
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a users guess to the question of a Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.userGuess).to.equal('array');
  });

  it('should be able to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.returnGuess(); 
    expect(turn.userGuess).to.equal('array');
  });

  it('should be able to return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.returnCard();
    expect(turn.card).to.equal(card)
  });

  it('should indicate if the users guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    
    turn.evaluateGuess(); 
    expect(turn.isCorrect).to.equal(false); 
  });

  it('should be able to give feedback based on whether the guess is correct or not', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.evaluateGuess();
    turn.giveFeedback(); 

    expect(turn.feedback).to.equal('incorrect!')
  });
});