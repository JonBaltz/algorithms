const compose = function() {
	const funcs = arguments;
	return function() {
		let dex = funcs.length - 1;
		let current = arguments;
		while (dex >= 0) {
			current = [].concat(funcs[dex--].call(null, ...current));
		}
		return current[0];
	};
};

const pipe = function() {
	const funcs = arguments;
	return function() {
		let dex = 0;
		let current = arguments;
		while (dex < funcs.length) {
			current = [].concat(funcs[dex++].call(null, ...current))
		}
		return current[0];
	};
};

const add5 = (n) => n + 5;
const multiply8 = (n) => n * 8;
const subtract3 = (n) => n - 3;
const test0 = compose(add5, subtract3);
const test1 = compose(add5, multiply8, subtract3);
console.assert(test0(3) === 5, "runs 2 function in correct order", test0(3));
console.assert(test1(3) === 5, "runs 3 functions in the correct order", test1(3));
const test2 = pipe(add5, subtract3);
const test3 = pipe(add5, multiply8, subtract3);
console.assert(test2(3) === 5, "pipe runs two functions in correct order");
console.assert(test3(3) === 61, "pipe runs three functions in correct order");
