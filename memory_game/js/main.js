
var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = [];


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
 	 console.log("Sorry, try again.");
	}
}	

function flipCard (cardId){

	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cardsInPlay[0]);

	
}



flipCard(0);
flipCard(2);
checkForMatch();






