const asyncMap = function(tasks, callback) {
	let num = 0;
	const results = [];
	const helper = function(result) {
		if (result) results.push(result);
		if (num >= tasks.length) return callback(results);
		tasks[num++](helper);
	}
	helper();
};

asyncMap([
	(cb) => {
		setTimeout(() => {
			cb("one");
		}, 200);
	},
	(cb) => {
		setTimeout(() => {
			console.log("this one won't return anything");
			cb();
		}, 1000);
	},
	(cb) => {
		setTimeout(() => {
			cb("two");
		}, 100);
	}],
	(results) => {
		console.log(results);
	});
