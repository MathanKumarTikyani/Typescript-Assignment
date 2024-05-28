//28• Life Of Stages.

//• Write an if-else chain that determine a person's stage of life.

//• Set a value for the variable age and then:

let personAge : number = 80;

 //• If the person is less than 2 years old, print a message that the person is a baby.

 if (personAge < 2) {

  console.log("Person is a baby");
 }
 // •If the person at least 2 years old and but less than 4, print a message that the person is a    Toddler.

   else if ( personAge >= 2 &&  personAge < 4) {

  console.log("Person is a toddler");
 }

 //• If the person at least 4 years old and but less than 13, print a message that the person is a kid.

   else if ( personAge >= 4 &&  personAge < 13) {

    console.log("Person is a kid");
 }

 //•If the person at least 13 years old and but less than 20,  print a message that the person is a teenager.

   else if ( personAge >= 13 &&  personAge < 20) {
  
    console.log("Person is a teenager ");
 }

 //• If the person at least 20 years old and but less than 65,print a message that the person is a adult.

   else if ( personAge >= 20 &&  personAge < 65) {

   console.log("Person is an adult");
 }

 //• If the person age is 65 or older , print a message that the person is a elder.

  else {
    
  console.log("Person is an elder");
 }

