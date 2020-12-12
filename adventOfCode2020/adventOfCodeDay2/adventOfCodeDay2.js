const fs = require("fs");
const passwords = fs.readFileSync("./input.txt", "utf-8").trim().split("\n").map(password => password.split(" "));

const countValidWords = function(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		const nums = arr[i][0].split("-");
		const letter = arr[i][1][0];
		const pass = arr[i][2];
		let charCount = 0;
		for (let j = 0; j < pass.length; j++) {
			if (pass[j] === letter) charCount++;
		}
		if (charCount >= nums[0] && charCount <= nums[1]) count++;
	}
	return count;
};
console.log(countValidWords(passwords));

const countValidWords2 = function(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		const nums = arr[i][0].split("-");
		const letter = arr[i][1][0];
		const pass = arr[i][2];
		temp = 0;
		if (pass[nums[0] - 1] === letter) temp++;
		if (pass[nums[1] - 1] === letter) temp++;
		if (temp === 1) {
			count++;
		}
	}
	return count;
};
console.log(countValidWords2(passwords));

