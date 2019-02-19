const { assert } = require('chai');
const BinarySearchTree = require('../src/BinarySearchTree');

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach( () => {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "add", "contains", "depthFirstIn", "depthFirstPre", "depthFirstPost", "breadthFirst"', () => {
    assert.equal(typeof binarySearchTree.add, 'function');
    assert.equal(typeof binarySearchTree.contains, 'function');
    assert.equal(typeof binarySearchTree.depthFirstIn, 'function');
    assert.equal(typeof binarySearchTree.depthFirstPre, 'function');
    assert.equal(typeof binarySearchTree.depthFirstPost, 'function');
    assert.equal(typeof binarySearchTree.breadthFirst, 'function');
  });
});