function findRotationCount(arr, low=0, high=arr.length-1) {
    //cases if high is lower than low or both are equal
    if (high < low) return 0;
    if (high === low) return low;

    let mid = Math.floor((low + high) / 2);

    //check for case that mid + 1 is the smallest
    if (mid < high && arr[mid + 1] < arr[mid])
        return mid + 1;

    //check for case that mid is the smallest
    if (mid > low && arr[mid] < arr[mid-1]) {
        return mid;
    }
    
    if (arr[mid] < arr[high]) {
        //use recursion to check if the smallest is in the first half of the array
        return findRotationCount(arr, low, mid - 1);
    }
    //use recursion to check if the smallest is in the last half of the array
    return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount