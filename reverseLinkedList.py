# https://leetcode.com/problems/reverse-linked-list/

class ListNode:
	def __init__(self, val = 0, next = None):
		self.val = val
		self.next = next

class Solution:
	def reverseList(self, head: ListNode) -> ListNode:
		prev = None
		next = head
		while next != None:
			temp = next.next
			next.next = prev
			prev = next
			next = temp
		return prev

test = Solution()
case1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
res1 = test.reverseList(case1)

print(res1.val, res1.next.val, res1.next.next.val, res1.next.next.next.val)
