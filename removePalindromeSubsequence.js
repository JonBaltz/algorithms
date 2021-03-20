// https://leetcode.com/problems/remove-palindromic-subsequences/

const removePalindromeSub = function(s) {
	if (s.includes("a") && s.includes("b") && !isPalindrome(s)) return 2;
	return 1;
};

const isPalindrome = function(str) {
	if (str.length <= 1) return true;
	let fp = 0;
	let bp = str.length - 1;
	while (fp < bp) {
		if (str[fp] !== str[bp]) return false;
		fp++;
		bp--;
	}
	return true;
};

const t = removePalindromeSub;
console.assert(t("ababa") === 1, "case 1");
console.assert(t("abb") === 2, "case 2");
console.assert(t("baabb") === 2, "case 3");

