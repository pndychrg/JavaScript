/*
    Math Operations ALlowed :
    1. Addition + 
    2. Subtraction - 
    3. Multiplication * 
    4. Division /
    5. Remainder % 
    6. Exponentiation **

*/

// Some Examples :
console.log(5%2)
console.log(2**3)
console.log(2**(1/2)) //square root of 2

// String Concatenation with binary + 
let str = "My" +"String"
console.log(str)

// It doesn't matter whether the first operand is string or second
console.log(2+2+"1") // 2+2 = 4 so output 41

// Numeric Conversion unary + 
let x = 1;
console.log(+1) // no effect on numbers

// converts non number
console.log(+true) //1

let apples = "2";
let oranges = "3";
console.log(apples+oranges) // 23
//but
console.log(+apples+ +oranges) //5

// Modify in Place
let n = 2;
n +=5 ; // n = 7 
n *=2 ;  // n = 14 

// increment decrement
let num = 2 ; 
num ++;
console.log(num) // output - 3
let a = ++num // a=2
let b = num++ // b = 1