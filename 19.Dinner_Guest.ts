//19• Dinner Guests: 

//• Working with one of the programs from Exercises 14 through 18.

let Invitation_List : String[] = ['Sagar', 'Nouman', 'Adil'];

// for(let i=0; i<Invitation_List.length; i++){

//     console.log('Dear Mr.' + Invitation_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');

// }
let absent_Guest : String = Invitation_List[0];

let new_Guest : String = 'Rakesh';

Invitation_List[0] =  new_Guest ;

// for(let i=0; i<Invitation_List.length; i++){

//     console.log('Dear Mr.' + Invitation_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);

// console.log('Good news! we find big table so we are inviting three more guests.');

Invitation_List.unshift('Parkash');

Invitation_List.splice(2, 0,'Sushil');

Invitation_List.push('Faizan');

// for(let i=0; i<Invitation_List.length; i++){

//     console.log('Dear Mr.' + Invitation_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
// }

// Sorry message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only two persons will be invited');

while(Invitation_List.length>2){
    let remove_Guest = Invitation_List.pop();

// console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);
}


// for(let i=0; i<Invitation_List.length; i++){

//     console.log('Dear Mr.' + Invitation_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
// }

Invitation_List.splice(0, 2);
console.log(Invitation_List);

//• Ex#19.
//• Print a message indicating the no of people you are inviting to dinner.

console.log(`The Total no of Guest Are: ${Invitation_List.length}`);