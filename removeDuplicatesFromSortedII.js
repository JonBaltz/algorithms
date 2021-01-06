// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

const deleteDuplicates = function(head) {
	head = { next: head };
	let p = head;
	let p2;
	while (p.next && p.next.next) {
		if (p.next.val === p.next.next.val) {
			p2 = p.next.next;
			while (p2.next && p2.val === p2.next.val) p2 = p2.next;
			p.next = p2.next;
		} else {
			p = p.next;
		}
	}
	return head.next;
};

const ListNode = function(val = 0, next = null) {
	this.val = val;
	this.next = next;
};

