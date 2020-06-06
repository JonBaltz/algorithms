// https://leetcode.com/problems/house-robber/

const rob = function(nums) {
	if (!nums || !nums.length) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);
	let previous = current = temp = 0;
	for (let i = 0; i < nums.length; i++) {
		temp = previous;
		previous = current;
		current = Math.max(current, temp + nums[i]);
	}
	return current;
};

console.assert(rob([]) === 0, "works for a list of no numbers");
console.assert(rob([1]) === 1, "works for a single number");
console.assert(rob([1, 2]) === 2, "works for two numbers");
console.assert(rob([1, 2, 3, 1]) === 4, "picks the best houses");
console.assert(rob([2, 7, 9, 3, 1, 4]) === 15, "works for case where not every other number is best");
