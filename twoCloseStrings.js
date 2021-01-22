// https://leetcode.com/problems/determine-if-two-strings-are-close/

const closeStrings = function(word1, word2) {
	if (word1.length !== word2.length) return false;
	const c1 = {};
	const c2 = {};
	for (const char of word1) {
		if (c1[char]) {
			c1[char]++;
		} else c1[char] = 1;
	}
	for (const char of word2) {
		if (c2[char]) {
			c2[char]++;
		} else c2[char] = 1;
	}
	if (JSON.stringify(Object.keys(c1).sort()) !== JSON.stringify(Object.keys(c2).sort())) return false;
	if (JSON.stringify(Object.values(c1).sort((a, b) => a - b)) !== JSON.stringify(Object.values(c2).sort((a, b) => a - b))) return false;
	return true;
};

const t = closeStrings;
console.assert(t("abc", "bca"), "case 1");
console.assert(!t("a", "aa"), "case 2");
console.assert(t("cabbba", "abbccc"), "case 3");
console.assert(!t("cabbba", "aabbss"), "case 4");
console.assert(!t("uau", "ssx"), "case 5");

