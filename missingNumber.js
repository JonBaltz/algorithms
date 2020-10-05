// https://leetcode.com/problems/missing-number/

const missingNumber = function(nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += i + 1
		sum -= nums[i];
	}
	return sum;
};

const t = missingNumber;
console.assert(t([0, 1]) === 2, "case 1");
console.assert(t([4, 0, 1, 2]) === 3, "case 2");
