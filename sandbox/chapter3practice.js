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
*/