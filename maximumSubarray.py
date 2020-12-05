# https://leetcode.com/problems/maximum-subarray/

class Solution:
	def maxSubArray(self, nums):
		largest  = nums[0]
		current = nums[0]
		for number in nums[1:]:
			current = max(current + number, number)
			largest = max(largest, current)
		return largest

test = Solution()
print(test.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(test.maxSubArray([1]))
