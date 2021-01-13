// https://leetcode.com/problems/boats-to-save-people/

const numRescueBoats = function(people, limit) {
	let boats = 0;
	people.sort((a, b) => a - b);
	let l = 0, r = people.length - 1;
	while (r >= l) {
		if (people[l] + people[r--] <= limit) l++;
		boats++;
	}
	return boats;
};

const t = numRescueBoats;
console.assert(t([1, 2], 3) === 1, "case 1");
console.assert(t([3, 2, 2, 1], 3) === 3, "case 2");
console.assert(t([3, 5, 3, 4], 5) === 4, "case 3");

