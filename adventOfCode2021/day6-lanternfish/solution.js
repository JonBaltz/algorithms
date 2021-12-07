// https://adventofcode.com/2021/day/6

const fs = require('fs');
const input = fs.readFileSync("./input.txt", "utf8")
  .trim().split(",").map((str) => Number(str));
const smallInput = [3, 4, 3, 1, 2];

function simulateLanternfish(fish, days) {
  const groups = Array(9)
  groups.fill(0);

  fish.forEach((curr) => {
    groups[curr]++;
  });

  for (let i = 0; i < days; i++) {
    const pointer = i % 9;
    const reset = (i + 7) % 9;
    groups[reset] += groups[pointer];
  }
  
  return groups.reduce((prev, curr) => prev + curr);
}

// console.log(simulateLanternfish(smallInput, 80)); // 5934
// console.log(simulateLanternfish(input, 80)); // 372984

// console.log(simulateLanternfish(smallInput, 256)); // 26984457539
// console.log(simulateLanternfish(input, 256)); // 1681503251694
