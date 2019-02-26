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

const bst = new BinarySearchTree(5);

bst.add(2);
bst.add(3);
bst.add(7);

console.log('BST results >>> ', bst.contains(8));

module.exports = {
  BinarySearchTree
};
