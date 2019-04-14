let boughtCandyPrices = [];

function addCandy(candyType, weight){
    let thePrice = undefined
    if (candyType === 'Sweet'){
        thePrice = 0.5 * weight
         }
    else if (candyType ==='Chocolate'){
        thePrice = 0.7 * weight
         } 
    else if (candyType === 'Toffee'){
        thePrice = 1.1 * weight
         }
    else if (candyType === 'Chewing-gum'){
        thePrice = 0.03 * weight
         } 
    return boughtCandyPrices.push(thePrice)
}
  //first function ended 
  
let amountToSpend = Math.random() * 100;
let totalPrice = 0;


function canBuyMoreCandy (){
    
    for (i=0; i<boughtCandyPrices.length; i++){
        totalPrice += boughtCandyPrices[i];
    } 
    if (amountToSpend > totalPrice){
    return ('You can buy more candy.')
    } else {
        return('Enough candy for you!')


    }
} 
//seond function ended

console.log(canBuyMoreCandy());

