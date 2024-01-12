// is a higher order function (functions that take func as argument or returns a func).
// Also , while passing function in higher order functions, just pass reference of func, dont need to execute them.

//for-each takes a callback func
//Note:-> callback functions doesnt have a name
const lang = [ "c++", "python", "js", "java", "ruby"]

// lang.forEach(function (item){
//     console.log(item);
// })

// lang.forEach( (i)=>{
//     console.log(i);
// } )

// lang.forEach(print)

// function print(item) {
//     console.log(item);
// }

// the arguments in callback are items of the array, the index and the array itself
// lang.forEach( (item,index,arr)=> {
//     console.log(item, index, arr);
// })

//values from db are generally in array of obj form
const myCoding = [
    {
        language: "JavaScript",
        abbri: ".js"
    },
    {
        language: "Python",
        abbri: ".py"
    },
    {
        language: "C++",
        abbri: ".cpp"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.abbri);
})

// for-each doesnt return a value, even if we explicitly mention a return statement. so for that, use filter, map (next file)