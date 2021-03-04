#

class Solution:
    def missingNumber(self, nums: [int]) -> int:
        res = 0
        for num in range(1 + len(nums)):
            res ^= num
        for num in nums:
            res ^= num
        return res;

test = Solution()
print(test.missingNumber([3, 0, 1]))
print(test.missingNumber([0, 1]))
print(test.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
