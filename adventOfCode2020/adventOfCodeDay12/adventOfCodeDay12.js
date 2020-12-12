const fs = require("fs");
const getInput = function(file) {
	return fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(move => [move[0], Number(move.slice(1))]);
};
// const directions = getInput("smallInput");
const directions = getInput("input");

const finalLocation = function(moves) {
	const cords = [0, 0];
	let point = 0;
	for (const move of moves) {
		switch (move[0]) {
			case "N":
				cords[0] += move[1];
				break;
			case "S":
				cords[0] -= move[1];
				break;
			case "E":
				cords[1] += move[1];
				break;
			case "W":
				cords[1] -= move[1];
				break;
			case "L":
				point = (point + move[1]) % 360;
				break;
			case "R":
				point = (point + 360 - move[1]) % 360;
				break;
			case "F":
				cords[0] += move[1] * (point === 90 ? 1 : point === 270 ? -1 : 0);
				cords[1] += move[1] * (point === 0 ? 1 : point === 180 ? -1 : 0);
				break;
		}
	}
	return cords;
};
const local = finalLocation(directions);
console.log(Math.abs(local[0]) + Math.abs(local[1]));

const locationWaypoint = function(moves) {
	const cords = [0, 0];
	const waypoint = [1, 10];
	for (const move of moves) {
		switch (move[0]) {
			case "N":
				waypoint[0] += move[1];
				break;
			case "S":
				waypoint[0] -= move[1];
				break;
			case "E":
				waypoint[1] += move[1];
				break;
			case "W":
				waypoint[1] -= move[1];
				break;
			case "L":
				for (let i = 0; i < move[1] / 90; i++) {
					let temp = waypoint[0];
					waypoint[0] = waypoint[1];
					waypoint[1] = -temp;
				}
				break;
			case "R":
				for (let i = 0; i < move[1] / 90; i++) {
					let temp = waypoint[0];
					waypoint[0] = -waypoint[1];
					waypoint[1] = temp;
				}
				break;
			case "F":
				for (let i = 0; i < move[1]; i++) {
					cords[0] += waypoint[0];
					cords[1] += waypoint[1];
				}
				break;
		}
	}
	return cords;
};
const wayLocal = locationWaypoint(directions);
console.log(Math.abs(wayLocal[0]) + Math.abs(wayLocal[1]));
