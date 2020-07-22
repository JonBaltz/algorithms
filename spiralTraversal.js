const spiralTraversal = function (matrix) {
	const array = [];
	array.push(...matrix.shift());
	for (let i = 0; i < matrix.length; i++) {
		array.push(matrix[i].pop());
	}
	let temp = matrix.pop();
	temp = temp ? temp.reverse() : [];
	array.push(...temp);
	for (let i = matrix.length - 1; i >= 0; i--) {
		array.push(matrix[i].shift());
	}
	if (matrix.length && matrix[0].length) {
		array.push(...spiralTraversal(matrix));
	}
	return array;
};

console.assert(
	JSON.stringify(
		spiralTraversal([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	) === JSON.stringify([1, 2, 3, 6, 9, 8, 7, 4, 5]),
	"works for a square 3x3 matrix"
);
console.assert(JSON.stringify(spiralTraversal([[1], [2]])) === JSON.stringify([1, 2]), "works for a single column");
console.assert(
	JSON.stringify(spiralTraversal([[1, 2, 3, 4]])) === JSON.stringify([1, 2, 3, 4]),
	"works for a single row"
);
console.assert(
	JSON.stringify(
		spiralTraversal([
			[1, 2],
			[3, 4],
		])
	) === JSON.stringify([1, 2, 4, 3]),
	"works for a 2x2 martix"
);
console.assert(JSON.stringify(spiralTraversal([[1]])) === JSON.stringify([1]), "works for a single item");
console.assert(JSON.stringify(spiralTraversal([[]])) === JSON.stringify([]), "works for an empty martix");
