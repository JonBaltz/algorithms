const Stack = function() {
	this.length = 0;
	this.storage = [];
	this.min = [];
	this.minLength = 0;
}

Stack.prototype.push = function(value) {
	this.length++;
	this.storage.push(value);
	if (this.min[this.minLength -1] >= value) {
		this.min.push(value);
	}
}

Stack.prototype.pop = function() {
	if (this.length === 0) {
		return undefined;
	}
	this.length--;
	if (this.min[this.minLength - 1] === this.storage[this.length - 1]) {
		this.min.pop();
	}
	return this.storage.pop();
}

Stack.prototype.size = function() {
	return this.length;
}

Stack.prototype.min = function() {
	return this.min[this.minLength - 1];
}

const myStack = new Stack();
myStack.push("1");
myStack.push("2");
console.assert(myStack.size() === 2, "increments size correctly");
console.assert(myStack.pop() === "2", "pops the last item");
console.assert(myStack.size() === 1, "decrements size correctly");
myStack.pop();
console.assert(myStack.pop() === undefined, "wont return an item popped from an empty array");
console.assert(myStack.size() === 0, "size is always positive or zero");
