function insertionSort(arr) {
    //start with 2nd element in the array
    for (let i = 1; i < arr.length; i++) {
        //create pointer for the current value and the new position
        let currentElement = arr[i];
        let newPosition = i;
        
        //find the new position index
        while (newPosition >= 0 && arr[newPosition-1] > currentElement) {
            arr[newPosition] = arr[newPosition-1];
            newPosition--;
        }
        //insert into new position
        arr[newPosition] = currentElement;
    }
    return arr;
}

module.exports = insertionSort;