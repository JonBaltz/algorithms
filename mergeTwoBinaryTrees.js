const mergeTrees = function (t1, t2) {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

const tree1 = { val: 1, left: { val: 3, left: { val: 5, left: null, right: null }, right: null }, right: { val: 2, left: null, right: null } };
const tree2 = { val: 2, left: { val: 1, left: null, right: { val: 4, left: null, right: null } }, right: { val: 3, left: null, right: { val: 7, left: null, right: null } } };
const tree3 = { val: 3, left: { val: 4, left: { val: 5, left: null, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 5, left: null, right: { val: 7, left: null, right: null } } };
console.assert(JSON.stringify(mergeTrees(tree1, tree2)) === JSON.stringify(tree3), "merges 2 trees", mergeTrees(tree1, tree2));
console.assert(JSON.stringify(mergeTrees(tree1, null)) === JSON.stringify(tree1), "merges 1 tree with null", mergeTrees(tree1, null));