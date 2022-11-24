/*
String Conversion: call : String(value)

Numeric Conversion: call Number or do any numeric operations on numeric strings
                    if string is not a valid number it returns NaN
                    Value       Becomes
                    undefined	NaN
                    null	0
                    true and false	1 and 0
                    string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 
                    If the remaining string is empty, the result is 0. Otherwise, the number is 
                    “read” from the string. An error gives NaN

Boolean Conversion: call Boolean(value)
    The conversion rule:
    Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
    Other values become true.

*/

//String Value
let value = true;
console.log(typeof value); //boolean
value = String(value);
console.log(typeof value); //string

//Numeric Conversion
let str = "123"
console.log(typeof str) //string
str = Number(str)
console.log(typeof str) //number
//direct conversion
console.log("6"/"2")
