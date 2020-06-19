const commonChars = function(str1, str2) {
	const valid = {};
	for (let i = 0; i < str2.length; i++) {
		if (!valid[str2[i]]) {
			valid[str2[i]] = 1;
		}
	}
	const extras = Array.prototype.slice.call( arguments, 2);
	for (let i = 0; i < extras.length; i++) {
		for (let j = 0; j < extras[i].length; j++) {
			if (valid[extras[i][j]] === i + 1) {
				valid[extras[i][j]]++;
			}
		}
	}
	valid[" "] = 0;
	let res = "";
	const target = extras.length + 1;
	for (let i = 0; i < str1.length; i++) {
		if (valid[str1[i]] === target) {
			res += str1[i];
			valid[str1[i]] = 0;
		}
	}
	return res;
};

console.assert(commonChars("abcd", "bcder") === "bcd", "retruns only shared chars in the correct order");
console.assert(commonChars("zxsderffff", "ffffefaxfxz") === "zxef", "works for repeates and non-ordered items");
console.assert(commonChars("all boys love fudge", "boys all love fudge") === "alboysvefudg", "workd for a complex example");
console.assert(commonChars("qwerty", "wertyu", "ertyui", "rtyuio", "tyuiop", "yuiop") === "y", "should handle more than two strings");
