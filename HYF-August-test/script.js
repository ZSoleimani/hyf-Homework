// 1. Main theme: Programing Basic:
function logNumbers() {
    for(let i = 100; i <= 200; i++) {
        if (i % 30 === 0) console.log('This is divisible by 30 :'  + i)
        if (i % 10 === 0) console.log('This is divisible by 10 :'  + i)
        if (i % 30 === 0 && i % 10 === 0) console.log('Jackpot :' + i)}
}

logNumbers();


// 2. Main theme: DOM manipolation:
var el_up = document.getElementById("GFG_UP"); 
var el_down = document.getElementById("GFG_DOWN"); 
var str = "Click on button to change the background color"; 
          
el_up.innerHTML = str; 
          
function changeBgColor(color) { 
    document.body.style.background = color; 
            } 
              
function gfg_Run() { 
    changeBgColor('pink'); 
    el_down.innerHTML = "Background Color changed"; 
            } 


// 3. Main theme: Async API calls:
fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        data.data.forEach(d => {
        document.querySelector('body').innerHTML += '<p>' + d.first_name + '</p>' 
        })
    })