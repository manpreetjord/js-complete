//Promises

//Ex: How to consume a Promise .....  fetch('https://something.com').then().catch().finally()

//Createing a promise. A promise takes a callback function and has 2 arguments (resolve,reject)

const promiseOne= new Promise((resolve,reject)=>{
    //Do an async task like 
    //DB calls,cryptography,network calls etc

    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);


});

promiseOne.then(()=>{
console.log("Promise Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 Resolved");
})


const promiseThree=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve({username:"Jord", email:"manp@example.com"})
}, 1000);
})

promiseThree.then(function(user){
    console.log(user);

})



const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
        resolve({username:"Jord",email:"man@exam.com"});
    }
    else {
        reject("ERROR: Something Went Wrong")
    }
    }, 1000);
})

promiseFour
.then(function(user){
console.log(user);
return user.username

})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is Resolved or Regjected Finally");
})


const promiseFive=new Promise((resolve,reject)=>{
setTimeout(() => {
    let error=true;
    if(!error){
        resolve({username:"King",password:"123"})
    }
    else{
        reject("ERROR: Something Went Wrong")
    }
}, 1000);
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUsers(){
    try {
        const response= await fetch(`https://jsonplaceholder.typicode.com/users`)

    const data= await response.json()
    console.log(data);        
    } catch (error) {
      console.log("E:",error);      
    }
}

getAllUsers()


const repsonse=fetch(`https://github.com/users/hiteshchoudary`)
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)
})
.catch((error)=>{
    console.log("Error",error);
})