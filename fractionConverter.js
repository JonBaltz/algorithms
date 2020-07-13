const toFraction = function(n) {
	let denominator = 1;
	let length = (n.toString().split(".")[1] || " ").length;
	while (true) {
		numerator = (n * denominator).toFixed(length);
		if (numerator % 1 === 0) {
			return `${Math.floor(numerator)}/${denominator}`;
		}
		denominator++;
	}
};

console.assert(toFraction(0.25) === "1/4", "works for 0.25");
console.assert(toFraction(1.0) === "1/1", "works for one");
console.assert(toFraction(0.88) === "22/25", "works for a numerator greater than 1");
console.assert(toFraction(0.253213) === "253213/1000000", "works for a long decimal");
console.assert(toFraction(0.0) === "0/1", "works for 0");
console.assert(toFraction(82) === "82/1", "works for a non-float number");
console.assert(toFraction(-1.75) === "-7/4", "works for negative numbers");
