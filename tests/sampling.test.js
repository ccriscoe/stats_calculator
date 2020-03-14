const Sampling = require('../modules/Sampling');
const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const seed = 10;

test('Simple random sampling', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(arr.length / 2);
    let sampleArr = Sampling.simpleRandSampling(arr, sampleSize);

    expect(sampleArr).toHaveLength(sampleSize);
});
test('Systematic random sampling', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let sampleSize = Math.floor(arr.length / 2);
    let sampleArr = Sampling.systematicSampling(arr, sampleSize);

    expect(sampleArr).toHaveLength(sampleSize);
});
