// https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=level-1

const middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (!!fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
