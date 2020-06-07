const powerSet = function(str) {
	const hash = {"":1};
	str = str.split("").sort().filter((val, index, self) => self.indexOf(val) === index).join("");
	const recurse = function(sub) {
		if (hash[sub]) return;
		hash[sub] = 1;
		if (sub.length === 1) return;
		for (let i = 0; i < sub.length; i++) {
			recurse(sub.substring(0, i) + sub.substring(i + 1, sub.length));
		}
	}
	recurse(str);
	return Object.keys(hash);
};

const abc = powerSet("abc");
console.assert(abc.length === 8, "powerSet returns the correct number of items");
console.assert(abc.indexOf("") !== -1, "includes an empty string");
console.assert(abc.indexOf("abc") !== -1, "includes the og string");
console.assert(abc.indexOf("bc") !== -1, "includes substrings");
console.assert(powerSet("ddbbccaa").length === 16, "handles repeats");
