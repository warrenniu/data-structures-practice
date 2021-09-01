// Linked List, Has nodes
// Singly linked list
// Nodes
// []->[]->[]-> ...
// A given node:
// - Value
// - Next, pointer to next node.
// - Prev, (pointer to previous node

// Given a node of linked list, return value of last node.
function getLastNodeValue(node) {
  // node.value(); // gives value
  // node.next(); // gives next node
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
  obj.setNext = function (nextNode) {
    obj.nextNode = nextNode;
  };
  // obj.getLastNodeValue = function() {
  //   // ^ getLastNodeValue
  // }

  return obj;
}

let myNode = newNode(1); // [1]
console.log(myNode.value());
console.log(myNode.next());
let warrenNode = newNode(2); // [2]
console.log(warrenNode.value());
console.log(warrenNode.next());
myNode.setNext(warrenNode); // [1] -> [2]
console.log(myNode.value()); // still 1, since its myNode
console.log(myNode.next()); // now points to warrenNode

// State of the linked list: [1] -> [2]

let connieNode = newNode(10); // [10]
warrenNode.setNext(connieNode); // [1] -> [2] -> [10]

console.log(getLastNodeValue(myNode)); // prints 10

// Next time: please implement doubly linked list
// Swap pairs things
let a = newNode(1);
let b = newNode(2);
let c = newNode(3);
let d = newNode(4);
a.setNext(b);
b.setNext(c);
c.setNext(d); // [1]->[2]->[3]->[4]

// do it knowing every node
// do it with only head node
swapPairs(a); // [2]->[1]->[4]->[3]

// Check out some visualization: https://algoviz.io/
