# https://leetcode.com/problems/climbing-stairs/

class Solution:
	def climbStairs(self, n):
		arr = [1, 0]
		for i in range(n):
			arr[i + 1] += arr[i]
			arr.append(arr[i])
		return arr[n]

test = Solution()
print(test.climbStairs(2), " = 2")
print(test.climbStairs(3), " = 3")
