function getLastNodeValue(node) {
  node.value(); // gives value
  node.next(); // gives next node
  // return value of the last node of Linked list
  // node.next() will be null when we are at the last node

  let currentNode = node;
  while (currentNode.next() !== null) {
    console.log("going to next node");
    currentNode = currentNode.next();
  }
  return currentNode.value();
}

// Make blueprint of node.
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
function newNode(intValue) {
  const obj = {}; // creating a new JS object
  obj.val = intValue;
  obj.nextNode = null;

  // value() - I will return what I have saved in val
  obj.value = function () {
    return obj.val;
  };
  obj.next = function () {
    return obj.nextNode;
  };
  obj.previous = function () {
    return obj.prevNode;
  };
  obj.setNext = function (nextNode) {
    obj.nextNode = nextNode;
  };
  obj.setPrev = function (prevNode) {
    obj.prevNode = prevNode;
  };
  // obj.getLastNodeValue = function() {
  //   // ^ getLastNodeValue
  // }

  return obj;
}
