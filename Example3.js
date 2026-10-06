// Element which contain only 1 time

const numbers = [1, 2, 3, 4, 5, 5, 6, 4, 3];
let result = numbers.filter(
  (x) => numbers.filter((num) => num == x).length == 1,
);
console.log("Element which contain only 1 time : ", result);

// Element which contain multiple time

result = [
  ...new Set(
    numbers.filter((x) => numbers.filter((num) => num == x).length > 1),
  ),
];
console.log("Element which contain multiple time : ", result);
