const deepEquals = function(apple, orange) {
	if (typeof apple === "object" && typeof orange === "object") {
		if (Array.isArray(apple) && Array.isArray(orange)) {
			return JSON.stringify(apple) === JSON.stringify(orange);
		}
		let ak = Object.keys(apple);
		let ok = Object.keys(orange);
		for (let i = 0; i < ak.length; i++) {
			if (!deepEquals(apple[ak[i]], orange[ak[i]])) {
				return false;
			}
		}
		return ak.length === ok.length;
	}
	return apple === orange;
};

console.assert(deepEquals({"a":1, "b":{"c":3}}, {"a":1, "b":{"c":3}}) === true, "finds equality");
console.assert(deepEquals({"a":1, "b":{"c":3}}, {"a":1, "b":{"c":6}}) === false, "finds equality");
console.assert(deepEquals({"b":{"c":3}, "a":1}, {"a":1, "b":{"c":3}}) === true, "order of keys doesn't matter");
console.assert(deepEquals([1, 2, 3], [1, 2, 3]), "works for elements that are arrays");
console.assert(deepEquals([1, 2, 3], [3, 2, 1]) === false, "order matters for arrays");
console.assert(deepEquals({"a":1}, {"a":1, "b":2}) === false, "works with an unequal number of items");
console.assert(deepEquals({}, {}), "works for empty items");
console.assert(deepEquals({"foo":1}, {"foo":"1"}) === false, "cares about typing");
