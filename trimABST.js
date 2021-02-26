// https://leetcode.com/problems/trim-a-binary-search-tree/

const trimBST = function (root, low, high) {
	const soil = new TreeNode("soil", root);
	const recurse = function (node) {
		node.left && recurse(node.left);
		if (node.left && node.left.val < low) {
			node.left = node.left.right;
		}
		if (node.left && node.left.val > high) {
			node.left = node.left.left;
		}
		node.right && recurse(node.right);
		if (node.right && node.right.val > high) {
			node.right = node.right.left;
		}
		if (node.right && node.right.val < low) {
			node.right = node.right.right;
		}
	};
	recurse(soil);
	return soil.left;
};

const TreeNode = function (val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
}

const r = new TreeNode(3, new TreeNode(0, null, new TreeNode(2, new TreeNode(1))), new TreeNode(4));
console.log(trimBST(r, 1, 3));
