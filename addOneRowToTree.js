// https://leetcode.com/problems/add-one-row-to-tree/

const addOneRow = function(root, val, depth) {
	if (depth === 1) return new TreeNode(val, root);

	const recurse = function(node, currDepth) {
		if (!node) return;
		if (currDepth + 1 === depth) {
			node.left = new TreeNode(val, node.left);
			node.right = new TreeNode(val, null, node.right);
			return;
		};
		recurse(node.left, currDepth + 1);
		recurse(node.right, currDepth + 1);
	};
	recurse(root, 1);

	return root;
};

const TreeNode = function(val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
};
