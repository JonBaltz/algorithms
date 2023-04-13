const compressString = function(str) {
  let compressed = "";

  for (let i = 0; i < str.length; i++) {
    let count = 1;

    while (str[i + 1] === str[i]) {
      count++;
      i++;
    }

    compressed += str[i] + count;
  }

  return compressed.length < str.length ? compressed : str;
};

const testCases = [
  ["aabcccccaaa", "a2b1c5a3"],
  ["abcd", "abcd"],
  ["aaaaabbcd", "a5b2c1d1"],
  ["", ""],
];

testCases.forEach(([input, expected]) => {
  console.assert(compressString(input) === expected, `${expected} is the compressed version of ${input}`);
});
