// https://adventofcode.com/2021/day/15

const fs = require("fs");
function getInput(filename) {
  return fs.readFileSync(`./${filename}.txt`, "utf-8").
    trim().split("\n").
    map((line) => line.split("").
      map((str) => Number(str)));
}

const smallInput = getInput("smallInput");
const input = getInput("input");

function insert(array, object, key) {
  const [y, x] = key;
  for (let i = 0; i < array.length; i++) {
    const [a, b] = array[i];
    if (object[y][x] > object[a][b]) {
      return array.splice(i, 0, key);
    }
  }
  return array.push(key);
}

function getTileValue(y, x, map, tiles) {
  const mapSize = map.length;
  const actualSize = map.length * tiles;
  if (y < 0 || x < 0 || y >= actualSize || x >= actualSize) return null;

  let value = map[y % mapSize][x % mapSize];
  value += Math.floor(y / mapSize);
  value += Math.floor(x / mapSize);
  while (value > 9) {
    value = value - 9;
  }
  return value;
}

function findLeastRisk(map, tiles) {
  const mapSize = map.length;
  const actualSize = map.length * tiles;

  const order = [[0, 0]];
  const scores = Array(actualSize).fill(0).map(() => []);
  scores[0][0] = 0;

  while (!scores[actualSize - 1][actualSize - 1]) {
    const [y, x] = order.pop();

    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if (y !== i && x !== j) continue;
        const value = getTileValue(i, j, map, tiles);
        if (scores[i]?.[j] === undefined && value) {
          scores[i][j] = scores[y][x] + value;
          insert(order, scores, [i, j]);
        }
      }
    }
  }

  return scores[actualSize - 1][actualSize - 1];
}

console.log(findLeastRisk(smallInput, 1)); // 40
console.log(findLeastRisk(input, 1)); // 386

console.log(findLeastRisk(smallInput, 5)); // 315
console.log(findLeastRisk(input, 5)); // 2806
