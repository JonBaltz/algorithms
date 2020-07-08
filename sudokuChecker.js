const sudokuChecker = function(board) {
	const vert = ["", "", "", "", "", "", "", "", ""];
	const blocks = ["", "", "", "", "", "", "", "", ""];
	const hori = board.split("\n");
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			vert[j] += hori[i][j];
			blocks[Math.floor(i/3) + 3 * Math.floor(j/3)] += hori[i][j];
		}
	}
	const lines = [].concat(vert, blocks, hori);
	for (let i = 0; i < 27; i++) {
		for (let j = 0; j < 9; j++) {
			if (lines[i].indexOf(lines[i][j]) !== j) {
				return "invalid";
			}
		}
	}
	return "solved";
};

(function() {
	const valid = [
		"735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429",
		"895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241",
		"795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538"
	];
	const invalid = [
		"111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999",
		"123123123\n456456456\n789789789\n123123123\n456456456\n789789789\n123123123\n456456456\n789789789",
		"215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156",
		"524698731\n967531824\n381742596\n719325648\n436871952\n258416379\n893154267\n672983415\n145267983"
	];
	valid.forEach(board => {
		console.assert(sudokuChecker(board) === "solved", `${board} should return "solved"`);
	});
	invalid.forEach(board => {
		console.assert(sudokuChecker(board) === "invalid", `${board} should return "invalid"`);
	});
})();
