// https://leetcode.com/problems/sort-the-matrix-diagonally/

const diagonalSort = function(mat) {
	const m = mat.length;
	const n = mat[0].length;
	for (let i = 1 - m; i < n; i++) {
		const diag = [];
		for (let j = 0; j <= m && j <= n; j++) {
			if (i + j < 0 || j >= m || i + j >= n) continue;
			diag.push(mat[j][i + j]);
		}
		diag.sort((a, b) => a - b);
		for (let j = 0; j <= m && j <= n; j++) {
			if (i + j < 0 || j >= m || i + j >= n) continue;
			mat[j][i + j] = diag.shift();
		}
	}
	return mat;
};

const t = diagonalSort;
console.assert(JSON.stringify(t([[3,3,1,1],[2,2,1,2],[1,1,1,2]])) === JSON.stringify([[1,1,1,1],[1,2,2,2],[1,2,3,3]]), "case 1");

t([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]);
