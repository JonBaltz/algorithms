// Create a function which takes a value for the number of turns, and returns all possible sequences of moves that a single player can make in a game of rock paper scissors.

const rockPaperScissors = function(turns = 3) {
	let result = [""];
	for (let i = 0; i < turns; i++) {
		const current = [];
		for (let j = 0; j < result.length; j++) {
			current.push(result[j] + "R");
			current.push(result[j] + "P");
			current.push(result[j] + "S");
		}
		result = current;
	}
	return result;
}

const one = ["R", "P", "S"];
const three = ["RRR", "RRP", "RRS", "RPR", "RPP", "RPS", "RSR", "RSP", "RSS", "PRR", "PRP", "PRS", "PPR", "PPP", "PPS", "PSR", "PSP", "PSS", "SRR", "SRP", "SRS", "SPR", "SPP", "SPS", "SSR", "SSP", "SSS"];

console.assert(JSON.stringify(rockPaperScissors(1)) === JSON.stringify(one), "works for a single turn", rockPaperScissors(1));
console.assert(JSON.stringify(rockPaperScissors(3)) === JSON.stringify(three), "works for three items", rockPaperScissors(3));
console.assert(JSON.stringify(rockPaperScissors()) === JSON.stringify(three), "default value works", rockPaperScissors());
console.assert(JSON.stringify(rockPaperScissors(0)) === JSON.stringify([""]), "works for zero turns", rockPaperScissors(0));
