# https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode:
	def __init__(self, val = 0, next = None):
		self.val = val
		self.next = next

class Solution:
	def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
		result = None
		if not(l1) and not(l2): return None
		if not(l2) or (l1 and l1.val < l2.val):
			result = l1
			l1 = l1.next
		else:
			result = l2
			l2 = l2.next
		pointer = result
		while l1 or l2:
			if not(l2) or (l1 and l1.val < l2.val):
				pointer.next = l1
				pointer = pointer.next
				l1 = l1.next
			else:
				pointer.next = l2
				pointer = pointer.next
				l2 = l2.next
		return result

test = Solution()
res1 = test.mergeTwoLists(ListNode(1, ListNode(3, ListNode(5))), ListNode(2, ListNode(4, ListNode(6))))
print(res1.val, res1.next.val, res1.next.next.val, res1.next.next.next.val)
