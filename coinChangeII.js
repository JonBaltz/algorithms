// https://leetcode.com/problems/coin-change-2/

const change = function(total, coins) {
	if (!total) return 1;
	coins.sort((a,b) => a-b);
	const memo = {};
	const recurse = function(sum, dex) {
		let key = sum + "&" + dex;
		if (memo[key] !== undefined) return memo[key];
		let count = 0;
		let curr;
		for (let i = 0; i <= dex; i++) {
			curr = sum - coins[i];
			if (!curr) count++;
			if (curr <= 0) break;
			count += recurse(curr, i);
		}
		memo[key] = count;
		return count;
	}
	return recurse(total, coins.length - 1);
}

console.assert(change(5, [1, 2, 5]) === 4, "four ways with these coins");
// console.assert(change(5, [1, 2, 5, 6, 7, 8, 9]) === 4, "only coins that are smaller matter");
// console.assert(change(0, []) === 1, "zero makes itself");
// console.assert(change(100, [99, 1]) === 2, "works when out of order");
// console.log(change(500, [3, 5, 7, 9, 11]));
