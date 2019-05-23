//warmup doubling of numbers:
let numbers = [1, 2, 3, 4];
let newNumbers = [];
let oddNumbers = numbers.filter(number => number % 2 !==0);
oddDoubling = oddNumbers.map(number => number * 2);

console.log(oddNumbers);
console.log(oddDoubling);

//warmup movie
//1. short movie titles 
let shortTitles = movies.filter(movie => movie.title.length <= 6);
console.log(shortTitles);

//2. long movie titles
let longTitles = movies.filter(movie => movie.title.length > 60);
console.log(longTitles);

//3. number of movies
let yearOfMovies = movies.filter(movie => movie.year >=1980 && movie.year <=1989);
console.log(yearOfMovies);

//4. new array
let movieRating = movies.map(movie => {
    if (movie.rating >= 7) {
       movie.tag = "Good"; 
    }
    else if (movie.rating >= 4 && movie.rating < 7) {
        movie.tag = "Average";
    }
    else if (movie.rating < 4){
        movie.tag = "Bad";
    }
    return movie;
});
console.log(movieRating);

//5. changing
let highRate = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);

console.log(highRate);

//6. Count the total number of movies
let findName = movies.filter(function(movie) {
    if (movie.title.toLowerCase().includes("surfer") || 
        movie.title.toLowerCase().includes("alien") ||
        movie.title.toLowerCase().includes("benjamin"))
    return movie.title;         
});
console.log(findName.length);
