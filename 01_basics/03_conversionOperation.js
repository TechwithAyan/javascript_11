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

 //************************** Operations **************************
 let value=3
 let negValue = -value
 console.log(negValue)
 
 let str1 = "hello"
 let str2 = "hitesh"

 let str3 = str1 + str2
 console.log(str3)

 console.log("1" + 2)
 console.log(1 + "2")
 console.log("1" + 2 + 2) //By above logic it should be 14 ie 2+2=4 and 1 concatenated with 4 gives 14 , but it gives  output as 122
 console.log(1 + 2 + "2") //By the above logic it should be 122 , but it gives output as 32 , 1+2=3 and 3 concatenated with 2 gives 32 , precedence  role

console.log(+true)   //This gives output as 1
console.log(+"")   //Empty parenthesis gives 0


