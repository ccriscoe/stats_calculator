const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const jstat = require('jstat');
const verboseOutput = false;

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