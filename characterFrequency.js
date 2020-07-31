const characterFrequency = function (str) {
	const counts = {};
	for (let i = 0; i < str.length; i++) {
		if (!counts[str[i]]) {
			counts[str[i]] = 1;
		} else {
			counts[str[i]]++;
		}
	}
	const result = Object.entries(counts);
	result.sort((a, b) => {
		if (b[1] - a[1]) {
			return b[1] - a[1];
		}
		if (a[0] > b[0]) {
			return 1;
		} else {
			return -1;
		}
	});
	return result;
};

console.log(characterFrequency("mississippi"));
console.log(characterFrequency("miaaiaaippi"));
console.log(characterFrequency("mmmaaaiiibbblll"));
