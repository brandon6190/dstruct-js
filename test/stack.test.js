const { assert } = require('chai');
const { Stack } = require('../src/Stack');

describe('Stack', () => {
  let stack, storage;

  beforeEach(() => {
    stack = new Stack();
    storage = stack.storage;
  });

  it('should have a push and pop method', () => {
    assert.equal(stack.hasOwnProperty('push'), true);
    assert.equal(stack.hasOwnProperty('pop'), true);
    assert.equal(typeof stack.push, 'function');
    assert.equal(typeof stack.pop, 'function');
  });
});