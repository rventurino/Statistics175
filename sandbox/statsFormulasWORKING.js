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
//percentile rank of a number
function percentileRank(arr, percentile){
    let p = percentile;
    let n = arr.length + 1;
    let r;

    r = (p / (100)*n);
    return r;
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

function frequencyTable(arr, classWidth){
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
      //loop through the 13 rows of data to give them value
      for (i = 0; i < reps; i++) {
        //assign low and high boundaries mathematically
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
