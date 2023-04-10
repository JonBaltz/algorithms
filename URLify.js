// Easy solution
const easyURLify = function(s) {
  return s.split(' ').join('%20');
};

// Less easy solution
const URLify = function(s) {
  let altered = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      altered += '%20';
    } else altered += s[i];
  }

  return altered;
};

const testCases = [
  ['Hello World', 'Hello%20World'],
  ['hi', 'hi'],
  ['  ', '%20%20'],
];

testCases.forEach(([input, expected]) => {
  const output = URLify(input);
  const easyOutput = easyURLify(input);
  console.assert(output === expected, `Expected ${expected} but recieved ${output}`);
  console.assert(easyOutput === expected, `Expected ${expected} but recieved ${output}`);
});
