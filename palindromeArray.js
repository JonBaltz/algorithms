const isPalindrome = function(array) {
	let f = 0;
	let b = array.length - 1;
	while (f < b) {
		if (array[f++] !== array[b--]) {
			return false;
		}
	}
	return true;
};

console.assert(isPalindrome([1, 2, 3]) === false, "finds a non-palindrome");
console.assert(isPalindrome([1, 2, 3, 3, 2, 1]) === true, "finds an even palindrome");
console.assert(isPalindrome([1, 2, 3, 2, 1]) === true, "finds an odd palindrome");
console.assert(isPalindrome([1]) === true, "a single item works");
console.assert(isPalindrome([]) === true, "works for an empty array");
