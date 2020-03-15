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
    let mean = Descriptive.mean(arr);
    let stdDev = Descriptive.stdDev(arr);
    let x = arr[0];
    let zScore = Descriptive.z_score(x, mean, stdDev).toFixed(4);
    let calc = (Sampling.marginOfError(arr, zScore, stdDev) / 100);
    expect(calc).toBeGreaterThan(0);
    expect(calc).toBeLessThanOrEqual(1);


});