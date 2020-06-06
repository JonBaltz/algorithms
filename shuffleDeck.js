const shuffleDeck = function(deck) {
	for (let i = 0; i < deck.length; i++) {
		let random = Math.floor(Math.random() * deck.length - i) + i;
		let temp = deck[random];
		deck[random] = deck[i];
		deck[i] = temp;
	}
	return deck;
};

const orderedDeck = function() {
	const suits = [ '♥', '♣', '♠', '♦' ];
	const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
	const deck = [];
	suits.forEach((suit) => values.forEach((value) => {deck.push(value + suit);}));
	return deck;
};

const deck = orderedDeck();
console.log(deck);
console.log(shuffleDeck(deck));
