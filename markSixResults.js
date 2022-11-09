(() => {
    const COST = 10, FREQUENT_NUMBER_PRICE_RESULT_COUNTS = [
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
    const PRICES = { "4.5": 9600, "4": 640, "3.5": 320, "3": 40 };
    const RESULTS = new Map(OLD_RESULTS);
    const TOTAL_COST = -COST * RESULTS.size, NET_GAINS = {
        leastFrequentNumbers: TOTAL_COST,
        middleFrequentNumbers: TOTAL_COST,
        mostFrequentNumbers: TOTAL_COST
    }, collectResults = (result, date) => {
        if (Object.keys(FREQUENCIES).length > 0) {
            collectMostFrequentNumbers(date);
            collectPriceResults(date, result);
        }
        collectFrequencies(result.numbers);
    }, collectMostFrequentNumbers = date => {
        LEAST_FREQUENT_NUMBERS.set(
                date, frequentNumbers(leastFrequentNumberComparator));
        MIDDLE_FREQUENT_NUMBERS.set(date, middleFrequentNumbers());
        MOST_FREQUENT_NUMBERS.set(
                date, frequentNumbers(mostFrequentNumberComparator));
    }, collectPriceResults = (date, result) => {
        collectFrequentNumberPriceResults(date, result, LEAST_FREQUENT_NUMBERS,
                "leastFrequentNumbers", LEAST_FREQUENT_NUMBER_PRICE_RESULTS,
                LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
        collectFrequentNumberPriceResults(date, result,
                MIDDLE_FREQUENT_NUMBERS, "middleFrequentNumbers",
                MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS,
                MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
        collectFrequentNumberPriceResults(date, result, MOST_FREQUENT_NUMBERS,
          "mostFrequentNumbers", MOST_FREQUENT_NUMBER_PRICE_RESULTS,
          MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    }, collectFrequencies = numbers => numbers.forEach(number => {
        FREQUENCIES[number] = (FREQUENCIES[number] || 0) + 1;
    }), leastFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyA - frequencyB;
    const mostFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyB - frequencyA;
    const mappedFrequentNumbers = ([number, frequency]) => number;
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
    }, collectFrequentNumberPriceResults = (date, result, frequentNumberContainer, netGainType, frequentNumberPriceResults, frequentNumberPriceResultCounts) => {
        const frequentNumberPriceResult = priceResult(
                date, result, frequentNumberContainer, netGainType);
        frequentNumberPriceResults.set(date, frequentNumberPriceResult);
        const priceResultCount = `${frequentNumberPriceResult}`;
        frequentNumberPriceResultCounts.set(priceResultCount,
                frequentNumberPriceResultCounts.get(priceResultCount) + 1);
    }, priceResult = (date, result, frequentNumberContainer, netGainType) => {
        const storedFrequentNumbers = frequentNumberContainer.get(date);
        const { numbers, prices } = result;
        const normalNumbers = numbers.slice(0, 6);
        const specialNumber = numbers[6];
        const resultCount = normalNumbers.filter(number => {
            return storedFrequentNumbers.indexOf(number) >= 0;
        }).length + (
                storedFrequentNumbers.indexOf(specialNumber) >= 0 ? 0.5 : 0);
        NET_GAINS[netGainType] += (prices[resultCount] || 0) + (
                PRICES[resultCount] || 0);
        return resultCount;
    }, frequentNumberPriceResultCountSum = frequentNumberPriceResultCounts => [
        ...frequentNumberPriceResultCounts
    ].reduce((sum, [count, times]) => sum + +count * times, 0);
    const frequentNumberPositivePriceResultCountSum = frequentNumberPriceResultCounts => [
        ...frequentNumberPriceResultCounts
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
    console.info("LEAST_FREQUENT_NUMBER_PRICE_RESULTS", LEAST_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS", MIDDLE_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("MOST_FREQUENT_NUMBER_PRICE_RESULTS", MOST_FREQUENT_NUMBER_PRICE_RESULTS);
    console.info("LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS", MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
    console.info("leastFrequentNumberPriceResultCountSum", frequentNumberPriceResultCountSum(LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("middleFrequentNumberPriceResultCountSum", frequentNumberPriceResultCountSum(MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("mostFrequentNumberPriceResultCountSum", frequentNumberPriceResultCountSum(MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("leastFrequentNumberPositivePriceResultCountSum", frequentNumberPositivePriceResultCountSum(LEAST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("middleFrequentNumberPositivePriceResultCountSum", frequentNumberPositivePriceResultCountSum(MIDDLE_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("mostFrequentNumberPositivePriceResultCountSum", frequentNumberPositivePriceResultCountSum(MOST_FREQUENT_NUMBER_PRICE_RESULT_COUNTS));
    console.info("leastFrequentNumbers", frequentNumbers(leastFrequentNumberComparator));
    console.info("middleFrequentNumbers", middleFrequentNumbers());
    console.info("mostFrequentNumbers", frequentNumbers(mostFrequentNumberComparator));
    console.info("TOTAL_COST", TOTAL_COST);
    console.info("NET_GAINS", NET_GAINS);
})();
