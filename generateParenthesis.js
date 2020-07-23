// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = function (n) {
	if (n === 0) return [""];
	if (n < 0) return [];
	const combos = [];
	const generator = function (open, close, valid, prev) {
		if (valid >= 0 && open >= 0) {
			if (close === 0) {
				if (valid === 0 && open === 0) {
					combos.push(prev);
				}
			} else {
				generator(open, close - 1, valid - 1, prev + ")");
				generator(open - 1, close, valid + 1, prev + "(");
			}
		}
	};
	generator(n - 1, n, 1, "(");
	return combos;
};

console.assert(generateParenthesis(3).length === 5, "finds the correct number of combinations for 3");
console.assert(generateParenthesis(1)[0] === "()" && generateParenthesis(1).length === 1, "should work for 1");
