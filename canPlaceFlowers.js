// https://leetcode.com/problems/can-place-flowers/

const canPlaceFlowers = function(flowerbed, n) {
	let count = 0;
	for (let i = 0; i < flowerbed.length; i++) {
		if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
			flowerbed[i] = true;
			count++;
		}
	}
	// if we dont want to mutate the array we could iterate over and remove true
	return count >= n;
};

console.assert(canPlaceFlowers([1, 0, 0, 0, 1], 1), "can plant 1 flower");
console.assert(!canPlaceFlowers([1, 0, 0, 0, 1], 2), "cannot place two flowers");
