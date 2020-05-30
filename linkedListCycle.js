// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = function(linkedList) {
	let tort = linkedList;
	let hare = linkedList;
	while(hare.next && hare.next.next) {
		tort = tort.next;
		hare = hare.next.next;
		if (tort === hare) {
			return true;
		}
	}
	return false;
}

const Node = function(value) {
	this.value = value;
	this.next = null;
}

const test = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
test.next = two;
console.assert(hasCycle(test) === false, "works for few elements");
two.next = three;
three.next = four;
console.assert(hasCycle(test) === false, "finds no cycle for may elements");
four.next = five;
five.next = three;
console.assert(hasCycle(test) === true, "finds cycle that begins in middle of linked list");
five.next = test;
console.assert(hasCycle(test) === true, "finds cycle that begins at start of linked list");
