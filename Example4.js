//Get all unique element 
// Subarray inside of array

let number = [1, 2, [1, 2], 3, 4, 5, [5, 6]];
let flattenElement = number.flat();
console.log([...new Set(flattenElement)]);
