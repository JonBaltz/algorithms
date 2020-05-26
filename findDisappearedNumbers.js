// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = function(array) {
	let unseen = [];
	for (let i = 1; i <= array.length; i++) {
		unseen.push(i);
	}
	for (let i = 0; i < array.length; i++) {
		unseen[array[i] - 1] = 0;
	}
	let result = [];
	for (let i = 0; i < unseen.length; i++) {
		if (unseen[i]) {
			result.push(unseen[i]);
		}
	}
	return result;
}

console.assert(JSON.stringify(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) === JSON.stringify([5, 6]), "works", findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.assert(JSON.stringify(findDisappearedNumbers([1])) === JSON.stringify([]), "works for an array with no disappeared");
