/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length-1){
    const pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++
            //swap the current val with the current pivot index val
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    //lastly move the pivot val to the current pivot index pointer
    [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
    // console.log(arr);

    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length-1) {

    if (left < right) {
        /** Mutate the array around the pivot element with pivot in center, smaller elements on left, and larger elements on right. 
         * Return the pivot index. */
        let index = pivot(arr, left, right);
        
        //recurse left & right subarrays, ordering each subarray around the pivot. Note we are mutating different parts of the same array.
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    }

    return arr;
}

module.exports = { quickSort, pivot };