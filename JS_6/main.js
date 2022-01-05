
console.log('Hello from JS!');

// 2. Vars ======================================================================================

// let userName = 'Andrey';
// console.log(userName)

// ES6:
// let - variable - can change value
// const - constant
// ES5: 
// var
// userName = 'Vadim';
// console.log(userName)

// const yearOfBirth = 1975; 
// yearOfBirth = 1975; // Uncaught TypeError: invalid assignment to const 'yearOfBirth'

/* -----------------------
let name, age;
name = 'Uriy';

// const profession; // Uncaught SyntaxError: missing = in const declaration main.js:24:6
// profession = 'JS developer'; 
*/

// var - функциональная область видимости, а не блочная. Не рекомендуется
// function sum() {
//     var userName2 = 'Uriy'
//     console.log(userName2);
// }
// sum();

// console.log(userName2); // Uncaught ReferenceError: userName2 is not defined

// { // bock of code
//     let userName = 'Andrey';
//     console.log(userName);
//     var userName2 = 'Sergey';
//     console.log(userName2);
// } // bock of code
// console.log(userName2);
// console.log(userName);

// 2.2 Data types
// let userName = 'Andrey';
// let number = 30;
// let isMarried = true;

// динамическая типизация
// let someVariable = 'Some value';
// someVariable = 50;

// null
// let age = null;
// age = 32;
// age =null;
// console.log(age);

// undefined - значение не было присвоено
// let userName;
// console.log(userName);

// let someName = 'James';
// someName = underfined; // ! так не делают Uncaught ReferenceError: underfined is not defined
// someName = null; 
// underfined - если переменной не присвоено значение, если функия ничего не вернула и тд

// Object
// see ahead....

// Array 
// see ahead....   


// operator typeof

// let someName = "Bob"
// console.log(typeof someName);
// someName = 30;
// console.log(typeof someName);
// someName = true;
// console.log(typeof someName);
// someName = 30,5;
// console.log(typeof someName);

// BigInt

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(90071992547409919007199254740991)
// console.log(90071992547409919007199254740991n) // BigInt  

// // console.log(90071992547409919007199254740991n/2) // Uncaught TypeError: can't convert BigInt to number
// console.log(90071992547409919007199254740991n/2n)

// Symbol
// это уникальное примитивное значение, позволяет добавлять уникальное свойство
// к объекту, с уверенностью что он не перезапишет никакое другое свойство
// 

// 3. Operators ================================================================================
// >, <, <=, <=
// console.log(10 > 5);
// console.log(50 > 84);

// let result = 10 > 5;
// console.log(result);

// result = 10 == 5;
// console.log(result);

// == - нестрогое сравнение
// === - строгое сравнение

// != - нестрогое неравенство
// !== - строгое неравенство

// console.log('5' == 5); // true
// console.log('5' === 5); // false

// let number = 5;
// console.log(number = 10);

// if (number = 10) {  // !!!!!!!!!!!!!!!!!!!!!!!!!!! sould be operator of conditional, 
// console.log('Pay attantion!');
// }

// 4. Conditionals ==============================================================================

// const time = 20;
// if (time < 12) {
//     console.log('Good morning!')
// } else if (time > 12 && time < 18) {
//     console.log('Good afternoon!')
// } else {
//     console.log('Good evening!')
// };

/*
logical operators:
&& - and
|| - or
!true - not 
*/

// ternary operator

// if (10 > 12) {
//     console.log("It's true")
// }else {
//     console.log("It's false")
// };

// 10 > 12 ? console.log("It's true") : console.log("It's false");

// // let greeting;
// let time1= 10
// // if (time1 >12) {
// //     greeting = 'Good morning!'
// // } else {
// //     greeting = 'Good afternoon !'
// // }

// let greeting- time1 <12 ?  'Good morning!': 'Good afternoon !';
// console.log(greeting);

// 5 Concatenations =====================================================================

// console.log("Hi, Vadim! How are you?");

// let greeting = "Hi, Vadim!";
// let question = "How are you?";

// let hi = greeting + ' ' + question;
// console.log(greeting + ' ' + question);
// console.log(hi);

// const userName = "Andrey";
// console.log("Hi, "+userName+"! How are you?"); // не желательно

// console.log(`Hi, ${userName}! How are you?`); // !! sould do so

// 6 Functions ===================================================================================

