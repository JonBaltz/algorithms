// https://leetcode.com/problems/largest-time-for-given-digits/

const largestTimeFromDigits = function(digits) {
	const clocks = [];
	const createClocks = function(digits, current = "") {
		if (!digits.length) {
			clocks.push(current);
			return;
		}
		for (let i = 0; i < digits.length; i++) {
			createClocks([...digits.slice(0, i), ...digits.slice(i + 1)], current + digits[i]);
		}
	};
	createClocks(digits);
	clocks.sort((a, b) => b - a);
	for (let i = 0; i < clocks.length; i++) {
		let f = clocks[i].substring(0, 2);
		let s = clocks[i].substring(2, 4);
		if (f <= 23 && s <= 59) {
			return f + ":" + s;
		}
	}
	return "";
};

console.log(largestTimeFromDigits([9, 5, 3, 2]));
console.log(largestTimeFromDigits([5, 5, 5, 5]) == "");
console.log(largestTimeFromDigits([2, 0, 6, 6]));
