//11• Array Names: 

//• Store the names of a few of your friends in a array called names. 

import { toASCII } from "punycode";

let friendNames : String[] = ['Sagar' ,'Nouman','Adil','Rakesh'];

//• Print each person’s name by accessing each element in the list, one at a time.

for (let i=0; i<friendNames.length; i++) {

    console.log(friendNames[i]);
}