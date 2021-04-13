// https://leetcode.com/problems/determine-if-string-halves-are-alike/

const halvesAreAlike = function(s) {
	const first = s.slice(0, s.length / 2);
	const last = s.slice(s.length / 2);
	return countVowels(first, chars) === countVowels(last, chars);
};

const countVowels = function(s) {
	const vowels = "aeiouAEIOU";
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) count++;
	}
	return count;
};
