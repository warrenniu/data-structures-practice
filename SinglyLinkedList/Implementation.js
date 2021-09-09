// Linked List, Has nodes
// Singly linked list
// Nodes
// []->[]->[]-> ...
// A given node:
// - Value
// - Next, pointer to next node.
// - Prev, (pointer to previous node

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

  return obj;
}

// let myNode = newNode(1); // [1]
// console.log(myNode.value());
// console.log(myNode.next());
// let warrenNode = newNode(2); // [2]
// console.log(warrenNode.value());
// console.log(warrenNode.next());
// myNode.setNext(warrenNode); // [1] -> [2]
// console.log(myNode.value()); // still 1, since its myNode
// console.log(myNode.next()); // now points to warrenNode

// State of the linked list: [1] -> [2]
// let connieNode = newNode(10); // [10]
// warrenNode.setNext(connieNode); // [1] -> [2] -> [10]

// console.log(getLastNodeValue(myNode)); // prints 10

// Next time: please implement doubly linked list
// Swap pairs things
let a = newNode(1);
let b = newNode(2);
let c = newNode(3);
let d = newNode(4);
a.setNext(b);
b.setNext(c);
c.setNext(d); // [1]->[2]->[3]->[4]

// let z = newNode(10);
// let y = newNode(9);
// z.setPrev(y);

// function swapPairs(node) {
//   // node.value(); // gives value
//   // node.next(); // gives next node
//   // return full link list after pair swap [2]->[1]->[4]->[3]

//   // while (c.next() !== null) {
//   // }
//   let a = node;
//   let aNext = a.next();
//   let bNext = b.next();
//   aNext = bNext;
//   bNext = a.previous();

//   console.log(a);

// let bNext = b.next();
// console.log(bNext);
// let cNext = c.next();
// console.log(cNext);
// let dNext = d.next();
// bNext = cNext;
// cNext = dNext;
// console.log(b)
// console.log(a);
// }

// do it knowing every node
// do it with only head node
// swapPairs(a); // [2]->[1]->[4]->[3]

// Check out some visualization: https://algoviz.io/
