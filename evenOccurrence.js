// Create a function which will find the first element in an array that is repeated an even number of times.

const evenOccurrence = function(array) {
	const counts = {};
	for (let i = 0; i < array.length; i++) {
		const currentKey = (typeof array[i]) + array[i];
		if (!counts[currentKey]) {
			counts[currentKey] = [false, i];
		} else if (counts[currentKey][0]) {
			counts[currentKey][0] = false;
		} else {
			counts[currentKey][0] = true;
		}
	}
	let first = null;
	for (let i in counts) {
		if (counts[i][0] && (!first || counts[i][1] < first[1])) {
			first = counts[i];
		}
	}
	return first === null ? null: Number(array[first[1]]) || array[first[1]];
}

console.assert(evenOccurrence([1, 1, 2, 3, 4, 5]) === 1, "works with a single even");
console.assert(evenOccurrence([1, 1, 2, 2, 3, 3]) === 1, "works with multiple evens");
console.assert(evenOccurrence(["cat", "dog", "dog", "cat"]) === "cat", "works with strings");
console.assert(evenOccurrence([1, "1", 1]) === 1, "strings and numbers don't clash");
console.assert(evenOccurrence([1, -1, 2, 3, 4, 5]) === null, "works with no even");
