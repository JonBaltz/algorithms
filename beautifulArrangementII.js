// https://leetcode.com/problems/beautiful-arrangement-ii/

const constructArray = function(n, k) {
	const array = [];
	let frog = 1;
	let duck = 1 + k;
	let swan = 1 + duck;
	while (array.length < n) {
		if (duck) {
			array.push(frog++);
			if (frog <= duck) array.push(duck--);
			if (frog > duck) duck = null;
		} else array.push(swan++);
	}
	return array;
};
