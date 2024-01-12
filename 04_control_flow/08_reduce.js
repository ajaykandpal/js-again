// generally used in shopping cart

// reduce also takes a callback and an initial value (can be empty). it returns an array.
// we get accumulaor, and current value.
// have to mention initial value, if not mentioned, first element is taken as initial value,and loop starts from index 1 (2nd element)

const nums = [1,2,3,4]

// const total = nums.reduce( function (acc,crr) {
//     console.log(`acc: ${acc} and crr: ${crr}`);
//     return acc + crr
// },0)    // runs 4 times. if 0 not mentioned, then 3 times
// console.log(total);

const total = nums.reduce(  (acc,crr) => ( acc + crr ), 0 )
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item)=> acc + item.price, 0)
console.log(priceToPay);