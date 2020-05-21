// https://leetcode.com/problems/fibonacci-number/

const fib = function(n) {
	if (n < 2) {
		return n;
	}
	let x = 0;
	let y = 1;
	for (let i = 2; i <= n; i++) {
		let next = x + y;
		x = y;
		y = next;
	}
	return y;
}

console.assert(fib(0) === 0, "works for 0");
console.assert(fib(1) === 1, "works for 1");
console.assert(fib(3) === 2, "works for 3");
