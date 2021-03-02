// https://leetcode.com/problems/distribute-candies/solution/

const distributeCandies = function(candyType) {
	return Math.min(new Set(candyType).size, candyType.length / 2);
};

const t = distributeCandies;
console.assert(t([1, 1, 2, 2, 3, 3]) === 3);
console.assert(t([1, 1, 2, 3]) === 2);
console.assert(t([6, 6, 6, 6]) === 1);
