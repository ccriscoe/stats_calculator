descriptive = require("./modules/Descriptive");

class StatsCalculator {
    mean(array) {
        return descriptive.mean(array);
    }
}

module.exports = StatsCalculator;