const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

//calculating average price
let sum = housePrices.reduce((previous, current) => current += previous);
let avg = sum / housePrices.length;
console.log('Average is'+' '+avg);


//calculating Median price

// longer way:
// housePrices.sort((a, b) => a - b);
// let lowMiddle = Math.floor((housePrices.length - 1) / 2);
// let highMiddle = Math.ceil((housePrices.length - 1) / 2);
// let median = (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
// console.log(median);

housePrices.sort((a, b) => a - b);
let median = (housePrices[(housePrices.length - 1) >> 1] + housePrices[housePrices.length >> 1]) / 2
console.log('Median is'+' '+median);

//returning the median and average in an object
function medianAverage(avg,median){
    let objMedianAvg = {avg,median};
    console.log(objMedianAvg);
    return objMedianAvg;
}
medianAverage(avg,median);