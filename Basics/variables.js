//we can define variables through let and var 
/* 
var - old one {has no block snope, can be redeclared (let can't)}
RUles - must only contain letters, digit or symbols ( $,_)
        First character must not be a digit

const - To declare a constant (unchanging variable)
 */

let message = "hello";
console.log(message);

// you can define any variable without a keyword by directly writing name
// but if you use strict representation then It would show error.

name = "Chirag";
console.log(name);

// Const Keyword
const myBirthday = "5 Feb 2003";
console.log(myBirthday);
//myBirthday = "10 October 2003" // error, can't reassign