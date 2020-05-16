const numJewelsInStones = function (J, S) {
  const jArray = J.split('');
  let result = 0;
  for (var i = 0; i < S.length; i++) {
    if (jArray.indexOf(S[i]) !== -1) {
      result++;
    }
  }
  return result;
};

console.log('%cHello World', 'background: red; color: white;');
console.assert(numJewelsInStones('aA', 'aAAAbBBB') === 4, 'finds the correct number of jewels');
console.assert(numJewelsInStones('z', 'ZZ') === 0, 'finds the correct number of jewels');
console.assert(numJewelsInStones('', 'aAAAbBBB') === 0, 'works with empty strings');
console.assert(numJewelsInStones('aA', '') === 0, 'works with empty strings');
console.log("---------------------------\nthe next test intentionally fails\n-------------------------");
console.assert(1 === 5, "one doesn't equal 5");