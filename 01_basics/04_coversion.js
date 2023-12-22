//why required? in backend ,no surity data from form/frontend would be in our desired type (mostly in string/object)
let score = "33"
console.log(typeof score)

 let scoreInInt = Number(score)
 console.log(typeof scoreInInt)

 let score1 = "33abc"
console.log(typeof score)

 let scoreInInt1 = Number(score1)
 console.log(typeof scoreInInt)// type is number, but value is NaN
 console.log(scoreInInt1); //Not a number

 let score2=null
 let scoreInInt2 = Number(score2) //converted null to 0
 console.log(scoreInInt2) //0
 console.log(typeof scoreInInt2)

 /* undefined -> NaN, Bool true -> 1
    convert to boolean: 1->true,0->false, ""->false, "achjjvcb"->true
 */

