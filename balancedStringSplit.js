// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = function(s) {
	let count = 0;
	let bal = 0;
	for (let i = 0; i < s.length; i++) {
		bal += s[i] === "R" ? 1 : -1;
		if (!bal) count++;
	}
	return count;
};

console.assert(balancedStringSplit("RLRRLLRLRL") === 4, "case 1");
