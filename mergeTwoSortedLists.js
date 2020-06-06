// https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoLists = function(one, two) {
	if (!one || !two) { return one || two; }
	if (one.val < two.val) {
		one.next = mergeTwoLists(one.next, two);
		return one;
	} else {
		two.next = mergeTwoLists(one, two.next);
		return two;
	}
};

const ListNode = function(val) {
	this.val = val;
	this.next = null;
};

const odds = new ListNode(1);
odds.next = new ListNode(3);
odds.next.next = new ListNode(5);
const evens = new ListNode(2);
evens.next = new ListNode(4);
evens.next.next = new ListNode(6);
const first = new ListNode(1);
first.next = new ListNode(2);
first.next.next = new ListNode(3);
const second = new ListNode(4);
second.next = new ListNode(5);
second.next.next = new ListNode(6);
const final = new ListNode(1);
final.next = new ListNode(2);
final.next.next = new ListNode(3);
final.next.next.next = new ListNode(4);
final.next.next.next.next = new ListNode(5);
final.next.next.next.next.next = new ListNode(6);

console.assert(JSON.stringify(mergeTwoLists(odds, evens)) === JSON.stringify(final), "merges lists in a zipper");
console.assert(JSON.stringify(mergeTwoLists(first, second)) === JSON.stringify(final), "merges lists in concatination");
console.assert(JSON.stringify(mergeTwoLists(final, null)) === JSON.stringify(final), "merges a list with an empty list");

const we = new ListNode(1);
we.next = new ListNode(2);
we.next.next = new ListNode(4);
const ird = new ListNode(1);
ird.next = new ListNode(3);
ird.next.next = new ListNode(4);
const weird = new ListNode(1);
weird.next = new ListNode(1);
weird.next.next = new ListNode(2);
weird.next.next.next = new ListNode(3);
weird.next.next.next.next = new ListNode(4);
weird.next.next.next.next.next = new ListNode(4);

console.assert(JSON.stringify(mergeTwoLists(we, ird)) === JSON.stringify(weird), "works with weird lists");
