function findRotatedIndex(arr, num) {
    //find the pivot point in the array using a binary search function
    let pivot = getPivot(arr);
    
    //find the index of the num using a binary search function
    if (num >= arr[0] && num <= arr[pivot - 1]) {
        //the num occurs before the pivot
        return searchArray(arr, num, 0, pivot - 1)
    } else {
        //the num occurs after the pivot
        return searchArray(arr, num, pivot, arr.length - 1)
    }
}

function searchArray(arr, num, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            //the num is somewhere in the end of the array
            start = mid + 1;
        } else {
            //the num is somewhere in the beginning of the array
            end = mid - 1;
        }
    }
    //num not found
    return -1;
}

function getPivot(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid+1]) {
            //found pivot index
            return mid + 1;
        } else if (arr[start] <= arr[mid]) {
            //pivot is somewhere in the end of the array because the start value is smaller than the mid value
            start = mid + 1;
        } else {
            //pivot is somewhere in the beginning of the array because the start value is larger than the mid value
            end = mid - 1;
        }
    }
}

module.exports = findRotatedIndex