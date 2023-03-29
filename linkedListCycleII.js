// https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1

const detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let start = head;
      while (start !== slow) {
        start = start.next;
        slow = slow.next;
      }
      return start;
    }
  }

  return false;
}
