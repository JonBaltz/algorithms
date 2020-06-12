// https://leetcode.com/problems/sort-colors/

const sortColors = function(nums) {
	let s = 0;
	let e = nums.length - 1;
	while (nums[s] === 0) {
		s++;
	}
	let i = s;
	while (i <= e) {
		if (nums[i] === 0) {
			nums[i++] = nums[s];
			nums[s++] = 0;
		} else if (nums[i] === 2) {
			nums[i] = nums[e];
			nums[e--] = 2;
		} else {
			i++;
		}
	}
	return nums;
};

console.assert(JSON.stringify(sortColors([1, 2, 1, 0, 0, 2, 1])) === JSON.stringify([0, 0, 1, 1, 1, 2, 2]), "works for normal example");
console.assert(JSON.stringify(sortColors([2, 0, 2, 1, 1, 0])) == JSON.stringify([0, 0, 1, 1, 2, 2]), "works for leetcode example");
console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.assert(JSON.stringify(sortColors([0, 0, 0, 0])) === JSON.stringify([0, 0, 0, 0]), "works for all 0s");
console.assert(JSON.stringify(sortColors([2, 2, 2, 2])) === JSON.stringify([2, 2, 2, 2]), "works for all 2s");
