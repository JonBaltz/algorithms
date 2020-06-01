const findMiddle = function(head) {
	let turt = head;
	let hare = head;
	while (hare.next && hare.next.next) {
		turt = turt.next;
		hare=hare.next.next;
	}
	return turt;
}

const ListNode = function(val) {
	this.val = val;
	this.next = null;
}

const test = new ListNode(1);
const two = new ListNode(2);
test.next = two;
const three = new ListNode(3);
two.next = three;
console.assert(findMiddle(test).val === 2, "finds the correct middle value for an odd number");
const four = new ListNode(4);
three.next = four;
console.assert(findMiddle(test).val === 2, "with an even number, returns the first middle");
