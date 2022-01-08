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






















