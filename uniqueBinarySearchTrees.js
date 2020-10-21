// https://leetcode.com/problems/unique-binary-search-trees/

const numTrees = function(n) {
	const dp = [1, 1, 2];
	for (let i = 3; i <= n; i++) {
		dp[i] = 0;
		for (let j = 0; j < i; j++) {
			dp[i] += dp[j] * dp[i - j - 1];
		}
	}
	return dp[n];
};

console.assert(numTrees(3) === 5, "works for 3 nodes");
console.assert(numTrees(1) === 1, "works for a single node");
