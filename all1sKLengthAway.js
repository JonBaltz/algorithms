// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

const kLengthApart = fucntion(nums, k) {
	let last1 = null;
	for (let i = 0; i < nums.length; i++) {
		if (!nums[i]) continue;
		if (last1 !== null && i - last1 - 1 < k) return false;
		last1 = i;
	}
	return true;
};
