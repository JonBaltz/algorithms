const reverseList = function(head){
	if (!head || !head.next) {
		return head;
	}
	let previous = null;
	let current = head;
	let next = current.next;
	while(current){
		current.next = previous;
		previous = current;
		current = next;
		next = next ? next.next : null;
	}
	return previous;
}

const ListNode = function(val) {
	this.val = val;
	this.next = null;
}

const test = new ListNode(1);
const reversed = new ListNode(4);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
test.next.next.next = new ListNode(4);
reversed.next = new ListNode(3);
reversed.next.next = new ListNode(2);
reversed.next.next.next = new ListNode(1);
const single = new ListNode(6);

console.assert(JSON.stringify(reverseList(test)) === JSON.stringify(reversed), "reverses a linked list");
console.assert(JSON.stringify(reverseList(single)) === JSON.stringify(single), "reverse a single node");
console.assert(JSON.stringify(reverseList(null)) === JSON.stringify(null), "works with a null head");
