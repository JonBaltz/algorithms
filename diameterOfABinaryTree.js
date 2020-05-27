// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = function(root) {
	if (!root) return 0;
	const helper = function(node) {
		let left = node.left ? helper(node.left) : 0;
		let right = node.right ? helper(node.right) : 0;
		if (left + right > longest) longest = left + right;
		return left > right ? left + 1 : right + 1;
	}
	let longest = 0;
	helper(root);
	return longest;
}

const TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const test = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
console.assert(diameterOfBinaryTree(test) === 0, "works for a single node");
test.left = two;
test.right = three;
console.assert(diameterOfBinaryTree(test) === 2, "works for a tree of depth two");
two.left = four;
two.right = five;
console.assert(diameterOfBinaryTree(test) === 3, "works");
