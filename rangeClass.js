const Range = function(start, end, step) {
	if (start !== undefined) {
		this.start = start;
	} else {
		return null;
	}
	this.end = end !== undefined ? end : start;
	this.step = step || 1;
	this.step = this.start > this.end ? Math.abs(this.step) * -1 : this.step;
	this.largeness = 1 + Math.floor( (this.end - this.start) / this.step );
};

Range.prototype.size = function() {
	return this.largeness;
};

Range.prototype.each = function(callback) {
	if (this.start <= this.end) {
		for (let i = this.start; i <= this.end; i += this.step) {
			callback(i);
		}
	} else {
		for (let i = this.start; i >= this.end; i += this.step) {
			callback(i);
		}
	}
};

Range.prototype.includes = function(value) {
	let flag = false;
	this.each(item => { flag = value === item ? true : flag; });
	return flag;
};

(function() {
	const range = new Range(1, 10, 1);
	const arr = [];
	range.each(item => { arr.push(item) });
	console.assert(JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "range functions correctly");
	console.assert(range.size() === 10, "Size works correctly");
	// console.log(range.size());
})();

(function() {
	const range = new Range(1, 5);
	const arr = [];
	range.each(item => { arr.push(item) });
	console.assert(JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4, 5]), "step is 1 if not specified");
})();

(function() {
	const range = new Range(0, 6, 3);
	const arr = [];
	range.each(item => { arr.push(item) });
	console.assert(JSON.stringify(arr) === JSON.stringify([0, 3, 6]), "works when step size is not 1");
	console.assert(range.includes(3), "this range should include 3");
	console.assert(!range.includes(2), "this range wont include 2");
})();

(function() {
	const range = new Range(10, 1, -1);
	const arr = [];
	range.each(item => { arr.push(item) });
	console.assert(JSON.stringify(arr) === JSON.stringify([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), "ranges that count backwards work");
	console.assert(range.size() === 10, "size works correctly when negaitve");
	// console.log(range.size());
})();
