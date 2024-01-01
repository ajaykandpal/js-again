const score = 100
const score1 = new Number (200)

console.log(score,score1) //100, [Number: 200]

//toFixed fixes precision value after decimal, also rounds of
let num = 10.1944886
//console.log(num.toFixed(2))//10.20

//toPrecision gives us total chars to be displayed (1-21), returns string
// console.log(num.toPrecision(2)) // 10
// console.log(100.5.toPrecision(3)) // 101
// console.log(1111.596.toPrecision(3));// 1.11e+3
let num1=1000000
let num2 = num1.toLocaleString() //toLocaleSting('en-IN') for indian system 
//console.log(num2); //insert commas, and string

//++++++++++++++++++ Maths ++++++++++++++++
//Maths by default in JS
console.log(Math.abs(-4));
console.log(Math.round(4.6)); //ceil, floor
console.log(Math.sqrt(4.6));  //pow
console.log(Math.min(2,9,3,1,5,-1)); // max
console.log(Math.random()); //0 to 1
//random umber between min and max
let min = 10, max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min);
