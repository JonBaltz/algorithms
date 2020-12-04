const increasingBST = function(root) {
	if (!root) return null;
	root.right = increasingBST(root.right);
	if (!root.left) return root;
	const left = increasingBST(root.left);
	root.left = null;
	let pointer = left;
	while (pointer.right) {
		pointer = pointer.right;
	}
	pointer.right = root;
	return left;
};

const TreeNode = function(val = 0, left = null, right = null) {
	this.val = val;
	this.left = left;
	this.right = right;
};

const one = new TreeNode(1);
const seven = new TreeNode(7);
const five = new TreeNode(5, one, seven);

console.log(five, increasingBST(five));
