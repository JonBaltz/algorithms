const minimalMoves = function(n) {
	return Math.pow(2, n) - 1;
};

const newState = function(n) {
	const res = [[], [], []];
	for (let i = 0; i < n; i++) {
		res[0][i] = n - i;
	}
	return res;
};

const singleMove = function(state, target, from) {
	state[target].push(state[from].pop());
	return `${from}->${target}`;
};

const moveTo3rd = function(state) {
	const moveSequence = [];
	const recurse = function(target, from, moves) {
		if (moves === 1) {
			moveSequence.push(singleMove(state, target, from));
		} else {
			recurse(3 - target - from, from, moves - 1);
			moveSequence.push(singleMove(state, target, from));
			recurse(target, 3 - target - from, moves - 1);
		}
	};
	recurse(2, 0, state[0].length);
	return moveSequence;
};

for (let i = 1; i <= 24; i++) {
	const iRings = newState(i);
	console.log(i);
	console.assert(moveTo3rd(iRings).length === minimalMoves(i), `${i}:${iRings}`);
}
