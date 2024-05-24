//15• Changing Guest List: 

//• You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let Invitation_List : String[] = ['Sagar' ,'Nouman','Adil'];

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let absent_Guest : String = Invitation_List[0];

let new_Guest : String = 'Rakesh';

Invitation_List[0] =  new_Guest ;

//• Print a second set of invitation messages, one for each person who is still in your list.

for(let i=0; i<Invitation_List.length; i++){

    console.log('Dear Mr.' + Invitation_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

