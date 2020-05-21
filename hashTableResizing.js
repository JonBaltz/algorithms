const getIndexBelowMaxForKey = function (key, max) {
	let hash = 0;
	for (let i = 0; i < key.length; i++) {
		hash = (hash << 5) + hash + key.charCodeAt(i);
		hash = hash & hash;
		hash = Math.abs(hash);
	}
	return hash % max;
};

const HashTable = function () {
	this._storage = [];
	this._size = 0;
	this._limit = 4;
}

HashTable.prototype._resize = function (change) {
	this._limit *= change;
	const items = [];
	for (let i = 0; i < this._storage.length; i++) {
		if (this._storage[i]) {
			for (let j = 0; j < this._storage[i].length; j++) {
				if (this._storage[i][j]) {
					items.push(this._storage[i][j]);
				}
			}
		}
	}
	this._storage = [];
	for (let i = 0; i < items.length; i++) {
		const index = getIndexBelowMaxForKey(toString(items[i][0]), this._limit);
		if (!this._storage[index]) {
			this._storage[index] = [items[i]];
		} else {
			this._storage[index].push(items[i]);
		}
	}
}

HashTable.prototype.insert = function (key, value) {
	if (typeof key !== "string" && typeof key !== "number") {
		return;
	}
	if (++this._size >= this._limit * 3 / 4) {
		this._resize(2);
	}
	const index = getIndexBelowMaxForKey(key, this._limit);
	if (!this._storage[index]) {
		this._storage[index] = [[key, value]];
	} else {
		for (let i = 0; i < this._storage[index].length; i++) {
			if (this._storage[index] && this._storage[index][i][0] === key) {
				this._storage[index][i][1] = value;
				this._size--;
				return;
			}
		}
		this._storage[index].push([key, value]);
	}
}

HashTable.prototype.retrieve = function (key) {
	if (typeof key !== "string" && typeof key !== "number") {
		return;
	}
	const index = getIndexBelowMaxForKey(key, this._limit);
	if (this._storage[index]) {
		for (let i = 0; i < this._storage[index].length; i++) {
			if (this._storage[index][i] && this._storage[index][i][0] === key) {
				return this._storage[index][i][1];
			}
		}
	}
	return undefined;
}

HashTable.prototype.remove = function (key) {
	if (typeof key !== "string" && typeof key !== "number") {
		return;
	}
	if (--this._size <= this._limit / 4 && this._limit > 4) {
		this._resize(0.5);
	}
	const index = getIndexBelowMaxForKey(key, this._limit);
	if (this._storage[index]) {
		for (let i = 0; i < this._storage[index].length; i++) {
			if (this._storage[index][i] && this._storage[index][i][0] === key) {
				this._storage[index][i] = undefined;
				return;
			}
		}
	}
	this._size++;
}

const myTable = new HashTable();
myTable.insert("jon", 20);
myTable.insert("jon", "cool");
myTable.insert("boat", "floats");
myTable.remove("boat");
myTable.remove("boat");
console.assert(myTable.retrieve("boat") === undefined, "correctly removes an item");
console.assert(myTable.retrieve("jon") === "cool", "correctly retrieves an item");
console.assert(myTable._limit === 4, "begins at limit of 4");
myTable.insert(2, 2);
console.assert(myTable.retrieve(2) === 2, "correctly retrieves an item with a number key");
console.assert(myTable.retrieve("2") === undefined, "returns undefined for a missing item");
myTable.insert("2", "2");
console.assert(myTable.retrieve("2") === "2", "correctly retrieves an item");
console.assert(myTable._limit === 8, "doubles in size");
