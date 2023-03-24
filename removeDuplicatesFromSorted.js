// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

const removeDuplicates = function(nums) {
  let p = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    nums[p++] = nums[i];
  }

  return p;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3]));
