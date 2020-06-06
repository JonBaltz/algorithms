// https://leetcode.com/problems/climbing-stairs/

const climbStairs = function(n) {
	let ans = [1, 1];
	for (let i = 2; i <= n; i++) {
		ans = [ans[1], ans[1] + ans[0]];
	}
	return ans[1];
};

console.assert(climbStairs(-1000) === 1, "handles negative numbers");
console.assert(climbStairs(2) === 2, "works for a base case", climbStairs(2));
console.assert(climbStairs(1) === 1, "works for a base case", climbStairs(1));
console.assert(climbStairs(5) === 8, "works for n of 5", climbStairs(5));
console.assert(climbStairs(3) === 3, "works for n of 3");
console.assert(climbStairs(0) === 1, "works for edge case of n of 0");
