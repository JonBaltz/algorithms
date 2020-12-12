const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\n").map(string => Number(string));

const product = function(nums) {
	let res = 1;
	for (let i = 0; i < nums.length; i++) {
		res *= nums[i];
	}
	return res;
};

// Time complexity: O(n)
// Space complexity: O(n)
const twoSum = function(array, target = 2020) {
	const hash = {};
	for (let i = 0 ; i < array.length; i++) {
		if (hash[array[i]] !== undefined) return [hash[array[i]], array[i]];
		hash[target - array[i]] = array[i];

	}
}
console.log(product(twoSum(input)));

// Time complexity: O(n^2)
// Space complexity: O(1)
const threeSum = function(array, target = 2020) {
	array.sort((a, b) => a - b);
	for (let i = 0; i < array.length - 2; i++) {
		if (array[i] === array[i - 1]) continue;
		let top = array.length - 1;
		let bot = i + 1;
		while (top > bot) {
			if (array[i] + array[bot] + array[top] === target) return [array[i], array[bot], array[top]];
			if (array[i] + array[bot] + array[top] > target) {
				top--;
			} else bot++;
		}
	}
};

console.log(product(threeSum(input)));

