// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

const minOperations = function(nums, x) {
	const sum = nums.reduce((a, c) => a + c);
	if (sum < x) return -1;
	if (sum === x) return nums.length;

	let inverse = sum - x;
	let maxLength = 0;

	let lowP = 0;
	let highP = 1;
	inverse -= nums[lowP] + nums[highP];

	while (highP < nums.length) {
		if (!inverse) {
			maxLength = Math.max(maxLength, 1 + highP - lowP);
			inverse -= nums[++highP];
		} else if (inverse >= 1 || highP === lowP) {
			inverse -= nums[++highP];
		} else {
			inverse += nums[lowP++];
		}
	}

	return maxLength ? nums.length - maxLength : -1;
};

const t = minOperations;
console.assert(t([1, 1, 4, 2, 3], 5) === 2, "1");
console.assert(t([5, 6, 7, 8, 9], 4) === -1, "2");
console.assert(t([3, 2, 20, 1, 1, 3], 10) === 5, "3");

