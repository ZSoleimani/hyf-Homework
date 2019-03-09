let firstWords = ["Easy","Awesome","Corporate","Delicious","Fabulous","Amazing","Lovely","Enjoyable","Facinating","Tolerable"];
let secondWords = ["Brusque","Cajole","Jabber","Jostle","Flabbergasted","Gluttony","Impeccable","Erudite","Exasperated","Malleable"];
/*Random number calculation*/
let randomNumber = Math.floor(Math.random() * 10) + 0;
let startupName = (firstWords[randomNumber]+" "+secondWords[randomNumber]);
let numberOfCharacters = firstWords[randomNumber].length+secondWords[randomNumber].length;
console.log("The startup name:"+" "+startupName+" "+"contains"+" "+numberOfCharacters+" "+"characters")