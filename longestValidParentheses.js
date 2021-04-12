// https://leetcode.com/problems/longest-valid-parentheses/

const longestValidParentheses = function(str) {
	const stack = [-1];
	let max = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ")") {
			if (stack.length > 1) {
				stack.pop();
				max = Math.max(max, i - stack[stack.length - 1]);
			} else stack[0] = i;
		} else stack.push(i);
	}
	return max;
};

const t = longestValidParentheses;
console.assert(t("(()") === 2, "case (()");
console.assert(t(")()())") === 4, "case )()())");
console.assert(t("") === 0, "case ''");

