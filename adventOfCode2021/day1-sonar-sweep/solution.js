// https://adventofcode.com/2021/day/1

const fs = require("fs");
const depthData = fs.readFileSync("./input.txt", "utf-8")
  .trim().split("\n")
  .map((string) => Number(string));
const smallData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

function countDepthIncreases(depthData) {
  let count = 0;
  let previous = null;
  
  depthData.forEach((measurement) => {
    if (previous !== null && measurement > previous) count += 1;
    previous = measurement;
  });
  return count;
}

// console.log(countDepthIncreases(smallData)); // 7
// const part1Solution = countDepthIncreases(depthData);
// console.log(part1Solution); // 1583

function countWindowIncreases(depthData) {
  let count = 0;
  let previous = depthData[0] + depthData[1] + depthData[2];

  for (let i = 2; i < depthData.length - 1; i++) {
    const current = depthData[i + 1] + previous - depthData[i - 2];
    if (current > previous) count += 1;
    previous = current
  }

  return count;
}

// console.log(countWindowIncreases(smallData)); // 7
// const part2Solution = countWindowIncreases(depthData);
// console.log(part2Solution); // 1583
