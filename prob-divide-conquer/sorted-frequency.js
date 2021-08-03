function sortedFrequency(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    let firstIdx = findFirst(arr, low, high, num);

    if (firstIdx === -1) {
        return firstIdx;
    } else {
        let lastIdx = findLast(arr, low, high, num);
        return (lastIdx - firstIdx) + 1;
    }
}

function findFirst(arr, low, high, num) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === num && arr[mid-1] !== num || mid === 0) {
            //we found the first occurance
            return mid
        } else if (arr[mid] < num) {
            //search the left of the array
            return findFirst(arr, mid + 1, high, num);
        }
        //search the right of the array
        return findFirst(arr, low, mid - 1, num);
    }
    return -1
}

function findLast(arr, low, high, num) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === num && arr[mid+1] !== num || mid === arr.length - 1) {
            //we found the last occurance
            return mid
        } else if (arr[mid] > num) {
            //search the right of the array
            return findLast(arr, low, mid - 1, num);
        }
        //search the left of the array
        return findLast(arr, mid + 1, high, num);
    }
    return -1
}

module.exports = sortedFrequency