// https://www.youtube.com/watch?v=maPRR_jjyOE

// Сhoice of DOM element ===========================================

// выбор одного элемента по селектору
// document.querySelector('selector')

// const header = document.querySelector('h2')
// console.log(header);

// document.querySelector('h2').classList.add('red');

// const heading2 = document.querySelector('h2');
// heading2.classList.add('red');

// const heading3 = document.querySelector('h3');
// heading3.classList.add('green');

// document.querySelector('.heading-3').classList.add('blue');

// Выбор коллекции всех элементов ---------------------------------
// const headings = document.querySelectorAll('h2');

// console.log(headings);

// for (let heading of headings){
//     heading.classList.add('red-text')
// }

// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
// for (let item of paragraphs){
//     item.classList.add('green-text')
// }

// Так же есть:
// document.getElementsByClassName('link'); // выбор коллекции элементов по CSS классу
// document.getElementsByTagName('h1'); // выбор коллекции элементов по Тегу
// document.getElementById();
//----------------------------

// const headImportant = document.getElementById('heading-important');
// headImportant.classList.add('orange');
// headImportant.classList.add('blue-text');
//----------------

// Работа с CSS классами =======================================================================

/*
.add() - добавляет класс CSS
.remove() - удаляет класс
.toogle() - переключает класс
.contains() - возвращает true/false в зависимости есть такой класс
*/

// const heading = document.querySelector('h2')
// console.log(heading);
// heading.classList.add('red-text');
// heading.classList.remove('red-text');
// heading.classList.toggle('red-text');
// if (heading.classList.contains('red-text')) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// heading.classList.toggle('green-text');
// heading.classList.toggle('green');

// const res = heading.classList.toggle('green-text');
// console.log(res);

// Работа с атрибутами ==================================================================

// const headImportant = document.getElementById('heading-important');

// headImportant.getAttribute();
// headImportant.setAttribute();
// headImportant.removeAttribute();
// headImportant.hasAttribute();
// headImportant.toggleAttribute();
// headImportant.hasAttributes();
// headImportant.getAttributeNames();

// const img = document.getElementById('logo');
// // console.log(img.hasAttributes);
// const imgValue = img.getAttribute('src');
// console.log(imgValue); 

// img.setAttribute('src','./img/php.png');
// img.setAttribute('width', '200');
// img.src = './img/js.png'
// // -----------
// const button = document.querySelector('#button'); // !!! querySelector
// button.value = 'Send';                   // !  
// button.setAttribute('value', 'Receive'); // !

// Прослушка событий ===============================================================


// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = "Delete image";
// button.addEventListener('click', function() {
//     console.log('click!');
//     img.remove();
// })
// ---------------------------

// если по клику только одно действие:
// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = "Delete image";

// button.onclick = function () {
//     console.log('click!');
//     img.remove();
// }

//----------------------------- 

// если по клику планируем много действий
// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = "Delete image";

// button.addEventListener('click', function() {
//     console.log('click 1!');
// })

// button.addEventListener('click', function() {
//     console.log('click 2!');
// })

// button.addEventListener('click', function() {
//     console.log('click 3!');
// })
// ---------------------------------------------

// если по клику только одно действие, последующие действия перезапишут предыдущее:
// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = "Delete image";

// button.onclick = function () {
//     console.log('click 1');
// }

// button.onclick = function () {
//     console.log('click 2');
// }

// button.onclick = function () {
//     console.log('click 3');
// }

// Прослушка событий 2 =================================================================

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', function(){
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// })
// -----------------------------------------------------------

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', inputHandler); // внимание: здесь без скобок !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// // передаем как анаонимную функцию

// function inputHandler(){
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// }


// Прослушка событий. Объект event =====================================================

// const list = document.querySelector('#list');
// list.addEventListener('click', function (event) {
//     console.log(this); // this - ссылается на тот элекмент который мы слушаем
//     console.log(event.target);
// })


// Работа с элементами =================================================================

// document.createElement('tag-name');
// element.innerHTML = ''; - Изменить HTML содержимое внутри другого элемента
// node.innerText = ''; - Изменить текстовое содержимое внутри элемента 
// node.cloneNode() - клонипрование элемента: true - c внутренним содержимым: текст и теги,
//                                            false - без внутреннего содержимого 
// element.append(nodesOrDOMStrings) - вставить элемент внутрь другого элемента
// element.remove(); - удалить элемент
//-----------------------------------------------------------------

// // выбор контэйнера
// const container = document.querySelector('#elementsContainer');

// //создание элемента
// const newHeader = document.createElement('h1');
// newHeader.innerText = "Elements creating"
// container.append(newHeader);

// // копирование шапки
// const mainHeader = document.querySelector('header'); 
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// ----------------------------------------------------------

//вставка разметка через строки ---------------------------

// const container = document.querySelector('#elementsContainer');
// const newHeader = document.createElement('h1');
// newHeader.innerText = "Новый элемент"
// container.append(newHeader);

// const htmlExample =  '<h2> Еще один элемент </h2>'
// container.insertAdjacentHTML('beforeend', htmlExample);

// const text =  ' Третий элемент'

// container.insertAdjacentText('beforeend', text);

// ----------------------------------------------------------

// Вставка разметки через шаблонные строки -----------------------------------
// const container = document.querySelector('#elementsContainer');
// const newHeader = document.createElement('h1');
// newHeader.innerText = "Новый элемент"
// container.append(newHeader);

// const title =  'Текст заголовка';
// const htmlExample = `<h3>${title}</h3>`;
// container.insertAdjacentHTML('beforeend',htmlExample);

// ToDo список задач ===================================================================

// Находим элементы с которыми мы будем работать
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');
// const todoList = document.querySelector('#todo-list');

// todoForm.addEventListener('submit', formHandler)

// создаем через тег li -------------------------------------------
// function formHandler(event) {
//     event.preventDefault();
//     if (todoInput.value != '') {
//         const taskText = `<li>${todoInput.value}</li>`;
//         todoList.insertAdjacentHTML('beforeend', taskText);
//         todoInput.value = '';
//         todoInput.focus();
//     }
// }

// создаем через Тег ----------------------------------------

// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');
// const todoList = document.querySelector('#todo-list');

// todoForm.addEventListener('submit', formHandler)

// function formHandler(event) {
//     event.preventDefault();
//     if (todoInput.value != '') {
//         const newTask = document.createElement('li');
//         newTask.innerText = todoInput.value;
//         //  плюс заключается в том что мы можем сразу определить событие для 
//         //каждого элемента, например кнопку "удалить задачу":
//         const deleteButton = document.createElement('button');
//         deleteButton.setAttribute('role', 'button');
//         deleteButton.innerText = 'Удалить';
//         deleteButton.style['margin-left'] = '15px';
//         newTask.append(deleteButton);

//         deleteButton.addEventListener('click', function () {
//             this.closest('li').remove();
//         });
//         // вариант со стрелочной функцией
//         // // deleteButton.addEventListener('click', (event) => event.target.closest('li').remove());
//         todoList.append(newTask);
//         todoInput.value = '';
//         todoInput.focus();
//     }

// }
//-----------------------------------------------------------------------


// setInterval ======================================================================================


// const timerIntervalID =  setInterval(function(){
//     console.log('Yes!')
// }, 1000);

// // clearInterval(timerIntervalID);

// setTimeOut ======================================================================================

// const timetID = setTimeout(function() {
//     console.log('setTimeout.Yes!')
// }, 2000 );

//  clearInterval(timetID);

// -----------------setInterval + setTimeOut -------------------------------------------------

// const timerID = setInterval(function(){
//     console.log('setInterval start!');
// }, 1000); 

// setTimeout(function(){
//     clearInterval(timerID);
// },10000)


// Секундомер ================================================================================

// const counterElement = document.querySelector('#counter');
// const startButton = document.querySelector('#start');
// const pauseButton = document.querySelector('#pause');
// const resetButton = document.querySelector('#reset');

// let counter = 0;
// let timerIntervalID;

// startButton.addEventListener('click', startTimer);// можно было startButton.onClick = ...
// pauseButton.addEventListener('click', pauseTimer);
// resetButton.onclick = function () {
//     clearInterval(timerIntervalID);
//     counterElement.innerText = 0;
//     counter = 0;
//     console.log('resetButton');
// }
// function startTimer() {
//     timerIntervalID = setInterval(function () {
//         counter++;
//         counterElement.innerText = counter;
//         console.log('startButton');

