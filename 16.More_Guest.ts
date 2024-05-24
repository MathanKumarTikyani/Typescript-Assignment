//16• More Guests: 

//• You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guestArry : String[] = ['Sagar','Nouman','Adil']

let absent_Guest : String = 'Adil';

let new_Guest : String = 'Rakesh';

guestArry[2] =  new_Guest ;

console.log('Good news! we find big table so we are inviting three more guests.')

//• Add one new guest to the beginning of your array.

guestArry.unshift('Parkash');

//• Add one new guest to the middle of your array.

guestArry.splice(2, 0,'Jawad');

//• Use append() to add one new guest to the end of your list. 

guestArry.push('Faizan');

//• Print a new set of invitation messages, one for each person in your list.

for(let i=0; i<guestArry.length; i++){

    console.log('Dear Mr.' + guestArry[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
