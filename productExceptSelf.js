// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = function(nums) {
	const output = [];
	let prod = 1;
	for (let i = 0; i < nums.length; i++) {
		output[i] = prod;
		prod *= nums[i];
	}
	prod = 1;
	for (let i = 0; i < nums.length; i++) {
		output[nums.length - 1 - i] *= prod;
		prod *= nums[nums.length - 1 - i];
	}
	return output;
};

const test = productExceptSelf;
console.assert(JSON.stringify(test([1, 2, 3, 4])) === JSON.stringify([24, 12, 8, 6]), "works for 1, 2, 3, 4");
console.assert(JSON.stringify(test([3, 5, 8, 2])) === JSON.stringify([80, 48, 30, 120]), "works for 3, 5, 8, 2");
