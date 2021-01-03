// https://leetcode.com/problems/beautiful-arrangement/

const countArrangement = function(n) {
	let count = 0;
	const recurse = function(position, options) {
		if (!options.length) return ++count;
		for (let i = 0; i < options.length; i++) {
			if (options[i] % position === 0 || position % options[i] === 0) {
				recurse(position + 1, [...options.slice(0, i), ...options.slice(i + 1)]);
			}
		};
	};
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	recurse(1, arr);
	return count;
};

console.log(countArrangement(2));
for (let i = 1; i <= 15; i++) {
	console.log(`i: ${i}`, countArrangement(i));
}
