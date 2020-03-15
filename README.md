# stats_calculator
Statistics calculator for IS219

Daniel Ramirez: Worked on RNG Class and half of Population Sampling (and their tests)
Connor Criscoe: Worked on Descriptive Static Class and half of Population Sampling (and their tests)

PROJECT OUTLINE:
1. Stat Calculator Object
    1. Methods
        1. Mean -> Calls mean static method from Descriptive Class
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
