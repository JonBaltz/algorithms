// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = function(head) {
	const items = [];
	let p = head;
	while (p !== null) {
		items.push(p.val);
		p = p.next;
	}
	f = 0;
	b = items.length - 1;
	while (f < b) {
		if (items[f++] !== items[b--]) {
			return false;
		}
	}
	return true;
}

const ListNode = function(val) {
	this.val = val;
	this.next = null;
}

const test = new ListNode(1);
console.assert(isPalindrome(test) === true, "works for a single item");
test.next = new ListNode(2);
console.assert(isPalindrome(test) === false, "works for a non-palindrome");
test.next.next = new ListNode(1);
console.assert(isPalindrome(test) === true, "works for an odd palindrome");
test.next.next.next = new ListNode(1);
test.next.next.next.next = new ListNode(2);
test.next.next.next.next.next = new ListNode(1);
console.assert(isPalindrome(test) === true, "works for an even palindrome");
