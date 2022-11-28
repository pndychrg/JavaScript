// IF - ELSE 
/*
if(..)statement evaluates a condition in parentheses and, if the result is true,
executes a block of code.
It is recommended wrapping your code block with curly braces{} every time you 
use and if statement. (improves readability)


Boolean Conversion : 
0,"",null,undefined,NaN all becomes false and everything else is true.
*/

//example code; 
let accessAllowed ;
let age = 19

if (age>18){
    accessAllowed = true;
}else{
    accessAllowed = false;
}
console.log(accessAllowed)

/*
Conditional Operator ?
Syntax : let result = condition ? value1 : value2 ;
*/
//example
num = 10
let trueOrfalse = (num>10) ? true : false;
console.log(trueOrfalse)

// multiple ? 
age = 21 // run for different ages
let message = (age<3) ? 'Hi,baby' : (age<18) ? 'Hello!' : (age<100) ? 'Greetings!' : 'What and unsual age!';
console.log(message) 

//Assignment
// Rewrite If..else into ?
/*
let message;
if (login == 'Employee'){
    message = 'Hello';
}else if (login =='Director'){
    message = 'Greetings';
}else if (login == ''){
    message = 'no login';
}else {
    message = '';
}
*/
// Solution
login = "Director"
let answer = (login == 'Employee') ? "Hello" :(login == "Director") ? 'Greetings' : (login == "") ? 'no login' : "";
console.log(answer)