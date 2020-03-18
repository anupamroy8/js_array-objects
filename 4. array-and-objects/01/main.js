var mypenguin = {
    name: "Alfred",
    origin: "Zig et Puce",
    author: "Alain Saint-Ogan",
}

mypenguin.favoriteFoods = ["fish", "millets", "sparts"];

console.log(mypenguin.favoriteFoods[1]);

var firstFavFood =  mypenguin.favoriteFoods[0];

favoriteFoods.push("chicken");

console.log(mypenguin.favoriteFoods.length);

mypenguin.favoriteFoods[3] = "pineapples";

var lastFavFood = mypenguin.favoriteFoods[mypenguin.favoriteFoods.length - 1 ];


for (let key in mypenguin.favoriteFoods) {
    console.log(mypenguin.favoriteFoods[key]);
}