const longestPalindrome = function(string) {
	const palindromeHelper = function(pal, above, below) {
		while (string[below] && string[below] === string[above]) {
			pal = string[below--] + pal + string[above++];
		}
		return pal;
	};
	let longest = "";
	let current, option;
	for (let i = 0; i < string.length; i++) {
		current = palindromeHelper(string[i], i + 1, i - 1);
		if (string[i] === string[i + 1]) {
			option = palindromeHelper(string[i] + string[i + 1], i + 2, i - 1);
			current = current.length > option.length ? current : option;
		}
		if (current.length > longest.length) {
			longest = current;
		}
	}
	return longest;
};

console.assert(longestPalindrome("My dad is a racecar athelete") === "a racecar a", "finds an odd length palindrome");
console.assert(longestPalindrome("aba") === "aba", "finds a palindrome that is the entire input");
console.assert(longestPalindrome("aabb") === "aa", "if there are multiple of the same length return the first");
console.assert(longestPalindrome("f") === "f", "returns the first if no plaindromes");
console.assert(longestPalindrome("aabbccbbaa") === "aabbccbbaa", "finds an odd length palindrome");
