//find the mean of an array
function mean(arr) {
    return sumArray(arr)/arr.length;
}
//median of an array
function median(arr) {
    arr.sort();
    const MID = Math.floor(arr.length / 2);
    if(arr % 2 === 0){
        return arr[arr.MID];
    } else return (arr[MID - 1] + arr[MID]) / 2; 
}
//mode of an array
function mode(arr) {

    let modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < arr.length; i++) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}
//range of an array
function range(numbers) {
    numbers.sort();
    return [numbers[0], numbers[numbers.length - 1]];
}

//sum the elements of an array
function sumArray(arr){
    let sum = 0;

    arr.forEach(element => {
        sum += element;
    });
    return sum;
}



//provides a list of mid points from a 2 dimensional array, returns a string of midpoints
// array = [[low limit, high limit, datapoint],[low limit, high limit, datapoint]];
function listOfMidpoints(arr){
    let listofpoints = "";
    let midpoint = 0;
    let count = 0;
    for(i=0; i < arr.length; i++){
        count = arr[i][2];
        midpoint = arr[i][0] + arr[i][1];
        for(j=0; j < count; j++){
            listofpoints += midpoint + ", ";
        }
    }
    
    return listofpoints;
}

//variance for population
function variancePopulation(arr){
    const MEAN = mean(arr);
    let topLine = 0;
    let n = arr.length;
    let variance = 0;
    arr.forEach(element => {
        topLine += Math.pow((element - MEAN), 2);
    });
    variance = (topLine/n);
    return variance;
}

//Variance for sample
function varianceSample(arr){
    const MEAN = mean(arr);
    let topLine = 0;
    let n = arr.length -1;
    let variance = 0;
    arr.forEach(element => {
        topLine += Math.pow((element - MEAN), 2);
    });
    variance = (topLine/n);
    return variance;
}

//Standard deviation for a population
function stDevPopulation(arr){
    return Math.sqrt(variancePopulation(arr));
}

//Standard deviation for a Sample
function stDevSample(arr){
    return Math.sqrt(varianceSample(arr));
}

//coefficient of variation
function coefficientOfVariation(sdev, mean){
    return (sdev/mean);
}

//chebychev's theorem
function chebyshevTheorem(){
    //k = x - mean / stan dev
    return (1 - (1/(Math.pow(k, 2))));
}

console.log("ct: " + chebyshevTheorem(2.5))
/*
TODO
Chebyshev's theorem
Z-score
Percentile
Find data value corresponding to given percentile
Quartiles
Interquartile range
Decile
Find outliers
Five number summary

Variance - grouped data
Standard deviation - grouped data
Once this is done cover section 3.4

*/

/*
WORKING LIST OF FORMULAS: 
Mean
Median
Mode
Range
Sum array
standard dev
List of midpoints

*/
