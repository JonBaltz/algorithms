const howManyOn = function(n) {
	return Math.floor(Math.sqrt(n));
};

console.assert(howManyOn(1) === 1, "works for one");
console.assert(howManyOn(6) === 2, "works for six");
console.assert(howManyOn(30) === 5, "works for five");
