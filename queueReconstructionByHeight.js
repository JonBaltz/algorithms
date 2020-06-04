// https://leetcode.com/problems/queue-reconstruction-by-height/

const reconstructQueue = function(people) {
	if (!people.length) return people;
	people.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1];
		} else {
			return b[0] - a[0];
		}
	});
	let result = [];
	for (let i = 0; i < people.length; i++) {
		result.splice(people[i][1], 0, people[i]);
	}
	return result;
}

console.assert(JSON.stringify(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])) === JSON.stringify([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]), "works for a large example", reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
