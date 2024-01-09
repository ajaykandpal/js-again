const myObj = {
    js: "javascript",
    cpp: "C++",
    py: "Python",
    rb: "ruby"
}
// for (const [key, val] of myObj) {
//         console.log(key, ":-> ", value); // TypeError: myObj is not iterable
// }
for (const key in myObj) {
    // console.log(key); //will give keys
    // console.log(key, ":-> ", myObj[key]);
}

// for in for array
const arr = ['c++', 'js', 'python']
for (const key in arr) {
    console.log(key); //0,1,2. as these are keys of array
    console.log(arr[key]);// would print value
}