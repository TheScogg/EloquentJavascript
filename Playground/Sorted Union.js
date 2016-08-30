function uniteUnique(arr) {
    var args = Array.prototype.slice.call(arguments);

    args = args.reduce(function (flat, toFlatten) {
        return flat.concat(toFlatten);
    });

    //Find out how to find multiple instances of current number. Slice?
    for (var i = 0; i < args.length; i++) {
        console.log(args.slice(0,i) + " and " + args.slice(i+1));
    }

    console.log(args);
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
