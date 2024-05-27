//17• Shrinking Guest List: 

//• You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let guestArry : String[] = ['Sagar', 'Nouman', 'Adil'];

let absent_Guest : String = guestArry[0];

let new_Guest : String = 'Rakesh';

guestArry[0] =  new_Guest ;

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good news! we find big table so we are inviting three more guests.')

guestArry.unshift('Parkash');

guestArry.splice(2, 0,'Sushil');

guestArry.push('Faizan');

for (let i=0; i<guestArry.length; i++) {
 
     console.log('Dear Mr.' + guestArry[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log('\n\nsorry we can not arrange big table, only two persons will be invited');

while (guestArry.length>2) {
    let remove_Guest = guestArry.pop();

console.log(`Sorry Mr. ${remove_Guest}, you are not invited for dinner.`);

}

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let i=0; i<guestArry.length; i++) {

    console.log('Dear Mr. '  + guestArry[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

guestArry.pop();
guestArry.pop();
console.log(guestArry);