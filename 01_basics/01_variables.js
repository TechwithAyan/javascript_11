const account_Id = 123345
let account_Email = "viper@gmail.com"
var account_Password = "Mu_Sigma135"
account_City = "Dibrugarh"

// Lets change the values 
//account_Id = 221134  //If we console.log this will give an error as account_Id is a constant
account_Email = "stardom.srmist.edu.in"
account_Password = "brazuca11"
account_City = "Delhi"

/*Prefer not to use var because of block scope and functional scope*/ 

console.table([account_Id,account_Email,account_Password,account_City])
