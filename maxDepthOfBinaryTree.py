# https://leetcode.com/problems/maximum-depth-of-binary-tree/

class TreeNode:
	def __init__(self, val = 0, left = None, right = None):
		self.val = val
		self.left = left
		self.right = right

class Solution:
	def maxDepth(self, root: TreeNode) -> int:
		if root == None: return 0
		depth = 1
		return depth + max(self.maxDepth(root.left), self.maxDepth(root.right))

test = Solution()
case1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

print(test.maxDepth(case1))
