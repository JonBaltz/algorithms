// https://leetcode.com/problems/number-of-good-pairs/

const numIdenticalPairs = function(nums) {
	const counts = {};
	let res = 0;
	for (const num of nums) {
		if (counts[num]) {
			res += counts[num]++;
		} else counts[num] = 1;
	}
	return res;
};

const t = numIdenticalPairs;
console.log(t([1, 2, 3, 1, 1, 3]));
console.log(t([1, 1, 1, 1]));
console.log(t([1, 2, 3]));

