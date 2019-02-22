class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  add(value) {
    if (value > this.value) {
      if (!this.right) {
        const bst = new BinarySearchTree(value);
        this.right = bst;
      }
      else {
        this.right.add(value);
      }
    }

    else {
      if (!this.left) {
        const bst = new BinarySearchTree(value);
        this.left = bst;
      }
      else {
        this.left.add(value);
      }
    }
  }
    /*
      -check if value is equal to the current node value, if it is then return true
      -else check if the value is greater than the node's value and if it is then start checking to the right,
      -else start checking to the left of the tree
    */
  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value > this.value) {
      this.right.contains(value);
    }
    else {
      this.left.contains(value);
    }
  }

  depthFirstPre(callback) {

  }

  depthFirstIn(callback) {

  }

  depthFirstPost(callback) {

  }

  breadthFirst(callback) {
    
  }

}

const bst = new BinarySearchTree(5);

bst.add(2);
bst.add(3);
bst.add(7);

console.log('BST results >>> ', bst);

module.exports = {
  BinarySearchTree
};
