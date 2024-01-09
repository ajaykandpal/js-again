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
    console.log(`${char} founded`);
}

// Maps Data Type in JS: its an obj holding key-value pairs. remembers insertion order ofkeys (remember, objects dont remember order of insertion)
const map = new Map()
