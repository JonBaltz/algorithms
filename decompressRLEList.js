// https://leetcode.com/problems/decompress-run-length-encoded-list/

const decompressRLElist = function(nums) {
	const res = [];
	for (let i = 0; i < nums.length; i += 2) {
		for (let j = 0; j < nums[i]; j++) {
			res.push(nums[i + 1]);
		}
	}
	return res;
};

const t = decompressRLElist;
console.log(t([1, 2, 3, 4]));
console.log(t([1, 1, 2, 3]));
