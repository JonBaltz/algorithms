// https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1

const isSubsequence = function(s, t) {
  if (s.length > t.length) return false;

  let pointer = 0;

  t.split('').forEach(c => {
    if (c === s[pointer]) pointer++;
  });

  return pointer === s.length;
}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
