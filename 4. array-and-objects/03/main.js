//Previous code starts here
var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };
  var mypenguin = {
    name: "Alfred",
    origin: "Zig et Puce",
    author: "Alain Saint-Ogan",
}
var peguins = [gunter, ramon, fred];
//Previous code end here...

var prop = {
    hat: "baseball cap",
    shirt: "Hawaiian shirt",
    pants: "cargo shorts",
    shoes: "flip-flops",
}

peguins.outfit = prop;

var peguinsHatType = peguins.outfit.hat;

console.log(peguinsHatType);

peguins.outfit.accessory = "pocket watch";

peguins.outfit.hat = "top hat";

delete peguins.outfit.pants;

for(let key in peguins.outfit) {
    console.log(peguins.outfit[key]);
}
