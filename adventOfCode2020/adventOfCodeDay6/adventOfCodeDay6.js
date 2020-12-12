const fs = require("fs");
const groups = fs.readFileSync("./input.txt", "utf-8").trim().split("\n\n").map(group => group.split("\n"));
const allGroupAnswers = groups.map(group => group.join(""));

// PART 1:
const sumGroupQuestions = function(group) {
	let count = 0;
	const hash = {};
	for (let i = 0; i < group.length; i++) {
		if (!hash[group[i]]) {
			count++;
			hash[group[i]] = true;
		}
	}
	return count;
};
const groupSums = allGroupAnswers.map(group => sumGroupQuestions(group));
const allSum = groupSums.reduce((a, c) => a + c);
console.log(`PART 1: ${allSum}`);

// PART 2:
const sumUniqueQuestions = function(group) {
	const members = group.length;
	const answerString = group.join("").split("").sort().join("");
	let count = 0;
	let letterCount = 1;
	for (let i = 1; i <= answerString.length; i++) {
		if (answerString[i] !== answerString[i - 1]) {
			if (letterCount === members) count++;
			letterCount = 1;
		} else letterCount++;
	}
	return count;
};
const groupUniqueSums = groups.map(group => sumUniqueQuestions(group));
const allUniqueSum = groupUniqueSums.reduce((a, c) => a + c);
console.log(`PART 2: ${allUniqueSum}`);
