
var cards = [

{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"

},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}]

var cardsInPlay = [];


function checkForMatch() {
if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
  	console.log("You found a match!");
	} else {
 	 console.log("Sorry, try again.");
	}
}	

function flipCard (cardId){

	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	

}



flipCard(0);
flipCard(2);
checkForMatch();






