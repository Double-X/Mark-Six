// jshint esversion: 6
// Search COUNT_SPECIAL to toggle between separating special numbers and not
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
    const PARTITION_AGE_MODULI = Object.fromEntries([
        ...new Array(7)
    ].map((_, i) => [i, 0])), PARTITION_AGE_VALUES = Object.fromEntries([
        ...new Array(7)
    ].map((_, i) => [i, 0]));
    const PARTITION_FREQUENCY_MODULI = {}, PARTITION_FREQUENCY_VALUES = {};
    const PARTITION_MODULI = {
        0: ["7", "14", "21", "28", "35", "42", "49"],
        1: ["1", "8", "15", "22", "29", "36", "43"],
        2: ["2", "9", "16", "23", "30", "37", "44"],
        3: ["3", "10", "17", "24", "31", "38", "45"],
        4: ["4", "11", "18", "25", "32", "39", "46"],
        5: ["5", "12", "19", "26", "33", "40", "47"],
        6: ["6", "13", "20", "27", "34", "41", "48"]
    }, PARTITION_VALUES = {
        0: ["1", "2", "3", "4", "5", "6", "7"],
        1: ["8", "9", "10", "11", "12", "13", "14"],
        2: ["15", "16", "17", "18", "19", "20", "21"],
        3: ["22", "23", "24", "25", "26", "27", "28"],
        4: ["29", "30", "31", "32", "33", "34", "35"],
        5: ["36", "37", "38", "39", "40", "41", "42"],
        6: ["43", "44", "45", "46", "47", "48", "49"]
    }, PRICES = { "4.5": 9600, "4": 640, "3.5": 320, "3": 40 };
    const RESULTS = new Map(OLD_RESULTS), STRATEGIES = [
        "leastFrequent",
        "leastFrequentMinusOldest",
        "leastFrequentOverOldest",
        "leastFrequentPowerOverOldest",
        "middleFrequent",
        "mostFrequent",
        "mostFrequentMinusOldest",
        "mostFrequentOverOldest",
        "mostFrequentPowerOverOldest",
        "oldest",
        "partitionModuloLeastFrequent",
        "partitionModuloLeastFrequentMinusOldest",
        "partitionModuloLeastFrequentOverOldest",
        "partitionModuloLeastFrequentPowerOverOldest",
        "partitionModuloMiddleFrequent",
        "partitionModuloMostFrequent",
        "partitionModuloMostFrequentMinusOldest",
        "partitionModuloMostFrequentOverOldest",
        "partitionModuloMostFrequentPowerOverOldest",
        "partitionModuloOldest",
        "partitionValueLeastFrequent",
        "partitionValueLeastFrequentMinusOldest",
        "partitionValueLeastFrequentOverOldest",
        "partitionValueLeastFrequentPowerOverOldest",
        "partitionValueMiddleFrequent",
        "partitionValueMostFrequent",
        "partitionValueMostFrequentMinusOldest",
        "partitionValueMostFrequentOverOldest",
        "partitionValueMostFrequentPowerOverOldest",
        "partitionValueOldest",
        "random"
    ], TOTAL_COST = -COST * RESULTS.size;
    STRATEGIES.forEach(strategy => {
        NET_GAINS[strategy] = TOTAL_COST;
        NUMBERS[strategy] = new Map();
        NUMBER_PRICE_RESULTS[strategy] = new Map();
        NUMBER_PRICE_RESULT_COUNTS[strategy] = new Map(FREQUENT_NUMBER_PRICE_RESULT_COUNTS);
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
        NUMBERS.leastFrequent.set(date, frequentNumbers(leastFrequentNumberComparator));
        NUMBERS.leastFrequentMinusOldest.set(date, leastFrequentMinusOldestNumbers());
        NUMBERS.leastFrequentOverOldest.set(date, leastFrequentOverOldestNumbers());
        NUMBERS.leastFrequentPowerOverOldest.set(date, leastFrequentPowerOverOldestNumbers());
        NUMBERS.middleFrequent.set(date, middleFrequentNumbers());
        NUMBERS.mostFrequent.set(date, frequentNumbers(mostFrequentNumberComparator));
        NUMBERS.mostFrequentMinusOldest.set(date, mostFrequentMinusOldestNumbers());
        NUMBERS.mostFrequentOverOldest.set(date, mostFrequentOverOldestNumbers());
        NUMBERS.mostFrequentPowerOverOldest.set(date, mostFrequentPowerOverOldestNumbers());
        NUMBERS.oldest.set(date, oldestNumbers());
        NUMBERS.partitionModuloLeastFrequent.set(date, partitionModuloFrequentNumbers(leastFrequentNumberComparator));
        NUMBERS.partitionModuloLeastFrequentMinusOldest.set(date, partitionModuloLeastFrequentMinusOldestNumbers());
        NUMBERS.partitionModuloLeastFrequentOverOldest.set(date, partitionModuloLeastFrequentOverOldestNumbers());
        NUMBERS.partitionModuloLeastFrequentPowerOverOldest.set(date, partitionModuloLeastFrequentPowerOverOldestNumbers());
        NUMBERS.partitionModuloMiddleFrequent.set(date, partitionModuloMiddleFrequentNumbers());
        NUMBERS.partitionModuloMostFrequent.set(date, partitionModuloFrequentNumbers(mostFrequentNumberComparator));
        NUMBERS.partitionModuloMostFrequentMinusOldest.set(date, partitionModuloMostFrequentMinusOldestNumbers());
        NUMBERS.partitionModuloMostFrequentOverOldest.set(date, partitionModuloMostFrequentOverOldestNumbers());
        NUMBERS.partitionModuloMostFrequentPowerOverOldest.set(date, partitionModuloMostFrequentPowerOverOldestNumbers());
        NUMBERS.partitionModuloOldest.set(date, partitionModuloOldestNumbers());
        NUMBERS.partitionValueLeastFrequent.set(date, partitionValueFrequentNumbers(leastFrequentNumberComparator));
        NUMBERS.partitionValueLeastFrequentMinusOldest.set(date, partitionValueLeastFrequentMinusOldestNumbers());
        NUMBERS.partitionValueLeastFrequentOverOldest.set(date, partitionValueLeastFrequentOverOldestNumbers());
        NUMBERS.partitionValueLeastFrequentPowerOverOldest.set(date, partitionValueLeastFrequentPowerOverOldestNumbers());
        NUMBERS.partitionValueMiddleFrequent.set(date, partitionValueMiddleFrequentNumbers());
        NUMBERS.partitionValueMostFrequent.set(date, partitionValueFrequentNumbers(mostFrequentNumberComparator));
        NUMBERS.partitionValueMostFrequentMinusOldest.set(date, partitionValueMostFrequentMinusOldestNumbers());
        NUMBERS.partitionValueMostFrequentOverOldest.set(date, partitionValueMostFrequentOverOldestNumbers());
        NUMBERS.partitionValueMostFrequentPowerOverOldest.set(date, partitionValueMostFrequentPowerOverOldestNumbers());
        NUMBERS.partitionValueOldest.set(date, partitionValueOldestNumbers());
        NUMBERS.random.set(date, randomNumbers());
    }, collectPriceResults = (date, result) => {
        STRATEGIES.forEach(collectNumberPriceResults.bind(null, date, result));
    }, collectAges = numbers => {
        const partitionModuli = {}, partitionValues = {};
        Object.keys(AGES).forEach(number => {
            // COUNT_SPECIAL: Remove numbers.indexOf(number) < 6
            if (numbers.includes(number) && numbers.indexOf(number) < 6) {
                AGES[number] = 0;
                const realNumber = +number;
                partitionModuli[realNumber % 7] = true;
                partitionValues[Math.floor((realNumber - 1) / 7)] = true;
            } else AGES[number]++;
        });
        Object.keys(PARTITION_AGE_MODULI).forEach(partition => {
            if (partitionModuli[partition]) {
                PARTITION_AGE_MODULI[partition] = 0;
            } else {
                PARTITION_AGE_MODULI[partition]++;
            }
        });
        Object.keys(PARTITION_AGE_VALUES).forEach(partition => {
            if (partitionValues[partition]) {
                PARTITION_AGE_VALUES[partition] = 0;
            } else {
                PARTITION_AGE_VALUES[partition]++;
            }
        });
    };
    // COUNT_SPECIAL: Remove slice(0, 6)
    const collectFrequencies = numbers => numbers.slice(0, 6).forEach(number => {
        FREQUENCIES[number] = (FREQUENCIES[number] || 0) + 1;
        const realNumber = +number;
        const partitionModulo = realNumber % 7;
        const partitionValue = Math.floor((realNumber - 1) / 7);
        PARTITION_FREQUENCY_MODULI[partitionModulo] = (PARTITION_FREQUENCY_MODULI[partitionModulo] || 0) + 1;
        PARTITION_FREQUENCY_VALUES[partitionValue] = (PARTITION_FREQUENCY_VALUES[partitionValue] || 0) + 1;
    });
    //
    const leastFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyA - frequencyB;
    const mostFrequentNumberComparator = ([numberA, frequencyA], [numberB, frequencyB]) => frequencyB - frequencyA;
    const mappedFrequentNumbers = ([number]) => number;
    const frequencyMinusAge = ([number, frequency]) => {
        return [number, frequency - AGES[number]];
    }, frequencyOverAge = ([number, frequency]) => {
        return [number, frequency * 1.0 / AGES[number]];
    }, frequencyPowerOverAge = ([number, frequency]) => {
        return [number, Math.pow(frequency, 1.0 / AGES[number])];
    }, frequentNumbers = comparator => Object.entries(FREQUENCIES).sort(comparator).slice(0, 6).map(mappedFrequentNumbers);
    const frequentOldestNumbers = (relation, comparator) => Object.entries(FREQUENCIES).map(relation).sort(comparator).slice(0, 6).map(mappedFrequentNumbers);
    const leastFrequentMinusOldestNumbers = frequentOldestNumbers.bind(null, frequencyMinusAge, leastFrequentNumberComparator);
    const leastFrequentOverOldestNumbers = frequentOldestNumbers.bind(null, frequencyOverAge, leastFrequentNumberComparator);
    const leastFrequentPowerOverOldestNumbers = frequentOldestNumbers.bind(null, frequencyPowerOverAge, leastFrequentNumberComparator);
    const mostFrequentMinusOldestNumbers = frequentOldestNumbers.bind(null, frequencyMinusAge, mostFrequentNumberComparator);
    const mostFrequentOverOldestNumbers = frequentOldestNumbers.bind(null, frequencyOverAge, mostFrequentNumberComparator);
    const mostFrequentPowerOverOldestNumbers = frequentOldestNumbers.bind(null, frequencyPowerOverAge, mostFrequentNumberComparator);
    const middleFrequentNumbers = () => {
        const sortedFrequentNumbers = Object.entries(FREQUENCIES).sort(leastFrequentNumberComparator).map(mappedFrequentNumbers);
        const sortedFrequentNumbersCount = sortedFrequentNumbers.length;
        if (sortedFrequentNumbersCount <= 6) {
            return sortedFrequentNumbers;
        } else if (sortedFrequentNumbersCount % 2 === 0) {
            const startIndex = (sortedFrequentNumbersCount - 6) / 2;
            return sortedFrequentNumbers.slice(startIndex, startIndex + 6);
        }
        const startIndex = (sortedFrequentNumbersCount - 7) / 2;
        const sortedMiddleFrequentNumbers = sortedFrequentNumbers.slice(startIndex, startIndex + 7);
        sortedMiddleFrequentNumbers.splice(3, 1);
        return sortedMiddleFrequentNumbers;
    }, oldestNumbers = () => Object.entries(AGES).sort(mostFrequentNumberComparator).slice(0, 6).map(mappedFrequentNumbers);
    const mappedNumberFrequencies = (frequencies, number) => {
        return [number, frequencies[number]];
    }, partitionFrequentNumbers = (frequencies, partitionFrequencies, partitions, comparator) => {
        const numbers = [];
        const entries = Object.entries(partitionFrequencies).sort(comparator);
        let repeatedPartitionCount = 7 - entries.length;
        if (repeatedPartitionCount <= 0) entries.splice(6, 1);
        entries.forEach(([partition, frequency]) => {
            const count = Math.min(frequency, repeatedPartitionCount + 1);
            if (repeatedPartitionCount > 0) repeatedPartitionCount -= count - 1;
            numbers.push(...partitions[partition].map(mappedNumberFrequencies.bind(null, frequencies)).sort(comparator).map(mappedFrequentNumbers).slice(0, count));
        });
        return numbers;
    }, partitionModuloFrequentNumbers = partitionFrequentNumbers.bind(null, FREQUENCIES, PARTITION_FREQUENCY_MODULI, PARTITION_MODULI);
    const partitionValueFrequentNumbers = partitionFrequentNumbers.bind(null, FREQUENCIES, PARTITION_FREQUENCY_VALUES, PARTITION_VALUES);
    const partitionFrequentOldestNumbers = (partitionFrequencies, partitions, partitionRelation, numberRelation, comparator) => {
        const numbers = [];
        const entries = Object.entries(partitionFrequencies).map(partitionRelation).sort(comparator);
        let repeatedPartitionCount = 7 - entries.length;
        if (repeatedPartitionCount <= 0) entries.splice(6, 1);
        entries.forEach(([partition]) => {
            const count = Math.min(partitionFrequencies[partition], repeatedPartitionCount + 1);
            if (repeatedPartitionCount > 0) repeatedPartitionCount -= count - 1;
            const partitionNumbers = partitions[partition];
            numbers.push(...partitionNumbers.map(numberRelation).sort(comparator).map(mappedFrequentNumbers).slice(0, count));
        });
        return numbers;
    }, partitionFrequentMinusOldestNumbers = (partitionFrequencies, partitionAges, partitions, comparator) => {
        return partitionFrequentOldestNumbers(partitionFrequencies, partitions, ([partition, frequency]) => {
            return [partition, frequency - partitionAges[partition]];
        }, number => [number, FREQUENCIES[number] - AGES[number]], comparator);
    }, partitionFrequentOverOldestNumbers = (partitionFrequencies, partitionAges, partitions, comparator) => {
        return partitionFrequentOldestNumbers(partitionFrequencies, partitions, ([partition, frequency]) => {
            return [partition, frequency * 1.0 / partitionAges[partition]];
        }, number => [number, FREQUENCIES[number] * 1.0 / AGES[number]], comparator);
    }, partitionFrequentPowerOverOldestNumbers = (partitionFrequencies, partitionAges, partitions, comparator) => {
        return partitionFrequentOldestNumbers(partitionFrequencies, partitions, ([partition, frequency]) => {
            return [partition, Math.pow(frequency, 1.0 / partitionAges[partition])];
        }, number => [number, Math.pow(FREQUENCIES[number], 1.0 / AGES[number])], comparator);
    }, partitionModuloLeastFrequentMinusOldestNumbers = partitionFrequentMinusOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, leastFrequentNumberComparator);
    const partitionModuloLeastFrequentOverOldestNumbers = partitionFrequentOverOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, leastFrequentNumberComparator);
    const partitionModuloLeastFrequentPowerOverOldestNumbers = partitionFrequentPowerOverOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, leastFrequentNumberComparator);
    const partitionValueLeastFrequentMinusOldestNumbers = partitionFrequentMinusOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, leastFrequentNumberComparator);
    const partitionValueLeastFrequentOverOldestNumbers = partitionFrequentOverOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, leastFrequentNumberComparator);
    const partitionValueLeastFrequentPowerOverOldestNumbers = partitionFrequentPowerOverOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, leastFrequentNumberComparator);
    const partitionModuloMostFrequentMinusOldestNumbers = partitionFrequentMinusOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, mostFrequentNumberComparator);
    const partitionModuloMostFrequentOverOldestNumbers = partitionFrequentOverOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, mostFrequentNumberComparator);
    const partitionModuloMostFrequentPowerOverOldestNumbers = partitionFrequentPowerOverOldestNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_AGE_MODULI, PARTITION_MODULI, mostFrequentNumberComparator);
    const partitionValueMostFrequentMinusOldestNumbers = partitionFrequentMinusOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, mostFrequentNumberComparator);
    const partitionValueMostFrequentOverOldestNumbers = partitionFrequentOverOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, mostFrequentNumberComparator);
    const partitionValueMostFrequentPowerOverOldestNumbers = partitionFrequentPowerOverOldestNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_AGE_VALUES, PARTITION_VALUES, mostFrequentNumberComparator);
    const partitionMiddleFrequentNumbers = (partitionFrequencies, partitions) => {
        const numbers = [];
        const entries = Object.entries(partitionFrequencies).sort(leastFrequentNumberComparator);
        let repeatedPartitionCount = 7 - entries.length;
        if (repeatedPartitionCount <= 0) entries.splice(3, 1);
        entries.forEach(([partition, frequency]) => {
            const count = Math.min(frequency, repeatedPartitionCount + 1);
            if (repeatedPartitionCount > 0) repeatedPartitionCount -= count - 1;
            const offset = Math.floor(count / 2);
            const middleNumbers = partitions[partition].map(mappedNumberFrequencies.bind(null, FREQUENCIES)).sort(leastFrequentNumberComparator).map(mappedFrequentNumbers).slice(3 - offset, 4 + offset);
            if (middleNumbers.length > 6) {
                middleNumbers.splice(offset, (count + 1) % 2);
            }
            numbers.push(...middleNumbers);
        });
        return numbers;
    }, partitionModuloMiddleFrequentNumbers = partitionMiddleFrequentNumbers.bind(null, PARTITION_FREQUENCY_MODULI, PARTITION_MODULI);
    const partitionValueMiddleFrequentNumbers = partitionMiddleFrequentNumbers.bind(null, PARTITION_FREQUENCY_VALUES, PARTITION_VALUES);
    const partitionOldestNumbers = (partitionAges, partitions) => Object.entries(partitionAges).sort(mostFrequentNumberComparator).slice(0, 6).map(([partition]) => {
        return partitions[partition].map(mappedNumberFrequencies.bind(null, AGES)).sort(mostFrequentNumberComparator).map(mappedFrequentNumbers)[0];
    }), partitionModuloOldestNumbers = partitionOldestNumbers.bind(null, PARTITION_AGE_MODULI, PARTITION_MODULI);
    const partitionValueOldestNumbers = partitionOldestNumbers.bind(null, PARTITION_AGE_VALUES, PARTITION_VALUES);
    const randomNumbers = () => {
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
        priceResultCounts.set(priceResultCount, priceResultCounts.get(priceResultCount) + 1);
    }, priceResult = (date, result, strategy) => {
        const storedFrequentNumbers = NUMBERS[strategy].get(date);
        const { numbers, prices } = result;
        const normalNumbers = numbers.slice(0, 6);
        const specialNumber = numbers[6];
        const resultCount = normalNumbers.filter(number => {
            return storedFrequentNumbers.includes(number);
        }).length + (storedFrequentNumbers.includes(specialNumber) ? 0.5 : 0);
        NET_GAINS[strategy] += (prices[resultCount] || 0) + (PRICES[resultCount] || 0);
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
    STRATEGIES.forEach(strategy => console.info(`NUMBER_PRICE_RESULTS.${strategy}`, NUMBER_PRICE_RESULTS[strategy]));
    STRATEGIES.forEach(strategy => console.info(`NUMBER_PRICE_RESULT_COUNTS.${strategy}`, NUMBER_PRICE_RESULT_COUNTS[strategy]));
    STRATEGIES.forEach(strategy => console.info(`NumberPriceResultCountSum(${strategy})`, numberPriceResultCountSum(strategy)));
    STRATEGIES.forEach(strategy => console.info(`NumberPositivePriceResultCountSum(${strategy})`, numberPositivePriceResultCountSum(strategy)));
    console.info("leastFrequent", frequentNumbers(leastFrequentNumberComparator));
    console.info("leastFrequentMinusOldest", leastFrequentOverOldestNumbers());
    console.info("leastFrequentOverOldest", leastFrequentOverOldestNumbers());
    console.info("leastFrequentPowerOverOldest", leastFrequentPowerOverOldestNumbers());
    console.info("middleFrequent", middleFrequentNumbers());
    console.info("mostFrequent", frequentNumbers(mostFrequentNumberComparator));
    console.info("mostFrequentMinusOldest", mostFrequentOverOldestNumbers());
    console.info("mostFrequentOverOldest", mostFrequentOverOldestNumbers());
    console.info("mostFrequentPowerOverOldest", mostFrequentPowerOverOldestNumbers());
    console.info("oldest", oldestNumbers());
    console.info("partitionModuloLeastFrequent", partitionModuloFrequentNumbers(leastFrequentNumberComparator));
    console.info("partitionModuloLeastFrequentMinusOldest", partitionModuloLeastFrequentMinusOldestNumbers());
    console.info("partitionModuloLeastFrequentOverOldest", partitionModuloLeastFrequentOverOldestNumbers());
    console.info("partitionModuloLeastFrequentPowerOverOldest", partitionModuloLeastFrequentPowerOverOldestNumbers());
    console.info("partitionModuloMiddleFrequent", partitionModuloMiddleFrequentNumbers());
    console.info("partitionModuloMostFrequent", partitionModuloFrequentNumbers(mostFrequentNumberComparator));
    console.info("partitionModuloMostFrequentMinusOldest", partitionModuloMostFrequentMinusOldestNumbers());
    console.info("partitionModuloMostFrequentOverOldest", partitionModuloMostFrequentOverOldestNumbers());
    console.info("partitionModuloMostFrequentPowerOverOldest", partitionModuloMostFrequentPowerOverOldestNumbers());
    console.info("partitionModuloOldest", partitionModuloOldestNumbers());
    console.info("partitionValueLeastFrequent", partitionValueFrequentNumbers(leastFrequentNumberComparator));
    console.info("partitionValueLeastFrequentMinusOldest", partitionValueLeastFrequentMinusOldestNumbers());
    console.info("partitionValueLeastFrequentOverOldest", partitionValueLeastFrequentOverOldestNumbers());
    console.info("partitionValueLeastFrequentPowerOverOldest", partitionValueLeastFrequentPowerOverOldestNumbers());
    console.info("partitionValueMiddleFrequent", partitionValueMiddleFrequentNumbers());
    console.info("partitionValueMostFrequent", partitionValueFrequentNumbers(mostFrequentNumberComparator));
    console.info("partitionValueMostFrequentMinusOldest", partitionValueMostFrequentMinusOldestNumbers());
    console.info("partitionValueMostFrequentOverOldest", partitionValueMostFrequentOverOldestNumbers());
    console.info("partitionValueMostFrequentPowerOverOldest", partitionValueMostFrequentPowerOverOldestNumbers());
    console.info("partitionValueOldest", partitionValueOldestNumbers());
    console.info("random", randomNumbers());
    console.info("TOTAL_COST", TOTAL_COST);
    console.info("NET_GAINS", NET_GAINS);
    console.info("PARTITION_AGE_MODULI", PARTITION_AGE_MODULI);
    console.info("PARTITION_AGE_VALUES", PARTITION_AGE_VALUES);
    console.info("PARTITION_FREQUENCY_MODULI", PARTITION_FREQUENCY_MODULI);
    console.info("PARTITION_FREQUENCY_VALUES", PARTITION_FREQUENCY_VALUES);
})();