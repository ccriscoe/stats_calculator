const Random = require('../modules/Random');
const Descriptive = require('../modules/Descriptive');
const jstat = require('jstat');

test('mean', () => {
    let Rand = new Random();
    let arr = Rand.randomIntListSeeded(100, -100, 100, 10);
    expect(Descriptive.mean(arr)).toBe(jstat.mean(arr));
});