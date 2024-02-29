// for loop
// break, continue
//while, do while

// ++++++++++ Array loops +++++++++++
// ["", "", "", ""]; [{}, {}, {}, {}]

const arr = [0,1,2,3]

//for of loop
// for (const num of arr) {
//     console.log(num);
// }

const greet = "Hi, I'm Ajay!"
for (const char of greet) {    
    if(char ===' ') continue 
    // console.log(`${char} founded`);
}

//forof for Map is slightly interesting. Also forin wont work on maps (wont give error though, simply wont print anything as map is not iterable)
// Maps Data Type in JS: its an obj holding key-value pairs. Unique values. remembers insertion order of keys (remember, objects dont remember order of insertion)
const map = new Map()
map.set("in", "india")
map.set("us", "united states of america")
map.set("jp", "japan")
// console.log(map);
for (const key of map) {
    console.log(key); //will  print  arrays holding [key, value]; like this , [ 'in', 'india' ]
}
// can destructure here only
for (const [key, value] of map) {
    // console.log(key, ":-> ", value);
}

//forof in object: would not work. Object not iterable using forof. see next file. forin works here
//though we have a workaround using Object.entries(obj)

