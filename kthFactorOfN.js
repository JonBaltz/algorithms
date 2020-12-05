// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/569/week-1-december-1st-december-7th/3554/

const kthFactor = function(n, k) {
	for (let i = 0; i <= n; i++) {
		if (n % i === 0) {
			if (!--k) return i;
		}
	}
	return -1;
};

console.log(kthFactor(12, 3));
console.log(kthFactor(7, 2));
console.log(kthFactor(4, 4));
