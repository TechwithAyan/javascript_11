//Primitive , 7 Types: String , Number , Boolean , null , undefined , symbol , BigInt
let name = "Ayan"
const value = 10
const isLoggedIn = false
const outsideTemp = null
let userEmail //If value is not defined then it is undefined dataType by default

//Both have same symbol '123' but still they ae different
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id == anotherId) //This will give output as false


//Non - Primitive(Reference Type): Arrays , Objects , Functions 
const heroes = ["Ayan","Viper","Stardom"]  //This is an array

const myObj = {  //This is an object dataType , inside which there can be any primitive dataTypes , objects are created inside curly braces
    name:"Ayan",
    age:10
}

//Function as a variable
const myFunction = function(){
    console.log("Hello World......")
}

//Return type of Non Primitive functions are object

//**********************Memory Creation in JavaScript**********************/

//Stack(used in primitive dataTypes) and Heap(used in non-primitive dataTypes) memory , in stack we get a copy whereas in heap we get reference of original value so changes are made in the original value

//Stack 
let myName = "Stardom"
let anotherName = myName

//According to our logic myName should give Stardom and anotherName should also give Stardom 
anotherName = "Viper"
console.log(myName) //This gives output as Stardom
console.log(anotherName) //This gives output as Viper 


//Heap , we use object for reference
let userOne = {
    email: "ayan@gmail.com",
    upi: "rjayan0ksbi"
}

let userTwo = userOne

userTwo.email = "Stardom@gmail.com"

//Both will give same output as Stardom@gmail.com , as object is stored in heap memory and when we change value of the email object its changes the original value of the email ie "ayan@gmail.com"
console.log(userOne.email)  
console.log(userTwo.email)