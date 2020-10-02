//

const RecentCounter = function () {
	this.time = 0;
	this.expirations = [];
	this.calls = 0;
};

RecentCounter.prototype.ping = function (t) {
	this.time = t;
	this.expirations.push(t);
	this.calls++;
	while (this.expirations[0] < t - 3000) {
		this.calls--;
		this.expirations.shift();
	}
	return this.calls;
};

const test = new RecentCounter();
console.log(test.ping(1));
console.log(test.ping(100));
console.log(test.ping(3001));
console.log(test.ping(3002));
