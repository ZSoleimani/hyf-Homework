//Warmup exercises
//1. 
setTimeout(function(){
    console.log("called after 2.5 seconds");
},2500);

//2. 
function logoutParameters (delay, stringToLog) {
    setTimeout (function(){
        console.log(stringToLog)
    }, delay);
}
    logoutParameters (3500, "called after 3.5 second");

//3.

