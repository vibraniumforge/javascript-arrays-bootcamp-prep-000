var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  return [..array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.unshift[0];
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(0);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop;
}

function removeElementFromBeginningOfArray(array) {
    array.slice(0,1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(-1)
}
