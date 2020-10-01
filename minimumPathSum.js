// https://leetcode.com/problems/minimum-path-sum/

const minPathSum = function (matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (i === 0 && j === 0) {
				//
			} else if (j === 0) {
				matrix[i][j] += matrix[i - 1][j];
			} else if (i === 0) {
				matrix[i][j] += matrix[i][j - 1];
			} else {
				matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1]);
			}
		}
	}
	return matrix[matrix.length - 1][matrix[0].length - 1];
};

// Diakstra's shorted path method (very inefficient)
// const minPathSum = function (matrix) {
// 	if (matrix.length === 0 || matrix[0].length === 0) return null;
// 	const rowLen = matrix[0].length;
// 	let order = [0];
// 	const sums = { 0: matrix[0][0] };
// 	let i, j, temp, first;
// 	while (sums[(matrix.length - 1) * rowLen + rowLen - 1] === undefined) {
// 		first = order.shift();
// 		j = first % rowLen;
// 		i = (first - j) / rowLen;
// 		if (1 + i < matrix.length) {
// 			temp = (1 + i) * rowLen + j;
// 			if (sums[temp] === undefined) {
// 				sums[temp] = matrix[1 + i][j] + sums[first];
// 				for (let y = -1; y < order.length + 1; y++) {
// 					if (sums[temp] < sums[order[y + 1]] || y === order.length) {
// 						order = [...order.slice(0, y + 1), temp, ...order.slice(y + 1)];
// 						break;
// 					}
// 				}
// 			}
// 		}
// 		if (1 + j < rowLen) {
// 			temp = i * rowLen + 1 + j;
// 			if (sums[temp] === undefined) {
// 				sums[temp] = matrix[i][1 + j] + sums[first];
// 				for (let y = -1; y < order.length + 1; y++) {
// 					if (sums[temp] < sums[order[y + 1]] || y === order.length) {
// 						order = [...order.slice(0, y + 1), temp, ...order.slice(y + 1)];
// 						break;
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return sums[(matrix.length - 1) * rowLen + rowLen - 1];
// };

console.assert(
	minPathSum([
		[5, 1],
		[2, 1],
	]) === 7,
	"2x2 case"
);

console.assert(
	minPathSum([
		[7, 2, 4, 1],
		[4, 7, 5, 1],
		[2, 4, 7, 6],
	]) === 21,
	"4X3 case"
);

console.log(
	minPathSum([
		[5, 4, 2, 9, 6, 0, 3, 5, 1, 4, 9, 8, 4, 9, 7, 5, 1],
		[3, 4, 9, 2, 9, 9, 0, 9, 7, 9, 4, 7, 8, 4, 4, 5, 8],
		[6, 1, 8, 9, 8, 0, 3, 7, 0, 9, 8, 7, 4, 9, 2, 0, 1],
		[4, 0, 0, 5, 1, 7, 4, 7, 6, 4, 1, 0, 1, 0, 6, 2, 8],
		[7, 2, 0, 2, 9, 3, 4, 7, 0, 8, 9, 5, 9, 0, 1, 1, 0],
		[8, 2, 9, 4, 9, 7, 9, 3, 7, 0, 3, 6, 5, 3, 5, 9, 6],
		[8, 9, 9, 2, 6, 1, 2, 5, 8, 3, 7, 0, 4, 9, 8, 8, 8],
		[5, 8, 5, 4, 1, 5, 6, 6, 3, 3, 1, 8, 3, 9, 6, 4, 8],
		[0, 2, 2, 3, 0, 2, 6, 7, 2, 3, 7, 3, 1, 5, 8, 1, 3],
		[4, 4, 0, 2, 0, 3, 8, 4, 1, 3, 3, 0, 7, 4, 2, 9, 8],
		[5, 9, 0, 4, 7, 5, 7, 6, 0, 8, 3, 0, 0, 6, 6, 6, 8],
		[0, 7, 1, 8, 3, 5, 1, 8, 7, 0, 2, 9, 2, 2, 7, 1, 5],
		[1, 0, 0, 0, 6, 2, 0, 0, 2, 2, 8, 0, 9, 7, 0, 8, 0],
		[1, 1, 7, 2, 9, 6, 5, 4, 8, 7, 8, 5, 0, 3, 8, 1, 5],
		[8, 9, 7, 8, 1, 1, 3, 0, 1, 2, 9, 4, 0, 1, 5, 3, 1],
		[9, 2, 7, 4, 8, 7, 3, 9, 2, 4, 2, 2, 7, 8, 2, 6, 7],
		[3, 8, 1, 6, 0, 4, 8, 9, 8, 0, 2, 5, 3, 5, 5, 7, 5],
		[1, 8, 2, 5, 7, 7, 1, 9, 9, 8, 9, 2, 4, 9, 5, 4, 0],
		[3, 4, 4, 1, 5, 3, 3, 8, 8, 6, 3, 5, 3, 8, 7, 1, 3],
	])
);
