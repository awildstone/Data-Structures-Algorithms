function findFloor(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    //if the last element is less than num
    if (arr[high] <= num) return arr[high];

    //if the first element is greater than num
    if (arr[low] > num) return -1

    return binarySearch(arr, low, high, num);
}

function binarySearch(arr, low, high, num) {
    if (low > high) return -1

    let mid = Math.floor((low + high) / 2);

    //if the floor is equal to num
    if (arr[mid] === num) {
        return arr[mid];
    }

    //if the num is between mid and mid-1
    if (arr[mid-1] < num && num <= arr[mid]) {
        return arr[mid-1];
    }

    if (arr[mid] > num) {
        //if the middle val is greater than target num check the right side of array for the floor
        return binarySearch(arr, low, mid - 1, num);
    }
    //if the middle val is less than target check the left side of array for the floor
    return binarySearch(arr, mid + 1, high, num);
}

module.exports = findFloor;