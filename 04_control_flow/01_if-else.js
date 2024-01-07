// if-else
// <, >, <=, >=, ==, !=, ===, !==
// Logical operators: &&, ||
// can write one line without curly braces.
//can also write multiple lines without braces, separated by commas, nut not prefered

//switch ->, if no matches, then execute default.
// If no break, then all code below matching case gets executed, including default.
// Also strict checking while matching cases, no type conversion in here.

// ++++++++++ falsy values :-> 
// false, 0, -0, 0n, "" (empty string), null, undefined, NaN ( Note: Comparing them with == will result in true)

// Everything else is truthy value. Even empty array/object, "0", 'false', " ", function(){ }

// to check whether an object is empty, Object.keys(obj).length === 0s

// +++++++++++ Nullish Coalescing Operator (??) +++++++++++++ // safety checks null
// focus on null and undefined here
// used in getting values from databses, where we usually get 2 values, either null or desired one
let val1
val1 = 5 ?? 10
console.log(val1); //5
val1 = null ?? 10
console.log(val1); //10
// same in case of undefined
val1 = undefined ?? 10
console.log(val1); //10
//it chooses first not null value
val1 = null ?? 30 ?? 15 ?? 20
console.log(val1); //30

// ++++++++++++++ Ternary operator +++++++++++
// condition ? true : false
