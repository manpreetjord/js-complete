//Scope in JavaScript

let a=300
if (true){
    let a=10;
    const b=20;
    // console.log("Inner: ",a);
}


// console.log(a); 
// console.log(b);


function one(){
    const username="Jord"

    function two(){
        const website="Youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();


if(true){
    const username="King"
    if(username==="King"){
        const newWebsite= " discord"
        // console.log(username+newWebsite);
    }
    // console.log(newWebsite);
}
// console.log(username);

//************************interesting  discussion here */
console.log(addone(5));
function addone(number){
    return number +1

}

// console.log(addTwo(5));// Error Cannot access 'addTwo' before initialization
const addTwo=function(num){ //This is a function that is also called as an expression
    return num+2
}
