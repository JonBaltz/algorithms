# https://leetcode.com/problems/invert-binary-tree/

class TreeNode:
	def __init__(self, val = 0, left = None, right = None):
		self.val = val
		self.left = left
		self.right = right

class Solution:
	def invertTree(self, root: TreeNode) -> TreeNode:
		if root != None:
			temp = root.left
			root.left = self.invertTree(root.right)
			root.right = self.invertTree(temp)
		return root

test = Solution()
case1 = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7, TreeNode(6), TreeNode(9)))
result1 = test.invertTree(case1)

print(result1.val, result1.left.val, result1.left.left.val, result1.left.right.val, result1.right.val, result1.right.left.val, result1.right.right.val)
