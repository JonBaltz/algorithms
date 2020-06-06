// https://leetcode.com/problems/single-number/

const singleNumber = function(nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result ^= nums[i];
	}
	return result;
};

const test1 = [1, 2, 3, 3, 2];
const test2 = [2, 3, 4, 5, 6, 4, 3, 2, 1, 5, 1];
console.assert(singleNumber(test1) === 1, "works for test-case 1");
console.assert(singleNumber(test2) === 6, "works for test-case 2");
