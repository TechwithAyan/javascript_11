//Singleton objects , declared with help of constructor
const tinderUser = new Object() //Its alternate method is tinderUser={}
tinderUser.Id="112233",
tinderUser.name="Ayan",
tinderUser.isLoggedIn=false
console.log(tinderUser); 

const regularUser = {
    email:"regular@gmail.com",
    name:{
        fullName : {
            firstName : "Viper",
            lastName : "Rj"
        }
    }
}
console.log(regularUser.name);
console.log(regularUser.name.fullName);
console.log(regularUser.name.fullName.lastName);

//Combining 2 objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

//Or we can concatenate using spread operator ...
//const obj4 = {...obj1,...obj2,...obj3}

//Array of objects
const users = [
    {
        Name:"Ayan"
    },
    {
        email: "ayan@example.com" 
    },
    {
        Id:"7717"
    },
    {
        Role:"SDE"
    }
]
const userEmail = users[1].email //users[1] is treated as an object hence we can add dot after it to access its properties
console.log(userEmail);

console.log(Object.keys(tinderUser)); //Returns an array dataType
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //Key:value pairs are given in array format

//To check if a property exists inside an object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Returns a boolean expression

//Object Destructuring
const car = {
    carName: "G-Class",
    price:"5 crore",
    carOwner:"Viper"
}

//To access objects
//car.carName            //We've a better method given below
const {carName : CN} = car //const {key name : our own name given} = from which object we've to extract ie here 'car'
console.log(CN);

