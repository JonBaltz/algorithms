// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1

const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;

  const sMapping = {};
  const tMapping = {};

  for (let i = 0; i < s.length; i++) {
    const currS = sMapping[s[i]];
    const currT = tMapping[t[i]];

    if ((!!currS || !!currT) && currS !== t[i]) return false;

    sMapping[s[i]] = t[i];
    tMapping[t[i]] = s[i];
  }

  return true;
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('babc', 'baba'));
