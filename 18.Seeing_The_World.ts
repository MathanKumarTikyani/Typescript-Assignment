//18• Favourite Places:

//• Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the location in a array the array is not in alphabetical order.

let places : String[]= ['New York', 'Japan', 'Beijing', 'Italy', 'USA'];

//• Print your array in its original order.
console.log('Original: ' + places);

//• Print your array in alphabetical order without modifying the actual list.
console.log('copy: ' + [...places].sort());

//• Show that your array is still in its original order by printing it.
console.log('original: ' + places);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy: ' + [...places].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log('original: ' + places);
  
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('original: ' + places.reverse());

//• Reverse the order of your list again. Print the list to show its back to its original order.
console.log('original: ' + places.reverse());

//• Sort your array so its stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original: '+ places.sort());

//• Sort to change your array so its stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original: ' + places.sort().reverse());








