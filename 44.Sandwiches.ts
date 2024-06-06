//44• Sandwiches:

//• Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides.

function makesandwich(item: string[]) {

  //• It should print a summary of the sandwich that is being ordered. 
  
  console.log('\nMaking your sandwich with:');

  item.forEach(element => console.log("- " + element));

  console.log('Enjoy your sandwich !\n');

}
//• Call the function three times, using a different number of arguments each time.
  
makesandwich(['Ham','Cheese','Lettuce']);

makesandwich(['Turkey','Bacon']);

makesandwich(['Peanut Butter','Jelly']);