// https://leetcode.com/problems/kth-missing-positive-number/

const findKthPositive = function(arr, k) {
	let i = 0;
	let tar = 0;
	while (k && ++tar) {
		if (arr[i] !== tar) {
			k--;
		} else i++;
	}
	return tar;
};

console.assert(findKthPositive([2, 3, 4, 7, 11], 5) === 9, "case 1");
console.assert(findKthPositive([1, 2, 3, 4], 2) === 6, "case 2");
