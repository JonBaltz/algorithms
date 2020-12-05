# https://leetcode.com/problems/linked-list-random-node/
import random

class Solution:
	def __init__(self, head):
		self.head = head

	def getRandom(self):
		scope = 1
		res = 0
		pointer = self.head
		while pointer:
			if random.random() < 1 / scope:
				res = pointer.val
			pointer = pointer.next
			scope += 1
		return res

class ListNode:
	def __init__(self, val = 0, next = None):
		self.val = val
		self.next = next

test = Solution(ListNode(1, ListNode(2, ListNode(3, ListNode(4)))))
print(test.getRandom())
print(test.getRandom())
