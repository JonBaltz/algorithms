// https://leetcode.com/problems/add-two-numbers/

const ListNode = function(val = 0, next = null) {
	this.val = val;
	this.next = next;
};

const addTwoNumbers = function(l1, l2) {
	let rem = 0;
	let p1 = { next: l1 };
	let p2 = l2;
	while (p2) {
		p1 = p1.next;
		let sum = p1.val + p2.val + rem;
		rem = Math.floor(sum / 10);
		p1.val = sum % 10;
		if (!p1.next) {
			p1.next = p2.next;
			p2 = null;
		} else p2 = p2.next;
	}
	while (rem) {
		if (p1.next) {
			let sum = p1.next.val + 1;
			rem = Math.floor(sum / 10);
			p1.next.val = sum % 10;
			p1 = p1.next;
		} else p1.next = new ListNode(rem--);
	}
	return l1;
};

const equalLength = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))));
const oneLonger = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(8)))), new ListNode(5, new ListNode(6, new ListNode(4))));
const twoLonger = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(8)))));
const endRemainder = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(6))), new ListNode(5, new ListNode(6, new ListNode(4))));
console.log(equalLength, oneLonger.next, twoLonger.next, endRemainder.next);

