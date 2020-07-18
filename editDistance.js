const editDistance = function (str1, str2) {
	if (str1.length === 0 || str2.length === 0) {
		return str1.length + str2.length;
	}
	if (str1[str1.length - 1] === str2[str2.length - 1]) {
		return editDistance(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1));
	}
	return (
		1 +
		Math.min(
			editDistance(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1)),
			editDistance(str1, str2.substring(0, str2.length - 1)),
			editDistance(str1.substring(0, str1.length - 1), str2)
		)
	);
};

console.assert(editDistance("", "") === 0, "should return zero for no changes");
console.assert(editDistance("", "abc") === 3, "should return difference in length");
console.assert(editDistance("c", "abc") === 2, "should return difference in length");
console.assert(editDistance("abc", "abc") === 0, "should return zero for no changes");
console.assert(editDistance("xbc", "abc") === 1, "should work for replacements");
console.assert(editDistance("xabc", "abc") === 1, "should work for removals");
console.assert(editDistance("abc", "xabc") === 1, "should work for insertions");
console.assert(editDistance("qwerty", "qwert") === 1, "should work for removals at the end");
console.assert(editDistance("qwert", "qwerty") === 1, "should work for insertions at the end");
console.assert(editDistance("abdflmy", "bdefgly") === 4, "should work for multiple changes");
console.assert(editDistance("wednesday", "sunday") === 5, "should work for multiple changes");
