// https://leetcode.com/problems/binary-search/

const search = function(nums, target) {
  let [left, right, mid] = [0, nums.length - 1, -1];
t
  while (left <= right) {
    mid = Math.floor((right + mid) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const testCases = [
  [[[-1,0,3,5,9,12], 9], 4],
  [[[-1,0,3,5,9,12], 2], -1],
];

testCases.forEach(([inputs, expected]) => {
  console.assert(search(...inputs) === expected, `${inputs}`);
});
