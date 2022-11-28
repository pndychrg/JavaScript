// Loops

/*
    While Loop : 
    Syntax : 
    while (condition) {
        //code
        //loop body
    }
    - while the condition is true, the code from the loop body is executed. 
*/
// Example
let i = 0 ;
while(i<3){
    //console.log(i);
    i++;
}

/*
    Do-While Loop :
    The condition check can be moved below the loop body using the do..while
    syntax. 
    syntax :
    do {
        // loop body
    }while (condition);
    - the loop will first execute the body, then check the condition and 
    while it's true, execute it again and again

*/
// Example
i = 0 ;
do {
    //console.log(i);
    i++;
}while(i<3);


/*

    For Loop : 
    Syntax :
    for(begin;condition;step){
        // loop body
    }

    4 Parts :
    begin - let k = 0 ; executes once upon entering the loop
    condition - k<3 ; Checked before every loop iteration, if false loop stops
    body - Runs again and again untill true
    step - executes after the body on each iteration

*/
// Example
for (let k = 0; k<3;k++){
    console.log(k);
}

//Breaking the Loop
// we can use 'break' directive to force exit the loop at anytime
//Example
let sum = 0 ;
while (true){
    sum = sum + 3;
    if (sum>13){
        break;
    }
}
console.log(sum)//15

// Continue to Next Iteration
// 'continue' directive is used to stop the current iteration and forces the loop to start a new one(if condition allows)
// Example
for(let j = 0 ; j<10;j++){
    if (j%2==0){
        continue;
    }
    console.log(j); //1,3,5,7,9
}

// Labels for break/continue
/*
 Labels for break/continue
 Sometimes we need to break out from multiple nestesd loops at once.
 The ordinary break after input would only break the inner loop. That's not sufficient

 Syntax :
 labelName:for(...){

 }
*/
//Example
let out,inn;
outer: for(out = 0;out<5;out++){
    inner: for(inn = 0;inn<5;inn++){
        console.log("innerloop" + inn);
        if(inn == 3){
            break outer; //through this we will stop the outer loop at 5
        }
    }
    console.log("outerLoop" + out);
}