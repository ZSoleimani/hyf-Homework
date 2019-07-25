//exercise1: movies
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(Response => Response.json())
.then((movies) => {
    console.log(movies);

    let badMovies = movies.filter(movie => movie.rating < 4);
    console.log(badMovies);

    let badMoviesSince2000 = movies.filter(movie => movie.rating <4 && movie.year <=2000);
    console.log(badMoviesSince2000);

    let badMoviesTitle = badMoviesSince2000.map(movie => movie.title);
    console.log(badMoviesTitle);
});

//exercise2: Promise that resolves after set time
function returnAPromise (resolveAfter) {
    return new Promise (function (resolve){
        setTimeout(()=> {
            resolve('I am called asynchronously');
        }, 1000 * resolveAfter)
    });
} var x = returnAPromise(3)
x.then(data =>
    console.log(data));

//exercise3: Rewrite time
function setTimeoutPromise(millisecond){
    return new Promise( function(resolve){
        setTimeout(resolve, millisecond);
    });
}
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
  });

function getCurrentLocation(){
    return new Promise (function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
  getCurrentLocation()
    .then(position => {
      // called when the users position is found
      console.log(position);
    })
    .catch(error => {
      // called if there was an error getting the users location
      console.log(error);
    });

//exercise4:Fetching and waiting
const getPosts = () => {
    return fetch (`http://jasonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => console.log(posts))
    .then ((response) => response.json())
    .then ((res)=>{setTimeout(()=>{console.log(res);},3000);})
}




