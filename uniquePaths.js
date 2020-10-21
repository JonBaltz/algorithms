// https://leetcode.com/problems/unique-paths/

const uniquePaths = function(m, n) {
	const sto = {};
	let sum;
	const recurse = function(y, x) {
		if (y == 0 || x == 0) return 1;
		let key = `${y},${x}`;
		if (sto[key]) return sto[key];
		sum = recurse(y - 1, x) + recurse(y, x - 1);
		sto[key] = sum;
		return sum;
	};
	return recurse(m - 1, n - 1);
};

console.assert(uniquePaths(3, 7) === 28, "works for 3x7");
console.assert(uniquePaths(3, 2) === 3, "works for 3x2");
