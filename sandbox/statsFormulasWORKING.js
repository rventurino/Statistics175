// sort array ascending
const asc = arr => arr.sort((a, b) => a - b);

//find the mean of an array
function mean(arr) {
    return sumArray(arr)/arr.length;
}
//median of an array
function median(arr) {
    arr.sort();
    const MID = Math.floor(arr.length / 2);
    if(arr % 2 === 0){
        return arr[MID];
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
        var fivenumsum = document.getElementById("fivenumsum");
        let classesAsArray = [];
        
        let reps = Math.ceil(dataset[dataset.length-1]/classWidth); //how many classes to make
      
      for (i = 0; i < reps; i++) {
        //assign low and high boundaries
        lowBoundaries.push(dataset[0]-20+ i * classWidth);
        highBoundaries.push(dataset[0]-20 + classWidth + i * classWidth);
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
            table.innerHTML += `
            <h1> NAME HERE <h1>
            <tr>
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
      for(let i = 0; i < lowBoundaries.length; i ++){
        classesAsArray.push([lowBoundaries[i], highBoundaries[i]])
      }
      
      //five number summary
      let fivenumbersummary = fiveNumberSummaryAsObject(dataset);
      fivenumsum.innerHTML += `${JSON.stringify(fivenumbersummary, null, 4)}`;
      //p3 js box plot maker 
      // set the dimensions and margins of the graph
      var margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 800 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")").style("font", "25px arial").style('color', 'white');
      
      // STATS 175 DATASET HERE
      var data = dataset

      // Compute summary statistics used for the box:
      var data_sorted = data.sort(d3.ascending)
      var q1 = d3.quantile(data_sorted, .25)
      var median = d3.quantile(data_sorted, .5)
      var q3 = d3.quantile(data_sorted, .75)
      var interQuantileRange = q3 - q1
      var min = q1 - 1.5 * interQuantileRange
      var max = q1 + 1.5 * interQuantileRange

      // Show the Y scale
      var y = d3.scaleLinear()
        .domain([50,100]) //ENTER THE RANGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        .range([height, 0]);
      svg.call(d3.axisLeft(y))

      // a few features for the box
      var center = 200
      var width = 100

      // Show the main vertical line
      svg
      .append("line")
        .attr("x1", center)
        .attr("x2", center)
        .attr("y1", y(min) )
        .attr("y2", y(max) )
        .attr("stroke", "black")

      // Show the box
      svg
      .append("rect")
        .attr("x", center - width/2)
        .attr("y", y(q3) )
        .attr("height", (y(q1)-y(q3)) )
        .attr("width", width )
        .attr("stroke", "black")
        .style("fill", "#b44900")

      // show median, min and max horizontal lines
      svg
      .selectAll("toto")
      .data([min, median, max])
      .enter()
      .append("line")
        .attr("x1", center-width/2)
        .attr("x2", center+width/2)
        .attr("y1", function(d){ return(y(d))} )
        .attr("y2", function(d){ return(y(d))} )
        .attr("stroke", "black")

  
      // CHART .JS API
      //THIS ONE MAKES CUMULATIVE FREQUENCY POLYGON BASED ON DATASET
      var ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",
        
        // The data for our dataset
        data: {
          labels: classesAsArray,
          datasets: [
            {
              label: "Pink line",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: dataset,
              fill: false,
            },
          ],
        },
        elements: {
            line:{
              lineTension: 0
            }
          },
        // Configuration options go here
        options: {
          responsive: false,
          legend: {
              position: 'top',
              onClick: null
          },

          title: {
              display: true,
              text: 'TITLE',
              fontSize: 20
          },
          
          
          scales: {
              yAxes: [{ticks: {fontSize: 20, fontFamily: "'Roboto', sans-serif", fontColor: '#000', fontStyle: '500'}}],
              xAxes: [{ticks: {fontSize: 20, fontFamily: "'Roboto', sans-serif", fontColor: '#000', fontStyle: '500'}}]
          }
      }
      });
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
function percentRank(array, n) {
  var L = 0;
  var S = 0;
  var N = array.length

  for (var i = 0; i < array.length; i++) {
      if (array[i] < n) {
          L += 1
      } else if (array[i] === n) {
          S += 1
      } else {

      }
  }

  var pct = (L + (0.5 * S)) / N

  return pct
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