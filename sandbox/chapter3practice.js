//chapter 3-4
//Q11
/*
School Graduation Rates: The data show a sample of states' percentage of public high school 
graduation rates for a recent year. Construct a boxplot for the data, and comment on the 
shape of the distribution.
*/
graduationRates = [79, 82, 77, 84, 80, 89, 60, 79, 91, 93, 88]
//sort 
graduationRates.sort((a, b) => a - b)
console.log("question 11 pg 181 3-4")
console.log("graduation rates " + graduationRates);
console.log("median: " + median(graduationRates));


const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};

console.log("q1: " + quantile(graduationRates, 1))
frequencyTable(graduationRates, 10)

//chapter 3-3

//question 23
console.log("question 23:")
/*
Find the percentile rank for each value  in data set. The data represents the values in 
billlions of dollars of the damage of 10 hurricanes 
*/

    const HURRICANEDAMAGE = [1.1, 1.7, 1.9, 2.1, 2.2, 2.5, 3.3, 6.2, 6.8, 20.3];
    let output = [];
    let temp = 0;
   
    HURRICANEDAMAGE.forEach(element => {
        output.push(Math.floor((percentRank(HURRICANEDAMAGE, element)*100)) + `th percent`)
        
    });
    console.table(output);

/*
 
*/