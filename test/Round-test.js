const chai = require('chai');
const expect = chai.expect; 

const Turn = require('../src/turn'); 
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round(); 
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    const round = new Round(); 
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have the first Card in the Deck as the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should update turns count', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0); 
    expect(round.incorrectGuesses).to.be.empty;
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!'); 
    expect(round.turns).to.equal(2);   
    expect(round.incorrectGuesses).to.include(14);
    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.calculatePercentCorrect()).to.equal(50);
  })
})