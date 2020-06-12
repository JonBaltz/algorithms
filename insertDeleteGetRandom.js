// https://leetcode.com/problems/insert-delete-getrandom-o1/

const RandomizedSet = function() {
	this.store = {};
	this.arr = [];
};

RandomizedSet.prototype.insert = function(val) {
	if (!this.store[val]) {
		this.store[val] = 1;
		this.arr.push(val);
		return true;
	}
	return false;
};

RandomizedSet.prototype.remove = function(val) {
	if (this.store[val]) {
		this.store[val] = 0;
		return true;
	}
	return false;
};

RandomizedSet.prototype.getRandom = function() {
	let dex = Math.floor(Math.random() * this.arr.length);
	if (this.store[this.arr[dex]]) {
		return this.arr[dex];
	}
	return this.getRandom();
};

const set = new RandomizedSet();
console.assert(set.insert(1) === true, "adds items");
console.assert(set.insert(1) === false, "doesn't add the same item twice");
console.assert(set.getRandom() === 1, "if only one item returns that item");
set.insert(2);
const oneOrTwo = set.getRandom();
console.assert(oneOrTwo === 1 || oneOrTwo === 2, "randomly takes an option");
console.assert(set.remove(1) === true, "removes the item");
console.assert(set.getRandom() === 2, "if only one ityem returns it");
