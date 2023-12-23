//no need of  discussing primitive
//problem arises when comparing diff data type
// console.log("2"==2); //here true
// console.log("2"===2); //here false

// console.log("2" > 1);
// console.log("02" > 1); //both true

console.log(null > 0); //F
console.log(null == 0); //F
console.log(null >= 0); //T, why?? comparison checks convert null to number(0), equality check does not

// console.log(undefined > 0); all false for undefined
//remeber, comparison and equality check works differently. Also == and === works differently
//=== -> strict check, checks data type too, no type conversion