/**
 * Created by Chris on 5/8/2016.
 */
function range (a,b,step) {
    var rangeArray = [];

    if (step === undefined) {
        step = 1;
    }

    if (a < b) {
        for (a; a<b+1; a+=step) {
            rangeArray.push(a);
        }
    } else {
        for (a; a > b - 1; a += step) {
            rangeArray.push(a);
        }
    }


    return rangeArray;
}

function sum (rangeArray) {
    console.log("The numbers in your array are " + rangeArray);
    var sum = 0;

    for (var i = 0; i < rangeArray.length; i++) {
        sum += rangeArray[i];
    }

    return ("The sum of the numbers in the array is " + sum);
}

console.log(sum(range(5,2,-1)));
