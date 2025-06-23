let myDate = new Date() //Create an instance of object 
console.log(myDate); //Ex: 2025-06-10T08:04:15.806Z

//Date is not readable convert it and make it more readable

console.log(myDate.toString()); //Ex: Tue Jun 10 2025 08:04:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Ex: Tue Jun 10 2025
console.log(myDate.toLocaleString()); //Ex: 6/10/2025, 8:04:15 AM
console.log(myDate.toJSON()) ; //Ex: 2025-06-10T08:04:15.806Z

console.log(typeof myDate) //typeof date is always an object 

myCreatedDate = new Date(2023 , 0 ,23)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