//     }, 1000);
// }
// function pauseTimer() {
//     clearInterval(timerIntervalID);
//     console.log('pauseButton');
// }

// Асинхронность javascript ====================================================================

// Callback. Callback hell

// console.log('Start');

// setTimeout(function () {
//     console.log('Print in 2s')
// }, 2000);

// console.log('Finish');
//-------------------------------------------------

// setTimeout(function () {
//     console.log('Step 1')
// }, 2000);

// setTimeout(function () {
//     console.log('Step 2')
// }, 1500);

// setTimeout(function () {
//     console.log('Step 3')
// }, 1000);

//-------------------------------------------------

// setTimeout(function () {
//     console.log('Step 1');
//     setTimeout(function () {
//         console.log('Step 2');
//         setTimeout(function () {
//             console.log('Step 3')
//         }, 1000);
//     }, 1500);
// }, 2000);
//------------------------------------------------

//  1. Проверяем номера в отеле
//  2. Проверяем билеты на самолет


// function checkRooms() {
//     console.log('Проверяем номера в отеле ....')
//     setTimeout(function () {
//         const availableRooms = false;
//         if (availableRooms) {
//             console.log('Номера есть!');
//             console.log('Едем в отпуск! :)');
//         } else {
//             console.log('Номеров нет.');
//             console.log('Отпуск отменяется :(');
//         };
//     }, 4000);

// }
// checkRooms(); 
// ------------------------------------------------------

// function checkRooms() {
//     console.log('Проверяем номера в отеле ...')
//     setTimeout(function () {
//         const availableRooms = true;
//         if (availableRooms) {
//             let message = 'Номера есть!'
//             submitVocation(message);
//         } else {
//             let message = 'Номеров нет.'
//             cancelVocation(message);
//         }
//     }, 3000);
// }
// checkRooms();

// function cancelVocation(message) {
//     console.log('---- cancelVocation ----');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Отпуск отменяется :(');
// }

// function submitVocation(message) {
//     console.log('---- submitVocation ----');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Едем в отпуск :)');
// }

// -------------------------------------------------------

// function checkRooms(success, failed) {
//     console.log('Проверяем номера в отеле ...')
//     setTimeout(function () {
//         const availableRooms = false;
//         if (availableRooms) {
//             let message = 'Номера есть!'
//             success(message); 
//         } else {
//             let message = 'Номеров нет.'
//             failed(message);
//         }
//     }, 3000);
// }

// function checkTickets(message, success, failed) {
//     console.log('Проверяем авиабилеты ...')
//     setTimeout(function () {
//         console.log('---- checkTickets ----');
//         console.log('Ответ на предыдущем шаге:', message);
//         const availableTickets = true;

//         if (availableTickets) {
//             let message = 'Билеты есть';
//             success(message);
//         } else {
//             let message = 'Билетов нет.'
//             failed(message);
//         }

//     }, 1000);
// }


// checkRooms(// 5:22
//     function (messageFromCheckRooms) {
//         checkTickets(
//             messageFromCheckRooms,
//             function(messageFromCheckTickets){
//                 submitVocation(messageFromCheckTickets) 
//             }, 
//             function(messageFromCheckTickets) {
//                 cancelVocation(messageFromCheckTickets)
//             })
//     },
//     function (messageFromCheckRooms) {
//         cancelVocation(messageFromCheckRooms)
//     }
// ); // это можно упростить 5:32

// function cancelVocation(message) {
//     console.log('---- cancelVocation ----');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Отпуск отменяется :(');
// }

// function submitVocation(message) {
//     console.log('---- submitVocation ----');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Едем в отпуск :)');
// }

// ------------------------------------------------------

// Промисы, promise ===============================================================================

// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created');  
//     setTimeout(function(){
//         // -- request a server
//         const response = false;
//         if (response) {
//             resolve();
//         } else {
//             reject();
//         };
//     },1000);
// })

// myPromise.then(function(){
//     console.log('Then');
// }).catch(function(){
//     console.log('Catch')
// });
//----------------------------------------------------------

