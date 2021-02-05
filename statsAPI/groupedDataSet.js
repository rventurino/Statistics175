
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

    //weighted mean pg 127
    //let weights = [3, 3, 4, 2];
    //let values = [4, 2, 3, 1];
    function weightedMean(weightsArray, valuesArray){
        let values = 0;
        let weights = 0;
        let topline = 0;
        let bottomline = 0;
        for(i=0; i < valuesArray.length; i++){
            topline += weightsArray[i] * valuesArray[i];
            bottomline += weightsArray[i];
        }
        return topline/bottomline;
    }
    //console.log(weightedMean(weights, values));