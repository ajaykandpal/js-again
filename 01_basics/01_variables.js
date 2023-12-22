const accountId = 121212
let accountEmail = "123@gmail.com"
var accountPassword = "asdfghj" // not used now, due to issue in block and functional scope
accountCity = "Haldwani" //still works, but not prefered
// accountId=2 , cant do this
let accountState;

console.table([accountId,accountEmail, accountPassword, accountCity, accountState]);