# https://leetcode.com/problems/two-sum/

class Solution:
	def twoSum(self, nums, target):
		hash = {}
		for i, num in enumerate(nums):
			if num in hash:
				return [hash[num], i]
			else:
				hash[target - num] = i

test = Solution()
print(test.twoSum([2, 7, 11, 20], 9))
