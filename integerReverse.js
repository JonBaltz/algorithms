const reverseInteger = function(n) {
	let res = 0;
	while (n) {
		res = res * 10 + n % 10;
		n = (n - (n % 10)) / 10;
	}
	return res;
};

console.assert(reverseInteger(501) === 105, "integer reverse works");
console.assert(reverseInteger(23416) === 61432, "second simple example");
console.assert(reverseInteger(100) === 1, "removes extra zeroes at beginning");
console.assert(reverseInteger(-654) === -456, "works with negative numbers");
console.assert(reverseInteger(0) === 0, "works with 0");
console.assert(reverseInteger(2342617432) === 2347162432, "works with large example");
