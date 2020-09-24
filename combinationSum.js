// https://leetcode.com/problems/combination-sum/

const combinationSum = function(candidates, target) {
	const helper = function(candidates, target, pre = []) {
		const set = [];
		for (let i = 0; i < candidates.length; i++) {
			if (target - candidates[i] === 0) {
				set.push([...pre, candidates[i]]);
			} else if (target - candidates[i] > 0) {
				set.push(...helper(candidates.slice(0, i + 1), target - candidates[i], [...pre, candidates[i]]));
			}
		}
		return set;
	};
	return helper(candidates, target);
};

const test = combinationSum;
console.assert(combinationSum([2, 3, 4, 6], 7).length === 2, "two possibilites for test 1");
console.assert(combinationSum([2, 3, 5], 8).length === 3, "three possibilites for test 2");
