//41• Magicians: 

//• Make a array of magician’s names. 

let magicians : string[] = ['Akber Ali','Haris','Zahid'];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians :string[]) {

  magicians.forEach(element => {
    console.log(element);
    
  });

}
// call the function to show the magicians.
show_magicians(magicians);