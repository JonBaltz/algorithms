const Stack = function() {
	this.length = 0;
	this.storage = [];
	this.minStorage = [];
}

Stack.prototype.push = function(value) {
	this.length++;
	this.storage.push(value);
	if (!this.minStorage[0] || this.minStorage[this.minStorage.length -1] >= value) {
		this.minStorage.push(value);
	}
}

Stack.prototype.pop = function() {
	if (this.length === 0) {
		return undefined;
	}
	this.length--;
	const item = this.storage.pop();
	if (this.minStorage[this.minStorage.length - 1] === item) {
		this.minStorage.pop();
	}
	return item;
}

Stack.prototype.size = function() {
	return this.length;
}

Stack.prototype.min = function() {
	return this.minStorage[this.minStorage.length - 1];
}

const myStack = new Stack();
console.assert(myStack.min() === undefined, "works with no min");
myStack.push(1);
console.assert(myStack.min() === 1, "works with one item", myStack.min());
myStack.push(2);
console.assert(myStack.min() === 1, "doesn't update if not min");
console.assert(myStack.size() === 2, "increments size correctly");
console.assert(myStack.pop() === 2, "pops the last item");
console.assert(myStack.min() === 1, "min doesn't change when larger item was popped");
console.assert(myStack.size() === 1, "decrements size correctly");
myStack.pop();
console.assert(myStack.pop() === undefined, "wont return an item popped from an empty array");
console.assert(myStack.size() === 0, "size is always positive or zero");
