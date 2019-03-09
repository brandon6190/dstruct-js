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
    const element = this.storage[0];

    if (!this.index) return undefined;

    for (let i = 0; i < this.index; i += 1) {
      this.storage[i] = this.storage[i+1];
    }
    
    delete this.storage[this.index-1];
    this.index--;

    return element;
  }

}

module.exports = {
  Queue
};
