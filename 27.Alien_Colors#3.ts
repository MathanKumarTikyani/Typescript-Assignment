//27• Alien Colors#3:

//• Turn your if-else chain from Exercise 25, 26 into an if else chain.

let alienColors : String = "green";

//• If the alien is green,print a message that the player earned 5 points.
//• If the alien is yellow,print a message that the player earned 10 points.
//• If the alien is red,print a message that the player earned 15 points.

//• Write three versions of this program,making sure each message is printed for the appropriate color alien.

//• Version 1 of the program.

if (alienColors === "green") {
  
  console.log("Player earned 5 points.")
}
   else if (alienColors === "yellow") {

     console.log("Player earned 10 points");
}
  else if (alienColors === "red") {

     console.log("Player earned 15 point");
}
 else {

  console.log("please select right color");
}

//• Version 2 of the program.

alienColors = "yellow";

if (alienColors === "green") {

     console.log("Player earned 5 points.")
} 
   else if (alienColors === "yellow") {

      console.log("Player earned 10 points");
}
  else if (alienColors === "red") {

    console.log("Player earned 15 point");
}
 else {

  console.log("please select right color");
}

//• Version 3 0f the program.

alienColors = "red";

if (alienColors === "green") {

  console.log("Player earned 5 points.")
} 
  else if (alienColors === "yellow") {

  console.log("Player earned 10 points");
}
   else if(alienColors === "red"){

     console.log("Player earned 15 point");
}
  else {

  console.log("please select right color");
}

