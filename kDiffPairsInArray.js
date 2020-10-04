// https://leetcode.com/problems/k-diff-pairs-in-an-array/

const findPairs = function(nums, k) {
	let count = 0;
	const sto = {};
	const sorted = [...nums].sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (sto[sorted[i]]) {
			count++;
			sto[sorted[i]] = false;
		}
		if (sto[sorted[i] + k] === undefined) sto[sorted[i] + k] = true;
	}
	return count;
};
