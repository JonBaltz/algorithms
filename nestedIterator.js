// https://leetcode.com/problems/flatten-nested-list-iterator/

class NestedIterator {
	constructor(nestedList) {
		this.list = denest(nestedList);
		this.pointer = 0;
	}

	hasNext() {
		return this.pointer !== this.list.length;
	}

	next() {
		if (!this.hasNext()) return null;
		return this.list[this.pointer++];
	}
}

const denest = function(array = []) {
	const res = [];
	array.map(item => {
		if (item.isInteger()) {
			res.push(item.getInteger());
		} else res.push(...denest(item.getList()));
	});
	return res;
};
