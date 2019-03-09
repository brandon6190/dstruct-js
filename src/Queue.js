class Queue {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue() {

  }

}

module.exports = {
  Queue
};
