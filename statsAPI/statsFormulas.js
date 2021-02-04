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

//standard deviation - needs worked on.
function standardDeviation(arr){
    const MEAN = mean(arr);
    let topLine = 0;
    let n = arr.length -1;
    let variance = 0;
    let sdev = 0;
    //math for top line (element - mean squared, added repeatdly)
    arr.forEach(element => {
        topLine += (element - MEAN) * (element - MEAN);
        
    });
    
    variance = (topLine/n);
    sdev = Math.sqrt(variance);
    return sdev;
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

/*
TODO
Standard deviation - population
Standard deviation - sample
Standard deviation - grouped data
Variance - population
Variance - sample
Variance - grouped data
Coefficient of variation
Chebyshev's theorem
Z-score
Percentile
Find data value corresponding to given percentile
Quartiles
Interquartile range
Decile
Find outliers
Five number summary

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
