const fs = require("fs");
const getInput = function(file) {
	return fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(str => Number(str));
};
// const input = getInput("smallInput");
// const input = getInput("mediumInput");
const input = getInput("input");

const differences = function(input) {
	input.push(0);
	let one = 0;
	let two = 0;
	let three = 0;
	input.sort((a, b) => a - b);
	for (let i = 1; i < input.length; i++) {
		const diff = input[i] - input[i - 1];
		if (diff === 1) one++;
		if (diff === 2) two++;
		if (diff === 3) three++;
	}
	three++;
	return [one, two, three];
};
const jDiffs = differences([...input]);
console.log(jDiffs[0] * jDiffs[2]);

const countPossible = function(input) {
	input.sort((a, b) => a - b);
	input.push(input[input.length - 1] + 3);
	const hash = {0: 1};
	for (let i = 0; i < input.length; i++) {
		const one = hash[input[i] - 1] || 0;
		const two = hash[input[i] - 2] || 0;
		const three = hash[input[i] - 3] || 0;
		hash[input[i]] = one + two + three;
	}
	return hash[input[input.length - 1]];
};
const jPaths = countPossible([...input]);
console.log(jPaths);
