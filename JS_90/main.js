// Vars
var message; // a-z, A-Z, 0-9, $, _
var myMessage;

myMessage = "Hello, Ubuntu";
var myNumber = 10.484;
var myString = 'my first message'; // 10.484
var myBoolean = true;
var myNull = null;
var myUndefined = undefined;
var myObject = {
    name: "Andrey",
    age: 46
};
alert(40);
// Numbers --------------------------------

// var result = 40 + 10;
// alert(result);
// alert(40 + 10);
// console.log(40 + myNumber);
// console.log(40 - myNumber);
// console.log(40 / myNumber);
// console.log(40 * myNumber);
// myNumber = myNumber + 1;
// myNumber +=1;
// myNumber++;
// console.log(myNumber);
// console.log(Math.round(5.45));
// console.log(Math.ceil(5.1)); // round to top
// console.log(Math.floor(5.9)); // round to down
// var newNumber = 2.447;
// console.log(newNumber.toFixed(1)); // 1 sing after the point with round

// Strings---------------

// console.log("40" + myNumber); // 1 element is string
// console.log(myString + " was 03.01.2022");
// console.log(myMessage.toLowerCase());
// console.log(myString.toUpperCase());

// Arrays------------------------------

 var names = ["Tanya", "Vadim", "Andrey"];
// console.log(names[0].toUpperCase());
// console.log(names[1].toLowerCase());

// names[2] = "Masha"
// console.log(names[2]);
// console.log(names)

// names.push("Andrew")
// console.log(names)

 names.push(459.78, true);
// console.log(names)

// Conditionals-----------------------

// if (10 > 5) {
//     console.log("True")
// }

// if ("5" == 5) {
//     console.log("True")
// }

// if ("5" === 5) {
//     console.log("True")
// }

// if ("5" !== 5) {
//     console.log("false")
// }

// if ("5" !== 5 && myNumber > 20) { // or
//     console.log("false")
// }

// if ("5" !== 5 || myNumber > 20) { //
//     console.log("false")
// }
// if (10 >= 20) { //
//     console.log("true")
// } else {
//     console.log("false")
// }

// Loop ------------------------------

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i >= 5) break;
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) continue;
//     console.log(i);
// }

// for (var i=0; i < names.length; i++) {
//     console.log(names[i]);
// }
// var j = 0;
// while (j <= names.length) {
//     console.log(names[j]);
//     j++;
// }

// Functions ---------------------------------------------

// function myTestFunctuin() {
//     console.log("Do something")
// }

// myTestFunctuin();

// function sum(x, y) {
//     console.log(x+y)
// }
// sum(4,16);

// function sum(x, y) {
//     return x + y
// }
// console.log(sum(4,16));
// console.log(sum(5,15));

// Objects --------------------------------------------------

var myNewObject = {
    name: "Andrey",
    surname: "Tanin",
    age: 46,
    getFullName: function() {
        return this.name + ' ' + this.surname
    }

};

// myNewObject.name = "Tanya"
console.log(myNewObject.name);
console.log(myNewObject.getFullName());


















