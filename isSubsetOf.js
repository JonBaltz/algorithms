Array.prototype.isSubsetOf = function (array) {
	const hash = {};
	for (const element of array) {
		hash[element] = 1;
	}
	for (const element of this) {
		if (!hash[element]) {
			return false;
		}
	}
	return true;
};

const arr1 = ["hello", "world", "whatever", "whatever2"];
const arr2 = ["whatever", "whatever2"];
const arr3 = ["hello", "world"];
const arr4 = ["hello", "pants"];

console.assert(arr1.isSubsetOf(arr2) === false, "non-subsets return false");
console.assert(arr2.isSubsetOf(arr4) === false, "non-subsets still return false");
console.assert(arr2.isSubsetOf(arr1) === true, "substes should return true");
console.assert(arr4.isSubsetOf(arr1) === false, "returns false when not a subset");
console.assert(arr2.isSubsetOf(arr1) === true, "an array is a subset of itself");
console.assert(arr3.isSubsetOf(arr1) === true, "testing real subsets again");
