// https://leetcode.com/problems/knight-probability-in-chessboard/

const knightProbability = function(N, K, r, c) {
    const hash = {};
    
    const options = [[2, 1], [1, 2], [-2, -1], [-1, -2], [-2, 1], [-1, 2], [2, -1], [1, -2]];
    const oob = function(row, col) {
        return row < 0 || row >= N || col < 0 || col >= N;
    };
    
    const recurse = function(x, y, moves) {
        if (oob(x, y)) return 0;
        // if we are on board and there are no moves left, ther is a 100% chance that we end on the board
        if (moves === 0) return 1;
        
        // if we already calculated the probability, use that
        const key = `${x}|${y}|${moves}`;
        if (hash[key] !== undefined) return hash[key];

        let current = 0;
        for (let i = 0; i < 8; i++) {
            // we take the probability of all 8 item, and add them, then divide by 8 to get the average to get the probability for this key
            current += recurse(x + options[i][0], y + options[i][1], moves - 1) * (1/8);
        }
        hash[key] = current;
        
        return current;
    };
    
    return recurse(r, c, K);
};
