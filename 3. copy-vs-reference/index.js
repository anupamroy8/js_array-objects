// Value of x, y, a, b

var x = 10;     // 10
var y = "abc";  //"abc"
var a = x;      // 10
var b = y;      //"abc"

// Value of x, y, a, b
var x = 10;     //10
var y = "abc";  //"abc"
var a = x;      
var b = y;
a = 5;          //5
b = "def";      //"def"

// Value of arr & arrCopy
var arr = [1];  
var arrCopy = arr;
arr.push(2);

//
[1, 2] & [1, 2]
//
// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };
//
{surname: "florance"}
//
// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);
//
true
//
// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);
//
both false
//
//What's the output
console.log([10] === [10]);
//
false
//

// What's the output?
function personDetails(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50
  };

  return person;
}
var personObj1 = {
  name: "Alex",
  age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); // -> {name: "Alex", age: 25}
console.log(personObj2); // -> {name: "John", age: 50}

//Need to understand this...
//

// Guess the output
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);

//true
//

// Guess the output
var a = 5;
var b = a;
a = 10;
console.log(a); // 10
console.log(b); // 5


// What's the output?
var a = {};
var b = a;
a.a = 1;
console.log(a); //{a: 1}
console.log(b); //{a: 1}

// What's the output.
var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b); // true

// Clone the object person in clone
var person = {
  name: "Mark",
  age: 34,
  subjects: {
    maths: 78,
    physics: 43
  }
};

var clone = {};

// var clone = {...person};


// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user2 = {
  name: "Arya",
  house: house,
  brothers: brothers
};

let user3 = {
  name: "Arya",
  house: "Stark",
  brothers: ["John", "Bran", "Robb"]
};

// Output of the below code and why?
user.house === user2.house; // output: true, as both having same house.
user.house == user2.house; // output: true, as both having same house.
user.brothers === user2.brothers; // output: true, as both point to same array.
user.brothers == user2.brothers; // output: true, as both point to same array.
user.name == user2.name; // output: true, both are same.
user.name === user2.name; // output: true, both are same.
user.brothers == user3.brothers; // output: true, both are same.
user.brothers === user3.brothers; // output: true, both are same.
user.house === user2.house; // output true, both are same.
user.house === user3.house; // output true, both are same.
user.brothers[0] === user2.brothers[0]; // output true, both are pointing to same array.
user.brothers[0] === user3.brothers[0]; // output true, both are pointing to same array.
