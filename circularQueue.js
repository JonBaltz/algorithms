// https://leetcode.com/problems/design-circular-queue/

class MyCircularQueue {
	constructor(k) {
		this.size = k;
		this.empty = true;
		this.sto = Array.from({ length: k });
		this.points = [0, 0];
	}

	enQueue(value) {
		if (this.isFull()) return false;
		this.empty = false;
		this.sto[this.points[1]] = value;
		this.points[1] = (this.points[1] + 1) % this.size;
		return true;
	}

	deQueue() {
		if (this.isEmpty()) return false;
		this.points[0] = (this.points[0] + 1) % this.size;
		if (!(this.points[1] - this.points[0])) this.empty = true;
		return true;
	}

	Front() {
		if (this.isEmpty()) return -1;
		return this.sto[this.points[0]];
	}

	Rear() {
		if (this.isEmpty()) return -1;
		return this.sto[this.points[1] ? this.points[1] - 1 : this.size - 1];
	}

	isEmpty() {
		return this.empty;
	}

	isFull() {
		return (!this.isEmpty() && !(this.points[1] - this.points[0]));
	}
}
