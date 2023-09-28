//Functions

// function myName(){
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
// }

// myName(/*Argument*/);

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

function addTwoNumbers(num1,num2){

    let result=num1+num2;
    console.log(num1+num2);
    return result;
    
}
function addTwoNumbers(num1,num2){

    return num1+num2;
  

    
}
/*
addTwoNumbers(1,"2");//12
addTwoNumbers(1,2);//3
addTwoNumbers(4,null);//4
*/

const result=addTwoNumbers(1,2);
// console.log("Result:",result);

function loginUserMessage(username="defaultGuy"){
    if(!username){
   console.log("please enter a username");
   return
}
return `${username} just logged in`
}
// console.log(loginUserMessage("Jord"));
// console.log(loginUserMessage("Jord"));



const calulataeCartPrice=(...num1)=> num1

console.log(calulataeCartPrice(200,400,150));



const user={
    username:"jord",
    id:"199"
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.id}`);

}
handleObject(user);

// const shopArray=[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1];

}

// console.log(returnSecondValue(shopArray));
console.log(returnSecondValue([200,400,600,100]));
