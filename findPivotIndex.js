// https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

const pivotIndex = function(nums) {
  let left = 0;
  let right = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = -1; i < nums.length; i++) {
    left += nums[i] || 0;
    right -= nums[i + 1] || 0;

    if (left === right) return  i + 1;
  }

  return -1;
};

const testCases = [
  [[1, 7, 3, 6, 5, 6], 3],
  [[1, 2, 3], -1],
  [[2, 1, -1], 0],
  [[-1, -1, 0, 1, 1, 0], 5],
];

testCases.forEach(([input, expected]) => {
  console.log(pivotIndex(input), expected);
});
