// https://adventofcode.com/2021/day/9

const fs = require('fs');
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf8")
    .trim().split("\n")
    .map((line) => line.split("")
      .map((str) => Number(str)));;
}

const smallInput = getInput("smallInput");
const input = getInput("input");

function bookend(input) {
  const nines = Array(2 + input[0].length);
  nines.fill(9);
  
  return [
    nines,
    ...input.map((line) => [9, ...line, 9]),
    nines
  ];
}

function isLowPoint(i, j, map) {
  const adjacent = [
    map[i][j - 1],
    map[i][j + 1],
    map[i - 1][j],
    map[i + 1][j]
  ].sort();

  return map[i][j] < adjacent[0];
};

function findLowPoints(map) {
  const lowPoints = [];
  
  map.forEach((line, i) => {
    line.forEach((point, j) => {
      if (point === 9) return;
      if (isLowPoint(i, j, map)) {
        lowPoints.push([map[i][j], i - 1, j - 1]);
      }
    });
  });

  return lowPoints;
}

function sumRiskLevels(input) {
  const lowPoints = findLowPoints(bookend(input));
  return lowPoints.reduce((a, b) => {
    return a + b[0] + 1;
  }, 0);
}

// console.log(sumRiskLevels(smallInput)); // 15
// console.log(sumRiskLevels(input)); // 530

function findBasin(input) {
  const framed = bookend(input);
  const lowPoints = findLowPoints(framed);

  const sizes = Array(lowPoints.length);
  sizes.fill(0);

  // for each adjacent 
  //  if not nine recurse
  function recurse(i, j, lowDex) {
    if (framed[i][j] === 9) return;
    sizes[lowDex] += 1;
    framed[i][j] = 9;
    recurse(i - 1, j, lowDex);
    recurse(i + 1, j, lowDex);
    recurse(i, j - 1, lowDex);
    recurse(i, j + 1, lowDex);
  }

  lowPoints.forEach((point, lowDex) => {
    recurse(point[1] + 1, point[2] + 1, lowDex);
  });

  const sorted = sizes.sort((a, b) => b - a);
  return sorted[0] * sorted[1] * sorted[2];
}

// console.log(findBasin(smallInput)); // 1134
console.log(findBasin(input)); // 1134
