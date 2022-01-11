// https://www.youtube.com/watch?v=L3g0kje6Q8M

let userName = 'Alex';
//  let userName = 'Oleg';// Uncaught SyntaxError: redeclaration of let userName
userName = 'Andrey';

const userLastName = 'Trifany';
// userLastName = 'Robocop'; // Uncaught TypeError: invalid assignment to const 'userLastName'

const univer = {
    "социология" : 5,
    "этика" : 4,
    "философия" : 2
}

univer['физика'] = 5; 
univer.химия = 5;   
 
console.log(univer);

const univerResult = [3,4,5];
// univerResult = [3,3,3]; // Uncaught TypeError: invalid assignment to const 'univerResult'
univerResult[0] = 4;
console.log(univerResult);
// -----------------------------------------------------------------------------------------------

// Import, Export ====================================================================================

import otmazka1 from "./otmazka.js";
import otmazk from "./otmazka.js"; // !!


console.log(otmazka1('физика'));
console.log(otmazk('труд '));   // !!

import { checkLS, showMessage } from "./cookies.js"; 
if (!checkLS()) console.log(showMessage('problem'));

//  Arrow function ==================================================================================
 
function foo(){
    
}

// document.querySelector('.out-2').onclick = function() {
//     console.log('show click');
// }
document.querySelector('.out-2').onclick = () => console.log('show click');

const arrow1 = () => 5;
console.log(arrow1());

const arrow2 = b => b*5;
console.log(arrow2(4));

const arrow3 = (b,c) => b*c;
console.log(arrow2(4,5));

// Spread, rest ==================================================================================

const normalWork = ["engineer","teacher","student"];
const work = [...normalWork, "driver", "pilot", "cook"];
console.log(work);

const worker = {
    "name" : "Alex",
    "job" : "techer"
}

const wokerSecond = {
    ...worker,
    "position" : "boss"
} 
console.log(wokerSecond);

//rest 
const num = (...args) => {
    console.log(args);
}
console.log(num(1,2));  

const num2 = (...args) => args;
console.log(num2(1,2));

// Destruction  =====================================================================================

const arr = [33, 44, 55, 66, 77]
const [d1, ,d2] = arr; 
console.log(d1,d2);

const{name, position} = wokerSecond;
console.log(name, position);

// map, filter















