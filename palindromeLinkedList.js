// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = function(head) {
	if (!head || !head.next) return true;
	let mid = findMiddle(head);
	mid.next = reverseList(mid.next);
	let result = true;
	let a = head;
	let b = mid.next;
	while (result && b) {
		if (a.val !== b.val) {
			result = false;
		}
		a = a.next;
		b = b.next;
	}
	mid.next = reverseList(mid.next);
	return result;
};

const findMiddle = function(head) {
	let turt = head;
	let hare = head;
	while (hare.next && hare.next.next) {
		turt = turt.next;
		hare = hare.next.next;
	}
	return turt;
};

const reverseList = function(node) {
	let a = node;
	let b = node.next;
	a.next = null;
	let temp;
	while (b) {
		temp = b.next;
		b.next = a;
		a = b;
		b = temp;
	}
	return a;
};

const ListNode = function(val) {
	this.val = val;
	this.next = null;
};

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
