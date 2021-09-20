const left = 0;
const right = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
  }

  get left() {
    return this.descendents[left];
  }
  set left(node) {
    this.descendents[left] = node;
    if (node) {
      node.parent = this;
    }
  }
  get right() {
    return this.descendents[right];
  }
  set right(node) {
    this.descendents[right] = node;
    if (node) {
      node.parent = this;
    }
  }
}
