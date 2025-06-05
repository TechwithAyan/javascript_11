let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  //33abc is converted to number but when we console.log it then it shows Not a number

//Coversion when we console.log
// "33" => 33
// "33abc" => NaN (Type of NaN is a number only)
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//Conversion when we console.log
// 1 => true ; 0=> false
// " " (empty string) => false
// "Ayan" => true

 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(stringNumber)
 console.log(typeof stringNumber)
 




