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

   static mode(array) {
       let counts = {};
       for (let i = 0; i < array.length; i++) {
            if (counts.hasOwnProperty(array[i])) {
                counts[array[i]] += 1;
            } else {
                counts[array[i]] = 1;
            }
       }
       let modes = [];
       let maxCount = Math.max(...Object.values(counts));
       for (const [key, count] of Object.entries(counts)) {
           if (count === maxCount) {
               modes.push(Number(key));
           }
       }
       return modes.sort((a, b) => a - b);
   }

   static variance(array) {
       // variance of a sample using Bessel's correction
       let n = array.length;
       let sumSquares = array.reduce((a, b) => a + b*b, 0);
       let squaredAvg = (array.reduce((a, b) => a + b, 0) / n) ** 2;
       return ((sumSquares / n) - squaredAvg) * (n / (n-1));
   }

   static stdDev(array) {
       return Descriptive.variance(array) ** 0.5;
   }

   static quartiles(array) {
       let q1, q2, q3;
       let copy = array.slice();
       copy.sort((a, b) => a - b);
       let percInterval = 100 / copy.length;
       let perc = percInterval;
       for (let i = 0; i < copy.length; i++) {
           if ((perc >= 25) && (typeof q1 === 'undefined')) {
               q1 = copy[i];
           }
           if ((perc >= 50) && (typeof q2 === 'undefined')) {
               q2 = copy[i];
           }
           if ((perc >= 75) && (typeof q3 === 'undefined')) {
               q3 = copy[i];
           }
           perc += percInterval;
       }
       return [q1, q2, q3];
   }

   static skewness(array) {
       // standardized third moment
       // Note: extremely inaccurate for small n, more sophisticated methods needed
       let n = array.length;
       let mean = Descriptive.mean(array);
       let cubedDev = array.reduce((a, b) => a + (b-mean) ** 3, 0);
       let stdDev = Descriptive.stdDev(array);
       return (cubedDev / n) / (stdDev ** 3);
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