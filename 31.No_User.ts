//• No Users: 

//• If the list is empty, print the message we need to find some users!

//• Remove all of the usernames from your array and make sure the correct message is printed.

let userName : String[] = ['Jack' ,'William','Arthur','James'];

//Check if the list of user is not empty.
if (userName.length > 0) {

   //Loop through the array and print each user.
  for (let user of userName) {
    console.log("User:" + user);
  }

}  else {
    console.log("We need to find some users!")
}

//Remove all users from the array
let nullName :string[] = [];

//Check if the list of user is not empty after removal.
if (nullName.length > 0) {

  //Loop through the array and print each user.
 for (let user of nullName) {
   console.log("User:" + user);
 }

}  else {
   console.log("We need to find some users!")
}
