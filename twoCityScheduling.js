// https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3349/

const twoCitySchedCost = function(costs) {
	let lean = 0;
	let cost = 0;
	costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
	for (let i = 0; i < costs.length; i++) {
		if (Math.abs(lean) === costs.length - i) {
			if (lean > 0) {
				cost += costs[i][0];
				lean--;
			} else {
				cost += costs[i][1];
				lean++;
			}
		} else {
			if (costs[i][0] < costs[i][1]) {
				cost += costs[i][0];
				lean--;
			} else {
				cost += costs[i][1];
				lean++;
			}
		}
	}
	return cost;
}

console.assert(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]) === 110, "works for a standard example");
console.assert(twoCitySchedCost([[50, 100], [20, 75]]) === 120, "works for two people", twoCitySchedCost([[50, 100], [20, 75]]));
