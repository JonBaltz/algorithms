// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = function(strs) {
	const ana = {};
	let sort;
	for (let i = 0; i < strs.length; i++) {
		sort = strs[i].split("").sort().join("");
		if (ana[sort]) {
			ana[sort].push(strs[i]);
		} else {
			ana[sort] = [strs[i]];
		}
	}
	return Object.values(ana);
};

console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["ab", "ba", "abc"]));
