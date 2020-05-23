// https://leetcode.com/problems/invert-binary-tree/

const invertTree = function(root) {
	//
}

const TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const tree = new TreeNode(1);
const invertedTree = new Treenode(1);
console.assert(JSON.stringify(invertTree(tree)) === JSON.stringify(invertedTree), "doesn't change a single node");
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
invertedTree.left = new TreeNode(3);
invertedTree.right = new TreeNode(2);
console.assert(JSON.stringify(invertTree(tree)) === JSON.Stringify(invertedTree), "inverts a tree");

