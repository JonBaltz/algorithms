// https://leetcode.com/problems/binary-tree-inorder-traversal/

const inorderTraversal = function(root) {
	let res = [];
	if (!root) return res;
	if (root.left) res = res.concat(inorderTraversal(root.left));
	res.push(root.val);
	if (root.right) res = res.concat(inorderTraversal(root.right));
	return res;
};

const TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
};

const test = new TreeNode(1);
console.assert(JSON.stringify(inorderTraversal(test)) === JSON.stringify([1]), "works for leaf nodes");
const l = new TreeNode(2);
const r = new TreeNode(3);
test.left = l;
test.right = r;
console.assert(JSON.stringify(inorderTraversal(test)) === JSON.stringify([2, 1, 3]), "works for a root with two children");
const ll = new TreeNode(4);
l.left = ll;
console.assert(JSON.stringify(inorderTraversal(test)) === JSON.stringify([4, 2, 1, 3]), "works with an unbalanced branch");
console.assert(JSON.stringify(inorderTraversal(null)) === JSON.stringify([]), "works for no input");
