//12• Greetings: 

//• Start with the array you used in Exercise 11, but instead of just printing each person’s name.

let friendnames : String[] = ['Sagar' ,'Nouman','Adil','Rakesh'];

//• Print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const message : string = 'Welcome to Typpescript class: '

for (let i=0; i<friendnames.length; i++) {

    console.log(message + friendnames[i]) ;
}