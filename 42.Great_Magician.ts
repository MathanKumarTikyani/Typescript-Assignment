//42• Great Magicians: 

//• Start with a copy of your program from Exercise 39.

let magician : string[] = ['Akber Ali','Haris','Zahid'];


//• Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.

function make_great (magicianArray : string[] ) {

  for(let i = 0; i <magicianArray.length; i++){

    magician[i] = 'The Great ' + magicianArray[i];
  }
  
}

//• Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]) {

  magician.forEach(element => {

    console.log(element);
    
  });

}

make_great(magician);
show_magicians(magician);
