const Tree = function(value) {
	this.value = value;
	this.children = [];
};

Tree.prototype.DFSelect = function(filter, depth = 0) {
	const arrs = [];
	if (filter(this.value, depth)) arrs.push([this.value]);
	let temp;
	for (let i = 0; i < this.children.length; i++) {
		temp = this.children[i].DFSelect(filter, depth + 1);
		if (temp) arrs.push(temp);
	}
	return [].concat(...arrs);
};

Tree.prototype.addChild = function(child) {
	if (!child || !(child instanceof Tree)) {
		child = new Tree(child);
	}
	if (!this.isDescendant(child)) {
		this.children.push(child);
	} else {
		throw new Error("That child is already a child of this tree");
	}
	return child;
};

Tree.prototype.isDescendant = function(child) {
	if (this.children.indexOf(child) !== -1) {
		return true;
	} else {
		for (let i = 0; i < this.children.length; i++) {
			if (this.children[i].isDescendant(child)) {
				return true;
			}
		}
	}
	return false;
};

Tree.prototype.removeChild = function(child) {
	let index = this.children.indexOf(child);
	if (index !== -1) {
		this.children.splice(index, 1);
	} else {
		throw new Error("That node is not an immediate child of this tree");
	}
};

(function () {
	console.log("Testing tree works");
	const root1 = new Tree(1);
	const branch2 = root1.addChild(2);
	const branch3 = root1.addChild(3);
	const noChild = new Tree(0);
	console.assert(root1.isDescendant(branch2) === true, "isDecendants is working");
	console.assert(root1.isDescendant(noChild) === false, "works for non-child");
	const leaf4 = branch2.addChild(4);
	console.assert(root1.isDescendant(leaf4) === true, "works for non-immediate children");
	branch2.removeChild(leaf4);
	console.assert(root1.isDescendant(leaf4) === false, "removes an item correctly");
})();

(function () {
	console.log("Testing that BFSearch works");
	const root1 = new Tree(1);
	const branch2 = root1.addChild(2);
	const branch3 = root1.addChild(3);
	const leaf4 = branch2.addChild(4);
	const leaf5 = branch2.addChild(5);
	const leaf6 = branch3.addChild(6);
	const leaf7 = branch3.addChild(7);
	console.assert(JSON.stringify(root1.DFSelect((val, depth) => val % 2)) === JSON.stringify([1, 5, 3, 7]), "filter using values works");
	console.assert(JSON.stringify(root1.DFSelect((val, depth) => depth === 1)) === JSON.stringify([2, 3]), "filter works with depths");
})();
