const Random = require('./Random');
const Descriptive = require('./Descriptive');
const rand = new Random();
class Sampling{
    static simpleRandSampling(arrList, sampleSize){
        //uses random functions from random class to pick a random number of items (a sample) from a population (whole array)
        return rand.selectNItems(arrList, sampleSize);

    }
    static systematicSampling(arrList, sampleSize){
        //Will be using the selectNItemsSeeded to simulate the systematic sampling method of an array of numbers
        //The seed will repeat the random number, giving the effect of systematic sampling
        let seed = 'test';
        //sampleSize = Math.floor(arrList.length / 2);
        return rand.selectNItemsSeeded(seed, arrList, sampleSize)

    }
    static marginOfError(sampleArr, cv, stdDev){
        //Assuming critical value is a z-score and multiplied by Standard Deviation
        let n = sampleArr.length;
        let firstCalc = stdDev / (Math.sqrt(n));
        return (cv * firstCalc);


    }
    static findConfidenceInterval(array){
        //Get all values needed for the Confidence Interval formula
        let stdDev = Descriptive.stdDev(array);
        let mean = Descriptive.mean(array);
        let x = array[0];
        let zScore = Descriptive.z_score(x, mean, stdDev);

        let n = array.length;
        let result;
        if(n == 0){
            throw("ERROR: Empty array, cannot divide by 0");
        }
        else{


        let firstCalc = zScore * (stdDev / (Math.sqrt(n)));

        let lowerRange = mean - firstCalc;
        let upperRange = mean + firstCalc;

        return result = [lowerRange, upperRange];
        }

    }
    static ciForSample(sampleArr){
        //Get all values needed for the Confidence Interval formula
        let stdDev = Descriptive.stdDev(sampleArr);
        let mean = Descriptive.mean(sampleArr);
        let x = sampleArr[0];
        let zScore = Descriptive.z_score(x, mean, stdDev);

        let n = sampleArr.length;
        let result;

        if(n == 0){
            throw("ERROR: Empty array, cannot divide by 0");
        }
        else{


            let firstCalc = zScore * (stdDev / (Math.sqrt(n)));

            let lowerRange = mean - firstCalc;
            let upperRange = mean + firstCalc;

            return result = [lowerRange, upperRange];
        }

    }
    cochranSampleSize(){

    }
    findSampleSizeNoStdDev(){

    }
    findSampleSizeStdDev(){

    }

}
module.exports = Sampling;