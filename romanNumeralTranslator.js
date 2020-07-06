const DIGIT_VALUES = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

const translateRomanNumerals = function(romanNumeral) {
	let value = DIGIT_VALUES[romanNumeral[romanNumeral.length - 1]];
	for (let i = romanNumeral.length - 2; i >= 0; i--) {
		let curr = DIGIT_VALUES[romanNumeral[i]];
		let prev = DIGIT_VALUES[romanNumeral[i + 1]];
		if (curr < prev) {
			value -= curr;
		} else {
			value += curr;
		}
	}
	return value;
};


(function() {
	console.assert(translateRomanNumerals("I") === 1, "works for single item I");
	console.assert(translateRomanNumerals("V") === 5, "works for single item V");
	console.assert(translateRomanNumerals("X") === 10, "works for single numeral X");
	console.assert(translateRomanNumerals("L") === 50, "works for a single numeral L");
	console.assert(translateRomanNumerals("C") === 100, "works for a single numeral c");
	console.assert(translateRomanNumerals("D") === 500, "works for a single numeral D");
	console.assert(translateRomanNumerals("M") === 1000, "works for a single numeral M");
})();

(function() {
	console.assert(translateRomanNumerals("II") === 2, "should add two IIs together");
	console.assert(translateRomanNumerals("XV") === 15, "should add X and V together");
	console.assert(translateRomanNumerals("VII") === 7, "should add three numerals together");
})();

(function() {
	console.assert(translateRomanNumerals("IV") === 4, "subtracts I from V");
	console.assert(translateRomanNumerals("XIV") === 14, "cand add and subtract numerals");
	console.assert(translateRomanNumerals("MCM") === 1900, "can add and subtract numerals to 1900");
})();

(function() {
	console.assert(translateRomanNumerals("MCMLIV") === 1954, "works for complex example MCMLIV");
	console.assert(translateRomanNumerals("MCMXC") === 1990, "works for complex MCMXC");
	console.assert(translateRomanNumerals("MMVIII") === 2008, "works for complex example MMVIII");
	console.assert(translateRomanNumerals("MDCCCCX") === 1910, "works for complex example MDCCCCX");
})();
