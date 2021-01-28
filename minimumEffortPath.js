// https://leetcode.com/problems/path-with-minimum-effort/

const minimumEffortPath = function(heights) {
	const toNode = { "0,0": 0 };
	const order = [ "0,0" ];
	let curr, cords, diff;
	while (true) {
		curr = order.pop();
		if (curr === `${heights.length - 1},${heights[0].length - 1}`) return toNode[curr];
		cords = curr.split(",").map(str => Number(str));
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if ((!!i === !!j) || !heights[cords[0] + i] || !heights[cords[0] + i][cords[1] + j]) continue;
				diff = Math.max(Math.abs(heights[cords[0] + i][cords[1] + j] - heights[cords[0]][cords[1]]), toNode[curr]);
				if (toNode[`${cords[0] + i},${cords[1] + j}`] === undefined || diff < toNode[`${cords[0] + i},${cords[1] + j}`]) {
					toNode[`${cords[0] + i},${cords[1] + j}`] = diff;
					for (let k = order.length; k >= 0; k--) {
						if (!order[k - 1] || toNode[order[k - 1]] >= diff) {
							order.splice(k, 0, `${cords[0] + i},${cords[1] + j}`);
							break;
						}
					}
				}
			}
		}
	}
};

const t = minimumEffortPath;
console.assert(t([[1]]) === 0, "single item base case");
console.assert(t([[1,2,2],[3,8,2],[5,3,5]]) === 2, "example 1");

