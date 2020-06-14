// https://leetcode.com/problems/largest-divisible-subset/

const largestDivisibleSubset = function(nums) {
	if (!nums.length) return [];
	nums.sort((a, b) => a-b);
	const dp = [[nums[0]]];
	let biggest = [dp[0]];
	for (let i = 1; i < nums.length; i++) {
		let current = [nums[i]];
		for (let j = 0; j < dp.length; j++) {
			let last = dp[j][dp[j].length - 1]
			if (!(last % nums[i] && nums[i] % last) && dp[j].length >= current.length) {
				current = dp[j].concat([nums[i]]);
				if (current.length > biggest.length) {
					biggest = current;
				}
			}
		}
		dp.push(current);
	}
	return biggest;
};

console.assert(JSON.stringify(largestDivisibleSubset([1, 2, 3, 4])) === JSON.stringify([1, 2, 4]), "works for a sorted example", largestDivisibleSubset([1, 2, 3, 4]));
console.assert(JSON.stringify(largestDivisibleSubset([1, 2, 3])) === JSON.stringify([1, 2]), "works for 1, 2, 2");
console.assert(JSON.stringify(largestDivisibleSubset([8, 2, 4, 1])) === JSON.stringify([1, 2, 4, 8]), "works for a non sorted example with powers of two");
console.assert(JSON.stringify(largestDivisibleSubset([])) === JSON.stringify([]), "works for an empty input");
