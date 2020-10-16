# https://leetcode.com/problems/move-zeroes/

class Solution:
	def moveZeros(self, nums):
		dex = 0
		for i, val in enumerate(nums):
			if val != 0:
				nums[i] = 0
				nums[dex] = val
				dex += 1
		print(nums)

test = Solution()

test.moveZeros([0, 1, 0, 3, 0, 0, 10])
