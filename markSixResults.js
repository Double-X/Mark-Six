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
    ], FREQUENCIES = {}, LEAST_FREQUENT_NUMBERS = new Map();
    const LEAST_FREQUENT_NUMBER_PRICE_RESULTS = new Map();
    const LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS = new Map(
            FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    const MIDDLE_FREQUENT_NUMBERS = new Map();
    const MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS = new Map();
    const MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS = new Map(
            FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    const MOST_FREQUENT_NUMBERS = new Map();
    const MOST_FREQUENT_NUMBER_PRICE_RESULTS = new Map();
    const MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS = new Map(
            FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    const OLDEST_NUMBERS = new Map(), OLDEST_NUMBER_PRICE_RESULTS = new Map();
    const OLDEST_NUMBER_PRICE_RESULT_COUNTS = new Map(
            FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    const PRICES = { "4.5": 9600, "4": 640, "3.5": 320, "3": 40 };
    const RANDOM_NUMBERS = new Map(), RANDOM_NUMBER_PRICE_RESULTS = new Map();
    const RANDOM_NUMBER_PRICE_RESULT_COUNTS = new Map(
            FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    const RESULTS = new Map(OLD_RESULTS);
    const TOTAL_COST = -COST * RESULTS.size, NET_GAINS = {
        leastFrequentNumbers: TOTAL_COST,
        middleFrequentNumbers: TOTAL_COST,
        mostFrequentNumbers: TOTAL_COST,
        oldestNumbers: TOTAL_COST,
        randomNumbers: TOTAL_COST
    }, collectResults = (result, date) => {
        if (Object.keys(FREQUENCIES).length > 0) {
            collectNumbers(date);
            collectPriceResults(date, result);
        }
        const { numbers } = result;
        collectAges(numbers);
        collectFrequencies(numbers);
    }, collectNumbers = date => {
        LEAST_FREQUENT_NUMBERS.set(
                date, frequentNumbers(leastFrequentNumberComparator));
        MIDDLE_FREQUENT_NUMBERS.set(date, middleFrequentNumbers());
        MOST_FREQUENT_NUMBERS.set(
                date, frequentNumbers(mostFrequentNumberComparator));
        OLDEST_NUMBERS.set(date, oldestNumbers());
        RANDOM_NUMBERS.set(date, randomNumbers());
    }, collectPriceResults = (date, result) => {
        collectNumberPriceResults(date, result, LEAST_FREQUENT_NUMBERS,
                "leastFrequentNumbers", LEAST_FREQUENT_NUMBER_PRICE_RESULTS,
                LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
        collectNumberPriceResults(date, result,
                MIDDLE_FREQUENT_NUMBERS, "middleFrequentNumbers",
                MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS,
                MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
        collectNumberPriceResults(date, result, MOST_FREQUENT_NUMBERS,
                "mostFrequentNumbers", MOST_FREQUENT_NUMBER_PRICE_RESULTS,
                MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
        collectNumberPriceResults(date, result, OLDEST_NUMBERS,
                "oldestNumbers", OLDEST_NUMBER_PRICE_RESULTS,
                OLDEST_NUMBER_PRICE_RESULT_COUNTS);
        collectNumberPriceResults(date, result, RANDOM_NUMBERS,
                "randomNumbers", RANDOM_NUMBER_PRICE_RESULTS,
                RANDOM_NUMBER_PRICE_RESULT_COUNTS);
    }, collectAges = numbers => Object.keys(AGES).forEach(number => {
        numbers.includes(number) ? AGES[number] = 0 : AGES[number]++;
    }), collectFrequencies = numbers => numbers.forEach(number => {
        FREQUENCIES[number] = (FREQUENCIES[number] || 0) + 1;
    }), leastFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyA - frequencyB;
    const mostFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyB - frequencyA;
    const mappedFrequentNumbers = ([number]) => number;
    const frequentNumbers = comparator => Object.entries(FREQUENCIES).sort(
            comparator).slice(0, 6).map(mappedFrequentNumbers);
    const middleFrequentNumbers = () => {
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
    }, collectNumberPriceResults = (date, result, frequentNumberContainer, netGainType, numberPriceResults, numberPriceResultCounts) => {
        const numberPriceResult = priceResult(
                date, result, frequentNumberContainer, netGainType);
        numberPriceResults.set(date, numberPriceResult);
        const priceResultCount = `${numberPriceResult}`;
        numberPriceResultCounts.set(priceResultCount,
                numberPriceResultCounts.get(priceResultCount) + 1);
    }, priceResult = (date, result, frequentNumberContainer, netGainType) => {
        const storedFrequentNumbers = frequentNumberContainer.get(date);
        const { numbers, prices } = result;
        const normalNumbers = numbers.slice(0, 6);
        const specialNumber = numbers[6];
        const resultCount = normalNumbers.filter(number => {
            return storedFrequentNumbers.includes(number);
        }).length + (storedFrequentNumbers.includes(specialNumber) ? 0.5 : 0);
        NET_GAINS[netGainType] += (prices[resultCount] || 0) + (
                PRICES[resultCount] || 0);
        return resultCount;
    }, numberPriceResultCountSum = numberPriceResultCounts => [
        ...numberPriceResultCounts
    ].reduce((sum, [count, times]) => sum + +count * times, 0);
    const numberPositivePriceResultCountSum = numberPriceResultCounts => [
        ...numberPriceResultCounts
    ].reduce((sum, [count, times]) => {
        const countNumber = +count;
        return countNumber < 3 ? sum : sum + countNumber * times;
    }, 0);
    RESULTS.forEach(collectResults);
    console.info("RESULTS", RESULTS);
    console.info("FREQUENCIES", FREQUENCIES);
    console.info("LEAST_FREQUENT_NUMBERS", LEAST_FREQUENT_NUMBERS);
    console.info("MIDDLE_FREQUENT_NUMBERS", MIDDLE_FREQUENT_NUMBERS);
    console.info("MOST_FREQUENT_NUMBERS", MOST_FREQUENT_NUMBERS);
    console.info("OLDEST_NUMBERS", OLDEST_NUMBERS);
    console.info("RANDOM_NUMBERS", RANDOM_NUMBERS);
    console.info("LEAST_FREQUENT_NUMBER_PRICE_RESULTS", LEAST_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS", MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("MOST_FREQUENT_NUMBER_PRICE_RESULTS", MOST_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("OLDEST_NUMBER_PRICE_RESULTS", OLDEST_NUMBER_PRICE_RESULTS);
    console.info("RANDOM_NUMBER_PRICE_RESULTS", RANDOM_NUMBER_PRICE_RESULTS);
    console.info("LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("OLDEST_NUMBER_PRICE_RESULT_COUNTS", OLDEST_NUMBER_PRICE_RESULT_COUNTS);
    console.info("RANDOM_NUMBER_PRICE_RESULT_COUNTS", RANDOM_NUMBER_PRICE_RESULT_COUNTS);
    console.info("leastFrequentNumberPriceResultCountSum", numberPriceResultCountSum(LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("middleFrequentNumberPriceResultCountSum", numberPriceResultCountSum(MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("mostFrequentNumberPriceResultCountSum", numberPriceResultCountSum(MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("oldestNumberPriceResultCountSum", numberPriceResultCountSum(OLDEST_NUMBER_PRICE_RESULT_COUNTS));
    console.info("randomNumberPriceResultCountSum", numberPriceResultCountSum(RANDOM_NUMBER_PRICE_RESULT_COUNTS));
    console.info("leastFrequentNumberPositivePriceResultCountSum", numberPositivePriceResultCountSum(LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("middleFrequentNumberPositivePriceResultCountSum", numberPositivePriceResultCountSum(MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("mostFrequentNumberPositivePriceResultCountSum", numberPositivePriceResultCountSum(MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("oldestNumberPositivePriceResultCountSum", numberPositivePriceResultCountSum(OLDEST_NUMBER_PRICE_RESULT_COUNTS));
    console.info("randomNumberPositivePriceResultCountSum", numberPositivePriceResultCountSum(RANDOM_NUMBER_PRICE_RESULT_COUNTS));
    console.info("leastFrequentNumbers", frequentNumbers(leastFrequentNumberComparator));
    console.info("middleFrequentNumbers", middleFrequentNumbers());
    console.info("mostFrequentNumbers", frequentNumbers(mostFrequentNumberComparator));
    console.info("oldestNumbers", oldestNumbers());
    console.info("randomNumbers", randomNumbers());
    console.info("TOTAL_COST", TOTAL_COST);
    console.info("NET_GAINS", NET_GAINS);
})();
