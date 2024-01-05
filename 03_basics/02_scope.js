let a = 5
const b = 10
var c = 15  
// console.log(a,b,c); 
// var doesnt have block scope, so need let and const.
// var is  hoisted at top of function, wont cause reference error.
//let and const are also hoisted, but diff type of hoisting  (changes behaviour of program)
// {
//     console.log(a); // causes Reference error as below a is hoisted
//     let a = 9
// }

// remember, global scope in node and windows(browser console) is different

//also remember, function declared as expression and arrow function can't be used before they are declared (hoisting)
