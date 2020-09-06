//

const getAllElements = function(root1, root2) {
	const getSorted = function(root) {
		if (!root) return [];
		const array = [];
		array.push(...getSorted(root.left));
		array.push(root.val);
		array.push(...getSorted(root.right));
		return array;
	};
	const one = getSorted(root1);
	const two = getSorted(root2);
	const result = [];
	let oi = 0;
	let ti = 0;
	while (oi < one.length || ti < two.length) {
		if (one[oi] !== undefined && (two[ti] === undefined || one[oi] < two[ti])) {
			result.push(one[oi++]);
		} else {
			result.push(two[ti++]);
		}
	}
	return result;
};

const TreeNode = function(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
};

const node = new TreeNode(5);
node.left = new TreeNode(2);
const node2 = new TreeNode(7);
node2.left = new TreeNode(3);
node2.right = new TreeNode(10);
console.assert(JSON.stringify(getAllElements(node, node2)) === JSON.stringify([2, 3, 5, 7, 10]), "works");
