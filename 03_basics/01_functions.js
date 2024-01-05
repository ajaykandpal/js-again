function nameOfFunction() {
    console.log("Function");
}

// console.log(nameOfFunction) //this is function reference. To execute, apply parantheses
// console.log(nameOfFunction())
function sum(num1,num2){
    console.log( num1 + num2  )
}
//  sum() //NaN
// sum(2,5) //7
// sum("six",7) //six7
// sum(5,"six") //5six
//if (5,6,"six"), -> 11six. if ("five",5,6) -> five56

function message (user = "sam") { //default value if something not pased
    return `${user} logged in`
}
// console.log(message()); //undefined logged in if no default value

// function to take indefinite number of arguments. Used in shopping carts to add values. we dont know how many items customer will add
function calculateCartPrice(...items) { //use rest operator. same as spread, just depends on use case. items will be an array of args
    return items
}
// console.log(calculateCartPrice(1,5,10,10,20,17));

function another(val1,val2, ...rest){
    return rest
}
// console.log(another(1,2)); //empty array
// console.log(another(1,2,3,4,5)); // [3,4,5]


// passing obj in func
const user = {
    username : "ajay",
    price: 99
}

function handleObj(anyobj) {
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}
// handleObj(user)
//what if we change a key in user? how to propogate changes to every other func using it? that's why typescript is prefered. can use if, else too
handleObj({
    username: "sam",
    price: "free"
 })