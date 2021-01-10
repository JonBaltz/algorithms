// https://leetcode.com/problems/word-ladder/

const ladderLength = function(beginWord, endWord, wordList) {
	if (!wordList.includes(endWord)) return 0;

	const seen = new Set();
	let last = new Set([beginWord]);
	let length = 1;
	while (last.size) {
		const next = new Set();
		if (last.has(endWord)) return length;
		for (const word of wordList) {
			if (seen.has(word)) continue;
			for (const item of last) {
				if (countDiff(item, word)) {
					seen.add(word);
					next.add(word);
					break;
				}
			}
		}
		length++;
		last = next;
	}

	return 0;
};

const countDiff = function(str1, str2) {
	let count = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) count++;
	}
	return count === 1;
};

console.assert(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5, "case 1")
console.assert(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) === 0, "case 2")
