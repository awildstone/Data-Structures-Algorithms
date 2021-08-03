function countZeroes(arr) {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let count = 0;

    while (startIdx <= endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2);
        if (arr[midIdx] === 0 && arr[midIdx-1] !== 0) {
            //once first 0 is found, we know the remaining in array are all 0
            count = arr.length - midIdx;
            //set start past the end so we break out of the loop
            startIdx = endIdx + 1;
        } else if (arr[midIdx] > 0) {
            //we haven't found a 0 so move focus to the right side (end) of the array
            startIdx = midIdx + 1;
        } else {
            //we haven't found the first 0 so move focus to the left side (beginning) of array
            endIdx = midIdx - 1;
        }
    }
    return count;
}


module.exports = countZeroes