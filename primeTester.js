const primeTester = function (n) {
	if (typeof n !== "number" || n <= 1 || n % 1 !== 0) {
		return false;
	}
	if (n !== 2 && n % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

const primeSieve = function (start, end) {
	const array = [false, false];
	for (let i = 2; i <= end; i++) {
		array[i] = true;
	}
	for (let i = 2; i < Math.sqrt(end); i++) {
		if (array[i]) {
			for (let j = Math.pow(i, 2); j <= end; j += i) {
				array[j] = false;
			}
		}
	}
	const result = [];
	for (let i = start; i <= end; i++) {
		if (array[i]) {
			result.push(i);
		}
	}
	return result;
};

console.assert(primeTester(5) === true, "5");
console.assert(primeTester(100) === false, "100");
console.assert(primeTester(2) === true, "2");
console.assert(primeTester(1) === false, "1");
console.assert(primeTester(15485867) === true);
console.assert(primeTester(15485867 * 15485867) === false);
console.assert(primeTester(2971215073) === true);
console.assert(primeTester(2971215073 * 2971215073) === false);
console.assert(primeTester(70368760954879) === true);
console.assert(primeTester(70368760954879 - 1) === false);

console.log(primeSieve(0, 100));
console.log(primeSieve(100, 1000));
