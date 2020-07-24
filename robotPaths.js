const makeBoard = function (n) {
	const board = [];
	for (let i = 0; i < n; i++) {
		board.push([]);
		for (let j = 0; j < n; j++) {
			board[i].push(false);
		}
	}
	board.togglePiece = function (i, j) {
		this[i][j] = !this[i][j];
	};
	board.hasBeenVisited = function (i, j) {
		return !!this[i][j];
	};
	return board;
};

const robotPaths = function (n) {
	const board = makeBoard(n);
	let count = 0;
	const options = [-1, 1];
	let temp;
	const recurse = function (i, j) {
		if (i === j && j === n - 1) {
			return count++;
		}
		board.togglePiece(i, j);
		for (let k = 0; k < 2; k++) {
			temp = i + options[k];
			if (temp >= 0 && temp < n && !board.hasBeenVisited(temp, j)) {
				recurse(temp, j);
			}
			temp = j + options[k];
			if (temp >= 0 && temp < n && !board.hasBeenVisited(i, temp)) {
				recurse(i, temp);
			}
		}
		board.togglePiece(i, j);
	};
	recurse(0, 0);
	return count;
};

console.log(robotPaths(3));
console.log(robotPaths(1));
console.log(robotPaths(2));
console.log(robotPaths(5));
