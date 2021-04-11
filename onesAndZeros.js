// https://leetcode.com/problems/ones-and-zeroes/

const findMaxForm = function(strs, m, n) {
	const dp = Array.from({length:m + 1}, () => []);
	for (const str of strs) {
		let zeros = str.split("0").length - 1;
		let ones = str.split("1").length - 1;
		for (let i = m; i >= zeros; i--) {
			for (let j = n; j >= ones; j--) {
				dp[i][j] = Math.max(dp[i][j] || 0, 1 + (dp[i - zeros][j - ones] || 0));
			}
		}
	}
	return dp[m][n] || 0;
};

const t = findMaxForm;
console.assert(t(["10000000", "00", "0", "11", "00"], 5, 2) === 4, "case 1");
console.assert(t(["10", "1", "0"], 1, 1) === 2, "case 3");
console.assert(t(["1100", "011111", "100000"], 6, 6) === 2, "case 4");
console.assert(t(["10", "0001", "111001", "0", "1"], 5, 3) === 4, "case 2");
console.assert(t(["10", "0001", "111001", "0", "1"], 50, 50) === 5, "case 5");
console.assert(t(["111", "1000", "1000", "1000"], 9, 3) ===3, "case 6");

