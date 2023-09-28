//Thruthy or Falsy
const userEmail=[1]

if (userEmail) {
    console.log(`got user email`);
    
}
else{
    console.log(`Don't have user email`);
}

//falsy values
// false ,0, -0, BigInt 0n, "", null,undefined,NaN

//truthy values
// true, [],"0",'false',"false"," " ,{}, function(){}

if (userEmail.length===0) {
    console.log("Array is Empty");
}

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
// val1=null ?? undefined ?? 15 

console.log(val1);

//Terniary Operator 
// condtion ? true : false

const iceTeaPrice=100;
iceTeaPrice <=80 ? console.log("Enjoy") : console.log("Go Home");
