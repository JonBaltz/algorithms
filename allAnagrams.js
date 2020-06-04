const allAnagrams = function(string) {
	const hash = {};
	const recurse = function(str, current) {
		if (!str.length) {
			hash[current] = 1;
			return;
		}
		for (let i = 0; i < str.length; i++) {
			recurse(str.substring(0, i) + str.substring(i + 1, str.length), current + str[i]);
		}
	}
	recurse(string, "");
	return Object.keys(hash);
}

console.assert(allAnagrams("abc").length === 6, "creates the correct number of anagrams");
console.assert(JSON.stringify(allAnagrams("a")) === JSON.stringify(["a"]), "correctly creates all for a single letters");
console.assert(allAnagrams("elvis").indexOf("lives") !== -1, "elvis should create lives");
console.assert(allAnagrams("debitcard").indexOf("badcredit") !== -1, "should work for very large strings");
