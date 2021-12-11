// https://adventofcode.com/2021/day/11

const fs = require("fs");
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf-8")
    .trim().split("\n")
    .map((line) => line.split("").map((str) => Number(str)));
}

const input = getInput("input");
const smallInput = getInput("testInput");

function simulateOctos(grid) {
  let flashes = 0;

  function recurse(x, y) {
    if (!grid[x] || grid[x][y] === undefined) return;

    if (++grid[x][y] > 9) {
      flashes++;
      grid[x][y] = -9

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (!i && !j) continue;
          recurse(x + i, y + j);
        }
      }
    }
  }

  grid.forEach((line, i) => {
    line.forEach((point, j) => {
      recurse(i, j);
    });
  });
  
  grid.forEach((line, i) => {
    line.forEach((point, j) => {
      if (point < 0) {
        grid[i][j] = 0;
      }
    });
  });

  return flashes;
}

function countFlashes(x, grid) {
  let flashes = 0;
  for (let i = 0; i < x; i++) {
    flashes += simulateOctos(grid);
  } 
  return flashes;
}

// console.log(countFlashes(100, smallInput)); // 1656
// console.log(countFlashes(100, input)); // 1755

function firstFullFlash(grid) {
  let step = 0;

  while(true) {
    step++;
    if (simulateOctos(grid) === 100) return step;
  }
}

// console.log(firstFullFlash(smallInput)); // 195
// console.log(firstFullFlash(input)); // 212
