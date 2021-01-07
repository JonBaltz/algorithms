// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = function(str) {
	if (str.length < 2) return str.length;
	let max = 1;
	let curr = str[0];
	const counts = { [str[0]]: 1, };
	for (let i = 1; i < str.length; i++) {
		curr += str[i];
		counts[str[i]] = counts[str[i]] ? 2 : 1;
		if (counts[str[i]] === 2) {
			do {
				counts[curr[0]]--;
				curr = curr.substring(1);
			} while (counts[str[i]] === 2);
		} else max = Math.max(max, curr.length);
	}
	return max;
};

const test = lengthOfLongestSubstring;
console.assert(test("abcabcbb") === 3, "case 1");
console.assert(test("bbbbbb") === 1, "case 2");
console.assert(test("pkwwkew") === 3, "case 3");
console.assert(test("") === 0, "case 4");

