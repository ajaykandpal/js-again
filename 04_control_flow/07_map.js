// map also takes a callback. it returns an array.

const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.map( (num)  => num + 10 )
// console.log(newNums);

//can do same thing with for-each too

// +++++++++++ chaining ++++++++++++

const newNums = nums
                .map( (num)  => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) =>  num > 25 )

console.log(newNums);