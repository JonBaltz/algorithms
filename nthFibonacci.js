const nthFib = function (n) {
	let fir = 0;
	let sec = 1;
	for (let i = 2; i <= n; i++) {
		sec += fir;
		fir = sec - fir;
	}
	return n ? sec : 0;
};

console.assert(nthFib(0) === 0, "works for inital numbers");
console.assert(nthFib(1) === 1, "works for initial 1");
console.assert(nthFib(4) === 3, "works for n = 4");
console.assert(nthFib(5) === 5, "works for n = 5");
