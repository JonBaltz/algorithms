// https://leetcode.com/problems/binary-tree-level-order-traversal/

const levelOrder = function (root) {
	const res = [];
	const helper = function (root, depth) {
		if (!root) return;
		if (res[depth]) {
			res[depth].push(root.val);
		} else {
			res[depth] = [root.val];
		}
		if (root.left !== null) helper(root.left, depth + 1);
		if (root.right !== null) helper(root.right, depth + 1);
	};
	helper(root, 0);
	return res;
};

const TN = function (val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
};

const four = new TN(4);
const three = new TN(3);
console.log(levelOrder(three));
const two = new TN(2, null, four);
console.log(levelOrder(two));
const one = new TN(1, two, three);
console.log(levelOrder(one));
