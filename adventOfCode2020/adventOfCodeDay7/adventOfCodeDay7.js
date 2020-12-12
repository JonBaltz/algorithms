const fs = require("fs");
const file = "./input.txt";
// const file = "./smallInput.txt";

const input = fs.readFileSync(file, "utf-8").trim().split("\n").map(property => {
	const splitKeyValue = property.split(" contain ");
	const key = splitKeyValue[0].split(" ");
	const values = splitKeyValue[1].split(".")[0].split(", ").map(item => `"${Number(item.split(" ")[0]) ? item.split(" ")[0] : 0}:${item.split(" ")[1]} ${item.split(" ")[2]}"`).join(", ");
	return `"${key[0]} ${key[1]}": [${values}]`;
}).join(",\n");
const bags = JSON.parse("{" + input + "}");

const reverseObject = function(object) {
	const result = {};
	for (const property in object) {
		const children = object[property];
		for (let i = 0; i < children.length; i++) {
			const child = children[i].split(":")[1];
			if (result[child]) result[child].push(property);
			if (!result[child]) result[child] = [property];
		}
	}
	return result;
};
const reversed = reverseObject(bags);

const countParents = function(target, object) {
	const hash = {};
	const recurse = function(str) {
		if (hash[str]) return;
		hash[str] = true;
		if (!object[str]) return;
		for (let i = 0; i < object[str].length; i++) {
			recurse(object[str][i]);
		}
	};
	recurse(target);
	return Object.keys(hash).length - 1;
};
const shinyGoldParents = countParents("shiny gold", reversed);
console.log(shinyGoldParents);

const countChildren = function(target, object) {
	if (!object[target]) return 0;
	let count = 0;
	for (let i = 0; i < object[target].length; i++) {
		const split = object[target][i].split(":");
		count += Number(split[0]);
		count += Number(split[0]) * countChildren(split[1], object);
	}
	return count;
};
const shinyGoldChildren = countChildren("shiny gold", bags);
console.log(shinyGoldChildren);
