//modern ways
//to concatenate, use string interpolation (back ticks), as variables can be inserted, and methods can be used(like to uppercase)
let name="ajay"
let age=24
//console.log(`My name is ${name.toUpperCase()} and age is ${age}`);

// can also be defined using 'new String, method (would return an object). Not used generally
const name1 = new String("Ajay")
console.log(typeof name1); //object with key value pair. 0:"A", 1:"j", etc
//string has tons of methods, read them
//__proto__ to access the object
//console.log(name1.__proto__)

//length, toUpperCase() doesnt modify originial string (stack cocncept), 
//substring(s,l), slice() slice can take negatice values too
//trim() (to remove spaces and newline from start and end)
//replace() to replace a character, usulally used to substitute for URLs, no change in original string
// let url = "ajay%20kandpal"
// console.log(url.replace("%20","-"))
//.includes() -> true or false
//string to array based on some marker , say '-'
let fullName = "ajay-kandpal-ak"
console.log(fullName.split('-'));


