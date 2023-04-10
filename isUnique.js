// Linear time
// Linear space
const isUnique = function(str) {
  const sto = {};
  
  for (let i = 0; i < str.length; i++) {
    if (sto[str[i]]) return false;
    sto[str[i]] = true;
  }

  return true;
};

// nLog(n) time
// no additional space
const isUniqueSpaceFocused = function(str) {
  const result = str.split('').sort().reduce((prev, curr) => {
    if (prev === false || prev === curr) return false;
    return curr;
  }, true);

  return result === false ? false : true;
};

const trueCases = [
  'abcd',
  'asdfghjkl',
  '',
  ' ',
  'q',
  'aA',
];

const falseCases = [
  'aabb',
  'aba',
  '  ',
  'qwertt',
  'ggg',
  '12345678910',
];

trueCases.forEach(s => {
  console.assert(isUnique(s), `${s} should return true`);
  console.assert(isUniqueSpaceFocused(s), `${s} should return true`);
});

falseCases.forEach(s => {
  console.assert(!isUnique(s), `${s} should return false`);
  console.assert(!isUniqueSpaceFocused(s), `${s} should return false`);
});
