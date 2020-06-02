// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

const findUnsortedSubarray = function(nums) {
	if (nums.length < 2) return 0;
	let low, high, storage = nums[0];
	for (let i = 0; i < nums.length - 1; i++) {
		storage = Math.max(storage, nums[i]);
		if (nums[i + 1] < storage) {
			high = i + 1;
		}
	}
	storage = nums[nums.length - 1];
	for (let i = nums.length - 1; i > 0; i--) {
		storage = Math.min(storage, nums[i]);
		if (nums[i - 1] > storage) {
			low = i - 1;
		}
	}
	return high ? 1 + high - low : 0;
}

console.assert(findUnsortedSubarray([1, 2, 3, 4, 5]) === 0, "nothing to sort in a sorted array");
console.assert(findUnsortedSubarray([1]) === 0, "won't need to sort a single item");
console.assert(findUnsortedSubarray([1, 4, 3, 2, 5]) === 3, "sorts the middle three");
console.assert(findUnsortedSubarray([2, 10, 4, 8, 6, 1, 9, 15]) === 7, "works for a complex example", findUnsortedSubarray([2, 10, 4, 8, 6, 1, 9, 15]));
console.assert(findUnsortedSubarray([2, 1]) === 2, "works for a two element array thet fully needs to sort");
console.assert(findUnsortedSubarray([4, 3, 2, 1]) === 4, "works for reversed array");
