const { assert } = require('chai');
const { BinarySearchTree } = require('../src/BinarySearchTree');

describe('BinarySearchTree()', () => {
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

  describe('add() method', () => {
    it('should add values at the correct location', () => {
      binarySearchTree.add(2);
      binarySearchTree.add(3);
      binarySearchTree.add(7);
      binarySearchTree.add(6);

      assert.equal(binarySearchTree.left.right.value, 3);
      assert.equal(binarySearchTree.right.left.value, 6);
    });
  });

  describe('contains() method', () => {
    it('should return true if the value is within the BST', () => {
      binarySearchTree.add(2);
      binarySearchTree.add(3);
      binarySearchTree.add(7);

      assert.equal(binarySearchTree.contains(7), true);
    });

    it('should return false if the value is not within the BST', () => {
      binarySearchTree.add(2);
      binarySearchTree.add(3);
      binarySearchTree.add(7);
      
      assert.equal(binarySearchTree.contains(8), false);
    });
  });
});