// https://leetcode.com/problems/is-subsequence/

const isSubsequence = function(sub, str) {
	if (!sub.length) return true;
	let subDex = 0;
	for (let i = 0; i < str.length; i++) {
		if (sub[subDex] === str[i]) {
			if (++subDex === sub.length) return true;
		}
	}
	return false;
};

console.assert(isSubsequence("bruh", "abcruhgfd") === true, "finds a subsequence");
console.assert(isSubsequence("abc", "acb") === false, "a string out of order is not a subsequence");
console.assert(isSubsequence("abc", "") === false, "works for an empty string");
console.assert(isSubsequence("", "jsdhfvljkadfh") === true, "works for an empty subsequence");
console.assert(isSubsequence("", "") === true, "works when both empty");
