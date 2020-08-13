// https://leetcode.com/problems/top-k-frequent-elements/submissions/

const topKFrequent = function(nums, k) {
	const count = {};
	for (let item of nums) {
		count[item] = 1 + count[item] || 0;
	}
	const entries = Object.entries(count);
	entries.sort((a, b) => a[1] - b[1]);
	const result = [];
	for (let i = 0; i < k; i++) {
		result.push(entries.pop()[0]);
	}
	return result;
};
