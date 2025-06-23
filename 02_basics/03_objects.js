//singleton

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

//object literals
const JsUser = {
    name : "Ayan",
    "full name":"Ayan Rj", //as its a string we cant access it by dot method we have to calll it inside square bracket [""]
    age:22,
    location:"Guwahati",
    mySym1:"mykey1",
    [mySym2]:"mykey2",  //To use it as a symbol we use square brackets
    email:"ayan@google.com", 
    isLoggedIn:false,
    lastLoginDays: ["Tuesday","Sunday"]
}
console.log(JsUser.email); //When accessing without braces we are not treating it as a string
//Or
console.log(JsUser["email"]); //Better Method , its present as a string so we use square bracket
console.log(JsUser["full name"]); //As full name is inside "" , therefore we cant access it by dpt , we need square brackets
console.log(JsUser.mySym1);  //Its not getting used as a symbol 
console.log(typeof JsUser.mySym1); //Its dataType is coming as a string so to use it as a symbol we use 
console.log(JsUser[mySym2]); //Here also we have to use it as square bracket
console.log(typeof mySym2);

/*
typeof JsUser[mySym2]
This returns the type of the value stored at the key mySym2, not the type of the key itself.

In your code:

const mySym2 = Symbol("key2");

const JsUser = {
  [mySym2]: "mykey2"   //key : value pair
};

Here,

mySym2 is a Symbol, and you're using it as a key.

The value stored at that key is the string "mykey2".
*/

JsUser.email = "ayan@microsoft.com" //We can overwrite values with equal , changed previous value ie ayan@google.com with ayan@microsoft.com
Object.freeze(JsUser) //As we freezed the object JsUser  after this if any changes are made to the objects values then it wont be updated and previous value will only be considered
JsUser.email = "ayan@yahoo.com"
console.log(JsUser);

const JsUser1={
  Name:"Stardom",
  Age:27,
  Email:"stardom@gmail.com"
}

JsUser1.greeting = function(){
    console.log("Hello")
}
console.log(JsUser1.greeting());
console.log(JsUser1.greeting); //When we use without bracket it shows [Function(anonymous)]
JsUser1.greetingTwo = function(){
  console.log(`Hello JS user,${this.Email}`); //For referring the same object JsUser1 we use this keyword , this is the mthod of string interpolation
}
console.log(JsUser1.greetingTwo());










