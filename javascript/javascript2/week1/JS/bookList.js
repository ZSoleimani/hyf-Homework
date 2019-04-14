const bookList = [
{id:'book1',
title:'Asymmetry',
language:'English',
author:'Lisa Halliday',
img: './img/1.jpg',
},

{id:'book2',
title:'The Great Believers',
language:'English',
author:'Rebecca Makkai',
img: './img/2.jpg',
},

{id:'book3',
title:'The Perfect Nanny',
language:'French',
author:'Leila Slimani',
img: './img/3.jpg',
},

{id:'book4',
title:'There There',
language:'English',
author:'Tommy Orange',
img: './img/4.jpg',
},

{id:'book5',
title:'Washington Black',
language:'English',
author:'Esi Edugyan',
img: './img/5.jpg',
},

{id:'book6',
title:'American Prison',
language:'English',
author:'Shane Bauer',
img: './img/6.jpg',
},

{id:'book7',
title:'Educated',
language:'English',
author:'Tara Westover',
img: './img/7.jpg',
},

{id:'book8',
title:'Frederick Douglass',
language:'English',
author:'David W. Blight',
img: './img/8.jpg',
},

{id:'book9',
title:'How to Change Your Mind',
language:'English',
author:'Michael Pollan',
img: './img/9.jpg',
},

{id:'book10',
title:'Small Fry',
language:'English',
author:'Lisa Brennan-Jobs',
img: './img/10.jpg',
},
]

function displayBooks() {
      for (i = 0; i < bookList.length; i++) {
          let h2 = document.createElement('h2');
          h2.innerHTML = bookList[i].title;
          document.body.appendChild(h2);

          let h3 = document.createElement('h3');
          h3.innerHTML = bookList[i].language;
          document.body.appendChild(h3);
          h3 = document.createElement('h3');
          h3.innerHTML = bookList[i].author;
          document.body.appendChild(h3);
          
          let img = document.createElement('img');
          img.src = bookList[i].img;
          document.body.appendChild(img);
      }   
  }
  displayBooks();