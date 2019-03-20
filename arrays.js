var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function removeElementFromBeginningOfArray(array) {
    array.slice(0,1)
}
function addElementToBeginningOfArray(array, element){
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
