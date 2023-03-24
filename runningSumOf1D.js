// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

const runningSum = function(nums) {
  let sum = 0;

  return nums.map(num => sum += num);
};

const testCases = [
  [[1, 2, 3, 4], [1, 3, 6, 10]],
  [[1, 1, 1, 1, 1], [1, 2, 3, 4, 5]],
  [[3, 1, 2, 10, 1], [3, 4, 6, 16, 17]],
]

testCases.forEach(([input, expected]) => {
  console.log(runningSum(input), expected);
});
