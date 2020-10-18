# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

class Solution:
	def findDisappearedNumbers(self, nums):
		res = []
		for x in nums:
			nums[abs(x) - 1] *= -1 if nums[abs(x) - 1] > 0 else 1
		for i, x in enumerate(nums):
			if x > 0:
				res.append(i + 1)
		return res

test = Solution()
print(test.findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
