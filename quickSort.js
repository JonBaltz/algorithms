const quickSort = function(array) {
	if (array.length < 2) {
		return array;
	}
	let left = [];
	let right = [];
	let pivotDex = Math.floor(array.length / 2);
	let pivot = array[pivotDex];
	for (let i = 0; i < array.length; i++) {
		if (i === pivotDex) {
			continue;
		}
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}
	return [].concat(quickSort(left), pivot, quickSort(right));
}

const sorted = [1, 2, 3, 4, 5];
console.assert(JSON.stringify(quickSort([5, 4, 3, 2, 1])) === JSON.stringify(sorted), "works for a backwards array");
console.assert(JSON.stringify(quickSort([2, 4, 5, 1, 3])) === JSON.stringify(sorted), "works for a randomly mixed array");

const n = 10000;
let a = [];
for (let i = 0; i < n; i++) {
	a.push(Math.floor(Math.random() * n));
}
const s = a.slice();
s.sort((a, b) => a - b);
a = quickSort(a);
for (let i = 0; i < n; i++) {
	console.assert(s[i] === a[i], `expected ${a[i]} to equal ${s[i]}`);
}
