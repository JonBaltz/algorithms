// https://leetcode.com/problems/minimum-cost-for-tickets/

/*
1 3456789
1234567 9

*/

const mincostTickets = function(days, costs) {
  const lastDay = days[days.length - 1];
  const memo = {};

  const dp = function(day) {
    if (!days.includes(day)) return day > lastDay ? 0 : dp(day + 1);

    if (!memo[day]) {
      memo[day] = Math.min(
        costs[0] + dp(day + 1),
        costs[1] + dp(day + 7),
        costs[2] + dp(day + 30),
      );
    }

    return memo[day];
  }


  return dp(1);
}

console.log(mincostTickets([1,4,6,7,8,20], [2, 7, 15]));
const large = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,24,25,27,28,29,30,31,34,37,38,39,41,43,44,45,47,48,49,54,57,60,62,63,66,69,70,72,74,76,78,80,81,82,83,84,85,88,89,91,93,94,97,99];
console.log(mincostTickets(large, [9, 38, 134]));

