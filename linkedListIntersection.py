# https://leetcode.com/problems/intersection-of-two-linked-lists/

class ListNode:
    def __init__(self, val, nex = None):
        self.val = val
        self.next = nex

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if not(headA and headB):
            return None
        size1 = 0
        p1 = headA
        size2 = 0
        p2 = headB
        while p1.next:
            size1 += 1
            p1 = p1.next
        while p2.next:
            size2 += 1
            p2 = p2.next
        p1 = headA
        p2 = headB
        while size1 > size2:
            p1 = p1.next
            size1 -= 1
        while size2 > size1:
            p2 = p2.next
            size2 -= 1
        while p1 and p2:
            if p1 is p2:
                return p1
            p1 = p1.next
            p2 = p2.next
        return None

test = Solution()
interList = ListNode(2, ListNode(4))
l1 = ListNode(3, interList)
l2 = ListNode(1, ListNode(9, ListNode(1 , interList)))
print(test.getIntersectionNode(l1, l2).next.val)

