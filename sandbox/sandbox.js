//provides a list of mid points from a 2 dimensional array, returns a string of midpoints
// array = [[low limit, high limit, datapoint],[low limit, high limit, datapoint]];

function listOfMidpoints(arr) {
  let listofpoints = "";
  let midpoint = 0;
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    count = arr[i][2];
    midpoint = (arr[i][0] + arr[i][1]) / 2;
    for (j = 0; j < count; j++) {
      listofpoints += midpoint + ", ";
    }
  }

  return listofpoints;
}
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
console.log(listOfMidpoints(newarr));

//generate a five num sum from midpoints above
//https://www.hackmath.net/en/calculator/five-number-summary
//make a box plot
//https://www.easycalculation.com/statistics/box-plot-grapher.php
