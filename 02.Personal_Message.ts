//02• Personal Message: 

//• Store a person’s name in a variable.

let personName : String = "";

//• Print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
 
personName = prompt(`What is your name?`) || ``;

if (personName !== null && personName !== ``) {
    
    alert(`Hello ${personName}, would you like to learn some python today?`)
}
  else {
     alert(`you have to fill your name`)
}