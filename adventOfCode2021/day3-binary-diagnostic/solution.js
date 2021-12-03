// https://adventofcode.com/2021/day/3

const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8")
  .trim().split("\n")
const smallInput = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

function convertToDecimal(string) {
  return parseInt(string, 2);
}

function convertToBinary(number, length) {
  return number?.toString(2).padStart(length, '0');
}

function generateGamma(report) {
  const count = Array(report[0].length);
  count.fill(0);

  report.forEach((binary) => {
    binary.split('')
      .forEach((bit, i) => {
        count[i] += bit === '1' ? 1 : -1;
      });
  });

  return count.map((bit) => bit >= 0 ? '1' : '0').join('');
}

function getRates(report) {
  const gamma = generateGamma(report);
  const ones = convertToDecimal(gamma.split('').map(() => 1).join(''));
  const decimalGamma = convertToDecimal(gamma);

  return [decimalGamma, (decimalGamma ^ ones)];
}

function getConsumption(report) {
  const rates = getRates(report);
  return rates[0] * rates[1];
}

// console.log(getConsumption(smallInput)); // 198
// console.log(getConsumption(input)); // 4160394

function findClosestMatch(report, tDex) {
  let workingArr = report;
  let target = convertToBinary(getRates(workingArr)[tDex], report[0].length);

  for (let i = 0; i < target.length; i++) {
    if (workingArr.length === 1) break;
    
    workingArr = workingArr.filter((value) => {
      return value[i] === target[i];
    });
    target = convertToBinary(getRates(workingArr)[tDex], report[0].length);
  }
  
  return workingArr[0];
}

function getLifeSupport(report) {
  const o2Generator = convertToDecimal(findClosestMatch(report, 0));
  const co2Scrubber = convertToDecimal(findClosestMatch(report, 1));
  return o2Generator * co2Scrubber;
}

// console.log(getLifeSupport(smallInput)); // 230
// console.log(getLifeSupport(input)); // 4125600
