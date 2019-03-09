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
    let doesContain = false;
  
    function findValueIn(bst) {
      if (bst !== null) {
        if (bst.value === value) {
          doesContain = true;
        }
        else if (bst.left !== undefined && value < bst.value) {
          findValueIn(bst.left);
        }
        else if (bst.right !== undefined && value > bst.value) {
          findValueIn(bst.right);
        }
      }
    }
  
    findValueIn(this);
    return doesContain;
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
