// https://leetcode.com/problems/reverse-string/submissions/

const reverseString = function(str) {
	let temp;
	for (let i = 0; i < str.length / 2; i++) {
		temp = str[i];
		str[i] = str[str.length - 1 - i];
		str[str.length - 1 - i] = temp;
	}
	return str;
}

console.assert(reverseString(["H", "e", "l", "l", "o"]).join("") === "olleH", "works", reverseString(["H", "e", "l", "l", "o"]).join(""));
console.assert(reverseString(["a", "b", "c", "d"]).join("") === "dcba", "works for an even length array");
