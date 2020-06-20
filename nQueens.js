const nQueens = function(n) {
	// Creates a number equal to n 1's in binary which represents a full board
	// The 1 << n is equivalent to 2 to the power of n
	const board = (1 << n) - 1;
	// Creates a helper function for more readable code
	const recurse = function(board, positiveSlopeDiagonal, negativeSlopeDiagonal, verticalColumns) {
		// Creates a count variable
		let count = 0;
		// Creates a binary number that represents all the possible positions that a queen could be placed without conflicts
		// This first creates a board of all places that have a conflict, then it inverts every bit, then it makes sure it only matches with spaces that are on the board
		let possible = ~(positiveSlopeDiagonal | negativeSlopeDiagonal | verticalColumns) & board;
		// A value of 0 for possible would mean that there are no possible possitions, therfore the loop ends
		while(possible) {
			// Find the right-most possible queen possition
			let bit = possible & -possible;
			// Removes the bit from possible so we can chech the next right-most bit
			possible -= bit;
			// Runs recurse with updated items adding the conflicts from the checked bit then adds result to count
			count += recurse(board, (positiveSlopeDiagonal | bit) << 1, (negativeSlopeDiagonal | bit) >>> 1, verticalColumns | bit);
		}
		if (verticalColumns === board) {
			return ++count;
		}
		return count;
	}
	return recurse(board, 0, 0, 0);
};

console.assert(nQueens(0) === 1, "one solution for a board of zero");
console.assert(nQueens(1) === 1, "works for n = 1");
console.assert(nQueens(2) === 0, "works for n = 2");
console.assert(nQueens(4) === 2, "works for n = 4");
console.assert(nQueens(8) === 92, "works for n = 8");
