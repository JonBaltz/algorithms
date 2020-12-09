const fs = require("fs");
const file = "./input.txt";
// const file = "./smallInput.txt";
// const file = "./noLoopInput.txt";

const commands = fs.readFileSync(file, "utf-8").trim().split("\n").map(command => command.split(" "));

const accumulatorValue = function(commands) {
	let val = 0;
	let point = 0;
	const hash = {};
	hash[commands.length] = "noLoop";
	while (true) {
		if (hash[point]) return [val, hash[point]];
		hash[point] = true;
		switch (commands[point][0]) {
			case "nop":
				point++;
				break;
			case "acc":
				val += Number(commands[point][1]);
				point++;
				break;
			case "jmp":
				point += Number(commands[point][1]);
				break;
		}
	}
};
console.log(accumulatorValue(commands)[0]);
// Answer: 1475

const findBadCode = function(commands) {
	for (let i = 0; i < commands.length; i++) {
		if (commands[i][0] === "acc") continue;
		if (commands[i][0] === "jmp") {
			commands[i][0] = "nop";
		} else {
			commands[i][0] = "jmp";
		}
		const current = accumulatorValue(commands);
		if (commands[i][0] === "jmp") {
			commands[i][0] = "nop";
		} else {
			commands[i][0] = "jmp";
		}
		if (current[1] === "noLoop") return current[0];
	}
	return null;
};
console.log(findBadCode(commands));
// Answer: 1270
