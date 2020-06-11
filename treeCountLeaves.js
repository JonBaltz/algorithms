const Tree = function(value) {
	this.value = value;
	this.children = [];
};

Tree.prototype.countLeaves = function() {
	if (!this.children.length) return 1;
	let count = 0;
	for (let i = 0; i < this.children.length; i++) {
		count += this.children[i].countLeaves();
	}
	return count;
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
		return false;
	}
};

Tree.prototype.removeChild = function(child) {
	let index = this.children.indexOf(child);
	if (index !== -1) {
		this.children.splice(index, 1);
	} else {
		throw new Error("That node is not an imediate child of this tree");
	}
};

(function() {
	const root1 = new Tree(1);
	console.assert(root1.countLeaves() === 1, "a lone root is a leaf");
	const branch2 = root1.addChild(2);
	console.assert(root1.countLeaves() === 1, "works for a root with one child");
	const branch3 = root1.addChild(3);
	const leaf4 = branch2.addChild(4);
	console.assert(root1.countLeaves() === 2, "works for two branches and one leaf");
	const leaf5 = branch2.addChild(5);
	const leaf6 = branch3.addChild(6);
	const leaf7 = branch3.addChild(7);
	console.assert(root1.countLeaves() === 4, "works for 4 leaves");
})();
