// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = function(root, k) {
	const toSortedArray = function(root) {
		const arr = [];
		if (!root) return arr;
		arr.push(...toSortedArray(root.left));
		arr.push(root.val);
		arr.push(...toSortedArray(root.right));
		return arr;
	};
	return toSortedArray(root)[k];
};
