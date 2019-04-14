let spiritAnimalList = ['Lazy camel','Smart goat','Sexy tiger','Crazy goos','Smily donkey','Jumping rabbit','Angry bird', 'Sleepy lizard', 'Big pig', 'Horny giraffe','In love bear'];

function spiritAnimalGame (){
   let inputId = document.getElementById("input_id").value;
   if (!inputId) {
      alert ('Enter your name');
   } else {
      let randomNumber = Math.floor(Math.random()* spiritAnimalList.length);
      document.getElementById('p-id').innerHTML = inputId + ' '+ ' - '+ 'your spirit animal name is: '+ spiritAnimalList[randomNumber]; 
   }
}
