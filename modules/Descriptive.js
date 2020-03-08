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