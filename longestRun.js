const longestRun = function (str) {
	let max = [0, 0];
	let startRun = 0;
	for (let i = 1; i <= str.length; i++) {
		if (str[i] !== str[startRun]) {
			if (i - 1 - startRun > max[1] - max[0]) {
				max = [startRun, i - 1];
			}
			startRun = i;
		}
	}
	return max;
};

console.log(longestRun("abcde"));
console.log(longestRun("abababab"));
console.log(longestRun("aabbaacca"));
console.log(longestRun("aaabbbb"));
