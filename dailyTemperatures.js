// https://leetcode.com/problems/daily-temperatures/

const dailyTemperatures = function(temps) {
	const nexts = {}
	nexts[temps[temps.length - 1]] = temps.length - 1;
	const result = [];
	result[temps.length - 1] = 0;
	for (let i = temps.length - 2; i >= 0; i--) {
		let next;
		for (let j = temps[i] + 1; j <= 100; j++) {
			if (nexts[j] && (!next || nexts[j] < next)) {
				next = nexts[j];
			}
		}
		result[i] = next ? next - i : 0;
		nexts[temps[i]] = i;
	}
	return result;
};

console.assert(JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) === JSON.stringify([1, 1, 4, 2, 1, 1, 0, 0]), "works for a complex example");
console.assert(JSON.stringify(dailyTemperatures([70, 71, 72, 73, 74])) === JSON.stringify([1, 1, 1, 1, 0]), "works for possitive slope numbers");
console.assert(JSON.stringify(dailyTemperatures([73, 72, 71])) === JSON.stringify([0, 0, 0]), "works for negative slope numbers");
console.assert(JSON.stringify(dailyTemperatures([40, 40, 40])) === JSON.stringify([0, 0, 0]), "handles the same number in a row");
console.assert(JSON.stringify(dailyTemperatures([89,62,70,58,47,47,46,76,100,70])) === JSON.stringify(
[8,1,5,4,3,2,1,1,0,0]), "handles one number appearing twice");
