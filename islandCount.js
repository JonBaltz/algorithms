const countIslands = function (map) {
	const matrix = typeof map === "string" ? string2Matrix(map) : map;
	let count = 0;
	let temp;
	const options = [-1, 1];
	const sinkIsland = function (y, x) {
		matrix[y][x] = "1";
		for (let k = 0; k < 2; k++) {
			temp = y + options[k];
			if (temp >= 0 && temp < matrix.length && matrix[temp][x] === "0") {
				sinkIsland(temp, x);
			}
			temp = x + options[k];
			if (temp >= 0 && temp < matrix[y].length && matrix[y][temp] === "0") {
				sinkIsland(y, temp);
			}
		}
	};
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "0") {
				count++;
				sinkIsland(i, j);
			}
		}
	}
	return count;
};

const string2Matrix = function (map) {
	map = map.split("\n");
	return map.map((row) => row.split(""));
};

console.assert(
	JSON.stringify(string2Matrix("...0...0\n00.0.0..\n00000000\n........")) ===
		JSON.stringify([
			[".", ".", ".", "0", ".", ".", ".", "0"],
			["0", "0", ".", "0", ".", "0", ".", "."],
			["0", "0", "0", "0", "0", "0", "0", "0"],
			[".", ".", ".", ".", ".", ".", ".", "."],
		])
);
console.assert(
	countIslands([
		["1", "0", "0"],
		["0", "0", "1"],
		["1", "1", "1"],
	]) === 1,
	"can recognize and count a single island"
);
console.assert(
	countIslands([
		["0", "1", "1", "0"],
		["0", "1", "1", "0"],
		["1", "1", "0", "0"],
	]) === 2,
	"can count multiple islands"
);

const inputs = [
	".0...\n.00..\n....0",
	"..000.\n..000.\n..000.\n.0....\n..000.",
	"..000.\n..0...\n..0.0.\n..0...\n..000.",
	"0....0\n......\n..00..\n......\n0....0",
	"00...0\n0...00\n......\n0.0.0.\n0.....",
	"0...0\n0...0\n00000",
	"0...0\n..0..\n0...0",
	".",
	"0",
	"...\n..0\n.00",
	".....\n..0..\n.000.\n..0..\n.....",
	"00..00\n..00..\n00..00\n..00..",
];

const outputs = [2, 3, 2, 5, 5, 1, 5, 0, 1, 1, 1, 6];

for (let i = 0; i < inputs.length; i++) {
	console.assert(countIslands(inputs[i]) === outputs[i], `should correctly find ${outputs[i]} for the input ${i}`);
}
