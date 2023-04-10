const isPermutation = function(s) {
  const counts = {};

  for (const letter of s) {
    if (letter === ' ') continue;
    if (!counts[letter]) counts[letter] = 0;
    counts[letter]++;
  }

  return Object.values(counts).reduce((acc, curr) => {
    return curr % 2 ? acc + 1 : acc;
  }, 0) <= 1;
}

const trueCases = [
  'taco cat',
  'omo',
  'oom',
  'tahhat',
  'abbccdd',
  'a',
  '',
];

trueCases.forEach(input => {
  console.assert(isPermutation(input), `${input} is a permutation of a palindrome`);
});

const falseCases = [
  'ab',
  'true',
  'carry',
];

falseCases.forEach(input => {
  console.assert(!isPermutation(input), `${input} is not a permutation of a palindrome`);
});
