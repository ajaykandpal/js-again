//js array can have elements with diff data types too
//are resizable
//copy operation creates shallow copy

const arr = [1,2,3,4,5]

// ++++ Array methods
arr.push(6)
//console.log(arr);
//push, pop
// unshift enters element in front, but expensive operation as have to shit all elements. shift removes from front
arr.unshift(9)
//console.log(arr);

//.includes() -> boolean
//.indexOf() -> index, if not present -1
// .join() returns array in form of string,comma separated
const newArr = arr.join() //newArr is string
// console.log(newArr);

//slice and splice
//slice
//console.log("A", arr);
const arr1 = arr.slice(1,3) //from pos 1, till 3, 3 not included, doesn't modifies original array
// console.log(arr1)
// console.log("B", arr);

//splice
const arr2 = arr.splice(1,3) //from pos 1, till 3, 3 included. Modifies original array too
// console.log(arr2)
// console.log("C", arr);

// +++++ More Arrays +++++++
const marvel_Heroes = ["thor", "iron man", "hulk"]
const dc_Heroes = ["batman", "super man", "flash"]

// marvel_Heroes.push(dc_Heroes) // would create nested array
// console.log(marvel_Heroes);

//use concat instead of push. concat returns a new array. it won't be nested array. also doesnt modify original one
// const new_marvel = marvel_Heroes.concat(dc_Heroes)
// console.log(marvel_Heroes);
// console.log(new_marvel);

//can also use spread operator
const all_heroes = [...marvel_Heroes, ...dc_Heroes]
// console.log(all_heroes);

//flat, to flatten the nested array
const another_Arr = [1, 2, 3, [4,5,6], 7, [6,7,[4,5]]]
const usable_arr = another_Arr.flat(2) //can use Infinity if dnt know depth of concatenation
// console.log(usable_arr);

//convert string/obj/json to array. use Array.from()
// console.log(Array.isArray("Ajay")); //false, as string
const string1 = Array.from("Ajay")
// console.log(string1);

const object1 =  Array.from({name: "Ajay"})
// console.log(object1); // interesting. empty array. why? cuz confused keys uthani h ya value? Use object.keys() method

//Array.of()
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

