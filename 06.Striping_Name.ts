//06• Stripping Names: 

//• Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 

const personName : string ="\n\t Mathan Kumar\t\n";
console.log("Original:", personName);

//• Then print the name after striping the white spaces.

const without_whitespace: string = personName.trim();
console.log( without_whitespace);