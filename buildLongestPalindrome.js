// https://leetcode.com/problems/longest-palindrome/?envType=study-plan&id=level-1

const longestPalindrome = function(s) {
  const counts = {};

  s.split('').forEach(ch => {
    if (!counts[ch]) counts[ch] = 0;
    counts[ch]++;
  });

  let oddFound = false;

  const longest = Object.values(counts).reduce((acc, curr) => {
    if (curr % 2) oddFound = true;
    return acc + (curr % 2 ? curr - 1 : curr);
  }, 0);

  return oddFound ? 1 + longest : longest;
};

const testCases = [
  ['abccccdd', 7],
  ['a', 1],
  ['ab', 1],
];

testCases.forEach(([input, expected]) => {
  console.assert(longestPalindrome(input) === expected, `${input}`);
});
