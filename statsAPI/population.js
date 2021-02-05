class Population{
    
    constructor(dataset){
        this.dataset = dataset;
    }


    //find the mean of dataset
    get mean() {
        return this.sumElements/this.dataset.length;
    }

    //median of dataset
    get median() {
        this.dataset.sort();
        const MID = Math.floor(this.dataset.length / 2);
        if(this.dataset % 2 === 0){
            return this.dataset[this.dataset.MID];
        } else return (this.dataset[MID - 1] + this.dataset[MID]) / 2; 
    }
    //mode of dataset
    get mode() {

        let modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < this.dataset.length; i++) {
            number = this.dataset[i];
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

    

    //range of dataset
    get range() {
        let arr = this.dataset.sort();
        return (arr[arr.length-1] - arr[0]);
    }

    //return the sum of the elements in the dataset
    get sumElements(){
        let sum = 0;
        this.dataset.forEach(element => {
            sum += element;
        });
        return sum;
    }
//!!!
    //variance for population
    get variance(){
        const MEAN = this.mean;
        let topLine = 0;
        let n = this.dataset.length;
        let variance = 0;
        this.dataset.forEach(element => {
            topLine += Math.pow((element - MEAN), 2);
        });
        variance = (topLine/n);
        return variance;
    }

    //Standard deviation for a population
    get stDev(){
        return Math.sqrt(this.variance);
    }

    zScore(value){
        return (value - this.mean)/this.stDev;
    }

    //coefficient of variation
    coefficientOfVariation(){
        return (sdev/mean);
    }

    //chebychev's theorem
    chebyshevTheorem(x){
        //k = x - mean / stan dev
        let k = x - mean()/this.stDev;
        return (1 - (1/(Math.pow(k, 2))));
    }
}