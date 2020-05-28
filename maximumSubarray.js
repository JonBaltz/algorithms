// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = function(nums) {
	let max = nums[0];
	let curr = nums[0];
	for (let i = 1; i < nums.length; i++) {
		curr = Math.max(curr + nums[i], nums[i]);
		max = Math.max(max, curr);
	}
	return max;
}

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "works");
console.assert(maxSubArray([-5, -4, -3, -2, -1]) === -1, "works for all negative");
