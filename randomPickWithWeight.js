// https://leetcode.com/problems/random-pick-with-weight/

const Solution = function(w) {
	this.upTo = [];
	this.currSum = 0;
	for (let i = 0; i < w.length; i++) {
		this.currSum += w[i];
		this.upTo.push(this.currSum);
	}
}

Solution.prototype.pickIndex = function() {
	let rando = Math.floor(Math.random() * this.currSum);
	for (let i = 0; i < this.upTo.length; i++) {
		if (rando < this.upTo[i]) return i;
	}	
}

const test = new Solution([1, 3]);
console.log(test.pickIndex());
console.log(test.pickIndex());
console.log(test.pickIndex());
console.log(test.pickIndex());
