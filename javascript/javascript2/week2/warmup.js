//warmup doubling of numbers:
let numbers = [1, 2, 3, 4];
let newNumbers = [];
let oddNumbers = numbers.filter(number => number % 2 !==0);
newNumbers = oddNumbers.map(number => number * 2);

console.log(oddNumbers);
console.log("The doubled numbers are", newNumbers);

//warmup movie
//movies with a short title 
let shortTitles = movies.filter(movie => movie.title.length <= 6);
console.log(shortTitles);

//long movie titles
let longTitles = movies.filter(movie => movie.title.length > 60);
console.log(longTitles);


