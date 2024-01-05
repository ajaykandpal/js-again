// ++++++++++++++++ Singleton/Constructor
const newUser = new Object() //empty obj
newUser.id = "1234"
newUser.name = "Sam"
newUser.isLoggedIn = false

//obj can contain nested obj. Use "dot"notation to access. Use "?." for optional chaining.
//Optional chaining used when getting response from an API. Used as alternative to if-else

const anotherUser = {
    email : "assfg@gmail.com",
    name: {
        fullnamme: {
            firstName: "Ajay",
            lastName: "Kandpal"
        }
    }
}
//combining obj

const obj1 = { 1: "a", 2:"b" }
const obj2 = { 3: "c", 4:"d" }

const obj3 = { obj1, obj2 } //array wali problem, obj ke andur obj
// console.log(obj3); 

//Object.assign(target, source). Not used much though
const obj4 = Object.assign( obj1, obj2 ) 
//console.log(obj4);
// console.log(obj4 === obj1); //true, as obj1 was target. It modified obj1
//to prevent modifying obj1, use one more syntax, Object.assign( {}, obj1, obj2). It guarantees all will combine in one new empty obj
//what if obj1 and obj2 have same keys with diff values? It will take only the later assigned value. Remember keys are unique, can't have 2 keys with same name

// we use spread operator instead
const obj5 = { ...obj1, ...obj2 }
// console.log(obj5);

//when values comes from databases, we get array of objects. use .map to loop through, or square backets to access a particular entry

// Object.keys(),  Object.values(),  Object.entries()
// console.log(Object.keys(newUser)); //gives array of keys in obj
// console.log(Object.values(newUser)); //gives array of values in obj
// console.log(Object.entries(newUser)); //gives array of arrays containing key value pair in obj

//check whether obj has certain property or not, otherwise can crash
// console.log(newUser.hasOwnProperty('isLoggedIn')); //true


//destructuring
const course = {
    courseName: "JS",
    price: 999,
    teacher: "hitesh"
}
// console.log(course.courseName) //but baar baar course. likhme ke bajae use destructuring 
//syntax const {properties} = obj
const {courseName, teacher} = course
console.log(courseName,teacher);
//can also give alternate name if too long
const {courseName: sub} = course
console.log(sub);

//in react, while using props, instead of props.company, we prefer using destructuring
// const navbar = ({company}) => {

// }
// navbar(company = "google")

// APIs. used to talk with other programs. we get some values
//earlier the values were in XML format, very complicated. Now in JSON format. It's like an obj
//JSON 
// {
//     "name": "hitesh",
//     "coursename": "js",
//     "price": "free" 

// }
// https://api.github.com/users/hiteshchoudhary
//JSON doesnt have name, though can store in some variables. Also key here is a string. Convert JSON in obj and work with it

//sometimes we get API response in form of Array of objects too [{},{},{}]
// use JSON formatter to understand API response better
