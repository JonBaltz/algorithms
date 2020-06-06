// https://leetcode.com/problems/intersection-of-two-linked-lists/

const getIntersectionNode = function(one, two) {
	let oneLength = 0;
	let twoLength = 0;
	let o = one;
	let t = two;
	while (o.next || t.next) {
		if (o.next) {
			o = o.next;
			oneLength++;
		}
		if (t.next) {
			t = t.next;
			twoLength++;
		}
	}
	if (o !== t) return null;
	let diff = oneLength - twoLength;
	o = one;
	t = two;
	if (diff > 0) {
		for (let i = 0; i < diff; i++) {
			o = o.next;
		}
	} else if (diff < 0) {
		for (let i = 0; i < Math.abs(diff); i++) {
			t = t.next;
		}
	}
	while (true) {
		if (o === t) {
			return o;
		}
		o = o.next;
		t = t.next;
	}
};
