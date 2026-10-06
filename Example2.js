// Get Unique element without set

const numbers = [1, 2, 3, 4, 5, 5, 6, 4, 3];
let uniqueElement = [];
for (let i = 0; i < numbers.length; i++)
  if (!uniqueElement.includes(numbers[i])) uniqueElement.push(numbers[i]);

console.log(uniqueElement);
