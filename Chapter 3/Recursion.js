/**
 * Created by Chris on 5/7/2016.
 */
function isEven(number) {
    if (number < 0) {
        number = number * -1;
    }

    if (number === 0) {
        return false;
    } else if (number === 1) {
        return true;
    } else {
        return (isEven(number-2));
    }
}

console.log(isEven(-1));