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

let a = newNode(1);
let b = newNode(2);
let c = newNode(3);
let d = newNode(4);
a.setNext(b);
b.setNext(c);
c.setNext(d);

// let temp = a.next();
// a.setNext(b.next());
// b.setNext(temp);
// console.log(a);

function swapPairs(node) {
  //currentNode -> a
  let currentNode = node;
  let secondNode = null;

  //initial currentNode -> a; next -> b
  while (currentNode !== null && currentNode.next() !== null) {
    //1st iteration nextNode -> b; next -> c
    //2nd iteration nextNode -> d; next -> null
    const nextNode = currentNode.next();

    //1st iteration currentNode -> a; next -> c
    //2nd iteration currentNode -> c; next -> null
    currentNode.setNext(nextNode.next());
    console.log("=========");
    printSwapList(currentNode);
    //1st iteration nextNode -> b; next -> a
    //2nd iteration nextNode -> d; next -> c
    nextNode.setNext(currentNode);
    console.log("After swap");
    printSwapList(nextNode);

    //1st iteration currentNode -> c; next -> d
    //2nd iteration currentNode -> null; next -> null
    console.log("value of currentNode.next", currentNode.next());
    if (secondNode) {
      secondNode.setNext(nextNode);
    }
    secondNode = currentNode;
    currentNode = currentNode.next();
  }
}

// printSwapList(a);
swapPairs(a);
printSwapList(b);
// console.log("===============");
// printSwapList(a);
// console.log(a, b, c, d);

function printSwapList(node) {
  let currentNode = node;
  //Initial: currentNode -> 1; next -> 2
  //1st iteration: currentNode -> 2; next -> 3
  //2nd iteration: currentNode -> 3; next -> 4
  //3rd iteration: currentNode -> 4; next -> null
  while (currentNode !== null) {
    console.log(currentNode.value());
    currentNode = currentNode.next();
  }
}
