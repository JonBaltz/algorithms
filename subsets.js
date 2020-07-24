// https://leetcode.com/problems/subsets/

const subsets = function (nums) {
	nums.sort((a, b) => a - b);
	const sets = [[]];
	const recurse = function (array, previous) {
		let current;
		for (let i = 0; i < array.length; i++) {
			current = [...previous, array[i]];
			sets.push(current);
			recurse(array.slice(i + 1), current);
		}
	};
	recurse(nums, []);
	return sets;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([1, 2]));
