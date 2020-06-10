const binarySearch = function(array, target) {
	let start = 0;
	let end = array.length - 1;
	while (start <= end) {
		let mid = Math.floor((end - start) / 2) + start;
		if (array[mid] === target) return mid;
		if (array[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return null;
};

console.assert(binarySearch([1, 2, 3, 4, 5], 3) === 2, "finds the middle item");
console.assert(binarySearch([1, 2, 3, 4, 5], 2) === 1, "finds 2");
console.assert(binarySearch([1, 2, 3, 4, 5], 1) === 0, "finds 1");
console.assert(binarySearch([1, 2, 3, 4, 5], 4) === 3, "finds 4");
console.assert(binarySearch([1, 2, 3, 4, 5], 5) === 4, "finds 5");
console.assert(binarySearch([1, 2, 3, 4, 5], 6) === null, "returns null for a missing item");
console.assert(binarySearch([1, 2, 3, 4, 5], 0) === null, "returns null for a missing item");
console.assert(binarySearch([1, 2, 3, 4], 4) === 3, "works for a starting even array");
