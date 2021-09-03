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
