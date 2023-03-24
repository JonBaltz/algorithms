// https://leetcode.com/problems/rotate-array/

const rotate = function(nums, k) {
  // Solution 1: Create an extra array
  //const res = [];

  //for (let i = 0; i < nums.length; i++) {
    //res[(i + k) % nums.length] = nums[i];
  //}

  //return res;

  // ----------------- //

  // Solution 2: unshift pop
  //for (let i = 0; i < k; i++) {
    //nums.unshift(nums.pop());
  //}

  //return nums;

  // ----------------- //

  // Solution 3: Cycle
  const reverse = function(l, r) {
    let pl = l;
    let pr = r;

    while (pl < pr) {
      [nums[pl], nums[pr]] = [nums[pr], nums[pl]]
      pl++;
      pr--;
    }
  };

  const length = nums.length;
  const smallK = k % length;

  reverse(0, length - 1);
  reverse(0, smallK - 1);
  reverse(smallK, length - 1);

  return nums;
};

const testCases = [
  [[[1,2,3,4,5,6,7], 3], [5,6,7,1,2,3,4]],
  [[[-1,-100,3,99], 2], [3,99,-1,-100]],
];

testCases.forEach(([input, expected]) => {
  console.log(rotate(...input), expected);
});
