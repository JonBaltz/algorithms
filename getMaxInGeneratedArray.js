// https://leetcode.com/problems/get-maximum-in-generated-array/

const getMaximumGenerated = function(n) {
	if (n <= 1) return n;
	const nums = [0, 1];
	for (let i = 1; i <= n / 2; i++) {
		nums[2 * i] = nums[i];
		nums[2 * i + 1] = nums[i] + nums[i + 1];
	}
	if (n % 2 === 0) nums.pop();
	return nums.reduce((a, c) => Math.max(a, c));
};

const t = getMaximumGenerated;
console.assert(t(7) === 3, "1");
console.assert(t(2) === 1, "2");
console.assert(t(3) === 2, "2");

