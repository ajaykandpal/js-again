//primitive and non-primitive(reference) (kinda like call by val, call by ref).
// diff on basis of how stored and accessed in memory
//js is dynamically typed language This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
//primitive: 7:-call by value:-string, num(remember, float is not diff here), bool, null, undefined, Symbol (to make components unique), bigint
//reference:- non-primitive:- Arrays, Objects, Functions
// Note: type of null, Symbol will be object

//Symbol test
const id= Symbol('123')
const id2= Symbol('123') //even though same value passed, but diff actual value
console.log(id === id2) //false

// for bigint, end number by 'n'

//type of all non-primitive is object (function->function object)

