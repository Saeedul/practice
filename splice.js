const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2); // removes elements at index 1 and 2

console.log(originalArray); // [1, 4, 5]
console.log(removedElements); // [2, 3]