// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

const getTargetCopy = function(original, cloned, target) {
	if (!original) return null;
	if (original.val === target.val) return cloned;
	const left = getTargetCopy(original.left, cloned.left, target);
	return left ? left : getTargetCopy(original.right, cloned.right, target);
};

const TreeNode = function(val = 0) {
	this.val = val;
	this.left = theis.right = null;
};
