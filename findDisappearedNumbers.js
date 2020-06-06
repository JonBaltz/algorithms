// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = function(array) {
	let index = 0;
	let temp;
	while (index < array.length) {
		let curr = array[index];
		if (curr !== index + 1) {
			let target = array[curr - 1];
			if (curr !== target) {
				temp = array[index];	
				array[index] = array[curr - 1];
				array[curr - 1] = temp;
			} else {
				index++;
			}
		} else {
			index++;
		}
	}
	index = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== i + 1) {
			array[index++] = i + 1;
		}
	}
	array.length = index;
	return array;
};

console.assert(JSON.stringify(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) === JSON.stringify([5, 6]), "works", findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.assert(JSON.stringify(findDisappearedNumbers([1])) === JSON.stringify([]), "works for an array with no disappeared");
