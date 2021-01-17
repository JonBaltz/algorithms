// https://leetcode.com/problems/running-sum-of-1d-array/submissions/

const runningSum = function(nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};

const t = runningSum;
const s = JSON.stringify;
console.assert(s(t([1, 2, 3, 4])) === s([1, 3, 6, 10]), "case 1");
console.assert(s(t([1, 1, 1, 1, 1])) === s([1, 2, 3, 4, 5]), "case 2");
console.assert(s(t([3, 1, 2, 10, 1])) === s([3, 4, 6, 16, 17]), "case 3");

