function listHobbies () {
    return "boobs";
}

var journal = [
    {
        name : "Chris",
        hobbies: ["Guitar", "Programming", "Collecting Records"]
    },
    {
        name: "Gina",
        hobbies: ["Crafts", "Wii U", "Wedding Planning"]
    }];

for (var i = 0; i < journal.length; i++) {
    console.log(journal[i].name + "'s hobbies are " + journal[i].hobbies);
}

console.log(range(1, 10));