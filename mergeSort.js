const mergeSort = function(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = [array[i]];
	}
	while (array.length > 1) {
		let newArray = [];
		for (let i = 0; i < array.length; i += 2) {
			newArray.push(merge(array[i], array[i + 1]));
		}
		array = newArray;
	}
	return array[0];
};

const merge = function(one, two) {
	if (!two) {
		return one;
	}
	let oneDex = 0;
	let twoDex = 0;
	let merged = [];
	while (merged.length < one.length + two.length) {
		if (oneDex === one.length) {
			for (let i = twoDex; i < two.length; i++) {
				merged.push(two[i]);
			}
			return merged;
		} else if (twoDex === two.length) {
			for (let i = oneDex; i < one.length; i++) {
				merged.push(one[i]);
			}
			return merged;
		}
		if (one[oneDex] <= two[twoDex]) {
			merged.push(one[oneDex++]);
		} else {
			merged.push(two[twoDex++]);
		}
	}
	return merged;
};

console.assert(JSON.stringify(mergeSort([1, 2, 3, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "wont change a sorted array", mergeSort([1, 2, 3, 4, 5]));
console.assert(JSON.stringify(mergeSort([5, 4, 3, 2, 1])) === JSON.stringify([1, 2, 3, 4, 5]), "works for a reversed arrray", mergeSort([5, 4, 3, 2, 1]));
console.assert(JSON.stringify(merge([1, 3, 5], [2, 4, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]), "merge works", merge([1, 3, 5], [2, 4, 6]));
console.assert(JSON.stringify(merge([1, 2, 3], undefined)) === JSON.stringify([1, 2, 3]), "merge works with an undefined");
console.assert(JSON.stringify(merge([1, 2, 5], [3, 4, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]), "works with unperfect merge");
console.assert(JSON.stringify(merge([4], [5])) === JSON.stringify([4, 5]), "combines a single item");

let a = [];
const n = 1000000;
for (let i = 0; i < n; i++) {
	a.push(Math.floor(Math.random() * n) + 1);
}
const s = a.slice();
s.sort((a, b) => a - b);
a = mergeSort(a);
for (let i = 0; i < n; i++) {
	console.assert(s[i] === a[i], `Expected ${a[i]} to equal ${s[i]}`);
}
