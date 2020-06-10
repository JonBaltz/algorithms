// https://leetcode.com/problems/search-insert-position/

const searchInsert = function(nums, target) {
	if (target < nums[0]) return 0;
	if (target > nums[nums.length - 1]) return nums.length;
	let start = 0;
	let end = nums.length - 1;
	let mid;
	while (start <= end) {
		mid = Math.floor((end - start) / 2) + start;
		if (nums[mid] === target) return mid;
		if (nums[mid] > target) {
			end = mid - 1;
		} else {
			start = ++mid;
		}
	}
	return mid;
};

console.assert(searchInsert([1, 2, 3, 4], 3) === 2, "finds an item that is inside");
console.assert(searchInsert([1, 2, 3, 4], 5) === 4, "will know to add the item to the end");
console.assert(searchInsert([1, 2, 3, 4], 0) === 0, "will know to add an item to the beginning");
console.assert(searchInsert([1, 3, 5, 7], 4) === 2, "able to insert a 4 into the middle");
console.assert(searchInsert([1, 3, 5, 7], 2) === 1, "able to insert a 2 in the middle");
