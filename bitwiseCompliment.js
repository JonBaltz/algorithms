// https://leetcode.com/problems/complement-of-base-10-integer/

const bitwiseComplement = function(N) {
	if (N === 0) return 1;
	return N ^ (Math.pow(2, Math.ceil(Math.log2(N + 1))) - 1);
};

console.assert(bitwiseComplement(0) === 1, "0");
console.assert(bitwiseComplement(2) === 1, "2");
console.assert(bitwiseComplement(7) === 0, "7");
