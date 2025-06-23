//An array in JavaScript is a special type of object used to store multiple values in a single variable.
const myArr  = [1,4,6,8,22,0]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2])

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr)

myArr.unshift(9)  // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr)

const myArr3 = new Array(3,5,7,9,0)  //Output is [5,7,9,0] 


myArr3.shift()
console.log(myArr3)

console.log(myArr3.includes(9));  //Returns boolean dataType , here true

console.log(myArr3.indexOf(9)); //It gives 2 as index of 9 because when we shift myArr3 position of 9 changes and comes 1 step forward thus we search index of 9 after shift operation so it returns the index of 9 from the modified array


const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr); //typeof newArr is a string dataType

//Important topics slice and splice
 
//Slice
const viper = [1,2,3,4,5,6,7,8,9,0] //Original Array
console.log("A",viper)

const myn1 = viper.slice(1,4) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array
console.log(myn1)

console.log("B",viper) //After using slice original array remains same 
const myn2 = viper.splice(1,4) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

console.log("C", viper) //here after using splice original array changes
console.log(myn2)

//Difference betweeen slice and splice is that in slice last index element is not included whereas in splice its included and original array changes when we use splice
