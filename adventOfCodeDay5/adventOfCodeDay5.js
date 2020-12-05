const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

const binaryIdToCords = function(binaryId) {
	const row = binaryId.substring(0, 7).split("F").join("0").split("B").join("1");
	const column = binaryId.substring(7).split("L").join("0").split("R").join("1");
	return [parseInt(row, 2), parseInt(column, 2)];
};
const seatCords = input.map(binaryId => binaryIdToCords(binaryId));

const cordsToSeatId = function(cordTuplet) {
	return cordTuplet[1] + cordTuplet[0] * 8;
};
const seatIds = seatCords.map(cordTuplet => cordsToSeatId(cordTuplet));

const maxNumberInArray = function(array) {
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		max = Math.max(max, array[i]);
	}
	return max;
};

const findMySeat = function(seatIds) {
	const stoArray = [];
	for (let i = 0; i <= maxNumberInArray(seatIds); i++) {
		stoArray[i] = true;
	}
	for (let i = 0; i < seatIds.length; i++) {
		stoArray[seatIds[i]] = false;
	}
	for (let i = 0; i < stoArray.length; i++) {
		if (stoArray[i] && !stoArray[i - 1] && !stoArray[i + 1]) return i;
	}
};
console.log(findMySeat(seatIds));
