// https://leetcode.com/problems/house-robber/

const rob = function(nums) {
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		let copy = nums.slice();
		if (!i) {
			copy.splice(0, 2);
		} else {
			copy.splice(i - 1, 3);
		}
		max = Math.max(rob(copy) + nums[i], max);
	}
	return max;
}

console.assert(rob([]) === 0, "works for a list of no numbers");
console.assert(rob([1]) === 1, "works for a single number");
console.assert(rob([1, 2]) === 2, "works for two numbers");
console.assert(rob([1, 2, 3, 1]) === 4, "picks the best houses");
console.assert(rob([2, 7, 9, 3, 1, 4]) === 15, "works for case where not every other number is best");
