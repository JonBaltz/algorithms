// https://leetcode.com/problems/remove-covered-intervals/

const removeCoveredIntervals = function(intervals) {
	let count = 0;
	let inside;
	for (let i = 0; i < intervals.length; i++) {
		inside = false;
		for (let j = 0; j < intervals.length; j++) {
			if (i === j) continue;
			if (intervals[j][0] <= intervals[i][0] && intervals[i][1] <= intervals[j][1]) {
				inside = true;
				break;
			}
		}
		if (!inside) count++;
	}
	return count;
};

console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]));
