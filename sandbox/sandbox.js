
//generate a five num sum from midpoints above
//https://www.hackmath.net/en/calculator/five-number-summary
//make a box plot
//https://www.easycalculation.com/statistics/box-plot-grapher.php
/*
let testArray = [0, 2, 2, 2, 3, 4, 6, 7, 7, 8, 10, 12, 13, 44, 55,0, 2, 2, 2, 3, 4, 6, 7, 7, 8, 10, 12, 13, 44, 55];

console.table(frequencyTable(testArray, 5));

console.log("testarray.length: " + testArray.length)
console.log(percentileRank(testArray, 72));
*/
/* FIVE NUM SUMMARY:
min
max
median
q1
q3
*/
let arr = [9, 12, 15, 16, 18, 19, 20, 22, 24, 25];

console.table(fiveNumberSummaryAsObject(arr))