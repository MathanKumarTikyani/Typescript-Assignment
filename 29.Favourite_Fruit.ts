//29• Favourite Fruit.

//• Make a array of your favourite fruits, and then write a series of independent if statement that check for certain fruits in your array.

//• Make a array of your three favourite fruits and call it favourite_fruits.

let favourite_fruits : String[] = ['Orange','Grapes','Mango'];

//• Write five if statement, Each should check whether a certain line of fruits in your array. If the fruit is in your array, the if block should print a statement, such as you like bananas!

if (favourite_fruits.includes("Orange")) {
     console.log("You really like Orange");
}

if (favourite_fruits.includes("Grapes")) {
     console.log("You really like Grapes");
}

if (favourite_fruits.includes("Mango")) {
     console.log("You really like Mango");
}

if (favourite_fruits.includes("Watermelon")) {
     console.log("You really like Watermelon");
     
} else {
  console.log("Watermelon is not in your list of favourite fruits.")
}

if (favourite_fruits.includes("Pomenogranate")) {
     console.log("You really like Pomenogranate");
     
} else {
  console.log("Pomenogranate is not in your list of favourite fruits.")
}

