// https://leetcode.com/problems/repeated-substring-pattern/

const repeatedSubstringPattern = function(str) {
	for (let i = 1; i <= str.length / 2; i++) {
		let mismatch = false;
		for (let j = 0; j < i; j++) {
			let match2 = false;
			for (let k = 0; k < str.length / i; k++) {
				if (str[j + (i * k)] !== str[j]) {
					match2 = true;
					break;
				}
			}
			if (match2) {
				mismatch = true;
				break;
			}
		}
		if (!mismatch) return true;
	}
	return false;
};

const test = repeatedSubstringPattern;
console.assert(test("abab") == true, "test case 1");
console.assert(test("aba") == false, "test case 2");
console.assert(test("abcabcabcabc") == true, "test case 3");
console.assert(test("aabaaba") == false, "test case 4");
