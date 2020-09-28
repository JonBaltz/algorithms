// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = function (nums, k) {
	const arr = [...nums].sort((a, b) => a - b);
	return arr[nums.length - k];
};

const test = findKthLargest;
console.assert(test([3, 2, 1, 5, 6, 4], 2) === 5, "case 1");
