const rotateMatrix = function (matrix) {
	const rotated = [];
	for (let i = 0; i < matrix[0].length; i++) {
		rotated[i] = [];
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			rotated[j][matrix.length - i - 1] = matrix[i][j];
		}
	}
	return rotated;
};

console.assert(JSON.stringify(rotateMatrix([[1]])) === JSON.stringify([[1]]), "works for a single row and column");
console.assert(
	JSON.stringify(rotateMatrix([[1, 2, 3]])) === JSON.stringify([[1], [2], [3]]),
	"the function can change a single row into a single column"
);
console.assert(
	JSON.stringify(rotateMatrix([[1], [2], [3]])) === JSON.stringify([[3, 2, 1]]),
	"should convert a single column into a single row"
);
console.assert(
	JSON.stringify(
		rotateMatrix([
			[1, 2],
			[3, 4],
		])
	) ===
		JSON.stringify([
			[3, 1],
			[4, 2],
		]),
	"works for a 2x2 matrix"
);
console.assert(
	JSON.stringify(
		rotateMatrix([
			[1, 2],
			[3, 4],
			[5, 6],
		])
	) ===
		JSON.stringify([
			[5, 3, 1],
			[6, 4, 2],
		]),
	"works for a non-square 2x3 array"
);
console.assert(
	JSON.stringify(
		rotateMatrix([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	) ===
		JSON.stringify([
			[7, 4, 1],
			[8, 5, 2],
			[9, 6, 3],
		]),
	"works for a square 3x3 matrix"
);
