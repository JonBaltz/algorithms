// https://leetcode.com/problems/power-of-two/

const isPowerOfTwo = function(n) {
	return (n > 0 && n === (n & -n));
}

console.assert(isPowerOfTwo(16) === true, "works for a power of two");
console.assert(isPowerOfTwo(13) === false, "works for non-power");
console.assert(isPowerOfTwo(1) === true, "one is a power of two");
console.assert(isPowerOfTwo(0) === false, "zero is not a power of two");
console.assert(isPowerOfTwo(-2147483648) === false, "must be positive");
