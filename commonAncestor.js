const Tree = function () {
	this.children = [];
};

Tree.prototype.addChild = function (child) {
	if (!this.isDescendant(child)) {
		this.children.push(child);
	} else {
		throw new Error("That child is already a child of this tree");
	}
	return this;
};

Tree.prototype.getClosestCommonAncestor = function (item1, item2) {
	if (!this.isDescendant(item1) || !this.isDescendant(item2)) {
		return null;
	}
	if (this.children.indexOf(item1) !== -1 || this.children.indexOf(item2) !== -1) {
		return this;
	}
	for (let i = 0; i < this.children.length; i++) {
		if (this.children[i].isDescendant(item1) || this.children[i].isDescendant(item2)) {
			if (this.children[i].isDescendant(item1) && this.children[i].isDescendant(item2)) {
				return this.children[i].getClosestCommonAncestor(item1, item2);
			} else {
				return this;
			}
		}
	}
};

Tree.prototype.getAncestorPath = function (item) {
	if (!this.isDescendant(item)) {
		return null;
	}
	const path = [this];
	for (let i = 0; i < this.children.length; i++) {
		if (this.children[i] === item) {
			path.push(item);
			return path;
		}
		if (this.children[i].isDescendant(item)) {
			path.push(...this.children[i].getAncestorPath(item));
			return path;
		}
	}
};

Tree.prototype.isDescendant = function (child) {
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

Tree.prototype.removeChild = function (child) {
	const index = this.children.indexOf(child);
	if (index !== -1) {
		this.children.splice(index, 1);
	} else {
		throw new Error("That node is not an imediate child of this tree");
	}
};

const grandma = new Tree();
const mom = new Tree();
const me = new Tree();
const uncle = new Tree();
const sister = new Tree();
const superman = new Tree();
mom.addChild(me);
console.assert(mom.isDescendant(me) === true, "should return true when a descendant");
console.assert(mom.isDescendant(superman) === false, "should return false when not a descendant");
console.assert(
	JSON.stringify(mom.getAncestorPath(me)) === JSON.stringify([mom, me]),
	"returns a correct descendant path"
);
grandma.addChild(mom);
console.assert(grandma.isDescendant(mom) === true);
console.assert(grandma.isDescendant(me) === true, "should find descendant for more and just immediate children");
console.assert(
	JSON.stringify(grandma.getAncestorPath(me)) === JSON.stringify([grandma, mom, me]),
	"should find path for more than immediate children"
);
console.assert(grandma.getAncestorPath(superman) === null, "should return null when there is no path");
mom.addChild(sister);
console.assert(
	mom.getClosestCommonAncestor(me, sister) === mom,
	"should return root when the root is the closest common ancestor"
);
console.assert(grandma.getClosestCommonAncestor(me, sister) === mom, "should return the closest common ancestor");
grandma.addChild(uncle);
console.assert(
	grandma.getClosestCommonAncestor(me, uncle) === grandma,
	"should fuction when two items are not at the same depth"
);
