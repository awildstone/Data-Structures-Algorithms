function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let newMin;
            if (arr[j] < arr[i]) newMin = j;
            if(newMin) {
                [arr[newMin], arr[i]] = [arr[i], arr[newMin]];
            }
        }
    }
    return arr;
}

module.exports = selectionSort;