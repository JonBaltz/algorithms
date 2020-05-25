// https://leetcode.com/problems/majority-element/

const majorityElement = function(nums) {
	let element = nums[0];
	let count = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === element) {
			count++;
		} else if (--count === 0) {
			element = nums[i];
			count++;
		}
	}
	return element;
}

console.assert(majorityElement([1]) === 1, "works for a single item");
console.assert(majorityElement([3, 2, 3]) === 3, "works for size 3 array");
console.assert(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2, "works for size 7 array", majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.assert(majorityElement([1, 2, 2, 2, 2, 3, 4]) === 2, "works for array with only one repeated item");
