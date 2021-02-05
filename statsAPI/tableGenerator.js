
//THIS WILL EVENTUALLY MORPH IN TO THE TABLE GENERATOR MENTIONED IN WHITEBOARD
//array of values
//let dataset = [400000,400000,400000,400000,401000,401200,402000,402200,404900,405000,405000,405000,406500,407010,408500,410800,412500,412500,415000,415000,415700,416500,418580,420000,428000,500000,575000,650000,700000,700000,750000,750000,750000,750000,800000,800000,850000,850000,950000,1100000,1125000,1300000,1600000,1750000,1900000,1900000,2000000,2000000,2000000,2100000,2250000,2250000,3000000,3000000,3600000,3650000,3868376,3950000,4312500,4500000,5050000,5250000,5700000,6750000,7700000,12500000,13100000];
//let dataset = [401000, 404300, 410000, 410000, 410600, 413400, 414120, 417000, 470000, 525000, 550000, 650000, 900000, 1000000, 1000000, 1200000, 1350000, 1500000, 1750000, 1750000, 3000000, 3100000, 3100000, 3517500, 4000000, 4500000, 4875000, 5500000, 7950000, 9375000, 10125000, 11000000, 12000000, 12000000, 13250000, 14500000, 14595953, 15000000, 17775000, 19000000, 20000000, 20625000];
        //let midpoints = [];
        let midpoints = [8, 13, 18, 23, 28, 33, 38];
        //let frequencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let frequencies = [1, 2, 3, 5, 4, 3, 2];
        let cumulativefrequencies = [];
        let relativefrequencies = [];
        let boundaries = [];
        let count = 0;
        let lowBoundaries = [];
        let highBoundaries = [];
        var table = document.getElementById("myTable");
        let data = document.getElementById("otherData");
        //for the var and sdev
        let variance = null;
        let stDev = null;
        let classfrequencyTimesMidPoint = [];
        let frequencySquareMidpoint = [];


        
        //loop through the specified rows of data to give them value
        for(i = 0; i < midpoints.length; i++){
            //high and low boundaries, hacky way to iterate
            //lowBoundaries.push(400000 + i*1000000); 
            //highBoundaries.push(1399999 + i*1000000); 
            //midpoints. dpes wjat ot meeds to do
            //midpoints.push(((lowBoundaries[i] + highBoundaries[i])/2)); 
            // dataset.forEach(element => {
            //     if(element >= lowBoundaries[i] && element <= highBoundaries[i]){
            //         frequencies[i] ++;
            //     }
            // });
            classfrequencyTimesMidPoint.push(frequencies[i] * midpoints[i]);
            frequencySquareMidpoint.push(frequencies[i] * Math.pow(midpoints[i], 2));
            sumFreq = 0; //counter variable
            frequencies.forEach(element => {
                sumFreq += element; 
            });
            cumulativefrequencies.push(sumFreq);
            relativefrequencies.push((frequencies[i]/13).toFixed(3));
            table.innerHTML += `<tr>
                                    <td>${accounting.formatMoney(lowBoundaries[i])} | ${accounting.formatMoney(highBoundaries[i])}</td>
                                    <td>${accounting.formatMoney(midpoints[i])}</td>
                                    <td>${frequencies[i]}</td>
                                    <td>${cumulativefrequencies[i]}</td>
                                    <td>${relativefrequencies[i]}</td>
                                    </tr>`
                                    
        } //END OF TABLE GENERATOR ALGORITHM
        //stdev and var
        let n = cumulativefrequencies[cumulativefrequencies.length-1];
        let sumColD;
        let sumColE;

        classfrequencyTimesMidPoint.forEach(element => {
            sumColD += element;
        });
        frequencySquareMidpoint.forEach(element => {
            sumColE += element;
        });
        variance = ((n * (sumColE)) - (Math.pow(sumColD, 2)))/ (n * (n -1));
        stDev = Math.sqrt(variance);
        console.log("variance: " + variance);
        console.log("stdev: " + stDev);
        console.log(5.5+5)