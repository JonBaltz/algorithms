// In a given array of length 2N, there are N+1 unique elements, and one of these elements is repeated N times. Find that element.
//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = function (array) {
	const seen = {};
	for (let i = 0; i < array.length; i++) {
		if (seen[array[i]]) {
			return array[i];
		}
		seen[array[i]] = true;
	}
}

console.assert(repeatedNTimes([1, 2, 3, 3]) === 3, "works for simple example", repeatedNTimes([1, 2, 3, 3]));
console.assert(repeatedNTimes([2, 1, 2, 5, 3, 2]) === 2, "finds correct element");
console.assert(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]) === 5, "third test case");
