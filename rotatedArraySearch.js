const rotatedArraySearch = function (rotated, target, start, end) {
	start = start === undefined ? 0 : start;
	end = end === undefined ? rotated.length - 1 : end;
	const midDex = start + Math.floor((end - start) / 2);
	if (rotated[midDex] === target) {
		return midDex;
	} else if (
		start >= end ||
		(rotated[end] < target && target < rotated[start]) ||
		(rotated[start] < rotated[end] && (target < rotated[start] || target > rotated[end]))
	) {
		return null;
	} else if (
		(rotated[start] < rotated[midDex] && rotated[start] <= target && target <= rotated[midDex]) ||
		(rotated[midDex] < rotated[end] && !(rotated[midDex] <= target && target <= rotated[end]))
	) {
		return rotatedArraySearch(rotated, target, start, midDex - 1);
	} else {
		return rotatedArraySearch(rotated, target, midDex + 1, end);
	}
};

console.assert(rotatedArraySearch([0, 1, 2], 2) === 2, "testing normal binary search");
console.assert(rotatedArraySearch([0, 1, 2, 3, 4, 5], 4) === 4, "works with non-rotated arrays");
console.assert(
	rotatedArraySearch([0, 2, 4, 6, 8], 7) === null,
	"will return null for an item missing that is between the first and last value"
);
console.assert(rotatedArraySearch([0, 1, 2, 3], 100) === null, "returns nul for a value outside the first and last");
console.assert(
	rotatedArraySearch([3, 4, 5, 6, 7, 0, 1, 2], 5) === 2,
	"finds an item in the first half of an array rotated foreward more than 50%",
	rotatedArraySearch([3, 4, 5, 6, 7, 0, 1, 2], 5)
);
console.assert(
	rotatedArraySearch([3, 4, 5, 6, 7, 0, 1, 2], 1) === 6,
	"finds an item in the second half of an array rotated foreward more than 50%"
);
console.assert(
	rotatedArraySearch([6, 7, 0, 1, 2, 3, 4, 5], 0) === 2,
	"finds an item in the first half of an array rotated foreward less than 50%"
);
console.assert(
	rotatedArraySearch([6, 7, 0, 1, 2, 3, 4, 5], 7) === 1,
	"finds a large item in the first half of an array rotated foreward less than 50%"
);
console.assert(
	rotatedArraySearch([6, 7, 0, 1, 2, 3, 4, 5], 3) === 5,
	"finds an item in the second half of an array rotated foreward less than 50%"
);
console.assert(rotatedArraySearch([8, 10, 12, 2, 4, 6], 5) === null, "extra test 1");
console.assert(rotatedArraySearch([8, 10, 12, 2, 4, 6], 9) === null, "extra test 2");
console.assert(rotatedArraySearch([12, 2, 4, 6, 8, 10], 1) === null, "extra test 3");
console.assert(rotatedArraySearch([12, 2, 4, 6, 8, 10], 7) === null, "extra test 4");
