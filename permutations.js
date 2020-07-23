// https://leetcode.com/problems/permutations/

const permute = function (nums, existing = []) {
	const permutations = [];
	let spliced;
	for (let i = 0; i < nums.length; i++) {
		spliced = [...nums];
		spliced.splice(i, 1);
		permutations.push(...permute(spliced, [...existing, nums[i]]));
	}
	return permutations.length ? permutations : [existing];
};

console.assert(permute([1, 2, 3]).length === 6, "should return an array of correct length for 3 items");
const test1 = permute([1, 2, 3, 4]);
console.assert(test1.length === 24, "should return an array with the correct length for 4 items");
for (let i = 0; i < test1.length; i++) {
	console.assert(test1.indexOf(test1[i]) === i, "should return an array with no duplicates");
}
