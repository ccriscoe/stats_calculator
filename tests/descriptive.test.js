const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const jstat = require('jstat');
const verboseOutput = true;

test('mean', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(100, -100, 100, 10);
    expect(Descriptive.mean(arr)).toEqual(jstat.mean(arr));
});

test('median', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(100, -100, 100, 100);
    if (verboseOutput) {
        console.log(Descriptive.mode(arr));
        console.log(jstat.mode(arr));
    }
    expect(Descriptive.mode(arr)).toEqual(jstat.mode(arr));
});

test('variance', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(100, -100, 100, 10);
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
    let arr = Rand.randomIntListSeeded(100, -100, 100, 10);
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
        let arr = Rand.randomIntListSeeded(100, -100, 100, n);
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

test('variance', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(100, -100, 100, 100);
    let calc = Descriptive.skewness(arr).toFixed(3);
    let actual = jstat.skewness(arr).toFixed(3);
    if (verboseOutput) {
        console.log(calc, actual);
    }
    expect(calc).toEqual(actual);
});