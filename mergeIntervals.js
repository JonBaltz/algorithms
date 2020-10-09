// https://leetcode.com/problems/merge-intervals/

const merge = function(intervals) {
	if (!intervals.length) return [];
	intervals.sort((a, b) => a[0] - b[0]);
	let pointer = 0;
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] <= intervals[pointer][1]) {
			intervals[pointer][1] = Math.max(intervals[pointer][1], intervals[i][1]);
		} else {
			intervals[++pointer] = intervals[i];
		}
	}
	intervals.length = pointer + 1;
	return intervals;
};

console.log(merge([[1, 2]]));
console.log(merge([]));
console.log(merge([[1, 3], [2, 4], [5, 10], [15, 20]]));
