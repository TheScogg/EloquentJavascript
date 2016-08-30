function flatten(arr) {
    return arr.reduce(function (flat, toFlat) {
        return flat.concat(toFlat);
    })
}

flatten([[3,9,5,0], [5,83,2], [6,4,2]]);
