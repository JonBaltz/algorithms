const fizzBuzz = function(n) {
	let result;
	for (let i = 1; i < n; i++) {
		result = "";
		result += i % 3 ? "" : "Fizz";
		result += i % 5 ? "" : "Buzz";
		console.log(result || i);
	}
};

fizzBuzz(100);
