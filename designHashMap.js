// https://leetcode.com/problems/design-hashmap/

class MyHashMap {
	constructor() {
		this.sto = {};
	}

	put(key, value) {
		this.sto[key] = value;
	}

	get(key) {
		if (typeof this.sto[key] === "number") return this.sto[key];
		return -1;
	}

	remove(key) {
		this.sto[key] = null;
	}
}

const test = new MyHashMap();
test.put(1, 1);
console.log(test.get(1), "1");
console.log(test.get(2), "-1");
test.put(2, 2);
test.put(2, 1);
console.log(test.get(2), "1");
test.remove(2);
console.log(test.get(2), "-1");
