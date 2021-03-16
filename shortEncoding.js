// https://leetcode.com/problems/short-encoding-of-words/

const minimalLengthEncoding = function(words) {
	const sorted = words.sort((a, b) => b.length - a.length);
	let resString = "";
	for (const word of sorted) {
		if (resString.includes(word + "#")) continue;
		resString += `${word}#`;
	}
	return resString.length;
};

const t = minimalLengthEncoding;
console.assert(t(["time", "me", "bell"]) === 10, "case 1");

