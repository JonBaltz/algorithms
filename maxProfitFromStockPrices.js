// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function(prices) {
	let greatest = 0;
	let lowest = prices[0];
	for (let i = 1; i < prices.length; i++) {
		lowest = Math.min(lowest, prices[i]);
		greatest = Math.max(greatest, prices[i] - lowest);
	}
	return greatest;
}

console.assert(maxProfit([7, 1, 5, 3, 4, 6]) === 5, "works for a single purchase and sell");
console.assert(maxProfit([7, 6, 5, 4, 3, 2, 1]) === 0, "works for no profit possible");
