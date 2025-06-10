const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1)) //This method is used in e-commerce websites

const otherNumber = 23.99861
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))  //By default it is in US standard

//****************Maths******************/

//Return type of Maths is an object
console.log(Math)
console.log(Math.abs(-4))  //abs gives the absolute value 
console.log(Math.round(4.6))  //rounds off to nearest value
console.log(Math.ceil(4.3))   //ceil gives ceiling value ie upper limit of the number
console.log(Math.floor(4.9))   //floor gives floor value ie lower limit of the number
console.log(Math.min(4 , 3 , 21 , 100 , 1 , 5))
console.log(Math.max(4 , 3 , 21 , 100 , 1 , 5))

//Generating random value 
console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random))