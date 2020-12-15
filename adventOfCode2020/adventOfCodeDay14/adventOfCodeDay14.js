const fs = require("fs");

const splitData = (command) => {
	const split = command.split(" = ");
	if (command.includes("mask")) return split[1];
	return [split[0].substring(4, split[0].length - 1), split[1]].map(str => Number(str));
};
const getInput = function(file) {
	return fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(splitData);
};
// const program = getInput("smallInput");
// const program = getInput("smallInput2");
const program = getInput("input");

const runProgram = function(program) {
	const memObj = {};
	let mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	for (const command of program) {
		if (Array.isArray(command)) {
			const charArray = command[1].toString(2).padStart(36, "0").split("");
			for (let i = 0; i < mask.length; i++) {
				if (mask[i] === "X") continue;
				charArray[i] = mask[i];
			}
			memObj[command[0]] = parseInt(charArray.join(""), 2);
		} else mask = command;
	}
	return memObj;
};
const resultMemory = runProgram(program);
console.log(Object.values(resultMemory).reduce((acc, cur) => acc + cur));

const programV2 = function(program) {
	const memObj = {};
	let mask = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	const recurse = function(arr, value) {
		let sawX = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === "X") {
				sawX = true;
				let temp = [...arr];
				temp[i] = "1";
				recurse(temp, value);
				temp[i] = "0";
				recurse(temp, value);
				break;
			}
		}
		if (!sawX) memObj[arr] = value;
	};
	for (const command of program) {
		if (Array.isArray(command)) {
			const charArray = command[0].toString(2).padStart(36, "0").split("");
			for (let i = 0; i < mask.length; i++) {
				if (mask[i] === "0") continue;
				charArray[i] = mask[i];
			}
			recurse(charArray, command[1]);
		} else mask = command;
	}
	return memObj;
};
const memoryV2 = programV2(program);
console.log(Object.values(memoryV2).reduce((acc, cur) => acc + cur));
