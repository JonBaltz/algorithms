//

const longestPalindrome = function(s) {
	let max = s[0];
	for (let i = 0; i < s.length - 1; i++) {
		let low = i;
		let high = i;
		while (s[low - 1] && s[low - 1] === s[high + 1]) {
			low--;
			high++;
		}
		if (1 + high - low > max.length) max = s.slice(low, high + 1);
		if (s[i + 1] === s[i]) {
			low = i;
			high = i + 1;
			while (s[low - 1] && s[low - 1] === s[high + 1]) {
				low--;
				high++;
			}
			if (1 + high - low > max.length) max = s.slice(low, high + 1);
		}
	}
	return max;
};

const t = longestPalindrome;
console.assert(t("a") === "a", "case 1");
console.assert(t("ab") === "a", "case 2");
console.assert(t("abb") === "bb", "case 3");
console.assert(t("babad") === "bab", "case 4");
console.assert(t("cbbd") === "bb", "case 5");

