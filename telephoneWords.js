const phoneDigitsToLetters = {
	0: "0",
	1: "1",
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ"
};

const telephoneWords = function(digitString) {
	let result = [""];
	let current;
	for (let i = 0; i < digitString.length; i++) {
		current = [];
		for (let j = 0; j < phoneDigitsToLetters[digitString[i]].length; j++) {
			for (let k = 0; k < result.length; k++) {
				current.push(result[k] + phoneDigitsToLetters[digitString[i]][j]);
			}
		}
		result = current;
	}
	return result;
};

console.assert(telephoneWords("1111").length === 1, "works for  single letter digits");
console.assert(telephoneWords("3").length === 3, "works for a single digit");
console.assert(telephoneWords("89").length = 12, "workd for a four item number combined with another number");
const answer = ["11AD", "11BD", "11CD", "11AE", "11BE", "11CE", "11AF", "11BF", "11CF"];
const result = telephoneWords("1123");
console.assert(result.length === 9, "has correct size");
for (let i = 0; i < result.length; i++) {
	console.assert(answer.indexOf(result[i]) !== -1, "correctly creates all permutations");
}
