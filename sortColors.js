// https://leetcode.com/problems/sort-colors/

const sortColors = function(nums) {
	const c = {"0": 0, "1": 0, "2": 0};
	for (let i = 0; i < nums.length; i++) {
		c[nums[i]]++;
	}
	for (let i = 0; i < nums.length; i++) {
		if (c["0"]) {
			nums[i] = 0;
			c["0"]--;
		} else if (c["1"]) {
			nums[i] = 1;
			c["1"]--;
		} else {
			nums[i] = 2;
		}
	}
	return nums;
};

console.assert(JSON.stringify(sortColors([1, 2, 1, 0, 0, 2, 1])) === JSON.stringify([0, 0, 1, 1, 1, 2, 2]), "works for normal example");
console.assert(JSON.stringify(sortColors([0, 0, 0, 0])) === JSON.stringify([0, 0, 0, 0]), "works for all 0s");
console.assert(JSON.stringify(sortColors([2, 2, 2, 2])) === JSON.stringify([2, 2, 2, 2]), "works for all 2s");
