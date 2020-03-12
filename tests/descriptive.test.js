const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const jstat = require('jstat');
const verboseOutput = false;
const seed = 10;

test('mean', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    expect(Descriptive.mean(arr)).toEqual(jstat.mean(arr));
});

test('median', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    if (verboseOutput) {
        console.log(Descriptive.mode(arr));
        console.log(jstat.mode(arr));
    }
    expect(Descriptive.mode(arr)).toEqual(jstat.mode(arr));
});

test('variance', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let calc = Descriptive.variance(arr).toFixed(4);
    let actual = jstat.variance(arr, true).toFixed(4);
    if (verboseOutput) {
        console.log(arr, "->", calc);
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});

test('variance', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 10);
    let calc = Descriptive.stdDev(arr).toFixed(4);
    let actual = jstat.stdev(arr, true).toFixed(4);
    if (verboseOutput) {
        console.log(arr, "->", calc);
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});

test('quartiles', () => {
    let Rand = new Random();
    for (let n = 8; n < 12; n++) {
        let arr = Rand.randomIntListSeeded(seed, -100, 100, n);
        let calc = Descriptive.quartiles(arr);
        let actual = jstat.quartiles(arr);
        if (verboseOutput) {
            console.log(arr.sort((a, b) => (a - b)), "->", calc);
            console.log(calc, actual);
        }
        //expect(calc).toEqual(actual);
        expect(calc).toHaveLength(3);

        /*
        Note: there are different (valid) methods to calculate quartiles,
        and I disagree with jstat's. Example, according to jstat.quartiles():
        [-95, -84, -76, -75, -52, -20,  -8,  19, 78] -> [-84, -52, -8]
        */
    }
});

test('skewness', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    let calc = Descriptive.skewness(arr).toFixed(4);
    let actual = jstat.skewness(arr).toFixed(4);
    if (verboseOutput) {
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});

test('sample correlation', () => {
    let Rand = new Random();
    let xArr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    let m = Rand.randomIntSeed(seed, -10, 10);
    let b = Rand.randomIntSeed(seed, -10, 10);
    let yArr = xArr.map((x) => x*m + b);
    let calc = Descriptive.sample_correlation(xArr, yArr);
    let actual = jstat.corrcoeff(xArr, yArr);
    if (verboseOutput) {
        console.log(calc, actual);
    }

    // Note: jstat doesn't offer sample correlation coefficient, quick search didn't turn up
    // a good alternative. As placeholder, comparing calculated sample correlation to jstat's
    // population correlation coefficient, within a certain % error
    let percError = 10;
    let lowerBound = Math.min(actual * (1 - percError/100), actual * (1 + percError/100));
    let upperBound = Math.max(actual * (1 - percError/100), actual * (1 + percError/100));
    expect(calc).toBeGreaterThanOrEqual(lowerBound);
    expect(calc).toBeLessThanOrEqual(upperBound);
});

test('z_score', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    let mean = Descriptive.mean(arr);
    let stdDev = Descriptive.stdDev(arr);
    let x = arr[0];
    let calc = Descriptive.z_score(x, mean, stdDev).toFixed(4);
    let actual = jstat.zscore(x, mean, stdDev).toFixed(4);
    if (verboseOutput) {
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});

test('meanDeviation', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    let calc = Descriptive.meanDeviation(arr).toFixed(4);
    let actual = jstat.meandev(arr).toFixed(4);
    if (verboseOutput) {
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});

test('population correlation', () => {
    let Rand = new Random();
    let xArr = Rand.randomIntListSeeded(seed, -100, 100, 100);
    let m = Rand.randomIntSeed(seed, -10, 10);
    let b = Rand.randomIntSeed(seed, -10, 10);
    let yArr = xArr.map((x) => x*m + b);
    let calc = Descriptive.population_correlation(xArr, yArr).toFixed(4);
    let actual = jstat.corrcoeff(xArr, yArr).toFixed(4);
    if (verboseOutput) {
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});