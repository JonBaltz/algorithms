// https://leetcode.com/problems/check-array-formation-through-concatenation/

const canFormArray = function(arr, pieces) {
	let dex;
	for (let i = 0; i < pieces.length; i++) {
		if (arr.includes(pieces[i][0])) {
			dex = arr.indexOf(pieces[i][0]);
			for (let j = 1; j < pieces[i].length; j++) {
				if (arr[dex + j] !== pieces[i][j]) return false;
			}
		} else return false;
	}
	return true;
};

const canArrayForm = canFormArray;
console.assert(canArrayForm([85], [[85]]) === true, "case 1");
console.assert(canArrayForm([15, 88], [[88], [15]]) === true, "case 2");
console.assert(canArrayForm([49, 18, 16], [[16, 18, 49]]) === false, "case 3");
console.assert(canArrayForm([91, 4, 64, 78], [[78], [4, 64], [91]]) === true, "case 4");
console.assert(canArrayForm([1, 3, 5, 7], [[2, 4, 6, 8]]) === false, "case 5");
