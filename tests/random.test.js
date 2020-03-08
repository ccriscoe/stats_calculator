const Random = require('../modules/Random');
const verboseOutput = false;

test('Random integer between 10 and 100', () => {
    let Rand = new Random();
    let val = Rand.randomIntNoSeed(10,100);
    if (verboseOutput) {
        console.log('Random integer between 10 and 100:', val);
    }
    expect(val).toBeGreaterThanOrEqual(10);
    expect(val).toBeLessThanOrEqual(100);
});
test('Random float number between 10 and 100', () => {
    let Rand = new Random();
    let val = Rand.randomFlNoSeed(10,100);
    if (verboseOutput) {
        console.log('Random float number between 10 and 100:', val);
    }
    expect(val).toBeGreaterThanOrEqual(10);
    expect(val).toBeLessThanOrEqual(100);
});
test('Random integer between 10 and 100, with seed', () => {
    let Rand = new Random();
    let val1 = Rand.randomIntSeed(100, 10, 100);
    let val2 = Rand.randomIntSeed(100, 10, 100);
    if (verboseOutput) {
        console.log('Random integer between 10 and 100, with seed:', val1);
    }
    expect(val1).toBeGreaterThanOrEqual(10);
    expect(val1).toBeLessThanOrEqual(100);
    expect(val1).toEqual(val2);
});
test('Random float number between 10 and 100, with seed', () => {
    let Rand = new Random();
    let val1 = Rand.randomFlSeed(100, 10, 100);
    let val2 = Rand.randomFlSeed(100, 10, 100);
    if (verboseOutput) {
        console.log('Random float between 10 and 100, with seed:', val1);
    }
    expect(val1).toBeGreaterThanOrEqual(10);
    expect(val1).toBeLessThanOrEqual(100);
    expect(val1).toEqual(val2);
});
test('Random list of random seeded numbers, between 10 and 100', () => {
    let Rand = new Random();
    let size = 10;
    let l1 = Rand.randomIntListSeeded(100, 10, 100, size);
    let l2 = Rand.randomIntListSeeded(100, 10, 100, size);
    if (verboseOutput) {
        console.log('Random list of random seeded numbers, between 10 and 100:', l1);
    }
    expect(l1).toHaveLength(10);
    expect(l1).toEqual(l2);
});
test('Random list of seeded float numbers, between 10 and 100', () => {
    let Rand = new Random();
    let size = 10;
    let l1 = Rand.randomFlListSeeded(100, 10, 100, size);
    let l2 = Rand.randomFlListSeeded(100, 10, 100, size);
    if (verboseOutput) {
        console.log('Random list of random seeded float numbers, between 10 and 100:', l1);
    }
    expect(l1).toHaveLength(10);
    expect(l1).toEqual(l2);
});
test('Selects random item in a list, within a range of 10 to 100', () => {
    let Rand = new Random();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);
    let val = Rand.selectRandomItem(arrList);
    if (verboseOutput) {
        console.log('Selects random item in a list, within a range of 10 to 100:', val);
    }
    expect(arrList).toContain(val);
});
test('Selects random seeded item in a list, within a range of 10 to 100', () => {
    let Rand = new Random();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);
    let val = Rand.selectRandomItem(arrList);
    if (verboseOutput) {
        console.log('Selects random seeded item in a list, within a range of 10 to 100:', val);
    }
    expect(arrList).toContain(val);
});
test('Select 5 random items from an established list', () => {
    let Rand = new Random();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);
    let newArrList = Rand.selectNItems(arrList, 5);
    if (verboseOutput) {
        console.log('Select 5 random items from an established list:', newArrList, "from", arrList);
    }
    expect(newArrList).toHaveLength(5);
});
test('Selects 5 seeded random items from an established list', () => {
    let Rand = new Random();
    let size = 10;
    let arrList = Rand.randomIntListSeeded(100, 10, 100, size);
    let newArrList1 = Rand.selectNItemsSeeded(100, arrList, 5);
    let newArrList2 = Rand.selectNItemsSeeded(100, arrList, 5);
    if (verboseOutput) {
        console.log('Select 5 random items from an established list:', newArrList1, "from", arrList);
    }
    expect(newArrList1).toHaveLength(5);
    expect(newArrList1).toEqual(newArrList2);
});