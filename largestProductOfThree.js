const largestProductOfThree = function(numbers) {
	const sorted = [...numbers].sort((a, b) => a - b);
	const length = sorted.length;
	return Math.max(sorted[0] * sorted[1] * sorted[length - 1], sorted[length - 1] * sorted[length - 2] * sorted[length - 3]);
};

console.assert(largestProductOfThree([1, 2, 3]) === 6, "works for a sorted 3 length array");
console.assert(largestProductOfThree([2, 1, 3, 7]) === 42, "works for an unsorted array");
console.assert(largestProductOfThree([0, 5, 1000000]) === 0, "a 3 length array with 0 is 0");
console.assert(largestProductOfThree([2, 3, -11, 7, 5, -13]) === 1001, "works when there are two large negative numbers");
console.assert(largestProductOfThree([-100, 1, 2, 3]) === 6, "works with a single negative number");
console.assert(largestProductOfThree([-1, -2, -3, -4, -5, -6]) === -6, "works with all negative numbers");
