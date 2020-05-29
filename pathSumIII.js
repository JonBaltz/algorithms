// https://leetcode.com/problems/path-sum-iii/

const pathSum = function(root, sum) {
	const helper = function(node, lineage) {
		if (!node) return 0;
		let count = 0;
		let currentSum = node.val;
		for (let i = lineage.length - 1; i >= -1; i--) {
			if (currentSum === sum) {
				count++;
			}
			currentSum += lineage[i];
		}
		lineage.push(node.val);
		count += helper(node.left, lineage);
		count += helper(node.right, lineage);
		lineage.pop();
		return count;
	}
	return helper(root, []);
}

const TreeNode = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const test = new TreeNode(10);
const l = new TreeNode(5);
const r = new TreeNode(-3);
const ll = new TreeNode(3);
const lr = new TreeNode(2);
const rr = new TreeNode(11);
const lll = new TreeNode(3);
const llr = new TreeNode(-2);
const lrr = new TreeNode(1);
test.left = l;
test.right = r;
l.left = ll;
l.right = lr;
r.right = rr;
ll.left = lll;
ll.right = llr;
lr.right = lrr;

console.assert(pathSum(test, 8) === 3, "works for a complex balanced tree", pathSum(test, 8));
console.assert(pathSum(test, 9) === 0, "handles a case with no sums");

const test2 = new TreeNode(2);
test2.left = new TreeNode(-2);
test2.left.left = new TreeNode(5);
test2.left.left.right = new TreeNode(1);
test2.left.left.right.right = new TreeNode(-1);

console.assert(pathSum(test2, 5) === 4, "works for a single line, with a single item equal to the target, and multiple sums through the same item");

const test3 = new TreeNode(3);
test3.left = new TreeNode(0);
test3.right = new TreeNode(0);

console.assert(pathSum(test3, 3) === 3, "works with root equal to sum, and root as part of solutions");
