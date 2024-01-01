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

//type of all non-primitive is function (though we will get object written) (function->function object)


//++++++++++++++Memory+++++++++++++++++

//Stack (Primitive), heap(non primitive)
//stack-> we get a copy of variable, changes are smade in that copy
//heap-> we get address of original variable
let name1 = "ajay" ;
let name2 = name1 //copy of name1 given
name2 = "kandpal" //no changes made in name1
console.log(name1, " " , name2)

const user1 = {
    email : "user@google.com",
    upi : "123456"
}
console.log(user1);
//obj will be in heap, user1 in stack, referneced to heap
let user2 = user1 //here reference to original objt is given. so any changes will affect user1 too
user2.email="abc@gmail.com"
console.log(user1);
