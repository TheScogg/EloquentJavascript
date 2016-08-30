/**
 * Created by Chris on 5/12/2016.
 */
function objectify (obj, obj2) {
    for (prop in obj) {
        console.log(obj[prop]);
    }

    for (prop in obj2) {
        if (prop in obj) {
            return prop;
        }
    }


}

var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "an"}, object: 2};

console.log(objectify(obj, obj2));