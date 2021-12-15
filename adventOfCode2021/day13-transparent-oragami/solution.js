// https://adventofcode.com/2021/day/13

const fs = require("fs");
function getInput(filename) {
  const file = fs.readFileSync(`./${filename}.txt`, "utf-8")
    .trim().split("\n\n");
  return [
    file[0].split("\n").map((line) => line.split(",")),
    file[1].split("\n").map((line) => line.split("fold along ")[1].split("="))
  ];
}

const input = getInput("input");
const smallInput = getInput("smallInput");

function xFold(grid, axis) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = axis + 1; x < grid[y].length; x++) {
      if (grid[y][x] === "#") grid[y][2 * axis - x] = grid[y][x];
    }
    grid[y].length = axis;
  }

  return grid;
}

function yFold(grid, axis) {
  for (let y = axis + 1; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "#") grid[2 * axis - y][x] = grid[y][x];
    }
  }
  grid.length = axis;

  return grid;
}

function buildGrid(points) {
  let xMax = 0;
  let yMax = 0;

  points.forEach((point) => {
    const [x, y] = point;
    xMax = Math.max(x, xMax);
    yMax = Math.max(y, yMax);
  });

  const grid = Array(yMax + 1).fill("0").
    map((_) => Array(xMax + 1).fill("."));

  points.forEach((point) => {
    const [x, y] = point;
    grid[y][x] = "#";
  });

  return grid;
}


function solve(input, times) {
  const grid = buildGrid(input[0]);

  for (let i = 0; i < (times ? times : input[1].length); i++) {
    const [a, b] = input[1][i];
    if (a === "y") {
      yFold(grid, Number(b));
    } else {
      xFold(grid, Number(b));
    }
  }

  console.log(grid.map(a => a.join("")));

  return grid.reduce((sum, line) => {
    return sum + line.reduce((partSum, point) => {
      return partSum + (point === "#" ? 1 : 0);
    }, 0);
  }, 0);
}

console.log(solve(smallInput, 1));
console.log(solve(input, 1));

console.log(solve(smallInput));
console.log(solve(input));
