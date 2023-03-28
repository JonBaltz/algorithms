// https://leetcode.com/problems/minimum-path-sum/

const minPathSum = function(grid) {
  const memo = [];
  grid.forEach(() => memo.push([]));
  memo[0][0] = grid[0][0];

  let stack = [[0, 0]];

  const [x, y] = [grid.length - 1, grid[0].length - 1];

  while (!memo[x][y] && stack.length) {
    const [i, j] = stack.pop();
    if (i < x && !memo[i + 1][j]) {
      memo[i + 1][j] = memo[i][j] + grid[i + 1][j];
      stack.push([i + 1, j]);
    }

    if (j < y && !memo[i][j + 1]) {
      memo[i][j + 1] = memo[i][j] + grid[i][j + 1];
      stack.push([i, j + 1]);
    }

    stack = stack.sort(([ax, ay], [bx, by]) => memo[bx][by] - memo[ax][ay]);
  }

  return memo[x][y];
};

const tests = [
  [[[1,3,1],[1,5,1],[4,2,1]], 7],
  [[[1,2,3],[4,5,6]], 12],
  [[[0]], 0],
  [[[1,2,5],[3,2,1]], 6],
];

tests.forEach(([input, expected]) => {
  console.assert(minPathSum(input) === expected, `${input}`);
});
