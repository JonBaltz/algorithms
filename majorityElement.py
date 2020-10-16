# https://leetcode.com/problems/majority-element/

import math

class Solution:
	def majorityElement(self, nums) -> int:
		nums.sort()
		return nums[math.floor(len(nums) / 2)]

test = Solution()

print(test.majorityElement([3, 2, 1, 3, 3]))
