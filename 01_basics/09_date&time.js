//Date object is defined from Jan 1st 1970
//Calculated in millisecond, so complex
//type of Date would be object
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// let myDefinedDate = new Date (2023, 0, 23) //. month starts from 0 if single digit
// let myDefinedDate = new Date ("2023-01-14") //. here 01
let myDefinedDate = new Date ("01-14-2023") //. indian format
//console.log(myDefinedDate.toDateString());

// TimeStamps, used when doing poles during quizzes, or bookings
let myTimeStamp = Date.now() //time in milliseconds
// console.log(myDefinedDate.getTime()); //devide by 1000 for seconds
// console.log(myDefinedDate.getMonth()); //starts with 0
// console.log(myDefinedDate.getDay()); //starts with monday = 1

//for more customised and widely used, use .toLocaleString
console.log(myDefinedDate.toLocaleString('default', {
    weekday: "long"
}));


