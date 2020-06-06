const coinArray = [1, 2, 5, 10, 20, 50, 100, 200];

const makeChange = function(total, coins = coinArray) {
	let count = 0;
	let curr;
	for (let i = 0; i < coins.length; i++) {
		curr = total - coins[i];
		if (curr === 0) {
			count++;
			break;
		} else if (curr < 0) {
			break;
		}
		count += makeChange(curr, coins.slice(0, i + 1));
	}
	return count;
};

console.assert(makeChange(1) === 1, "only one way to make a penny");
console.assert(makeChange(4) === 3, "three ways to make four cents");
console.assert(makeChange(10) === 11, "there are 11 ways to make 10 cents");
console.assert(makeChange(200) === 73682, "works for a number that includes all coins");
// console.log(makeChange(200));
