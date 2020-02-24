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

console.log(peguins[0]);

var secondPenguin = peguins[1];

console.log(peguins[2]);

peguins.push(mypenguin);

peguins.length

gunter.canFly = true;

peguins[0].sayHello;

for(let i = 0; i < peguins.length; i++) {
  console.log(peguins[i].name);
}

for(let i = 0; i < peguins.length; i++) {
  console.log(peguins[i].sayHello);
}

for(let i = 0; i < peguins.length; i++) {
  peguins[i].numberOfFeet = 2;
}

for(let i = 0; i < peguins.length; i++) {
  if(peguins[i].canFly == true)
    console.log(peguins[i].name + " can fly!");
}