// с передачей сообщения:
// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created');  
//     setTimeout(function(){
//         // -- request a server
//         const response = false;
//         if (response) {
//             let message = 'SUCCESS'
//             resolve(message);
//         } else {
//             let message = 'FAILED'
//             reject(message);
//         };
//     },1000);
// })

// myPromise.then(function(messageResolve){
//     console.log(messageResolve);
// }).catch(function(messageReject){
//     console.log(messageReject)
// });
// -------------------------------------------------------

// особенности работы с промисами
// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created');  
//     setTimeout(function(){
//         // -- request a server
//         const response = false;
//         if (response) {
//             let message = 'SUCCESS'
//             resolve(message);
//         } else {
//             let message = 'FAILED'
//             reject(message);
//         };
//     },1000);
// }).then(function(messageResolve){ // мы таким образом можем продолжить работу с объектом
//     console.log(messageResolve);
// }).catch(function(messageReject){
//     console.log(messageReject)
// });
// ------------------------------------------------------

// const myPromise = new Promise(function(resolve, reject){
//     console.log('Promise created');  
//     setTimeout(function(){
//         // -- request a server
//         const response = true;
//         if (response) {
//             let message = 'SUCCESS';
//             resolve(message);
//         } else {
//             let message = 'FAILED';
//             reject(message);
//         };
//     },1000);
// })

// myPromise.then(function(data){
//     console.log('Then 1');
//     console.log(data);
//     return 'Data from then 1';
// }).then(function(data){                    // второй then
//     console.log('Then 2');
//     console.log(data);
// }).catch(function(data){
//     console.log('Catch');
//     console.log(data)
// });
// -----------------------------------------------------

// а что если в Then будет расположена задержка
// const myPromise = new Promise(function (resolve, reject) {
//     console.log('Promise created');
//     setTimeout(function () {
//         // -- request a server
//         const response = true;
//         if (response) {
//             let message = 'SUCCESS';
//             resolve(message);
//         } else {
//             let message = 'FAILED';
//             reject(message);
//         };
//     }, 3000);
// })

// myPromise.then(function (data) { // 5:45 
//     return new Promise(function (resolve, reject) { // нужно добавлять промисы
//         console.log('Then 1');
//         setTimeout(() => {
//             console.log(data);
//             const response = false;
//             if (response) {
//                 let message = 'Data from then 1 resolve';
//                 resolve(message);
//             } else {
//                 let message = 'Data from then 1 reject';
//                 reject(message);
//             }
//         }, 2000);
//     });
// }).then(function (data) {
//     setTimeout(function () {
//         console.log('Then 2');
//         console.log(data);
//     }, 1000);
// }).catch(function (data) {
//     console.log('Catch');
//     console.log(data)
// });
// ----------------------------------------------------

// a few exaples with promise =============================================================
// made by myself:
// const checkRooms = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Проверка номеров в отеле ...');
//         const availableRooms = true;
//         if (availableRooms) {
//             let message = 'Номера есть!'
//             resolve(message);
//         } else {
//             let message = 'Номеров нет.'
//             reject(message);
//         };
//     }, 2000);
// });

// checkRooms.then(function (data) {
//     console.log('Then');
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//         //отправляем запрос
//         setTimeout(function () {
//             console.log('Проверка билетов ...');
//             const availableTickets = false;
//             if (availableTickets) {
//                 let message = 'Билеты есть!';
//                 resolve(message);
//             } else {
//                 let message = 'Билетов нет.';
//                 reject(message);
//             };
//         }, 2000);
//     })
// }).then(function (data) {
//     console.log('Then 2');
//     console.log(data);
//     console.log('Едем в отпуск :)');
// }).catch(function (data) {
//     console.log('Catch')
//     console.log(data);
//     console.log('Отпуск отменяется :(');
// });

// тоже, только с  другой компоновкой кода: создаем отдельные функции.
// checkRooms()
//     .then(checkTickets)
//     .then(success)
//     .catch(failed);

// function checkRooms() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('Проверка номеров в отеле ...');
//             const availableRooms = true;
//             if (availableRooms) {
//                 let message = 'Номера есть!'
//                 resolve(message);
//             } else {
//                 let message = 'Номеров нет.'
//                 reject(message);
//             };
//         }, 2000);
//     });
// };

