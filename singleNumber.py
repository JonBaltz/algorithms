# https://leetcode.com/problems/single-number/submissions/

class Solution:
	def singleNumber(self, nums) -> int:
		res = 0
		for i in nums:
			res ^= i
		return res

test = Solution()

print(test.singleNumber([4, 1, 2, 1, 2]), 4)
