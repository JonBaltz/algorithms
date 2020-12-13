const fs = require("fs");
const getInput = function(file) {
	const input = fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n");
	return [input[0], input[1].split(",")];
};
// const schedule = getInput("smallInput");
const schedule = getInput("input");

const firstDeparting = function(schedule) {
	let time = schedule[0];
	while (true) {
		for (let i = 0; i < schedule[1].length; i++) {
			if (time % schedule[1][i] === 0) return [Number(schedule[1][i]), time];
		}
		time++;
	}
};
const firstId = firstDeparting(schedule);
console.log((firstId[1] - schedule[0]) * firstId[0]);

const messWithData = function(data) {
	return data.map((val, dex) => [val, dex]).filter(val => val[0] !== "x").map(val => [Number(val[0]), val[1]]);
};

const departingSequence = function(departTimes) {
	let time = [departTimes[0][0], departTimes[0][0]];
    for (let i = 1; i < departTimes.length; i++) {
		const [id, index] = departTimes[i];
        while ((time[0] + index) % id) {
            time[0] += time[1];
        }
        time[1] *= id;
    }
    return time[0];
};
const sequenceTime = departingSequence(messWithData(schedule[1]));
console.log(sequenceTime);
