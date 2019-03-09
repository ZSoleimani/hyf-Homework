let dogYearOfBirth = 2018;
let dogYearFuture = 2045;
let humanYear = dogYearFuture - dogYearOfBirth;
let dogYear = humanYear * 10;
let shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears){
    console.log("The dog will be"+" "+humanYear+" "+"human years old in"+" "+dogYearFuture);
}
else{
    console.log("The dog will be"+" "+dogYear+" "+"dog years old in"+" "+dogYearFuture);
}
console.log(dogYear);