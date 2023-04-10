// nLog(n) time
const checkPermutation = function(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = a.split('').sort().join('');
  const sortedB = b.split('').sort().join('');

  return sortedA === sortedB;
};

const trueCases = [
  ['abcd', 'dcba'],
  ['  ', '  '],
  ['abcd', 'abcd'],
  ['qwerty', 'qewrty'],
  ['Hello', 'Hello'],
  ['', ''],
];

const falseCases = [
  ['aab', 'bba'],
  [' a', 'a'],
  ['', 'fghsjk'],
  ['hello', 'Hello'],
];

trueCases.forEach(([a, b]) => {
  console.assert(checkPermutation(a, b), `${a} should be a permutaiton of ${b}`);
});

falseCases.forEach(([a, b]) => {
  console.assert(!checkPermutation(a, b), `${a} should be not a permutaiton of ${b}`);
});
