const BinaryHeap = function(comparator) {
	this._heap = [];
	this._compare = comparator || ((i, j) => i < j);
};

BinaryHeap.prototype.getRoot = function() {
	return this._heap[0];
};

BinaryHeap.prototype.insert = function(value) {
	const validateUpwards = index => {
		const parentIndex = Math.floor( (index - 1) / 2 );
		if (this._compare(this._heap[index], this._heap[parentIndex])) {
			let temp = this._heap[index];
			this._heap[index] = this._heap[parentIndex];
			this._heap[parentIndex] = temp;
			validateUpwards(parentIndex);
		}
	};
	this._heap.push(value);
	validateUpwards(this._heap.length - 1);
	return this;
};

BinaryHeap.prototype.removeRoot = function() {
	const validateDownwards = index => {
		const childIndices = [ index * 2 + 1, index * 2 + 2 ];
		const compareIndex = childIndices[1] >= this._heap.length || this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]]) ? childIndices[0] : childIndices[1];
		if (this._compare(this._heap[compareIndex], this._heap[index])) {
			let temp = this._heap[compareIndex];
			this._heap[compareIndex] = this._heap[index];
			this._heap[index] = temp;
			validateDownwards(compareIndex);
		}
	};
	this._heap[0] = this._heap.pop();
	validateDownwards(0);
	return this;
};

const test1 = new BinaryHeap();
console.assert(JSON.stringify(test1.insert(2)._heap) === JSON.stringify([2]), "adds a single item");
console.assert(JSON.stringify(test1.insert(1)._heap) === JSON.stringify([1, 2]), "adds another item and sorts correctly");
console.assert(JSON.stringify(test1.insert(3)._heap) === JSON.stringify([1, 2, 3]), "adds an item that doesn't need to sort");
console.assert(JSON.stringify(test1.insert(0)._heap) === JSON.stringify([0, 1, 3, 2]), "adds an item that is sorted to become the head");
console.assert(JSON.stringify(test1.removeRoot()._heap) === JSON.stringify([1, 2, 3]), "removes the root then sorts correctly");
console.assert(JSON.stringify(test1.removeRoot()._heap) === JSON.stringify([2, 3]), "correctly removes root with lopsided heap");
