const fs = require("fs");
const getInput = (file) => fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(line => line.split(""));
// const seats = getInput("smallInput");
const seats = getInput("input");

const iterate = function(layout) {
	const arr = [];
	for (let y = 0; y < layout.length; y++) {
		for (let x = 0; x < layout[y].length; x++) {
			const current = layout[y][x];
			let change = true;
			switch (current) {
				case "L":
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (layout[y + i] && layout[y + i][x + j] === "#") change = false;
						}
					}
					break;
				case "#":
					let count = 0;
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (i === 0 && j === 0) continue;
							if (layout[y + i] && layout[y + i][x + j] === "#") count++;
						}
					}
					if (count < 4) change = false;
					break;
				default:
					change = false;
					break;
			}
			if (change) arr.push([y, x]);
		}
	}
	for (let i = 0; i < arr.length; i++) {
		[y, x] = arr[i];
		layout[y][x] = layout[y][x] === "L" ? "#" : "L";
	}
	return arr.length !== 0 ? [layout, true] : [layout, false];
};

const iterateComplex = function(layout) {
	const arr = [];
	for (let y = 0; y < layout.length; y++) {
		for (let x = 0; x < layout[y].length; x++) {
			const current = layout[y][x];
			let change = true;
			let checkNext;
			switch (current) {
				case "L":
					checkNext = function(deltaY, deltaX) {
						const cords = [deltaY, deltaX];
						while (true) {
							if (!layout[y + cords[0]]) break;
							const curr = layout[y + cords[0]][x + cords[1]];
							cords[0] += deltaY;
							cords[1] += deltaX;
							if (curr === ".") continue;
							if (curr === "#") change = false;
							break;
						}
					};
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (i === 0 && j === 0) continue;
							checkNext(i, j);
						}
					}
					break;
				case "#":
					let count = 0;
					checkNext = function(deltaY, deltaX) {
						const cords = [deltaY, deltaX];
						while (true) {
							if (!layout[y + cords[0]]) break;
							const curr = layout[y + cords[0]][x + cords[1]];
							cords[0] += deltaY;
							cords[1] += deltaX;
							if (curr === ".") continue;
							if (curr === "#") count++;
							break;
						}
					};
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							if (i === 0 && j === 0) continue;
							checkNext(i, j);
						}
					}
					if (count < 5) change = false;
					break;
				default:
					change = false;
					break;
			}
			if (change) arr.push([y, x]);
		}
	}
	for (let i = 0; i < arr.length; i++) {
		[y, x] = arr[i];
		layout[y][x] = layout[y][x] === "L" ? "#" : "L";
	}
	return arr.length !== 0 ? [layout, true] : [layout, false];
};

const modelSeating = function(input, func = iterate) {
	let info = [input, true];
	while (info[1]) {
		info = func(info[0]);
	}
	return info[0];
};
// const stable = modelSeating([...seats], iterate);
// const stableComplex = modelSeating([...seats], iterateComplex);

const countOccupied = function(layout) {
	let count = 0;
	for (let y = 0; y < layout.length; y++) {
		for (let x = 0; x < layout[y].length; x++) {
			if (layout[y][x] === "#") count++;
		}
	}
	return count;
};
// const numberOccupied = countOccupied(stable);
// const complexOccupied = countOccupied(stableComplex);
// console.log(numberOccupied);
// console.log(complexOccupied);

