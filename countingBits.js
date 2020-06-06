// https://leetcode.com/problems/counting-bits/

const countBits = function(n) {
	const dp = [0];
	let base = 1;
	for (let i = 1; i <= n; i++) {
		if (i === base) {
			dp.push(1);
			base *= 2;
		} else {
			dp.push(1 + dp[i - (base / 2)]);
		}
	}
	return dp;
};

console.assert(JSON.stringify(countBits(2)) === JSON.stringify([0, 1, 1]), "works for an n of two", countBits(2));
console.assert(JSON.stringify(countBits(5)) === JSON.stringify([0, 1, 1, 2, 1, 2]), "works for an n of five", countBits(5));
console.assert(JSON.stringify(countBits(0)) === JSON.stringify([0]), "works for an n of zero");
console.assert(JSON.stringify(countBits(1)) === JSON.stringify([0, 1]), "works for an n of one");
