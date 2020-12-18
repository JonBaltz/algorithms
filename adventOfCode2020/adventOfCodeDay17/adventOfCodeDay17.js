const fs = require("fs");
const getInput = function(file) {
	return [fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n").map(line => line.split(""))];
};
// const plane = getInput("smallInput");
const plane = getInput("input");

const pad3State = function(state) {
	for (const slice of state) {
		for (const row of slice) {
			row.unshift(".");
			row.push(".");
		}
		slice.unshift(".".repeat(slice[0].length).split(""));
		slice.push(".".repeat(slice[0].length).split(""));
	}
	state.unshift(".".repeat(state[0].length).split("").map(item => item.repeat(state[0][0].length).split("")));
	state.push(".".repeat(state[0].length).split("").map(item => item.repeat(state[0][0].length).split("")));
	return state;
};

const bootCycle3 = function(state, rounds = 6) {
	while (rounds--) {
		pad3State(state);
		const change = [];
		const checkItem = function(item, sDex, rDex, iDex) {
			let count = 0;
			for (let z = -1; z < 2; z++) {
				for (let y = -1; y < 2; y++) {
					for (let x = -1; x < 2; x++) {
						if (z === 0 && y === 0 && x === 0) continue;
						if (state[sDex + z] && state[sDex + z][rDex + y] && state[sDex+ z][rDex + y][iDex + x] === "#") count++;
					}
				}
			}
			if (item === "#" && !(count === 2 || count === 3)) change.push(`${sDex},${rDex},${iDex}`);
			if (item === "." && count === 3) change.push(`${sDex},${rDex},${iDex}`);
		}
		state.forEach((slice, sKey) => slice.forEach((row, rKey) => row.forEach((item, iKey) => checkItem(item, sKey, rKey, iKey))));
		for (const cords of change) {
			let temp = cords.split(",").map(str => Number(str));
			state[temp[0]][temp[1]][temp[2]] = state[temp[0]][temp[1]][temp[2]] === "#" ? "." : "#";
		}
	}
	return state;
};
const count3 = function(state) {
	let num = 0;
	state.forEach(slice => slice.forEach(row => row.forEach(item => {if (item === "#") num++})));
	return num;
};
console.log(count3(bootCycle3(JSON.parse(JSON.stringify(plane)))));

const pad4State = function(state) {
	for (const dimension of state){
		for (const slice of dimension) {
			for (const row of slice) {
				row.unshift(".");
				row.push(".");
			}
			slice.unshift(".".repeat(slice[0].length).split(""));
			slice.push(".".repeat(slice[0].length).split(""));
		}
		dimension.unshift(".".repeat(dimension[0].length).split("").map(item => item.repeat(dimension[0][0].length).split("")));
		dimension.push(".".repeat(dimension[0].length).split("").map(item => item.repeat(dimension[0][0].length).split("")));
	}
	state.unshift(".".repeat(state[0].length).split("").map(a => a.repeat(state[0][0].length).split("").map(b => b.repeat(state[0][0][0].length).split(""))));
	state.push(".".repeat(state[0].length).split("").map(a => a.repeat(state[0][0].length).split("").map(b => b.repeat(state[0][0][0].length).split(""))));
	return state;
};

const bootCycle4 = function(state, rounds = 6) {
	while (rounds--) {
		pad4State(state);
		const change = [];
		const checkItem = function(item, dDex, sDex, rDex, iDex) {
			let count = 0;
			for (let w = -1; w < 2; w++) {
				for (let z = -1; z < 2; z++) {
					for (let y = -1; y < 2; y++) {
						for (let x = -1; x < 2; x++) {
							if (w === 0 && z === 0 && y === 0 && x === 0) continue;
							if (state[dDex + w] && state[dDex + w][sDex + z] && state[dDex + w][sDex + z][rDex + y] && state[dDex + w][sDex+ z][rDex + y][iDex + x] === "#") count++;
						}
					}
				}
			}
			if (item === "#" && !(count === 2 || count === 3)) change.push(`${dDex},${sDex},${rDex},${iDex}`);
			if (item === "." && count === 3) change.push(`${dDex},${sDex},${rDex},${iDex}`);
		}
		state.forEach((dimension, dKey) => dimension.forEach((slice, sKey) => slice.forEach((row, rKey) => row.forEach((item, iKey) => checkItem(item, dKey, sKey, rKey, iKey)))));
		for (const cords of change) {
			let temp = cords.split(",").map(str => Number(str));
			state[temp[0]][temp[1]][temp[2]][temp[3]] = state[temp[0]][temp[1]][temp[2]][temp[3]] === "#" ? "." : "#";
		}
	}
	return state;
};

const count4 = function(state) {
	let num = 0;
	state.forEach(dimension => dimension.forEach(slice => slice.forEach(row => row.forEach(item => {if (item === "#") num++}))));
	return num;
};
console.log(count4(bootCycle4(JSON.parse(JSON.stringify([plane])))));
