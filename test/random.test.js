const RandomNumbers = require('../RandomNumbers');

test('Random number between 10 and 100', () => {
    let Rand = new RandomNumbers();
    expect(Rand.randomIntNoSeed(10,100)).toBeGreaterThanOrEqual(10);
    expect(Rand.randomIntNoSeed(10,100)).toBeLessThanOrEqual(100);


});

test('Random float number between 10 and 100', () => {
    let Rand = new RandomNumbers();
    expect(Rand.randomFlNoSeed(10, 100)).toBeGreaterThanOrEqual(10);


});
test('Random number between 10 and 100, with seed', () => {
    let Rand = new RandomNumbers();
    expect(Rand.randomIntSeed(100, 10, 100)).toBeGreaterThanOrEqual(10);


});
test('Random float number between 10 and 100, with seed', () => {
    let Rand = new RandomNumbers();
    expect(Rand.randomFlSeed(100, 10, 100)).toBeGreaterThanOrEqual(10);


});

test('Random list of random seeded numbers, between 10 and 100', () => {
    let Rand = new RandomNumbers();
    let size = 10;
    expect(Rand.randomIntListSeeded(100, 10, 100, size)).toHaveLength(10);


});
test('Random list of seeded float numbers, between 10 and 100', () => {
    let Rand = new RandomNumbers();
    let size = 10;
    expect(Rand.randomFlListSeeded(100, 10, 100, size)).toHaveLength(10);


});
test('Selects random item in a list, within a range of 10 to 100', () => {
    let Rand = new RandomNumbers();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);

    expect(Rand.selectRandomItem(arrList)).toBeGreaterThanOrEqual(10);


});

test('Selects random seeded item in a list, within a range of 10 to 100', () => {
    let Rand = new RandomNumbers();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);
    expect(Rand.selectRandomSeededItem(100,arrList)).toBeGreaterThanOrEqual(10);

});
test('Select 5 random items from an established list', () => {
    let Rand = new RandomNumbers();
    let size = 5;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);

    expect(Rand.selectNItems(arrList, size)).toHaveLength(5);
});
test('Selects 5 seeded random items from an established list', () => {
    let Rand = new RandomNumbers();
    let size = 5;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);

    expect(Rand.selectNItemsSeeded(100, arrList, size)).toHaveLength(5);


});





