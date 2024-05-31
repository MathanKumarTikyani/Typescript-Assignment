//30• Hello Admin:

//• Make a array of five or more usernames, including the name 'admin'. Imagine yor are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

const userName : string[] = ['Admin','Jack','William','Tweety'];

//• If the username is 'Admin', print a special greeting, such as Hello 'Admin', would you like to see a status report.

for (let i=0; i<userName.length; i++) {

  if (userName[i] === "Admin") {

    console.log("Hello 'Admin, would you like to see a status report.");

    //• Otherwise, print a generic greeting, such as Hello eric, thankyou for logging in again.

  } else {
    console.log(`Hello ${userName[i]}, Thank You for logging in again.` );

  }

}