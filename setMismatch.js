// https://leetcode.com/problems/set-mismatch/

const findErrorNums = function(nums) {
	nums.sort((a, b) => a - b);
	const res1 = [];
	const res2 = [];
	let i, j;
	for (i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			res1[0] = nums[i];
			res2[1] = i + 1;
			break;
		}
	}
	for (j = nums.length - 1; j >= 0; j--) {
		if (nums[j] !== j + 1) {
			res1[1] = j + 1;
			res2[0] = nums[j];
			break;
		}
	}
	return i === nums[i] ? res1 : res2;
};

const t = findErrorNums;
console.assert(JSON.stringify(t([1, 2, 2, 4])) === JSON.stringify([2, 3]));
console.assert(JSON.stringify(t([1, 1])) === JSON.stringify([1, 2]));
console.assert(JSON.stringify(t([2, 2])) === JSON.stringify([2, 1]));
console.assert(JSON.stringify(t([3, 2, 3, 4, 6, 5])) === JSON.stringify([3, 1]));
console.assert(JSON.stringify(t([1,5,3,2,2,7,6,4,8,9])) === JSON.stringify([2, 10]));

