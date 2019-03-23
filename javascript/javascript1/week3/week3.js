//-----Item array removal------//
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);
for (let i = 0; i < numbersArray.length; i++){
if (numbersArray[i]===randomNumber){
    let randomNumber= numbersArray.splice(i,1);
}
}
console.log('The removed number is'+' '+ randomNumber)

//------Series duration of my life------//
const seriesDurations = [
    {
        title: 'Friends',
        days: 4,
        hours: 20,
        minutes: 32,  
      },
    {
      title: 'Lost',
      days: 5,
      hours: 0,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]
var averageLifeMin = (80*365*24*60);
var friendsMin= ((4*24)+20)*60+32;
var lostMin= (5*24*60);
var theWireMin= ((2*24)+12)*60;
var total= friendsMin+lostMin+theWireMin;

console.log('Friends took'+' '+friendsMin/averageLifeMin*100+' '+'% of my life.')
console.log('Lost took'+' '+lostMin/averageLifeMin*100+' '+'% of my life.')
console.log('The Wire took'+' '+theWireMin/averageLifeMin*100+' '+'% of my life.')
console.log('In total that is'+' '+total/averageLifeMin*100+' '+'% of my life.')

//------My favorite songs------//
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

//Add song to database
function addSongDatabase (song){
    songDatabase.push(song);
}
addSongDatabase({songId:5, title:'Vi To',artist:'Medina'});
console.log(songDatabase);

//Searching for a song
function getSongByTitle (title){
let result;
for (let i=0; i < songDatabase.length; i++) {
   if (songDatabase[i].title===title) {
    console.log(songDatabase[i]);
    return result;
   }
}
}
let searchedSong = getSongByTitle('Vi To');
console.log(searchedSong);

//Create our own playlist
const myPlaylist = [];
function addSongToPlaylist (title){
myPlaylist.push(getSongByTitle)
}
addSongToPlaylist('My baby');
console.log(myPlaylist); // [{ songId: 1, title: 'My baby', artist: 'Soggy socks' }]


//----------NOnoN0nOYes---------//
let notes = [];
function addNote (content, id){
    notes.push({content: content, id: id });
}
addNote('hi there, this is the first note', 1);
addNote('hey guys, this is the second note', 2);
console.log(notes);

//Get a note
function getNoteFromId (id){
    for (let i=0; i < notes.length; i++){
    if (notes[i].id === id){
        console.log(notes[i]);
    } else if (id !=='number'){
        console.log('error');
    }
    }
    return;
}
console.log(getNoteFromId(1));

//Get all notes
function getNotes (){
    return notes;
}
console.log(getNotes ());

//Log out notes
function logOutNotesFormatted (){
    for (let i = 0; i < notes.length; i++){
        console.log("The note with id:"+' '+notes[i].id+' '+ 'has the following note text:'+notes[i].content +".")
    }
}
console.log(logOutNotesFormatted());


//----------CactusIO-interactive----------//
let activities = [];
function addActivity (date, activity, duration){
activities.push ({date: date, activity: activity, duration: duration,});
} 
addActivity('23/03-2019','slack', 40);
addActivity('23/03-2019','Dr.dk', 30);
addActivity('23/03-2019','Youtube', 50);
console.log(activities);

//Show my status
var timeUsed= 50+30+40;
function showStatus(){
    if (activities.length === 0){
     console.log("Add some activities before calling showStatus");  
    }
    for (let i=0; i < activities.length; i++ ){
        timeUsed += activities[i].duration;
    }
}
console.log('You have added 3 activities. They amount to '+' '+timeUsed+' '+ 'min. of usage.');

//Usage limit
var usageLimit = 150;
if (timeUsed >= usageLimit){
    console.log('You have reached your limit, no more smartphoning for you!');
} 

