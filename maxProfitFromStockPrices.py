# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

class Solution:
	def maxProfit(self, prices):
		profit = 0
		small = prices[0] if len(prices) else 0
		for p in prices:
			small = min(small, p)
			profit = max(profit, p - small)
		return profit

test = Solution()
print(test.maxProfit([7, 1, 5, 3, 6, 4]))
