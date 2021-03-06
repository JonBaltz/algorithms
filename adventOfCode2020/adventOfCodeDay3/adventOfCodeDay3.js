const fs = require("fs");
const mountain = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

const diagonalTreeCounter = function(slope) {
	const yx = [0,0];
	const width = mountain[0].length;
	let count = 0;
	while (yx[0] < mountain.length) {
		if (mountain[yx[0]][yx[1]] === "#") count++;
		yx[0] += slope[0];
		yx[1] = (yx[1] + slope[1]) % width;
	}
	return count;
};
console.log(diagonalTreeCounter([1, 3]));

const multiplyAllSlope = function(slopes) {
	const sumArray = [];
	for (let i = 0; i < slopes.length; i++) {
		sumArray.push(diagonalTreeCounter(slopes[i]));
	}
	let sum = 1;
	for (let i = 0; i < sumArray.length; i++) {
		sum *= sumArray[i];
	}
	return sum;
};
console.log(multiplyAllSlope([[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]]));

