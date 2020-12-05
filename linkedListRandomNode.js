// https://leetcode.com/problems/linked-list-random-node/

const RandomList = function(head = null) {
	this.head = head;
	this.length = 0;
	let pointer = head;
	while (pointer) {
		pointer = pointer.next;
		this.length++;
	}
};

RandomList.prototype.getRandom = function() {
	let rand = Math.floor(Math.random() * this.length);
	let pointer = this.head;
	while (rand--) {
		pointer = pointer.next;
	}
	return pointer.val;
};

const ListNode = function(val = 0, next = null) {
	this.val = val;
	this.next = next;
};

const one = new ListNode(1);
const two = new ListNode(2, one);
const three = new ListNode(3, two);
const four = new ListNode(4, three);

const rando = new RandomList(four);
let hash = {};
for (let i = 0; i < 50; i++) {
	const current = rando.getRandom();
	console.assert(1 <= current && current <= 4, "generates a random value from the list");
	if (!hash[current]) hash[current] = true;
}
console.assert(hash[1], "every item should be generated given enough runs");
console.assert(hash[2], "every item should be generated given enough runs");
console.assert(hash[3], "every item should be generated given enough runs");
console.assert(hash[4], "every item should be generated given enough runs");
