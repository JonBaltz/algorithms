// https://leetcode.com/problems/average-of-levels-in-binary-tree/

const averageOfLevels = function(root) {
	const resArray = [];
	const recurse = function(node, level) {
		if (node === null) return;
		if (resArray[level]) {
			resArray[level][0] += node.val;
			resArray[level][1]++;
		} else {
			resArray[level] = [node.val, 1];
		}
		recurse(node.left, level + 1);
		recurse(node.right, level + 1);
	};
	recurse(root, 0);
	return resArray.map(a => a[0] / a[1]);
};

const TreeNode = function(val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
};

const t = averageOfLevels;
console.log(t(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));

