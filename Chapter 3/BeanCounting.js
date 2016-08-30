/**
 * Created by Chris on 5/7/2016.
 */

//08.30.16 @ 4PM : Testing pushing updated files to GIT

function countBs(string) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            count += 1;
        }
    }

    return count;
}

function countChars(string, char) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            count += 1;
        }
    }

    return count;
}

console.log(countBs("Bob Baffort Beats Babies"));
console.log(countChars("Charlie cheats at chess. He's a crazy uncle.", "c"));