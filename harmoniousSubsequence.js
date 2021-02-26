// https://leetcode.com/problems/longest-harmonious-subsequence/

const findLHS = function(nums) {
	const counts = {};
	for (num of nums) {
		if (counts[num]) {
			counts[num]++;
		} else {
			counts[num] = 1;
		}
	}
	let maxLength = 0;
	const countArray = Object.entries(counts).sort((a, b) => a[0] - b[0]);
	for (let i = 1; i < countArray.length; i++) {
		if (countArray[i][0] - countArray[i - 1][0] !== 1) continue;
		maxLength = Math.max(maxLength, countArray[i - 1][1] + countArray[i][1]);
	}
	return maxLength;
};

console.assert(findLHS([1,3,2,2,5,2,3,7]) === 5, "case 1");
console.assert(findLHS([1,2,3,4]) === 2, "case 2");
console.assert(findLHS([1,1,1,1]) === 0, "case 3");
console.assert(findLHS([1]) === 0, "case 4");
