// https://leetcode.com/problems/rotate-image/

const rotate = function(matrix) {
	console.log(matrix);
	const n = matrix.length;
	const swap = function(a, b) {
		let temp = matrix[a[0]][a[1]];
		matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
		matrix[b[0]][b[1]] = temp;
	};
	for (let i = 0; i < Math.ceil(n / 2); i++) {
		for (let j = 0; j < Math.floor(n / 2); j++) {
			// i is y axis, j is x axis
			swap([i, j], [n - 1 - j, i]);
			swap([n - 1 - j, i], [n - 1 - i, n - 1 - j]);
			swap([n - 1 - i, n - 1 - j], [j, n - 1 - i]);
		}
	}
	console.log(matrix);
};

rotate([[0, 1], [2, 3]]);
rotate([[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
