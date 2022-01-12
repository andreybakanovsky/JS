// callback =================================================
// // 1 ------------------
// function sum(a, b) {
//     return a + b
// }

// function diff(a, b) {
//     return a - b
// }

// // let c = sum(10,20);
// // console.log(c);

// // console.log(sum(10, 15));
// //  const result = sum(sum(15, 15), sum(10, 10));
// // console.log(result); 

// function doSomething(func) {
//     let x = 10;
//     let y = 15;
//     const result = func(x, y);
//     console.log(result);
// }

// doSomething(sum);
// doSomething(diff);

// // 2 ------------------
// function doHomework(subject, callback) {
//     setTimeout(function () {
//         console.log(`Working on ${subject} homework.`);
//         callback();
//     }, 3000)
// }


// function goToGym() {
//     console.log(`I'm training`);
// }

// doHomework('math',goToGym);


// map ======================================================
// // https://learn.javascript.ru/map-set#perebor-map
// let collectionMap = new Map();
// collectionMap.set('weight', '81'); // ключ, значение
// collectionMap.set(2, 180); // ключ/значение могут быть любого типа

// let car = {
//     model: 'Jaguar'
// }
// collectionMap.set(car, 123); // for instanse the key can be an object

// console.log(collectionMap);
// console.log(collectionMap.size);

// console.log(collectionMap.get(car)); // returns the value by key
// console.log(collectionMap.get(2));
// console.log(collectionMap.has(2));// does it have the key?

// collectionMap.delete(2);
// console.log(collectionMap);
// collectionMap.set('age', 46);
// console.log(collectionMap);
// // collectionMap.clear();
// console.log(collectionMap);

// // search:
// // .keys()
// // .values()
// // .entries()

// // search by keys
// for (let key of collectionMap.keys()) {
//     console.log(key);
// }

// for (let value of collectionMap.values()) {
//     console.log(value);
// }

// for (let entry of collectionMap) { // can collectionMap.entries()
//     console.log(entry);// returns array !!
// }
// // ...

// Method .map() ===========================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// different info on the site
// const array = [1, 2, 3, 4];
// console.log(array);
// let newArray = array.map(Math.pow);
// console.log(newArray);

// newArray = array.map((x) => { return x * 10 });
// // newArray = array.map(x => x*3); // possible or better
// // console.log(newArray);
// newArray.map(function (element, index) {
//     console.log(`element ${index} with value ${element}`)
// });

// let double = array.map(function (value) {
//     return value * 2
// });
// console.log(double);

// const message = Array.prototype.map;
// const say = message.call('Hello, Vadim!', function (val) { return val.charCodeAt(0); });
// console.log(say);


// filter ===================================================
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const wordsArray = ['browser', 'protocol', 'treating', 'each', 'request', 'as', 'an', 'independent', 'transaction'];
// const result = wordsArray.filter(element => element.length > 4);
// console.log(result);

// // variant 1
// const code = [72, 101, 108, 108, 111, 44, 32, 86, 97, 100];
// const clearCode = code.filter(element => element >= 72);
// console.log(clearCode);

// // variant 2
// const code2 = [72, 101, 108, 108, 111, 44, 32, 86, 97, 100];

// function isBigEnough(value) {
//     return value >= 72
// }
// const clearCode2 = code2.filter(isBigEnough);
// console.log(clearCode2);

// const anyWords = ['browser', 'protocol', 'treating', 'each', 'request', 'as', 'an', 'independent', 'transaction'];

// function filterElements(arr, query) {
//     return arr.filter(function (element) {
//         return element.toLowerCase().indexOf(query.toLowerCase()) > -1
//     })
// }
// console.log(filterElements(anyWords, 'a'));
// console.log(filterElements(anyWords, 'br'));
// console.log(filterElements(anyWords, 'ind'));

// reduce ===================================================
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// // array.reduce(callback[, initialValue])

// const array1 = [1, 2, 3, 4];
// const result = array1.reduce(function (accumulator, current) {
//     return accumulator + current;
// })
// console.log(result);

// const array2 = [0, 1, 2, 3, 4];
// const result2 = array2.reduce(function (accumulator, current, index, array) {
//     console.log(`accumulator= ${accumulator}, current= ${current}, index=${index}, array= ${array}`);
//     return accumulator + current;
// })
// console.log(result2);

// Деструктуризация массивов и объектов =======================
// https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-massiva

// let arr = ['Andrey', 'Bakanovsky'];

// // деструктуризирующее присваивание:
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

// let [first, second] = "Vadim Tanya".split(' ');
// console.log(first);
// console.log(second);

// const book = ['Ruby on Rails Tutorial', 'by', 'Michael Hartl']
// let [title, , author1] = book
// console.log(author1);

// let author = {};
// [author.name, author.surname] = "Michael Hartl".split(' ');
// console.log(author);
// ...
// ----------------------------------------------
// https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-obekta

// let person = {
//     firstName : "Vadim",
//     age : 32,
//     height : 190,
//     weight : 90
// }
// // let {firstName, age, height, weight} = person;
// // console.log(firstName);
// // console.log(age);
// //---
// // let {firstName :fn, age: aG, height, weight} = person;
// // console.log(aG);// +)
// // /--
// // let {firstName} = person;
// // console.log(firstName);

// // ---
// let {firstName, ...rest} = person;
// console.log(firstName);
// console.log(rest.age);
// console.log(rest.height);
