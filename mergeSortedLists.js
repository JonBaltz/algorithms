// https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1

const mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list2.next, list1);
  return list2;
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
