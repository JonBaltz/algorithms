// https://leetcode.com/problems/merge-sorted-array/

const merge = function(nums1, m, nums2, n) {
	let dex = m + n;
	while (n) {
		if (!m || nums2[n - 1] >= nums1[m - 1]) {
			nums1[--dex] = nums2[--n];
		} else nums1[--dex] = nums1[--m];
	}
	return nums1;
};

console.assert(JSON.stringify(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) === JSON.stringify([1, 2, 2, 3, 5, 6]), "case 1");
console.assert(JSON.stringify(merge([2, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)) === JSON.stringify([1, 2, 2, 3, 5, 6]), "case 2");
console.assert(JSON.stringify(merge([1], 1, [], 0)) === JSON.stringify([1]), "case 3");
console.assert(JSON.stringify(merge([0], 0, [1], 1)) === JSON.stringify([1]), "case 4");

