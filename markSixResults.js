(() => {
    const AGES = Object.fromEntries([...new Array(49)].map((_, i) => {
        return [`${i + 1}`, 0];
    })), COST = 10, FREQUENT_NUMBER_PRICE_RESULT_COUNTS = [
        ["0", 0],
        ["0.5", 0],
        ["1", 0],
        ["1.5", 0],
        ["2", 0],
        ["2.5", 0],
        ["3", 0],
        ["3.5", 0],
        ["4", 0],
        ["4.5", 0],
        ["5", 0],
        ["5.5", 0],
        ["6", 0]
    ], FREQUENCIES = {}, NET_GAINS = {}, NUMBERS = {};
    const NUMBER_PRICE_RESULTS = {}, NUMBER_PRICE_RESULT_COUNTS = {};
    const PRICES = { "4.5": 9600, "4": 640, "3.5": 320, "3": 40 };
    const RESULTS = new Map(OLD_RESULTS), STRATEGIES = [
        "leastFrequent",
        "leastFrequentMinusOldest",
        "leastFrequentOverOldest",
        "leastFrequentPowerOverOldest",
        "middleFrequent",
        "mostFrequent",
        "oldest",
        "random"
    ], TOTAL_COST = -COST * RESULTS.size;
    STRATEGIES.forEach(strategy => {
        NET_GAINS[strategy] = TOTAL_COST;
        NUMBERS[strategy] = new Map();
        NUMBER_PRICE_RESULTS[strategy] = new Map();
        NUMBER_PRICE_RESULT_COUNTS[strategy] = 
                new Map(FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    });
    const collectResults = (result, date) => {
        if (Object.keys(FREQUENCIES).length > 0) {
            collectNumbers(date);
            collectPriceResults(date, result);
        }
        const { numbers } = result;
        collectAges(numbers);
        collectFrequencies(numbers);
    }, collectNumbers = date => {
        NUMBERS.leastFrequent.set(
                date, frequentNumbers(leastFrequentNumberComparator));
        NUMBERS.leastFrequentMinusOldest.set(
                date, leastFrequentMinusOldestNumbers());
        NUMBERS.leastFrequentOverOldest.set(
                date, leastFrequentOverOldestNumbers());
        NUMBERS.leastFrequentPowerOverOldest.set(
                date, leastFrequentPowerOverOldestNumbers());
        NUMBERS.middleFrequent.set(date, middleFrequentNumbers());
        NUMBERS.mostFrequent.set(
                date, frequentNumbers(mostFrequentNumberComparator));
        NUMBERS.oldest.set(date, oldestNumbers());
        NUMBERS.random.set(date, randomNumbers());
    }, collectPriceResults = (date, result) => {
        STRATEGIES.forEach(collectNumberPriceResults.bind(null, date, result));
    }, collectAges = numbers => Object.keys(AGES).forEach(number => {
        numbers.includes(number) ? AGES[number] = 0 : AGES[number]++;
    }), collectFrequencies = numbers => numbers.forEach(number => {
        FREQUENCIES[number] = (FREQUENCIES[number] || 0) + 1;
    }), leastFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyA - frequencyB;
    const mostFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyB - frequencyA;
    const mappedFrequentNumbers = ([number]) => number;
    const frequentNumbers = comparator => Object.entries(FREQUENCIES).sort(
            comparator).slice(0, 6).map(mappedFrequentNumbers);
    const leastFrequentMinusOldestNumbers = () => {
        return Object.entries(FREQUENCIES).map(([number, frequency]) => {
            const age_ = AGES[number];
            return [number, age_ ? frequency - age_ : frequency];
        }).sort(leastFrequentNumberComparator).slice(0, 6).map(mappedFrequentNumbers);
    }, leastFrequentOverOldestNumbers = () => {
        return Object.entries(FREQUENCIES).map(([number, frequency]) => {
            const age_ = AGES[number];
            return [number, age_ ? frequency * 1.0 / age_ : frequency];
        }).sort(leastFrequentNumberComparator).slice(0, 6).map(mappedFrequentNumbers);
    }, leastFrequentPowerOverOldestNumbers = () => {
        return Object.entries(FREQUENCIES).map(([number, frequency]) => {
            const age_ = AGES[number];
            return [number, age_ ? Math.pow(frequency, 1.0 / age_) : frequency];
        }).sort(leastFrequentNumberComparator).slice(0, 6).map(mappedFrequentNumbers);
    }, middleFrequentNumbers = () => {
        const sortedFrequentNumbers = Object.entries(FREQUENCIES).sort(
                leastFrequentNumberComparator).map(mappedFrequentNumbers);
        const sortedFrequentNumbersCount = sortedFrequentNumbers.length;
        if (sortedFrequentNumbersCount <= 6) {
            return sortedFrequentNumbers;
        } else if (sortedFrequentNumbersCount % 2 === 0) {
            const startIndex = (sortedFrequentNumbersCount - 6) / 2;
            return sortedFrequentNumbers.slice(startIndex, startIndex + 6);
        }
        const startIndex = (sortedFrequentNumbersCount - 7) / 2;
        const sortedMiddleFrequentNumbers = sortedFrequentNumbers.slice(
                startIndex, startIndex + 7);
        sortedMiddleFrequentNumbers.splice(3, 1);
        return sortedMiddleFrequentNumbers;
    }, oldestNumbers = () => {
        return Object.entries(AGES).sort(mostFrequentNumberComparator).slice(
                0, 6).map(mappedFrequentNumbers);
    }, randomNumbers = () => {
        const allNumbers = Object.keys(AGES);
        const resultantNumbers = [];
        for (let i = 1; i <= 6; i++) {
            const randomIndex = Math.floor(Math.random() * allNumbers.length);
            resultantNumbers.push(...allNumbers.splice(randomIndex, 1));
        }
        return resultantNumbers;
    }, collectNumberPriceResults = (date, result, strategy) => {
        const numberPriceResult = priceResult(date, result, strategy);
        NUMBER_PRICE_RESULTS[strategy].set(date, numberPriceResult);
        const priceResultCount = `${numberPriceResult}`;
        const priceResultCounts = NUMBER_PRICE_RESULT_COUNTS[strategy];
        priceResultCounts.set(
                priceResultCount, priceResultCounts.get(priceResultCount) + 1);
    }, priceResult = (date, result, strategy) => {
        const storedFrequentNumbers = NUMBERS[strategy].get(date);
        const { numbers, prices } = result;
        const normalNumbers = numbers.slice(0, 6);
        const specialNumber = numbers[6];
        const resultCount = normalNumbers.filter(number => {
            return storedFrequentNumbers.includes(number);
        }).length + (storedFrequentNumbers.includes(specialNumber) ? 0.5 : 0);
        NET_GAINS[strategy] += 
                (prices[resultCount] || 0) + (PRICES[resultCount] || 0);
        return resultCount;
    }, numberPriceResultCountSum = strategy => [
        ...NUMBER_PRICE_RESULT_COUNTS[strategy]
    ].reduce((sum, [count, times]) => sum + +count * times, 0);
    const numberPositivePriceResultCountSum = strategy => [
        ...NUMBER_PRICE_RESULT_COUNTS[strategy]
    ].reduce((sum, [count, times]) => {
        const countNumber = +count;
        return countNumber < 3 ? sum : sum + countNumber * times;
    }, 0);
    RESULTS.forEach(collectResults);
    console.info("RESULTS", RESULTS);
    console.info("FREQUENCIES", FREQUENCIES);
    STRATEGIES.forEach(strategy => {
        console.info(`NUMBERS.${strategy}`, NUMBERS[strategy]);
    });
    STRATEGIES.forEach(strategy => {
        console.info(`NUMBER_PRICE_RESULTS.${strategy}`, NUMBER_PRICE_RESULTS[strategy]);
    });
    STRATEGIES.forEach(strategy => {
        console.info(`NUMBER_PRICE_RESULT_COUNTS.${strategy}`, NUMBER_PRICE_RESULT_COUNTS[strategy]);
    });
    STRATEGIES.forEach(strategy => {
        console.info(`NumberPriceResultCountSum(${strategy})`, numberPriceResultCountSum(strategy));
    });
    STRATEGIES.forEach(strategy => {
        console.info(`NumberPositivePriceResultCountSum(${strategy})`, numberPositivePriceResultCountSum(strategy));
    });
    console.info("leastFrequent", frequentNumbers(leastFrequentNumberComparator));
    console.info("leastFrequentMinusOldest", leastFrequentOverOldestNumbers());
    console.info("leastFrequentOverOldest", leastFrequentOverOldestNumbers());
    console.info("leastFrequentPowerOverOldest", leastFrequentPowerOverOldestNumbers());
    console.info("middleFrequent", middleFrequentNumbers());
    console.info("mostFrequent", frequentNumbers(mostFrequentNumberComparator));
    console.info("oldest", oldestNumbers());
    console.info("random", randomNumbers());
    console.info("TOTAL_COST", TOTAL_COST);
    console.info("NET_GAINS", NET_GAINS);
})();