const fs = require("fs");
const getInput = function(file) {
	return fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n");
}
// const input = getInput("smallInput");
const input = getInput("input");

const solveEquasion = function(eqStr) {
	while (eqStr.includes("(")) {
		const para = [null, null, 0];
		for (let i = 0; i < eqStr.length; i++) {
			if (eqStr[i] === "(") {
				para[2]++;
				if (para[0] === null) para[0] = i;
			}
			if (eqStr[i] === ")") {
				para[2]--;
				if (para[1] === null && para[2] === 0) para[1] = i;
			}
		}
		if (para[0] !== null && para[1] !== null) {
			const inside = solveEquasion(eqStr.substring(para[0] + 1, para[1]));
			eqStr = eqStr.substring(0, para[0]) + inside + eqStr.substring(para[1] + 1)
		}
	}

	const numbers = [];
	const operators = [];
	for (const character of eqStr.split(" ")) {
		if (character === "+" || character === "*") {
			operators.push(character);
		} else {
			numbers.push(Number(character));
		}
	}
	while (numbers.length > 1) {
		switch (operators.shift()) {
			case "+":
				numbers.unshift(numbers.shift() + numbers.shift());
				break;
			case "*":
				numbers.unshift(numbers.shift() * numbers.shift());
				break;
			default:
				console.log("THIS IS NOT SUPPOSED TO HAPPEN");
				break;
		}
	}
	return numbers[0];
};
const sums = input.map(str => solveEquasion(str));
console.log(sums.reduce((acc, cur) => acc + cur));

const advancedMath = function(eqStr) {
	while (eqStr.includes("(")) {
		const para = [null, null, 0];
		for (let i = 0; i < eqStr.length; i++) {
			if (eqStr[i] === "(") {
				para[2]++;
				if (para[0] === null) para[0] = i;
			}
			if (eqStr[i] === ")") {
				para[2]--;
				if (para[1] === null && para[2] === 0) para[1] = i;
			}
		}
		if (para[0] !== null && para[1] !== null) {
			const inside = advancedMath(eqStr.substring(para[0] + 1, para[1]));
			eqStr = eqStr.substring(0, para[0]) + inside + eqStr.substring(para[1] + 1)
		}
	}

	const arr = eqStr.split(" ");
	while (arr.join("").includes("+")) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === "+") arr.splice(i - 1, 3, Number(arr[i - 1]) + Number(arr[i + 1]));
		}
	}

	const res =  arr.filter(item => item !== "*").reduce((acc, cur) => acc * cur);
	return res;
};
const advancedSums = input.map(str => advancedMath(str));
console.log(advancedSums.reduce((acc, cur) => acc + cur));
