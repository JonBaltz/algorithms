// https://leetcode.com/problems/find-the-duplicate-number/submissions/

const findDuplicate = function(nums) {
	tort = nums[0];
	hare = nums[0];
	while (true) {
		tort = nums[tort];
		hare = nums[nums[hare]];
		if (tort === hare) {
			tort = nums[0];
			while (true) {
				if (tort === hare) return tort;
				tort = nums[tort];
				hare = nums[hare];
			}
		}
	}
};

const test = findDuplicate;
console.assert(test([1, 2, 3, 4, 2]) === 2, "test 1");
console.assert(test([1, 3, 2, 2, 4]) === 2, "test 1.5");
console.assert(test([3, 1, 3, 4, 2]) === 3, "test 2");
