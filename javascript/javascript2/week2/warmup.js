//warmup array exercises
let numbers = [1, 2, 3, 4];
let newNumbers = [];

let oddNumbers = numbers.filter(number => number % 2 !==0);
let doubleOddNumbers = oddNumbers.map(number => number * 2);

console.log(oddNumbers);
console.log("The doubled numbers are", doubleOddNumbers);

