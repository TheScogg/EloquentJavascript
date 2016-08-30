/**
 * Created by Chris on 5/8/2016.
 */
function reverseArray (arr) {
    newArray = [];

    for (var i = arr.length-1; i >= 0; i--) {
        newArray.push(arr[i]);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length/2); i++) {
        old = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = old;
    }
    return array;
}

myArray = [3,9,1,10,4,7];

console.log(reverseArrayInPlace(myArray));