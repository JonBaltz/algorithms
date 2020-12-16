const fs = require("fs");
const getInput = function(file) {
	return fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(line => line.split(",").map(str => Number(str)));
};
// const starting = getInput("practiceInput");
const starting = getInput("input");

const playGame = function(start, rounds = 2020) {
	const map = new Map();
	const arr = [];
	for (let i = 0; i < start.length; i++) {
		map.set(start[i], [i]);
		arr[0] = start[i];
		arr[1] = i;
	}
	for (let i = arr[1] + 1; i < rounds; i++) {
		if (!map.has(arr[0])) {
			map.set(arr[0], arr[1]);
			arr[0] = 0;
		} else {
			let temp = arr[1] - map.get(arr[0]);
			map.set(arr[0], arr[1]);
			arr[0] = temp;
		}
		arr[1]++;
	}
	return arr;
};
console.log(playGame(starting[0]));
console.log(playGame(starting[0], 30000000));
