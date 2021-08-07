function insertionSort(arr) {
    //start with 2nd element in the array
    for (let i = 1; i < arr.length; i++) {
        //create pointer for the current value and the new position
        let currentElement = arr[i];
        let newPosition = i;
        
        //find the new position index
        while (newPosition >= 0 && arr[newPosition-1] > currentElement) {
            //while conditions meet, switch previous position with current position
            [arr[newPosition], arr[newPosition-1]] = [arr[newPosition-1], arr[newPosition]];
            newPosition--;
            currentElement = arr[newPosition];
        }
    }
    return arr;
}

module.exports = insertionSort;