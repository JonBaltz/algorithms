// https://leetcode.com/problems/binary-search/

const search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m
    while (l <= r) {
        m = Math.floor((r - l) / 2) + l;
        if (nums[m] === target) return m;
        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return -1;
};
