Number.prototype.toEnglish = function () {
	let n = this.toString();
	if (numbersToWords[n]) {
		return numbersToWords[n];
	} else if (numbersToPlace[n]) {
		return `one ${numbersToPlace[n]}`;
	}
	n = n.split("");
	let result = "";
	let magnitude = [0, 0];
	let current, whatever, whatever2, magStr;
	let before = false;
	while (n.length) {
		current = n.pop();
		if (current !== "0") {
			whatever = "1";
			whatever2 = "1";
			for (let i = 0; i < magnitude[1]; i++) {
				whatever += "0";
			}
			magStr = numbersToPlace[whatever];
			for (let i = 0; i < magnitude[0]; i++) {
				whatever += "0";
				whatever2 += "0";
			}
			if (numbersToPlace[whatever]) {
				if (magnitude[0] + magnitude[1] === 1) {
					result = numbersToWords[current + "0"] + "-" + result;
					magnitude = [0, magnitude[0] + magnitude[1]];
				} else {
					magnitude = [0, magnitude[0] + magnitude[1]];
					magStr = numbersToPlace[whatever];
					if (result) {
						result = numbersToWords[current] + " " + magStr + " " + result;
					} else {
						result = numbersToWords[current] + " " + magStr;
					}
				}
			} else {
				if (magnitude[0] === 1) {
					result = numbersToWords[current + "0"] + "-" + result;
				} else {
					if (result) {
						if (before) {
							result = numbersToWords[current] + " " + numbersToPlace[whatever2] + " " + result;
						} else {
							result =
								numbersToWords[current] + " " + magStr + " " + numbersToPlace[whatever2] + " " + result;
						}
					} else {
						result = numbersToWords[current];
					}
				}
			}
			before = true;
		} else {
			before = false;
		}
		magnitude[0]++;
	}
	return result;
};

const numbersToWords = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};

const numbersToPlace = {
	1: "",
	10: "ten",
	100: "hundred",
	1000: "thousand",
	1000000: "million",
	1000000000: "billion",
	1000000000000: "trillion",
	1000000000000000: "quadrillion",
	1000000000000000000: "quintillion",
};

for (let i = 0; i < 10; i++) {
	console.assert(i.toEnglish() === numbersToWords[i], "should work for single digit numbers");
	console.assert((10 * i).toEnglish() === numbersToWords[10 * i], "should work for tens");
}
for (let i = 10; i < 20; i++) {
	console.assert(i.toEnglish() === numbersToWords[i], "should work for teens");
}
console.assert((44).toEnglish() === "forty-four", "forty four should be hyphenated");
console.assert((68).toEnglish() === "sixty-eight", "works for double digit number 68");
console.assert((99).toEnglish() === "ninety-nine", "works for double digit number 99");
console.assert((1000).toEnglish() === "one thousand", "works for one times a magnitude");
console.assert((500).toEnglish() === "five hundred", "works for a number times a magnitude");
console.assert((575).toEnglish() === "five hundred seventy-five", "works for a number that includes hundreds and tens");
console.assert((922).toEnglish() === "nine hundred twenty-two");
console.assert((1000000).toEnglish() === "one million", "works with a large magnitude");
console.assert(
	(973563700).toEnglish() === "nine hundred seventy-three million five hundred sixty-three thousand seven hundred",
	"works for a large example"
);
console.assert(
	(973563700353).toEnglish() ===
		"nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three",
	"works for a reall big one"
);
