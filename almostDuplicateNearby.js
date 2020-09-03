// https://leetcode.com/problems/contains-duplicate-iii/

const containsNearbyAlmostDuplicate = function(nums, distanceMax, differenceMax) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j <= i + distanceMax; j++) {
			if (Math.abs(nums[i] - nums[j]) <= differenceMax) {
				return true;
			}
		}
	}
	return false;
};

const test = containsNearbyAlmostDuplicate;
console.assert(test([1, 2, 3, 1], 3, 0) === true, "test case 1");
console.assert(test([1, 0, 1, 1], 1, 2) === true, "test case 2");
console.assert(test([1, 5, 9, 1, 5, 9], 2, 3) === false, "test case 3");
console.assert(test([3, 6, 0, 4], 2, 2) === true, "test case 4");
