//this refers to current context. Arrow functon doesn't have 'this' like normal function. why later.

const user = {
    username: "ajay",
    price: 999,

    welcomemsg: function() {
        console.log(`Welcome to website, ${this.username}`)
    }
}
// user.welcomemsg()
// console.log(this); //  here this refers to empty obj (node). if in browser, we will get Window obj

// ++++++++++++++++++ in functions +++++++++++++++++++

// function chai () {
//     console.log(this); //we'll get biggggg object
//     let username = "asdf"
//     console.log(this.username); //undefined. Why?? this is working only with objects, bot functions?
// }

// const  chai = function () {
//     console.log(this); //we'll get biggggg object
//     let username = "asdf"
//     console.log(this.username); //undefined. Why?? this is working only with objects, bot functions?
// }

// const  chai =  () => {
//     console.log(this); // here this gives diff result, as given by global this (empty obj in case of node)
//     let username = "asdf"
//     console.log(this.username); //undefined. Why?? this is working only with objects, bot functions?
// }

// chai()

// arrow function () => {}
// can srore it in  a variable
// const sumTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(sumTwo(3,4)) //7

// +++++++++ important +++++++++ 
// if we write arrow function without curly braces, it leads to 'implicit' return. if we have one  line statement
// const sumTwo = (num1,num2) =>  num1 + num2 //still works
// console.log(sumTwo(9,4)) //13
//one more way
const sumTwo = (num1,num2) =>  (num1 + num2); // can wrap in parantheses, still implicit return here
// console.log(sumTwo(9,4)) //13
// if we use curly braces, we have to type return then.
// what if we want to implicitly return an obj? wrap it in a paranthessis. const sumTwo = (num1,num2) =>  {username: "ajay"};

// IIFE (Immediately invoked function expression)
//uses: 1. database connection. 2. to stop pollution from global scope
//syntax: wrap function in (), and invoke it using ()

(function chai() {
    //named IFFE
    console.log("DB Connected....");
})();
// to write more than one IFFE in a file, end them with ; as compiler dont know where to end context
( (name) => {
    // simple/unnamed IFFE
    console.log(`DB Connected....1 ${name}`);
})('ajay'); //passing parametrs to IFFE