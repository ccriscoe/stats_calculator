[![Build Status](https://travis-ci.org/ccriscoe/stats_calculator.svg?branch=master)](https://travis-ci.org/ccriscoe/stats_calculator) [![Coverage Status](https://coveralls.io/repos/github/ccriscoe/stats_calculator/badge.svg?branch=master)](https://coveralls.io/github/ccriscoe/stats_calculator?branch=master)

# stats_calculator
Statistics calculator for IS219

PROJECT OUTLINE:
1. Stat Calculator Object
    1. Methods
         1. Constructor Method
         2. Random Int No Seed -> Calls random int method from Random
         3. Random Float No seed -> Calls random float method from Random
         4. Random Int seeded -> Calls random seeded int method from Random
         5. Random Float seeded -> Calls random seeded float method from Random
         6. Random Float List seeded -> Calls random seeded float list method from Random
         7. Random Int List seeded -> Calls random seeded int list method from Random
         8. Select Random Item -> Calls random item method from Random
         9. Select Random Seeded Item -> Calls random seeded item method from Random
         10. Select N Items From List -> Calls select n items method from Random
         11. Select N Items seeded -> Calls select n seeded items method from Random
         12. Mean -> Calls mean static method from Descriptive Class
         13. Median -> Calls Median static method from Descriptive Class
         14. Mode -> Calls Mode static method from Descriptive Class
         15. Variance -> Calls Variance static method from Descriptive Class
         16. Standard Deviation -> Calls St Deviation (stdDev) static method from Descriptive Class
         17. Quartiles -> Calls quartiles static method from Descriptive Class
         18. Skewness -> Calls skewness static method from Descriptive Class
         19. Sample Correlation -> Calls sample_correlation static method from Descriptive Class
         20. Population Correlation -> Calls population_correlation static method from Descriptive Class
         21. Z Score -> Calls z_score static method from Descriptive Class
         22. Mean Deviation -> Calls meanDeviation static method from Descriptive Class
         23. Get Z From Confidence -> Calls getZFromConfidence static method from Sampling Class
         24. Simple Random Sampling -> Calls simpleRandSampling static method from Sampling Class
         25. Systematic Sampling -> Calls systematicSampling static method from Sampling Class
         26. Margin of Error -> Calls marginOfError static method from Sampling Class
         27. Confidence Interval -> Calls confidenceInterval static method from Sampling Class
         28. Cochran's Formula -> Calls cochranFormula static method from Sampling Class
         29. Find Sample Size w/o St Deviation -> Calls findSampleSizeNoStdDev static method from Sampling Class
         30. Find Sample Size w/ St Deviation -> Calls findSampleSizeWithStdDev static method from Sampling Class
    2. Descriptive Static Class
        1. Methods
            1. Mean of array
            2. Median of array
            3. Mode of array
            4. Variance of array
            5. Standard Deviation of array
            6. Quartiles of array
            7. Skewness of array
            8. Sample Correlation of array
            9. Population Correlation of array
            10. Z Score of array
            11. Mean Deviation of array
    3. Sampling Static Class
        1. Methods
            1. Simple Random Samples an array
            2. Systematic Sample of array
            3. Margin of error of array
            4. Find Confidence Interval for pop array -> Calls Descriptive methods of z-score, mean and
            standard deviation for formula
            5. Confidence Interval for Sample -> Calls Find Confidence Interval and puts
            the sample of array in interval
            6. Cochran's Sample Size Formula
            7. How to Find Sample Size given a Confidence Interval and Width (unknown population standard deviation)
            8. How to Find Sample Size Given a Confidence Interval and Width (known population standard deviation)
    4. Random Number Generator Object Class
        1. Methods
            1. Generate a random number without a seed between a range of two numbers - Integer
            2. Generate a random number without a seed between a range of two numbers - Decimal(Float)
            3. Generate a random number with a seed between a range of two numbers - Integer
            4. Generate a random number with a seed between a range of two numbers - Decimal(Float)
            5. Generate a list (array) of N random numbers with a seed and between a range of numbers - Integer
            6. Generate a list (array) of N random numbers with a seed and between a range of numbers - Decimal(Float)
            7. Select a random item from an array
            8. Set a seed and randomly select the same value from an array
            9. Select N number of items from an array without a seed
            10. Select N number of items from an array with a seed