// function checkTickets(data) {
//     return new Promise(function (resolve, reject) {
//         console.log('Then');
//         console.log(data);
//         //отправляем запрос
//         setTimeout(function () {
//             console.log('Проверка билетов ...');
//             const availableTickets = true;
//             if (availableTickets) {
//                 let message = 'Билеты есть!';
//                 resolve(message);
//             } else {
//                 let message = 'Билетов нет.';
//                 reject(message);
//             };
//         }, 2000);
//     })
// };

// function success(data) {
//     console.log('Then 2');
//     console.log(data);
//     console.log('Едем в отпуск :)');
// };
// function failed(data) {
//     console.log('Catch')
//     console.log(data);
//     console.log('Отпуск отменяется :(');
// };

// Асинхронные функции. Async function. Потребление промиса

// function promiseFunction() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const result = true;
//             if (result) {
//                 resolve('DONE!');
//             } else {
//                 reject('FAIL!');
//             };
//         }, 500)
//     })
// }

// // promiseFunction().then().catch(); // вместо такого выражения мы будем использовать асинхронную функцию
// async function startPromise() {
//     try {
//         const result = await promiseFunction();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// startPromise();

// теперь опять на примере отеля:

// function checkRooms() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('Проверка номеров в отеле ...');
//             const availableRooms = false;
//             if (availableRooms) {
//                 let message = 'Номера есть!'
//                 resolve(message);
//             } else {
//                 let message = 'Номеров нет.'
//                 reject(message);
//             };
//         }, 1000);
//     });
// }

// function checkTickets(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('Ответ на предыдущем шаге:', data);
//             console.log('Проверка билетов на самолет ...')
//             // --- code with a request ---
//             const availableTickets = true;
//             if (availableTickets) {
//                 let message = 'Билеты есть!';
//                 resolve(message);
//             } else {
//                 let message = 'Билетов нет.';
//                 reject(message);
//             };
//         }, 1000);
//     })
// }


// function submitVocation(data) {
//     console.log(' ---- submitVocation ----');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Едем в отпуск! :)');
// }


// function cancelVocation(data) {
//     console.log(' ---- cancelVocation ----');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Отпуск отменяется :(');
// }

// async function checkVocation() {
//     try {
//         const roomsResult = await checkRooms();
//         //  console.log(roomsResult);
//         const ticketResult = await checkTickets(roomsResult);
//         submitVocation(ticketResult);
//     } catch (err) {
//         // console.log(err)
//         cancelVocation(err); // !!
//     }
// }

// checkVocation();

// Пример fetch  с промисами, получение данных по API ==========================================
// Получение актуальных курсов валют

// 1. Получаем данные с сервера

// const response =  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// console.log(response);// fetch возвращает промис

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(function (data) {
//         return data.json()
//     }).then(function (data) {
//         console.log(data)
//     })

// -------------------------------------------------------------------------------------
// с помощью асинхронной функции
// async function getCurrencies() {
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//     const response = await fetch(url);
//     const data = await response.json();

//     const usdRate = data.Valute.USD.Value.toFixed(2);
//     const eurRate = data.Valute.EUR.Value.toFixed(2);

//     // ищем элементы на странице
//     const usdElement = document.querySelector('#usd');
//     usdElement.innerText = usdRate;
//     const eurElement = document.querySelector('#eur');
//     eurElement.innerText = eurRate;
// }

// getCurrencies();

// async function getCurrencies() {
//     // 1. получение данных с сервера
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//     const response = await fetch(url);
//     const data = await response.json();
//     // return data; // все равно вернет промис 

//     // 2. отображение данных на странице
//     renderRates(data);
// }

// getCurrencies();

// function renderRates(data) {
//     const usdRate = data.Valute.USD.Value.toFixed(2);
//     const eurRate = data.Valute.EUR.Value.toFixed(2);
//     // ищем элементы на странице
//     const usdElement = document.querySelector('#usd');
//     usdElement.innerText = usdRate;
//     const eurElement = document.querySelector('#eur');
//     eurElement.innerText = eurRate;
// }


























