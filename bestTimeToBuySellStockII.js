// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

const maxProfit = function(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];

    if (diff > 0) profit += diff;
  }

  return profit;
};

const testCases = [
  [[7, 1, 5, 3, 6, 4], 7],
  [[1, 2, 3, 4, 5], 4],
  [[7, 6, 4, 3, 1], 0],
];

testCases.forEach(([input, expected]) => {
  console.log(maxProfit(input), expected);
});
