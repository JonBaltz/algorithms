//https://leetcode.com/problems/self-dividing-numbers/

const selfDividingNumbers = function (left, right) {
  const helper = function (digits, num) {
    const numArray = digits.split("");
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] === "0" || num % numArray[i]) {
        return false;
      }
    }
    return true;
  }
  const result = [];
  for (let j = left; j <= right; j++) {
    const digits = String(j);
    if (digits.length === 1 || helper(digits, j)) {
      result.push(j);
    }
  }
  return result;
}

console.assert(JSON.stringify(selfDividingNumbers(1, 22)) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]), "works");