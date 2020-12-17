const fs = require("fs");
const getInput = function(file) {
	const sections = fs.readFileSync(`./${file}.txt`, "utf-8").trim().split("\n\n");
	return [sections[0].split("\n"), sections[1].split("\n")[1].split(",").map(num => Number(num)), sections[2].split("\n").slice(1).map(ticket => ticket.split(",").map(num => Number(num)))];
};
// const system = getInput("smallInput");
// const system = getInput("smallInput2");
const system = getInput("input");

const getOnlyRanges = function(input) {
	return input.map(line => line.split(": ").slice(1)).join(" or ").split(" or ").map(str => str.split("-").map(digit => Number(digit)));
};
const ranges = getOnlyRanges(system[0]);

const checkValid = function(ticket, ranges, callback) {
	let valid = true;
	for (const number of ticket) {
		let fit = false;
		for (const range of ranges) {
			if (number >= range[0] && number <= range[1]) {
				fit = true;
				break;
			}
		}
		if (!fit) {
			callback(false, number);
			valid = false;
		}
	}
	valid && callback(true, null);
};

const getInvalidValues = function(ranges, tickets) {
	const invalid = [];
	tickets.map(ticket => checkValid(ticket, ranges, (valid, number) => {if (!valid) invalid.push(number)}));
	return invalid;
};
const invalidValues = getInvalidValues(ranges, system[2]);
console.log(invalidValues.length && invalidValues.reduce((acc, red) => acc + red));

const removeInvalid = function(ranges, list) {
	const valid = [];
	list.map(ticket => checkValid(ticket, ranges, fit => fit && valid.push(ticket)))
	return valid;
};
const onlyValid = removeInvalid(ranges, system[2]);

const getTaggedRanges = function(input) {
	return input.map(line => [line.split(": ")[1].split(" or ").map(ra => ra.split("-").map(str => Number(str))), line.split(": ")[0]]);
};
const tagged = getTaggedRanges(system[0]);

const solveSystem = function(ranges, tickets) {
	const conflicts = [];
	tickets[0].forEach(a => conflicts.push({}));
	for (const ticket of tickets) {
		for (let i = 0; i < ticket.length; i++) {
			for (const range of ranges) {
				let fit = false;
				if (ticket[i] >= range[0][0][0] && ticket[i] <= range[0][0][1]) fit = true;
				if (ticket[i] >= range[0][1][0] && ticket[i] <= range[0][1][1]) fit = true;
				if (!fit) conflicts[i][range[1]] = true;
			}
		}
	}
	const key = [];
	const left = {};
	ranges.forEach(range => left[range[1]] = true); 
	while (key.length < ranges.length || key.filter(item => item !== undefined).length < ranges.length) {
		for (let i = 0; i < conflicts.length; i++) {
			if (key[i] !== undefined) continue;
			const arr = [];
			for (const tag in left) {
				if (conflicts[i][tag]) continue;
				arr.push(tag);
			}
			if (arr.length === 1) {
				key[i] = arr[0];
				delete left[arr[0]];
			}
		}
	}
	return key;
};

const multiplyDepartures = function(tags, ticket) {
	let sum = 1;
	for (let i = 0; i < tags.length; i++) {
		if (!tags[i].includes("departure")) continue;
		sum *= ticket[i];
	}
	return sum;
};
console.log(multiplyDepartures(solveSystem(tagged, [system[1], ...onlyValid]), system[1]));
