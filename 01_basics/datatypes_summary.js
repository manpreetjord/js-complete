//Primitive
//7 types: string,number,boolean,null,undefined,symbol

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);

const bigNumber=BigInt(123456789865434324342); //or 
const bigNumber2=12345678909876545654545454545454n;


//Reference Type (Non-Primitive)

//Arrays, Objects, Functions

const herosArray=["Superman","Batman","Thor"];

let myObject={
    name:"Manpreet",
    age:29,
}

const myFunction=function(){ 
// console.log("Hello World");
}
myFunction(); //This is how you call a function


// console.log(typeof myFunction);//Function
// console.log(typeof bigNumber);//bigInt
// console.log(typeof scoreValue);//Number
// console.log(typeof id);//Symbol

/********************Memory In JS********************/

//Primitive (Stack Memory) ,Non-Primitive(Heap Memory)

//STACK

let myYoutubeName="JordInfotech";

let anotherName=myYoutubeName;
anotherName="KingsParadise"

console.log(anotherName);
console.log(myYoutubeName);

//HEAP
let userOne={
    email:"user@google.com",
    upiL:"user@ybl"
}

let userTwo=userOne;

userTwo.email="jord@google.com"

console.log(userOne.email);
console.log(userTwo.email);