// https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
	const storage = {};
	for (let i = 0; i < nums.length; i++) {
		let opp = target - nums[i];
		if (storage[opp] !== undefined) {
			return [storage[opp], i];
		}
		storage[nums[i]] = i;
	}
	console.log(storage);
}

console.assert(JSON.stringify(twoSum([1, 2, 7, 11, 15], 9)) === JSON.stringify([1, 2]), "works for sorted array", twoSum([1, 2, 7, 11, 15], 9));
console.assert(JSON.stringify(twoSum([7, 3, 2, 1, 15, 11], 9)) === JSON.stringify([0, 2]), "works for unsortedArray", twoSum([7, 3, 2, 1, 15, 11], 9));
