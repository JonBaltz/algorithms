//https://leetcode.com/problems/available-captures-for-rook/

const Board = function () {
	this.board = [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]];
}

Board.prototype.addChar = function (x, y, char) {
	this.board[y][x] = char;
}

const numRookCaptures = function (board) {
	let position;
	let count = 0;
	for (let y = 0; y < 8; y++) {
		for (let x = 0; x < 8; x++) {
			if (board[y][x] === "R") {
				position = { y, x };
			}
		}
	}
	for (let i = position.x + 1; i < 8; i++) {
		if (board[position.y][i] === "p") {
			console.log('here');
			count++;
			break;
		} else if (board[position.y][i] === "B") {
			break;
		}
	}
	for (let i = position.x - 1; i > 0; i--) {
		if (board[position.y][i] === "p") {
			console.log('here');
			count++;
			break;
		} else if (board[position.y][i] === "B") {
			break;
		}
	}
	for (let i = position.y + 1; i < 8; i++) {
		if (board[i][position.x] === "p") {
			console.log('here');
			count++;
			break;
		} else if (board[i][position.x] === "B") {
			break;
		}
	}
	for (let i = position.y - 1; i > 0; i--) {
		if (board[i][position.x] === "p") {
			console.log('here');
			count++;
			break;
		} else if (board[i][position.x] === "B") {
			break;
		}
	}
	return count;
}

const test = new Board();
test.addChar(1, 3, "p");
test.addChar(5, 3, "p");
test.addChar(2, 7, "p");
test.addChar(2, 3, "R");
console.assert(numRookCaptures(test.board) === 3, "works with no bishops");

const test2 = new Board();
test2.addChar(1, 3, "p");
test2.addChar(5, 3, "p");
test2.addChar(2, 3, "B");
test2.addChar(4, 3, "B");
test2.addChar(3, 1, "p");
test2.addChar(3, 5, "p");
test2.addChar(3, 2, "B");
test2.addChar(3, 4, "B");
test2.addChar(3, 3, "R");
console.assert(numRookCaptures(test2.board) === 0, "works with no bishops", numRookCaptures(test2.board));
