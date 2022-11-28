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


/*
Logical Operators :
 || (OR) - Logical Or
    Or finds the first truthy value 
    result = value1 || value2 || value3 ;
    
    OR || Operator does the following :
    - Evaluates operands from left to right
    - For each operand, converts it to boolean, if the result is true,
    stops and returns the original value of that operand
    - If all operands have been evaluated (i.e. all were false) returns the last operand


   && (And) - Logical And does the following :
  - Evaluates operands from left to right.
  - For each operand, converts it to a boolean, if the result if false, 
  stops and returns the original value of that operand. 
  - If all operands have been evaluated (i.e all were truthy) returns the last operand

  ! (NOT) Operator
  - It accepts a single argument and does the following : 
  1. Converts the operand to boolean type : true/false
  2. Returns the inverse value

*/

//example of short-circuit evaluation of OR in JS
true || console.log("not printed"); // here js doesn't even read beyond true
false || console.log("printed")

//example of returning values of AND in JS
console.log(1 && 2 && 3); //3, the last one true is returned 

//example of not operator 
console.log( !true ); //false
console.log( !0) ; // true

/*
Nullish Coalescing Operator ??
undefined - null and undefined are taken under this category
defined - anything else
The Result of a??b is :
- if a is defined, then a
- if a isn't defined, then b
In other words, ?? returns the first argument if it's not null/undefined
otherwise, the second one. 

*/
// example of ??
let user ; 
console.log(user); //undefined
console.log(user??"Anonymous"); // Anonymous
