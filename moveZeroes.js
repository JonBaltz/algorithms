// https://leetcode.com/problems/move-zeroes/

const moveZeroes = function(nums) {
	let p = 0;
	let z = 0;
	while (p < nums.length - 1) {
		p++;
		if (nums[z] === 0) {
			if (nums[p] !== 0) {
				nums[z++] = nums[p];
				nums[p] = 0;
			}
		} else {
			z++;
		}
	}
	return nums;
}

console.assert(JSON.stringify(moveZeroes([1])) === JSON.stringify([1]), "works for a single item");
console.assert(JSON.stringify(moveZeroes([1, 2, 3, 0, 0])) === JSON.stringify([1, 2, 3, 0, 0]), "works for an array that already works");
