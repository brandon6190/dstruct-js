const { assert } = require('chai');
const { Stack } = require('../src/Stack');

describe('Stack()', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    storage = stack.storage;
  });

  it('should have a push and pop method', () => {
    assert.equal('push' in stack, true);
    assert.equal('pop' in stack, true);
    assert.equal(typeof stack.push, 'function');
    assert.equal(typeof stack.pop, 'function');
  });

  it('should push elements to stack', () => {
    stack.push(0);
    stack.push(1);
    assert.equal(stack.storage['0'], 0); 
  });

  it('should pop most recently pushed element and return it', () => {
    stack.push(1);
    stack.push(2);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 1);
  });

  it('should return undefined when popping empty stack', () => {
    stack.push(1);
    stack.pop();
    assert.equal(stack.pop(), undefined);
  });
});