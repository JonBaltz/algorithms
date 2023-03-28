// https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1

const reverseList = function(head) {
  let curr = head;
  let prev = null;
  let temp;

  while (curr) {
    [temp, curr.next] = [curr.next, prev];
    prev = curr;
    curr = temp;
  }

  return prev;
}

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
