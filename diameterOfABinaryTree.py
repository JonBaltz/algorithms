# https://leetcode.com/problems/diameter-of-binary-tree/

class TreeNode:
	def __init__(self, val = 0, left = None, right = None):
		self.val = val
		self.left = left
		self.right = right

class Solution:
	def diameterOfBinaryTree(self, root: TreeNode) -> int:
		self.res = 1
		self.recurse(root)
		return self.res - 1

	def recurse(self, node):
		if not node: return 0
		left = self.recurse(node.left)
		right = self.recurse(node.right)
		self.res = max(self.res, left + right + 1)
		return 1 + max(left, right)

test = Solution()
print(test.diameterOfBinaryTree(TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))))
