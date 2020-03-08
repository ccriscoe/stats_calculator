class Descriptive {
   static mean(array) {
       if (array.length == 0) {
            throw("ERROR: empty array.");
        }
       return array.reduce((x, y) => x + y, 0) / array.length;
    }

    static median(array) {
       let copy = array.slice();
       copy.sort((a, b) => a - b);
       let midpoint = Math.floor(copy.length / 2);
       if (copy.length % 2 === 1) {
           return copy[midpoint];
       } else {
           return (copy[midpoint-1] + copy[midpoint]) / 2;
       }
    }

    static mode() {
    }

    static variance() {
    }

    static stdDev() {
    }

    static quartiles() {
    }

    static skewness() {
    }

    static sample_correlation() {
    }

    static population_correlation() {
    }

    static z_score() {
    }

    static meanDeviation() {
    }

}

module.exports = Descriptive;