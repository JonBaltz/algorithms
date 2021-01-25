// https://leetcode.com/problems/merge-k-sorted-lists/

const mergeKLists = function(lists) {
	const res = new ListNode(0);
	let resLast = res;
	while (true) {
		let minList = null;
		for (let i = 0; i < lists.length; i++) {
			if (lists[i] === null) continue;
			if (minList === null || lists[i].val < lists[minList].val) minList = i;
		}
		if (minList === null) return res.next;
		resLast.next = new ListNode(lists[minList]);
		lists[minList] = lists[minList].next;
		resLast = resLast.next;
	}
};

const ListNode = function(val = 0, next = null) {
	this.val = val;
	this.next = next;
};
