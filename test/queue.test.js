const { assert } = require('chai');
const { Queue } = require('../src/Queue');

describe('Queue()', () => {
  let queue;
  
  beforeEach(() => {
    queue = new Queue();
  });

  it('should have enqueue and dequeue methods', () => {
    assert.equal('enqueue' in queue, true);
    assert.equal('dequeue' in queue, true);
    assert.equal(typeof queue.enqueue, 'function');
    assert.equal(typeof queue.dequeue, 'function');
  });

  it('should enqueue elements to end of queue', () => {
    queue.enqueue(0);
    assert.equal(queue.storage['0'], 0);
  });

  it('should dequeue elements from front of queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.dequeue(), '1');
    assert.equal(queue.dequeue(), '2');
  });

  it('should return undefined when dequeueing empty queue', () => {
    assert.equal(queue.dequeue(), undefined);
  });
});