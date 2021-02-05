class groupedDataSet{
    constructor(){

    }

    //provides a list of mid points from a 2 dimensional array, returns a string of midpoints
    // array = [[low limit, high limit, datapoint],[low limit, high limit, datapoint]];
    listOfMidpoints(arr){
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
}