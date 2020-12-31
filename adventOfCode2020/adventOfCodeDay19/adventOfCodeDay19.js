const fs = require("fs");
const getInput = function(file) {
	const input = fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n\n").map(section => section.split("\n"));
	return [input[0].sort((a, b) => a.split(": ")[0] - b.split(": ")[0]).map(a => a.split(": ")[1].split(" | ")), input[1]];
};
// const [rules, messages] = getInput("smallInput");
// const [rules, messages] = getInput("input");
const [rules, messages] = getInput("input2");

const followRule = function(messages, ruleDex = 0) {
	if (!messages.length) return false;
	let remainders = [];
	for (const message of messages) {
		for (const ruleSet of rules[ruleDex]) {
			if (ruleSet[0][0] === "\"") {
				if (message[0] === ruleSet[1]) {
					remainders.push(message.substring(1));
				}
			} else {
				const ruleArray = ruleSet.split(" ");
				let tempStr = [message];
				let good = true;
				for (const rule of ruleArray) {
					const res = followRule(tempStr, Number(rule));
					if (res === false) {
						good = false;
						break;
					}
					tempStr = res !== true ? res : "";
				}
				if (good) {
					remainders.push(...tempStr);
				}
			}
		}
	}
	if (!remainders.length) return false;
	return remainders;
};
// console.log(followRule(messages[0]));

const countComplete = function() {
	let completeMatches = 0;
	for (const message of messages) {
		const res = followRule([message]);
		if (res) {
			if (res.filter(a => !a).length) completeMatches++;
		}
	}
	return completeMatches;
};
console.log(countComplete());
