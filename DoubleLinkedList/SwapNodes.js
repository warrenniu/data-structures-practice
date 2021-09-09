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

  return obj;
}

let a = newNode(1);
let b = newNode(2);
let c = newNode(3);
let d = newNode(4);
//setting b next to a [1]->[2]
a.setNext(b);
//setting c next to b [1]->[2]->[3]
b.setNext(c);
//setting d next to c [1]->[2]->[3]->[4]
c.setNext(d);

//swap nodes in singly linked list

//swap nodes in doubly linked list
function swapPairs(node) {
  //currentNode -> a; previous -> null; next -> b
  //currentNode -> c; previous -> a; next -> d
  let currentNode = node;

  while (currentNode !== null && currentNode.next() !== null) {
    //nextNode -> b; previous -> a; next -> c
    //nextNode -> d; previous -> c; next -> null
    const nextNode = currentNode.next();
    const temp = currentNode.previous();

    //currentNode -> a; previous -> b; next -> b
    //currentNode -> c; previous -> d; next -> d
    currentNode.setPrev(nextNode);
    //currentNode -> a; previous -> b; next -> c
    //currentNode -> c; previous -> d; next -> null
    currentNode.setNext(nextNode.next());

    //nextNode -> b; previous -> a; next -> a
    //nextNode -> d; previous: c; next -> c
    nextNode.setNext(currentNode);
    //nextNode -> b; previous -> null; next -> a
    //nextNode -> d; previous -> a; next -> c
    nextNode.setPrev(temp);

    //currentNode -> c; previous -> b; next -> d
    currentNode = currentNode.next();
    if (currentNode !== null) {
      //currentNode -> c; previous -> a; next -> d
      currentNode.setPrev(nextNode.next());
    }
  }

  //Add [e] & [f] nodes
  // [2]->[1]
  return currentNode;
}

swapPairs(a);
console.log(a, b, c, d);

//1. currentNode -> a
//2. previous = null
//3. next = b
//4. currentNode.next -> next.next
//5. currentNode.previous -> next
//6. next.next -> currentNode
//6. next.previous -> previous
