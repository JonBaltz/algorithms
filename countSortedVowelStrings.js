// https://leetcode.com/problems/count-sorted-vowel-strings/

const countVowelStrings = function(n) {
	return ((n + 1) * (n + 2) * (n + 3) * (n + 4)) / 24;
};
