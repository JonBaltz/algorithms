// https://leetcode.com/problems/maximum-depth-of-binary-tree/


const maxDepth = function(root) {
	return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
}

const TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.rigth = null;
}

console.assert(maxDepth(null) === 0, "works for a null node");
const test = new TreeNode(1);
console.assert(maxDepth(test) === 1, "works for a tree with a single node");
test.left = new TreeNode(2);
test.right = new TreeNode(3);
console.assert(maxDepth(test) === 2, "works for tree of depth 2");
test.left.left = new TreeNode(4);
test.left.right = new TreeNode(5);
console.assert(maxDepth(test) === 3, "works for tree of depth three");
test.left.right.left = new TreeNode(6);
test.left.right.left.right = new TreeNode(7);
console.assert(maxDepth(test) === 5, "works for a zig-zag depth");
