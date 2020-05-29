// https://leetcode.com/problems/min-stack/

const MinStack = function() {
	this.storage = [];
	this.minStorage = [];
}

MinStack.prototype.push = function(val) {
	if (this.minStorage.length === 0 || val <= this.minStorage[this.minStorage.length - 1]) {
		this.minStorage.push(val);
	}
	this.storage.push(val);
}

MinStack.prototype.pop = function() {
	if (this.minStorage[this.minStorage.length - 1] === this.storage[this.storage.length - 1]) {
		this.minStorage.pop();
	}
	return this.storage.pop();
}

MinStack.prototype.top = function() {
	return this.storage[this.storage.length - 1];
}

MinStack.prototype.getMin = function() {
	return this.minStorage[this.minStorage.length - 1];
}

const object = new MinStack();
console.assert(object.top() === undefined, "a stack begins empty");
console.assert(object.getMin() === undefined, "a min value states as nothing");
object.push(-2);
console.assert(object.top() === -2, "an item adds correctly");
console.assert(object.getMin() === -2, "the first item added should be the min");
object.push(0);
console.assert(object.getMin() === -2, "only updates min if smaller");
console.assert(object.top() === 0, "storage updates correctly");
object.push(-3);
console.assert(object.getMin() === -3, "updates min if smaller");
console.assert(object.pop() === -3, "correctly pops the last item");
console.assert(object.getMin() === -2, "if the min is popped, get a new min");
console.assert(object.top() === 0, "correectly pops the last item");
