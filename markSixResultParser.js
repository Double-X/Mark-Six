(() => {
    const DATE_CLASS = "resultDetailsCell2", DATE_REGEX = /[^0-9\/]+/gmi;
    const JSON_PATH = "oldMarkSixResults.json";
    const NUMBER_CLASS = "resultDetailsInner";
    const NUMBER_INDICES = [0, 1, 2, 3, 4, 5, 7];
    const NUMBER_SRC_POST = ".gif?CV=L4.02R1";
    const NUMBER_SRC_PRE = "file:///F:/marksix/info/images/icon/no_";
    const RESULT_6_CLASS = "orangeNum2", RESULT_OTHER_CLASS = "orangeNum1";
    const RESULT_REGEX = /\D+/gmi;
    const parsedResult = innerHTML => {
        const div = document.createElement("div");
        div.innerHTML = innerHTML;
        return [
            parsedDate(div),
            { numbers: parsedNumbers(div), prices: parsedPrices(div) }
        ];
    }, parsedDate = div => {
        const rawDate = div.getElementsByClassName(DATE_CLASS);
        return removeInnerHTML(rawDate.item(0), DATE_REGEX);
    }, parsedNumbers = div => {
        const spans = div.getElementsByClassName(NUMBER_CLASS);
        return NUMBER_INDICES.map(index => {
            const src = spans.item(index).children.item(0).src;
            return `${+remove(remove(src, NUMBER_SRC_PRE), NUMBER_SRC_POST)}`;
        });
    }, parsedPrices = div => {
        const prices = new Map();
        const span6_ = div.getElementsByClassName(RESULT_6_CLASS).item(0);
        if (span6_) {
            const price = +removeInnerHTML(span6_, RESULT_REGEX);
            if (price) prices.set("6", price);
        }
        const spanOthers = div.getElementsByClassName(RESULT_OTHER_CLASS);
        [...new Array(spanOthers.length - 4)].forEach((_, i) => {
            const price = +removeInnerHTML(spanOthers.item(i), RESULT_REGEX);
            if (price) prices.set(`${5.5 - i * 0.5}`, price);
        });
        return Object.fromEntries(prices);
    }, removeInnerHTML = ({ innerHTML }, regex) => remove(innerHTML, regex);
    const remove = (string, regex) => string.replace(regex, "");
    const exportJSON = a => a.dispatchEvent(exportJSONEvent());
    const exportJSONEvent = () => {
        const event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0,
                false, false, false, false, 0, null);
        return event;
    }, exportJSONDom = () => {
        var a = document.createElement('a');
        a.download = JSON_PATH, a.href = window.URL.createObjectURL(new Blob([
            `OLD_RESULTS = ${JSON.stringify(OLD_RESULTS, null, "\t")}`
        ], { type: 'text/json' }));
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        return a;
    }, result = parsedResult(CONTAINER_INNER_HTML);
    console.info("result", result);
    OLD_RESULTS.push(result);
    const dates = OLD_RESULTS.map(oldResult => {
        return oldResult[0].split("/").reverse().join("/");
    }), dateCount = dates.length;
    for (let i = 1; i < dateCount; i++) {
        const ithDateString = dates[i], iMinus1thDateString = dates[i - 1];
        const ithDate = new Date(ithDateString);
        const iMinus1thDate = new Date(iMinus1thDateString);
        const timeDifference = ithDate.getTime() - iMinus1thDate.getTime();
        const dateDifference = timeDifference / 86400000;
        if (dateDifference > 3) {
            const methodName = OLD_RESULTS[i] === result ? "warn" : "info";
            console[methodName](`Date of index ${i}: ${ithDateString}`,
                    `Date of index ${i - 1}: ${iMinus1thDateString}`,
                    `Difference is ${dateDifference} but should be <= 3!`);
        }
        if (dateDifference > 1) continue;
        console.warn(`Date of index ${i}: ${ithDateString}`);
        console.warn(`Date of index ${i - 1}: ${iMinus1thDateString}`);
        console.warn(`Difference is ${dateDifference} but should be > 1!`);
    }
    console.info("OLD_RESULTS", OLD_RESULTS);
    exportJSON(exportJSONDom());
})();
