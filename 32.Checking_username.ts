//32• Checkiing Usernames: 

//• Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//• Make a list of five or more username called current_users.

let current_users : String[] = ["Alexander","Benjamin","Christopher","Daneil","Ethan"];

//• Make another list of five username called new_users. make sure one or two of the new user names are also in the current user list.

let new_users : String[] = ["Alexander","Benjamin","Ethan","John","James"];
 
//• Loop through the new_users list of see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used print a message saying that the username is available.

//• Make sure your comparison is case insensitive .If 'john' has been used, 'JOHN' should not be accepted.

new_users.forEach(newUsername => {

  let lowerCase : string = newUsername.toLowerCase();

  if (current_users.map(c_user => c_user.toLowerCase()).includes( lowerCase)) {

    console.log(`The username ${newUsername} is not availabe. Please write a different username.`)

  } else {

    console.log(`The username ${newUsername} is available.`)
  }

});