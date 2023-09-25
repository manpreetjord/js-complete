const score=400;
const balance=new Number(100);

// console.log(score);//400
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00

const newNumber=134.333432;
// console.log(newNumber.toFixed(2));//134.33

// console.log(newNumber.toPrecision(3));//134

const runs=100000;
// console.log(runs.toLocaleString());//100,000 Default US standard
// console.log(runs.toLocaleString('en-IN'));//1,00,000

/**************************************MATHS*********************************** */

// console.log(Math)
// console.log(Math.abs(-4)) //4 
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.4));//5
// console.log(Math.floor(4.9));//4

// console.log(Math.min(4,3,8,5,9.7));//3
// console.log(Math.max(4,3,8,5,9.7));//9

console.log(Math.floor(Math.random()*10)+1);
const min=1;
const max=6;

console.log(Math.floor(Math.random()*(max-min+1))+min);
