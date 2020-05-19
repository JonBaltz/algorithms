const sortArrayByParity = function (A) {
    let left = 0;
    let right = A.length - 1;
    while (left < right) {
        if (A[left] % 2 && A[right] % 2 === 0) {
            const temp = A[left];
            A[left] = A[right];
            A[right] = temp;
        } else {
            if (A[left] % 2 === 0) {
                left++;
            }
            if (A[right] % 2) {
                right--
            }
        }
    }
    return A;
};

console.time("bruh");
console.log("hello");
console.assert(JSON.stringify(sortArrayByParity([3, 1, 2, 4])) === JSON.stringify([4, 2, 1, 3]), "works");
console.assert(JSON.stringify(sortArrayByParity([1, 4, 3, 5, 2, 6])) === JSON.stringify([6, 4, 2, 5, 3, 1]), "works");
console.assert(JSON.stringify(sortArrayByParity([1, 3, 5, 7, 9])) === JSON.stringify([1, 3, 5, 7, 9]), "ends correctly");
const odds = [1, 3, 5, 7, 9];
console.assert(sortArrayByParity(odds) === odds, "doesn't mutate when it doesn't have to");
console.timeLog("bruh");
console.timeEnd("bruh");