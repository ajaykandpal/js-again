// 2 ways to declare: as literal (multiple instancs created), or constructor (singletone) Object.create

// +++++++++++++ Literal
const mySym = Symbol("blah")
// we can add symbols as a key in an object using square brackets []
const user = {
    name: "Ajay" ,//remember by default even name (key) is processed as string, pair can be anything
    "full name": "Ajay Kandpal",
    age: 18 ,
    location: "Haldwani",
    email: "ajay@gmail.com",
    isLoggedIn: false,
    lastLogInDays : ["Monday", "Sunday"],
    [mySym]: "blahblah"
}
//to access properties, use dot operator or like array
// console.log(user.name)
// console.log(user["name"]) //prefer this one, as dot can't access properties having spaces , like "full name"; or Symbols
// console.log(user["full name"])
//  console.log(user[mySym])

//change value with = operator (if key not present, adds new property)
user.email = "blah@gmail.com" //overrides previous value
user.password = "asdf" //adds password
// console.log(user);

//freeze an object so cant be changed using Object.freeze()
// Object.freeze(user)
user.email = "asdf@gmail.com" //wont  override now
// console.log(user);

//object can contain functions too
user.greeting = function (){
    console.log(`Hello ${this["full name"]}`);
}
//diff between user.greeting() vs user.greeting
console.log(user.greeting); //this will simply return function reference, wont execute it
console.log(user.greeting()) //execute too, console will also print undefined as doesn't return anything

