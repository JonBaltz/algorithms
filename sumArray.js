const sumArray = function (array) {
	let carryOver = (greatest = array[0]);
	for (let i = 1; i < array.length; i++) {
		carryOver = Math.max(carryOver, 0) + array[i];
		greatest = Math.max(carryOver, greatest);
	}
	return greatest;
};

console.assert(sumArray([1, 2, 3]) === 6, "works for entire array");
console.assert(sumArray([1, 2, 3, -4]) === 6, "only adds values that raise the sum");
console.assert(sumArray([1, 2, 3, -4, 5]) === 7, "can include negatives if both sides are greater than the negative");
console.assert(sumArray([4, -1, 5]) === 8, "can include negaitve");
console.assert(sumArray([10, -11, 11]) === 11, "sometimes a single item is the greatest sum");
console.assert(sumArray([-3, -2, -1, -2, -3]) === -1, "sometimes the greatest sum will be a negative number");
console.assert(sumArray([-2, -1, 0, -1, -2]) === 0, "sometimes the greates sum will be 0");
console.assert(sumArray([1, 2, 3, -4, 5, -4, 5, -4, -4, -1]) === 8, "works for a complex example");
