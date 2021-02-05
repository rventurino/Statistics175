class sample extends Population {
    
    //Variance for sample
    get variance(){
        
        let topLine = 0;
        let n = this.dataset.length -1;
        let variance = 0;
        this.dataset.forEach(element => {
            topLine += Math.pow((element - this.mean), 2);
        });
        variance = (topLine/n);
        return variance;
    }

    //Standard deviation for a Sample
    get stDevSample(){
        return Math.sqrt(variance);
    }
}