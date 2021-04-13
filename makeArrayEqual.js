// https://leetcode.com/problems/minimum-operations-to-make-array-equal/

const minOperations = function(n) {
	return Math.ceil((n - 1) / 2) * Math.ceil(n / 2);
};
