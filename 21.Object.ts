//21• They think of something you could store in a TypeScript Object.

//• write a program that creates objects containing these items.


//• datatype of person object
interface person {
    name : String,
    age : number,
    nationality : String,
    Student : boolean,
}

//• person object
let person:person = {
    name : 'mathan',
    age: 21,
    nationality : 'pakistani',
    Student : true,
}
interface car{
    maker : String,
    color : String,
    automatic:Boolean,

}

//• car object
let car : car = {
    maker : 'toyota',
    color : 'red',
    automatic :true

}
console.log(person,car);
