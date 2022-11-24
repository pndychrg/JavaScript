/*
There are 6 basic data types in JS 
1. Number - represents both integer and floating point numbers
            Operations : multiplication * , division / , addition + , subtraction -
            3 Special Numeric values - Infinity, -Infinity, NaN
            (bigINT available Read if neccesary)
2. String - surrounded by "",'',``
            ''."" are normal strings
            `` are special and we can embed variables and expressions in them by ${}

3. Boolean - true,false

4. Null value - defines not assigning any value to variable

5. undefined - defines value is not assigned
               if any variable is printed or called upon before assigning
               value then it gives undefined

6. Object - will define later

7. typeof - returns the type of operand.
*/

// backtick `` example
let name = "John";
console.log(`hello, ${name}`);

// boolean
let isGreater = 4>1;
console.log(isGreater);

// undefined example
let age;
console.log(age);

//typeof

console.log(typeof isGreater);