// console.log("Hi, dear visitor!")
// DRY
// function sayHi() {
//     console.log("Hi, dear visitor!")
// }

// sayHi();

//function declaration - короче, лаконичнее, вызываем в любом месте -----------
// function sayHi() {
//     console.log("Hi, dear visitor!")
// };

// console.log(name); 
// let name = "Bob";

//function expression - функция вызывается ниже по коду -------------------
// const sayHi = function () {
//     alert('Hi');
// };

// 6.1 Parametrs and arguments for functions

// function sayHi(name) { // parametr
//     console.log(`Hi, ${name}! How are you?`);
// }

// sayHi("Vadim"); //argument
// sayHi("Andrey");
// sayHi("James");

// Return

// function sum(a,b) {
//     const result = a+b;
//     console.log(result);
// }

// sum(10,15); 

// function sum(a,b) {
//     return a+b;     
// }

// let res = sum(10,15);
// console.log(res);

// function as argument !!!!!!!!!!!!!!!!!!!!!!!! -----------------

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10,25));
// ---------------
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10, 25));

// const result = sum(sum(10,10), sum(20,20));
// console.log(result);
// ------------------

// function sum(a, b) {
//     return a + b;
// }

// function diff(a, b) {
//     return a - b;
// }

// function doSomethong(func) {
//     let x = 10;
//     let y = 10;
//     return func(x,y);
// }

// let result;
// result = doSomethong(sum);
// console.log(result);

// result = doSomethong(diff );
// console.log(result);

// 6.4 Самовызывающаяся функция IIFE  ---------------------------
// Immidiatele involve function expression

// (function sayHi() {
//     console.log("Hi, dear visitor!")
// })();

// // () - оборачиваем в выражение 
// (function (a, b) {
//     console.log(a)
//     console.log(b)
//     console.log(a + b)
// })(10, 15); //-запускаем на выполнение

// let res = (function (a, b) {
//     return a + b
// })(3, 4);

// console.log(res);

// 6.5 Стрелочная функция ----------------------------------

// function sayHi(name) {
//   console.log(`Hi, ${name}! How are you?`);  
// }

// const arrSayHi = (name) => {
//   console.log(`Hi, ${name}! How are you?`);  
// }

// const arrSayHi = (name) => console.log(`Hi, ${name}! How are you?`); 

// arrSayHi("Andrey");

// const sum = (a,b) => a+b;
// console.log(sum(1,2));


// 7 Arrays =====================================================================================

// const users = ["Andrey", "Tatiana", "Varim"];
// console.log(users);

// const autoBrands = ['Audi','BMW','Mazda','Tayota' ];
// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(typeof autoBrands);
// console.log(autoBrands.length);

// // 7.1 Arrays methods
// autoBrands.push('VW'); // add to the end
// console.log(autoBrands);

// autoBrands.pop(); // del from the end
// console.log(autoBrands);

// autoBrands.shift(); 
// console.log(autoBrands);

// autoBrands.unshift('Audi','VW');
// console.log(autoBrands);

// autoBrands.splice(2,1);
// console.log(autoBrands);


// // ---
// let autoBrands2 = autoBrands;
// autoBrands2 === autoBrands // true 
// let autoBrands3 = [ "Audi", "VW", "BMW", "Mazda", "Tayota" ];
// autoBrands3 === autoBrands // false
// // -- 

// 8 Cycles, iterations, loop ====================================================================

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// 9 Cycle for and arrays =======================================================================

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Tayota'];
// for (i = 0; i < autoBrands.length; i++) {
//     console.log(autoBrands[i]);
// }

// 10 Cycle for(of) and arrays ===================================================================

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Tayota'];

// for (let item of autoBrands) {
//     console.log(item);
// }

// 11 forEach() =================================================================================

//  const autoBrands = ['Audi', 'BMW', 'Mazda', 'Tayota'];

// autoBrands.forEach(function (item, index) {
//     console.log(item, index );
//     console.log(`${item} => ${index}`); 
// })
// as =>:
// autoBrands.forEach((item,i) => console.log(`${item} => ${i}`))

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Tayota'];
// autoBrands.forEach(printBrand);

// function printBrand(brand, i) {
//     console.log(`${brand} => ${i}`);
// };

// 12. Objects ==================================================================================

// fields
let userName = 'Vadim';
let age = 30;
let isMarried = false;

const person = {
    userName: 'Vadim',
    age: 30, 
    isMarried: false
}

console.log(person);












































