//for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

// syntax

// for (const iterator of object) {
    
// }

for (const num of arr) {
    // console.log(num);    
}

// const greetings  ="Hello Manpreet Jord"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


//Map it will store values in the order that it is given and it will not have duplicate values and only display unique values
const map=new Map();
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
map.set("PK","Pakistan")
map.set("IN","India")
// console.log(map);

for (const [key,value] of map) {
    console.log(key, '-', value);
    
}

// const myObj={
//     'game1':"NFS",
//     "game2":"GTA",

// }

// for (const [key,value ]of myObj) {
//     // console.log(key);
    
// }