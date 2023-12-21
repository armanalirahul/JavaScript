const accountId = 998746
let accountEmail = "arman@gmail.com"
var accountPassword = "1234" 
accountCity = "Ghaziabad" //we can use without keywords but not prefer
let accountState; //semicolon is optional

//accountId = 2 not allowed
 
//we can change value 

accountEmail = "rahul@gmail.com"
accountPassword = 4564
accountCity = "noida"

console.log(accountId, accountEmail);

console.table([accountEmail, accountPassword, accountId, accountCity, accountState]) //in table form

/*

prefer not to use var 
because of issue in block scope and functional scope

*/