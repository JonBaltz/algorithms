// https://leetcode.com/problems/find-the-most-competitive-subsequence/

const mostCompetitive = function(nums, k) {
	const sub = [];
	let start = 0;
	while (k--) {
		let min = start;
		for (let i = start + 1; i < nums.length - k; i++) {
			if (nums[i] < nums[min]) min = i;
		}
		sub.push(nums[min]);
		start = min + 1;
	}
	return sub;
};

const t = mostCompetitive;
console.assert(JSON.stringify(t([2, 3, 6, 7, 1, 5, 4, 9, 10000], 1)) === JSON.stringify([1]), "case 1");
console.assert(JSON.stringify(t([3, 5, 2, 6], 2)) === JSON.stringify([2, 6]), "case 2");
console.assert(JSON.stringify(t([2, 4, 3, 3, 5, 4, 9, 6], 4)) === JSON.stringify([2, 3, 3, 4]), "case 3");
console.assert(JSON.stringify(t([1], 1)) === JSON.stringify([1]), "case 4");

