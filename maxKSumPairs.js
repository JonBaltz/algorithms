// https://leetcode.com/problems/max-number-of-k-sum-pairs/

const maxOperations = function(nums, k) {
	const hash = new Map();
	let count = 0;
	for (const num of nums) {
		if (hash.has(num) && hash.get(num)) {
			count++;
			hash.set(num, hash.get(num) - 1);
		} else {
			if (hash.has(k - num)) {
				hash.set(k - num).set(k - num, hash.get(k - num) + 1);
			} else hash.set(k - num, 1);
		}
	}
	return count;
};

const t = maxOperations;
console.assert(t([1, 2, 3, 4], 5) === 2, "case 1");
console.assert(t([3, 1, 3, 4, 3], 6) === 1, "case 2");

