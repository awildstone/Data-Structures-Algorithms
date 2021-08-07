/** Finds the number in the array with the highest number of digits and returns the length of the highest number. */
function mostDigits(arr) {
    let largest = 0;

    arr.forEach(num => {
        let count = digitCount(num);
        if (count > largest) largest = count;
    });

    return largest;
}

/** Accepts a number and returns the count of digits for this number. */
function digitCount(num) {
    return String(num).length;
}

/** Accepts a number and an index. Finds and returns the number located at that index, else returns 0 if no number is at this index. */
function getDigit(num, i) {
    let s = String(num);
    let char = s[(s.length - 1) - i];

    if (char !== undefined) return +char;
    return 0;
}

/** Sorts an array of positive integers. */
function radixSort(arr) {
    let maxDigits = mostDigits(arr);

    //for each digit place, create 10 array buckets that represent digits 0-9
    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from([0,1,2,3,4,5,6,7,8,9], () => []);
       //for each number in the array, get the specified digit placeholder (i) from the number arr[j]
        for (let j = 0; j < arr.length; j++) {
            let foundNum = getDigit(arr[j], i);
            //push the whole array number into the corresponding number bucket (0-9)
            buckets[foundNum].push(arr[j]);
        }
        //on each iteration, flatten the array buckets into a new array
        arr = buckets.flat();
    }
    return arr;
}

module.exports = { radixSort, mostDigits, digitCount, getDigit };