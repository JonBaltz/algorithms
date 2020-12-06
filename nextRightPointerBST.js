// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

const findClosest = function(node) {
	if (!node) return null;
	if (node.left) return node.left;
	if (node.right) return node.right;
	return findClosest(node.next);
};

const connect = function(node) {
		if (!node) return node;
		if (node.next) {
			if (node.left) node.left.next = node.right ? node.right : findClosest(node.next);
			if (node.right) node.right.next = findClosest(node.next);
		} else {
			if (node.left) node.left.next = node.right;
		}
		if (node.right) connect(node.right);
		if (node.left) connect(node.left);
	return node;
};

const TreeNode = function(val = 0, left = null, right = null, next = null) {
	this.val = val;
	this.left = left;
	this.right = right;
	this.next = next;
};

const eight = new TreeNode(8);
const seven = new TreeNode(7);
const six = new TreeNode(6, eight);
const five = new TreeNode(5);
const four = new TreeNode(4, seven);
const three = new TreeNode(3, null, six);
const two = new TreeNode(2, four, five);
const one = new TreeNode(1, two, three);

console.log(connect(one));
