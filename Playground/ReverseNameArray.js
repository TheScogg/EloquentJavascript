/**
 * Created by Chris on 5/9/2016.
 */
function reverseName (arr) {
    for (var i = 0; i < 6; i+=2) {
        old = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = old;
    }

    return arr;
}

function printName(arr) {
    for (var i = 0; i < 6; i+=2) {
        console.log(arr[i] + ", " + arr[i+1]);
    }
}

var nameArray = ["James", "Scoggins", "Gina", "Zielsdorf", "Jim", "Cantore"]
printName(reverseName(nameArray));
