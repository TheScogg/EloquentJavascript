/**
 * Created by Chris on 5/9/2016.
 */
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

function listToArray (list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend () {

}

array = [10,50,20,30];
listToArray(arrayToList(array));
