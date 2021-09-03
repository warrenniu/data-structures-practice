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

let a = newNode(1);
let b = newNode(2);
let c = newNode(3);
let d = newNode(4);
//setting b next to a [1]->[2]
a.setNext(b);

//swapping [1] and [2]
function swapPairs(node) {
  let currentNode = node;

  while (currentNode.next() !== null) {
    let nextNode = currentNode.next();

    currentNode.setPrev(nextNode);
    currentNode.setNext(nextNode.next());
    nextNode.setNext(currentNode);
    nextNode.setPrev(currentNode.previous());
    // nextNode.previous(currentNode);
    // b.setNext(currentNode);
    currentNode = nextNode;
  }

  console.log(currentNode); // [2]->[1]
  return currentNode;
}
