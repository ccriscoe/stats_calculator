const StatsCalculator = require('../StatsCalculator');

test('testing mean()', () => {
    let calc = new StatsCalculator();
    expect(calc.mean([1, 2, 3, 4, 5])).toBe(3);
    expect(calc.mean([1, 2, 3, 4])).toBe(2.5);
});