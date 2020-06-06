const bubbleSort = function(array) {
	let end = array.length;
	while (end > 1) {
		let changed = false;
		for (let i = 0; i < end; i++) {
			if (array[i - 1] > array[i]) {
				changed = true;
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;
			}
		}
		if (!changed) {
			return array;
		}
		end--;
	}
	return array;
};

console.assert(JSON.stringify(bubbleSort([3, 1, 2])) === JSON.stringify([1, 2, 3]), "works with a small array");
const sorted = [1, 2, 3, 4, 5];
console.assert(bubbleSort(sorted) === sorted, "doesn't change a sorted array");
console.assert(JSON.stringify(bubbleSort([3, 4, 2, 1, 5])) === JSON.stringify(sorted), "works with a larger array");
console.assert(JSON.stringify(bubbleSort([5, 4, 3, 2, 1])) === JSON.stringify(sorted), "works with a worst case array");
