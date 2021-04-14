// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const numToLetter = {
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"]
};

const letterCombinations = function(digits) {
	let words = [""];

	for (const digit of digits) {
		let updated = [];
		for (const letter of numToLetter[digit]) {
			for (const word of words) {
				updated.push(word + letter);
			}
		}
		words = updated;
	}

	return words.length > 1 ? words : [];
};

