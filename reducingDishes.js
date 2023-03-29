// https://leetcode.com/problems/reducing-dishes/

const maxSatisfaction = function(satisfaction) {
  const sorted = satisfaction.sort((a, b) => a - b);

  let max = 0;
  let index = sorted.findIndex(val => val >= 0);

  while (index >= 0) {
    let currentSum = 0;
    for (let i = index; i < sorted.length; i++) {
      currentSum += sorted[i] * (1 + i - index); 
    }

    if (currentSum < max) break;
    max = currentSum;
    index--;
  }

  return max;
}

const tests = [
  [[-1,-8,0,5,-9], 14],
  [[4,3,2], 20],
  [[-1,-4,-5], 0],
];

tests.forEach(([input, expected]) => {
  console.assert(maxSatisfaction(input) === expected, `${input}`);
});
