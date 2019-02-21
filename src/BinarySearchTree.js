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

  contains(value) {

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

module.exports = {
  BinarySearchTree
};
