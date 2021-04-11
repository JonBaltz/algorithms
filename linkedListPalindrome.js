// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = function(head) {
	if (!head || !head.next) return true;
	let pointerA = head;
	let pointerB = head;
	while (pointerB.next && pointerB.next.next) {
		pointerA = pointerA.next;
		pointerB = pointerB.next.next;
	}
	const reversed = reversePal(pointerA.next);
	pointerA = reversed;
	pointerB = head;
	let isPal = true;
	while (pointerA) {
		if (pointerA.val !== pointerB.val) {
			isPal = false;
			break;
		}
		pointerA = pointerA.next;
		pointerB = pointerB.next;
	}
	reversePal(reversed);
	return isPal;
};

const reversePal = function(node) {
	if (!node || !node.next) return node;
	let prev = null;
	let curr = node;
	let next = node.next;
	while (curr) {
		curr.next = prev;
		prev = curr;
		curr = next;
		next = next ? next.next : null;
	}
	return prev;
};

const ListNode = function(val = 0, next = null) {
	this.val = val;
	this.next = next;
};

const t = isPalindrome;
const one = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2))));
console.assert(!t(one), "case 1");
one.next = new ListNode(1);
console.assert(t(one), "case 2 odd length pal");
const two = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.assert(t(two), "case 3 even length pal");
console.assert(t(new ListNode(1)), "case 4 single lenth pal");
console.assert(t(new ListNode(1, new ListNode(1))), "case 5 two length pal");





