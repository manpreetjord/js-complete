
//Dates

const myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString("en-IN"));

console.log(typeof myDate);

// let myCreatedDate=new Date(2023,2,9);
let myCreatedDate=new Date("04-24-2023");
console.log(myCreatedDate.toDateString());

let myTimeStamp=Math.floor(Date.now()/1000);
console.log(myTimeStamp);

let newDate=new Date();
console.log(newDate);

console.log(newDate.toLocaleString('en-IN',{dateStyle:"long"}))