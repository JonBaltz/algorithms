// https://leetcode.com/problems/palindromic-substrings/submissions/

const countSubstrings = function(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			if (isPal(str.substring(i, j + 1))) {
				count++;
			}
		}
	}
	return count;
};

const isPal = function(str) {
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) return false;
	}
	return true;
};

console.assert(countSubstrings("aaa") === 6, "works for aaa");
console.assert(countSubstrings("aaaba") === 9, "aaaba");
