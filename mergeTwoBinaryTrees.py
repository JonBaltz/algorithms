# https://leetcode.com/problems/merge-two-binary-trees/

class TreeNode:
	def __init__(self, val = 0, left = None, right = None):
		self.val = val
		self.left = left
		self.right = right

class Solution:
	def mergeTrees(self, t1:TreeNode, t2: TreeNode) -> TreeNode:
		if t1 == None and t2 == None: return None
		if t1 == None or t2 == None: return t1 or t2
		t1.val += t2.val
		t1.left = self.mergeTrees(t1.left, t2.left);
		t1.right = self.mergeTrees(t1.right, t2.right);
		return t1

test1 = TreeNode(1, TreeNode(3, TreeNode(5)), TreeNode(2))
test2 = TreeNode(2, TreeNode(1, None, TreeNode(4)), TreeNode(3, None, TreeNode(7)))
print(test1)
print(test2)

sol = Solution()
answer = sol.mergeTrees(test1, test2)
print(answer.val, answer.left.val, answer.right.val, answer.left.left.val, answer.left.right.val, answer.right.left, answer.right.right.val)
