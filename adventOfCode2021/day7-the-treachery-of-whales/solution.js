// https://adventofcode.com/2021/day/7

const fs = require('fs');
const input = fs.readFileSync("./input.txt", "utf8")
  .trim().split(",").map((str) => Number(str));
const smallInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

function flatFuel(data, target) {
  return data.reduce((prev, curr) => {
    return prev + Math.abs(target - curr);
  }, 0);
}

function increasingFuel(data, target) {
  return data.reduce((prev, curr) => {
    const distance = Math.abs(target - curr);
    return prev + (distance * (distance + 1) / 2);
  }, 0);
}

function minimalSumOfDistance(locations, fuelFunction) {
  const maxLocal = Math.max(...locations);

  let minFuel = locations.length * maxLocal * (maxLocal + 1) / 2;
  for (let i = 0; i <= maxLocal; i++) {
    minFuel = Math.min(minFuel, fuelFunction(locations, i));
  }
  return minFuel
}

// console.log(minimalSumOfDistance(smallInput, flatFuel)); // 37
// console.log(minimalSumOfDistance(input, flatFuel)); // 344605

// console.log(minimalSumOfDistance(smallInput, increasingFuel)); // 168
// console.log(minimalSumOfDistance(input, increasingFuel)); // 93699985
