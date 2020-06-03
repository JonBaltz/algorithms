// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

const findUnsortedSubarray = function(nums) {
	if (nums.length < 2) return 0;
	let low, high;
	let fo = 0;
	let ba = nums.length - 1;
	let foSto = nums[fo];
	let baSto = nums[ba];
	while (fo < nums.length - 1) {
		foSto = Math.max(foSto, nums[fo]);
		baSto = Math.min(baSto, nums[ba]);
		if (nums[++fo] < foSto) {
			high = fo;
		}
		if (nums[--ba] > baSto) {
			low = ba;
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
