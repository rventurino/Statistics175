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
        this.dataset.sort();
        return [this.dataset[0], this.dataset[this.dataset.length - 1]];
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
    varianceSample(arr){
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
    stDevPopulation(arr){
        return Math.sqrt(variancePopulation(arr));
    }

    //Standard deviation for a Sample
    stDevSample(arr){
        return Math.sqrt(varianceSample(arr));
    }

    //coefficient of variation
    coefficientOfVariation(sdev, mean){
        return (sdev/mean);
    }

    //chebychev's theorem
    chebyshevTheorem(){
        //k = x - mean / stan dev
        return (1 - (1/(Math.pow(k, 2))));
    }
}