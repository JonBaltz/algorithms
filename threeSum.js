// https://leetcode.com/problems/3sum/

const threeSum = function(nums) {
	const res = [];
	nums.sort((a, b) => a - b);
	let sum, top, bot;
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] === nums[i - 1]) continue;

		top = nums.length - 1;
		bot = i + 1;

		while (top > bot) {
			if (nums[top] === nums[top + 1]) {
				top--;
				continue;
			}
			sum = nums[i] + nums[bot] + nums[top];
			if (sum === 0) {
				res.push([nums[i], nums[bot++], nums[top--]]);
			} else if (sum > 0) {
				top--;
			} else {
				bot++;
			}
		}
	}
	return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, 4]));
console.log(threeSum([0, 0, 0, 0, 0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
