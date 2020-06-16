const Tree = function(value) {
	this.value = value;
	this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
	const stoByDepth = {};
	const recurse = function(node, depth) {
		if (filter(node.value, depth)) {
			if (stoByDepth[depth]) {
				stoByDepth[depth].push(node.value);
			} else {
				stoByDepth[depth] = [node.value];
			}
		}
		for (let i = 0; i < node.children.length; i++) {
			recurse(node.children[i], depth + 1);
		}
	};
	recurse(this, 0);
	return [].concat(...Object.values(stoByDepth));
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
			if (this.children[i].isDescendant(child)) return true;
		}
		return false;
	}
};

Tree.prototype.removeChild = function(child) {
	let index = this.children.indexof(child);
	if (index !== -1) {
		this.children.splice(index, 1);
	} else {
		throw new Error("That node is not an immediate child of this tree");
	}
};

const root1 = new Tree(1);
const branch2 = root1.addChild(2);
const branch3 = root1.addChild(3);
const leaf4 = branch2.addChild(4);
const leaf5 = branch2.addChild(5);
const leaf6 = branch3.addChild(6);
const leaf7 = branch3.addChild(7);
console.assert(JSON.stringify(root1.BFSelect((value, depth) => value % 2)) === JSON.stringify([1, 3, 5, 7]), "works for filter using value");
console.assert(JSON.stringify(root1.BFSelect((value, depth) => depth === 1)) === JSON.stringify([2, 3]), "works for filter using depth");
