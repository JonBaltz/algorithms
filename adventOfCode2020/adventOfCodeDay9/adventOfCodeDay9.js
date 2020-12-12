const fs = require("fs");
const getData = function(file = "input.txt", pre = 25) {
	const data = fs.readFileSync(`./${file}`, "utf-8").trim().split("\n");
	return [data.slice(0, pre), data.slice(pre)];
};
const input = getData();
// const input = getData("smallInput.txt", 5);

const isSum = function(target, numbers) {
	const hash = {};
	for (let i = 0; i < numbers.length; i++) {
		if (hash[numbers[i]]) return true;
		hash[target - numbers[i]] = true;
	}
	return false;
};

const findFirstError = function(data) {
	const previous = [...data[0]];
	for (let i = 0; i < data[1].length; i++) {
		if (!isSum(data[1][i], previous)) return data[1][i];
		previous.shift();
		previous.push(data[1][i]);
	};
};
const firstError = findFirstError(input);
console.log(firstError);

const contiguousSum = function(input, error) {
	for (let i = 0; i < input.length; i++) {
		let sum = Number(input[i]);
		for (let j = i + 1; j < input.length; j++) {
			sum += Number(input[j]);
			if (sum === Number(error)) {
				return input.slice(i, j + 1);
			} else if (sum > error) break;
		}
	}
};
const contiguous = contiguousSum([...input[0], ...input[1]], firstError);

const sumBookends = function(array) {
	let small = Number(array[0]);
	let large = Number(array[0]);
	for (let i = 0; i < array.length; i++) {
		small = Math.min(small, Number(array[i]));
		large = Math.max(large, Number(array[i]));
	}
	return small + large;
};
const bookends = sumBookends(contiguous);
console.log(bookends);
