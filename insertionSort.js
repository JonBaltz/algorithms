const insertionSort = function(array, comparator = compare) {
	for (let i = 1; i < array.length; i++) {
		if (comparator(array[i - 1].value, array[i].value) > 0) {
			for (let j = 0; j < i; j++) {
				if (comparator(array[i].value, array[j].value) < 0) {
					array.splice(j, 0, array[i]);
					array.splice(i + 1, 1);
					j = i;
				}
			}
		}
	}
	return array;
};

const compare = function(a, b) {
	return a - b;
};

const testingTransform = function(array) {
	const transformed = [];
	for (let i = 0; i < array.length; i++) {
		transformed.push({value: array[i], i});
	}
	return transformed;
};

console.log(insertionSort(testingTransform([1, 2, 3, 4])));
console.log(insertionSort(testingTransform([3, 2, 1])));
console.log(insertionSort(testingTransform([2, 3, 1])));
console.log(insertionSort(testingTransform([3, 3, 2, 2, 1, 1])));
