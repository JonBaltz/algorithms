const firstNonRepeatedCharacter = function(string) {
	const counts = {};
	for (let i = 0; i < string.length; i++) {
		if (!counts[string[i]]) {
			counts[string[i]] = [true, i];
		} else {
			counts[string[i]][0] = false;
		}
	}
	let first = null;
	for (let char in counts) {
		if (counts[char][0] && (first === null || counts[char][1] < first)) {
			first = counts[char][1];
		}
	}
	return first !== null ? string[first] : first;
}

console.assert(firstNonRepeatedCharacter("aabcac") === "b", "works for a single non-repeated item");
console.assert(firstNonRepeatedCharacter("aabccd") === "b", "works for multiple non-repeated chars");
console.assert(firstNonRepeatedCharacter("aa") === null, "works for only repeated chars");
console.assert(firstNonRepeatedCharacter("") === null, "returns null for an empty string");
console.assert(firstNonRepeatedCharacter("aaA") === "A", "uppercase and lowercase characters are considered different");
