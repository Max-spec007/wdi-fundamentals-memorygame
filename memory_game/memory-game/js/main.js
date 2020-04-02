console.log("Up and running!");
console.log("User flipped queen");
console.log("User flipped king");
console.log("Sorry, try again.");


var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};




function flipCard () {
var cardId = this.getAttribute('data-id');
console.log("The user flipped a " + cards[cardId].rank);


  
  cardsInPlay.push(cards[cardId].rank);

  
  this.setAttribute('src', cards[cardId].cardImage);

  
  if (cardsInPlay.length === 2) {
    
    checkForMatch();
    
    
  }
};

var createBoard = function () {
  
  for (var i = 0; i < cards.length; i++) {
    
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
 }

};

createBoard();



