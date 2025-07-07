//Function definition
function addTwoNumbers(num1,num2){
    return(num1 + num2)
}
const result = addTwoNumbers(11,4)  //addTwoNumbers is the function reference and parenthesis is the execution
console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username.");
        return //After return it wont check for the else part
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ayan"));

function calculateCartPrice(...num1){   // Here ... works as rest operator to include rest of the countless items added to cart 
    return num1
}
console.log(calculateCartPrice(20,40,50)); //But only 1st number ie 20 gets printed when rest operator is not used , and when used we get an array representation 

/*
function calculateCartPrice(val_1,val_2,...num1){  
    return num1
}
console.log(calculateCartPrice(20,40,50,70,80)); //This gives output as [50,70,80] as val_1 takes 20 and val_2 takes 40
*/
//Function with objects
const user = {
    Username:"Ayan",
    price:"999" //When price becomes prices , then when we will call handleObject(user) then the sentence will give "Username is Ayan and price is undefined"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} and price is ${anyObject.price}.`);
}
handleObject(user) //Inside the handleObject function we pass on the function whoose values we want to pass

//Or we can also pass objects inside the function like
/*
handleObject({
    username:"Viper",
    price:100000
}) 
*/

//Function with arrays
const newArray = [200,300,400,500]

//getArray is the generic name we give to call any array as argument
function returnSecondValue(getArray){ 
    return getArray[1]
}
console.log(returnSecondValue(newArray));

/*
We can also pass the array as an array and not as variable newArray 

console.log(returnSecondValue([200,400,500,1000]))
This will also give the same output
*/



