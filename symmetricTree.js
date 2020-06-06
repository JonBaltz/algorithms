// https://leetcode.com/problems/symmetric-tree/

const isSymmetric = function(root) {
	const helper = function(left, right) {
		if (!left || !right) {
			return left === right;
		}
		if (helper(left.left, right.right) && helper(left.right, right.left) && left.val === right.val) {
			return true;
		} else {
			return false;
		}
	}
	if (!root || helper(root.left, root.right)) {
		return true;
	} else {
		return false;
	}
};

const TreeNode = function(val) {
	this.val = val;
	this.left = this.right = null;
};

console.assert(isSymmetric(null) === true, "an empty tree is symmetric");
const test = new TreeNode(1);
console.assert(isSymmetric(test) === true, "a single item is symmetric");
test.left = new TreeNode(2);
console.assert(isSymmetric(test) === false, "finds a tree when length isn't balanced");
test.right = new TreeNode(2);
console.assert(isSymmetric(test) === true, "finds a multi depth tree symmetric");
test.left.right = new TreeNode(3);
test.right.left = new TreeNode(3);
console.assert(isSymmetric(test) === true, "finds symmetric even if tree isn't fully filled");
test.left.left = new TreeNode(4);
test.right.right = new TreeNode(4);
console.assert(isSymmetric(test) === true, "finds a multi depth tree symmetric");
test.left.left.left = new TreeNode(5);
test.right.right.right = new TreeNode(6);
console.assert(isSymmetric(test) === false, "works for a difference in value");
