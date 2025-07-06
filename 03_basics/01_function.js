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
