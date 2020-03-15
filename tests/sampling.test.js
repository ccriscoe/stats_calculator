const Sampling = require('../modules/Sampling');
const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const jstat = require('jstat');
const seed = 10;

test('Simple random sampling', () => {
    let Rand = new Random();
    let popArr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(popArr.length / 2);
    let sampleArr = Sampling.simpleRandSampling(popArr, sampleSize);

    expect(sampleArr).toHaveLength(sampleSize);
    expect(popArr.length).toBeGreaterThan(sampleArr.length);
});
test('Systematic random sampling', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(arr.length / 2);
    let sampleArr = Sampling.systematicSampling(arr, sampleSize);

    expect(sampleArr).toHaveLength(sampleSize);
    expect(arr.length).toBeGreaterThan(sampleArr.length);
});

test('Find margin of error', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(arr.length / 2);
    let sampleArr = Sampling.systematicSampling(arr, sampleSize);
    let mean = Descriptive.mean(sampleArr);
    let stdDev = Descriptive.stdDev(sampleArr);
    let x = sampleArr[0];
    let zScore = Descriptive.z_score(x, mean, stdDev).toFixed(4);
    let calc = (Sampling.marginOfError(sampleArr, zScore, stdDev) / 100); //Takes it out of percentage form
    expect(calc).toBeGreaterThan(0);
    expect(calc).toBeLessThanOrEqual(1);


});
test('Find normal confidence interval', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let calcInterv = (Sampling.findConfidenceInterval(arr));

    expect(calcInterv[0]).toBeLessThan(calcInterv[1]);

});
test('Find confidence interval for a sample', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(arr.length / 2);
    let sampleArr = Sampling.systematicSampling(arr, sampleSize);
    let calcInterv = (Sampling.findConfidenceInterval(sampleArr));

    expect(calcInterv[0]).toBeLessThan(calcInterv[1]);

});