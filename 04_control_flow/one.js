//Control FLow
// Sometimes we want to run code based on login or not logged in. If logged in run a particular code otherwise run something else

//if

// const isUserLoggedIn=true
// const temperature=41

// if (temperature===40) {
//     console.log("Its still fine")    
// }
// else console.log("Its too HOT")
// 2<=2 <,>,<=, >= = Assignment Operator == Equality != Not Equal === Euality and Type of Data

// if (false) {
    
// }

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User Power:${power}`);
// }

// console.log(`User Power:${power}`);


const balance=1000;
// if(balance>500) console.log("test"); //implicit scope 

// if (balance<500) {
//     console.log("less than 500");    
// } else if(balance<750) {
//     console.log("less than 750");    
// }else if(balance<900) {
//     console.log("less than 900");    
// }
// else {
//     console.log("less than 1200");    
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn && debitCard && 2==3) {
    console.log(`Allow Courses`);
}

if(loggedInFromGoogle||loggedInFromEmail){
    console.log("User Logged In");
}

