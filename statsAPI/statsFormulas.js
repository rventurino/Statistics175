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



//provides an array of mid points from a 2 dimensional array, good for grouped data
// array = [[low limit, high limit, datapoint],[low limit, high limit, datapoint]];
/* EXAMPLE CODE:
// [lower class value, upper class value, how many values in class]
let newarr = [
  [0, 1.9, 73],
  [2, 3.9, 25],
  [4, 5.9, 35],
  [6, 7.9, 29],
  [8, 9.9, 32],
  [10, 11.9, 22],
  [12, 13.9, 18],
  [14, 15.9, 31],
  [16, 17.9, 8],
  [18, 19.9, 6],
  [20, 21.9, 2],
  [22, 23.9, 1],
];
console.table(listOfMidpoints(newarr));
*/
function listOfMidpoints(arr) {
    let listofpoints = [];
    let midpoint = 0;
    let count = 0;
    for (i = 0; i < arr.length; i++) {
      count = arr[i][2];
      midpoint = (arr[i][0] + arr[i][1]) / 2;
      for (j = 0; j < count; j++) {
        listofpoints.push(midpoint);
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

function midPoint(low, high){
    return (low + high)/2;
}
//generates a frequency table and also returns object containing arrays for:
// boundaries, midpoints, frequencies, cumulative frequencies, and relative frequencies
/*
!!!! TEST CASES !!!!
let testArray = [0, 2, 2, 2, 3, 4, 6, 7, 7, 8, 10, 12, 13, 44, 55,0, 2, 2, 2, 3, 4, 6, 7, 7, 8, 10, 12, 13, 44, 55];

console.table(frequencyTable(testArray, 5));
*/
function frequencyTable(arr, classWidth){
        let percentileRanks = [];
        let dataset = arr.sort(function(a, b){return a-b});
        let midpoints = [];
        let frequencies = [];
        let cumulativefrequencies = [];
        let relativefrequencies = [];
        let count = 0;
        let lowBoundaries = [];
        let highBoundaries = [];
        var table = document.getElementById("myTable");
        
        let reps = Math.ceil(dataset[dataset.length-1]/classWidth); //how many classes to make
      
      for (i = 0; i < reps; i++) {
        //assign low and high boundaries
        lowBoundaries.push(0 + i * classWidth);
        highBoundaries.push(classWidth + i * classWidth);
        //set midpoints
        //midpoint = (lowBoundary + highBoundary) / 2;
        midpoints.push(midPoint(lowBoundaries[i], highBoundaries[i]));

        //frequency
        //iterate through the data set and count occurences
        frequencies.push(0);
        dataset.forEach((element) => {
          if (element >= lowBoundaries[i] && element <= highBoundaries[i]) {
            frequencies[i]++;
          }
        });

        //cumulative frequency
        sumFreq = 0; //counter variable
        frequencies.forEach((element) => {
          //for each element in the array of frequencies, add that element to a total
          sumFreq += element;
        });
        //put the total of each iteration in to a list of cumulative frequencies
        cumulativefrequencies.push(sumFreq);

        //relative frequencies
        //divide current frequency by 13 (number of classes)
        //then add that number to the list of relative frequencies
        relativefrequencies.push((frequencies[i] / dataset.length).toFixed(3));


        //print the resulting values to the HTML table
        if(i === 0){
            table.innerHTML += `<tr>
            <th>Boundaries</th>
            <th>Midpoint</th>
            <th>Frequency</th>
            <th>Cumulative Frequency</th>
            <th>Relative Frequency</th>
          </tr>`
        }
        table.innerHTML += `<tr>
                                    <td>${
                                      lowBoundaries[i]} | ${highBoundaries[i]}</td>
                                    <td>${midpoints[i]}</td>
                                    <td>${frequencies[i]}</td>
                                    <td>${cumulativefrequencies[i]}</td>
                                    <td>${relativefrequencies[i]}</td>
                                    </tr>
                                    `;
      } //END OF TABLE GENERATOR ALGORITHM
/*
      // CHART .JS API
      var ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: [
            `${accounting.formatMoney(
              lowBoundaries[0]
            )} to ${accounting.formatMoney(highBoundaries[0])}`,
            `${accounting.formatMoney(
              lowBoundaries[1]
            )} to ${accounting.formatMoney(highBoundaries[1])}`,
            `${accounting.formatMoney(
              lowBoundaries[2]
            )} to ${accounting.formatMoney(highBoundaries[2])}`,
            `${accounting.formatMoney(
              lowBoundaries[3]
            )} to ${accounting.formatMoney(highBoundaries[3])}`,
            `${accounting.formatMoney(
              lowBoundaries[4]
            )} to ${accounting.formatMoney(highBoundaries[4])}`,
            `${accounting.formatMoney(
              lowBoundaries[5]
            )} to ${accounting.formatMoney(highBoundaries[5])}`,
            `${accounting.formatMoney(
              lowBoundaries[6]
            )} to ${accounting.formatMoney(highBoundaries[6])}`,
            `${accounting.formatMoney(
              lowBoundaries[7]
            )} to ${accounting.formatMoney(highBoundaries[7])}`,
            `${accounting.formatMoney(
              lowBoundaries[8]
            )} to ${accounting.formatMoney(highBoundaries[8])}`,
            `${accounting.formatMoney(
              lowBoundaries[9]
            )} to ${accounting.formatMoney(highBoundaries[9])}`,
            `${accounting.formatMoney(
              lowBoundaries[10]
            )} to ${accounting.formatMoney(highBoundaries[10])}`,
            `${accounting.formatMoney(
              lowBoundaries[11]
            )} to ${accounting.formatMoney(highBoundaries[11])}`,
            `${accounting.formatMoney(
              lowBoundaries[12]
            )} to ${accounting.formatMoney(highBoundaries[12])}`,
          ],
          datasets: [
            {
              label: "Catcher Salaries",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: cumulativefrequencies,
              fill: false,
            },
          ],
        },

        // Configuration options go here
        options: {},
      });

     */

        let asObject = {
            lowBoundaries: lowBoundaries,
            highBoundaries: highBoundaries,
            midpoints: midpoints,
            frequencies: frequencies,
            cumulativefrequencies: cumulativefrequencies,
            relativefrequencies: relativefrequencies
        }
        return asObject;
}
//citation: https://gist.github.com/IceCreamYou/6ffa1b18c4c8f6aeaad2
// Returns the value at a given percentile in a sorted numeric array.
// "Linear interpolation between closest ranks" method
function percentile(arr, p) {
    if (arr.length === 0) return 0;
    if (typeof p !== 'number') throw new TypeError('p must be a number');
    if (p <= 0) return arr[0];
    if (p >= 1) return arr[arr.length - 1];

    var index = (arr.length - 1) * p,
        lower = Math.floor(index),
        upper = lower + 1,
        weight = index % 1;

    if (upper >= arr.length) return arr[lower];
    return arr[lower] * (1 - weight) + arr[upper] * weight;
}

// Returns the percentile of the given value in a sorted numeric array.
function percentRank(arr, v) {
    if (typeof v !== 'number') throw new TypeError('v must be a number');
    for (var i = 0, l = arr.length; i < l; i++) {
        if (v <= arr[i]) {
            while (i < l && v === arr[i]) i++;
            if (i === 0) return 0;
            if (v !== arr[i-1]) {
                i += (v - arr[i-1]) / (arr[i] - arr[i-1]);
            }
            return i / l;
        }
    }
    return 1;
}
function fiveNumberSummaryAsObject(arr){
  let dataset = arr.sort(function(a, b){return a-b});
  let minimum = dataset[0];
  let maximum = dataset[dataset.length-1];
  let med = median(dataset);
  let q1 = percentile(dataset, 0.25);
  let q3 = percentile(dataset, 0.75);
  
  let results = {
    minimum: minimum,
    maximum: maximum,
    q1: q1,
    median: med,
    q3: q3
  }
  return results;
}
function fiveNumberSummary(arr){
    let dataset = arr.sort(function(a, b){return a-b});
    let minimum = dataset[0];
    let maximum = dataset[dataset.length-1];
    let med = median(dataset);
    let q1 = percentile(dataset, 0.25);
    let q3 = percentile(dataset, 0.75);
    let results = [minimum, maximum, q1, med, q3];
    return results;
}

function interquartileRange(arr){
    let dataset = arr.sort(function(a, b){return a-b});
    let fiveNumSum = fiveNumberSummary(dataset);
    return (fiveNumSum[4] - fiveNumSum[2]);
}
function arrayOfOutliers(arr){
  let fiveNumSum = fiveNumberSummary(arr);
  let iqr = interquartileRange(arr);
  let dataset = arr.sort(function(a, b){return a-b});
  let step3 = iqr * 1.5;
  let lowEnd = fiveNumSum[2] - step3;
  let highEnd = fiveNumSum[4] + step3;
  let outliers = [];
  console.log("fivenumsum " + fiveNumSum)
  dataset.forEach(element => {
      if(lowEnd > element || highEnd < element){
          outliers.push(element);
      }
  });
  return outliers;
}

function getRidOfOutliers(){
  let fiveNumSum = fiveNumberSummary(arr);
  let iqr = interquartileRange(arr);
  let dataset = arr.sort(function(a, b){return a-b});
  let step3 = iqr * 1.5;
  let lowEnd = fiveNumSum[2] - step3;
  let highEnd = fiveNumSum[4] + step3;
  let arrayWithoutOutliers = [];
  dataset.forEach(element => {
      if(lowEnd > element || highEnd < element){
          arrayWithoutOutliers.push(element);
      }
  });
  return arrayWithoutOutliers;
}
/*
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
/*
DEAD FUNCTIONS




function fiveNumberSummary(arr){
    let dataset = arr.sort(function(a, b){return a-b});
    let minimum = dataset[0];
    let maximum = dataset[dataset.length-1];
    let med = median(dataset);
    let q1 = percentile(dataset, 0.25);
    let q3 = percentile(dataset, 0.75);
    let results = [minimum, maximum, q1, med, q3];
    return results;
}



function arrayOfOutliers(arr){
    let fiveNumSum = fiveNumberSummary(arr);
    let iqr = interquartileRange(arr);
    let dataset = arr.sort(function(a, b){return a-b});
    let step3 = iqr * 1.5;
    let lowEnd = fiveNumSum[2] - step3;
    let highEnd = fiveNumSum[4] + step3;
    let outliers = [];
    console.log("fivenumsum " + fiveNumSum)
    dataset.forEach(element => {
        if(lowEnd > element || highEnd < element){
            outliers.push(element);
        }
    });
    return outliers;
}

function getRidOfOutliers(){
    let fiveNumSum = fiveNumberSummary(arr);
    let iqr = interquartileRange(arr);
    let dataset = arr.sort(function(a, b){return a-b});
    let step3 = iqr * 1.5;
    let lowEnd = fiveNumSum[2] - step3;
    let highEnd = fiveNumSum[4] + step3;
    let arrayWithoutOutliers = [];
    dataset.forEach(element => {
        if(lowEnd > element || highEnd < element){
            arrayWithoutOutliers.push(element);
        }
    });
    return arrayWithoutOutliers;
}
*/