class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  pop() {
    const element = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;
    return element;
  }
}

module.exports = {
  Stack
};
