const arr = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];


//finding the shortest word in an array
const findShortestWord = array => {
    let shortest = '';
    
    for (let element of array) {
      if (typeof element === 'string' &&
          (shortest === '' || element.length < shortest.length)) {
        shortest = element;
      }
    }
    
    return shortest;
  };
  
  console.log(
    findShortestWord([[], 0, null, undefined, 'aa', Infinity, true, 'ø'])
  );

  
//finding the shortest string in array
// var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
// console.log(min);