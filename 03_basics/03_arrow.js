//Arrow Functions

const user={
    username:"Manpreet",
    price:999,
    welcomeMessage:function(){ 

        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();

// console.log(this);

// function gym(){
//     let username="Jord"
//     console.log(this.username);
// }

// gym()

// const gym= ()=>{ //Arrow Function
//         let username="Jord"
//     console.log(this);

// }
// gym()

//Arrow Function

// const addTwo=(num1,num2) => { //     return num1 + num2; //Explicit Return

// }

// const addTwo=(num1,num2) => num1 + num2; //Implicit Return
// const addTwo=(num1,num2) => (num1 + num2);

const addTwo=(num1,num2) => ({username:"Manpreet"});


console.log(addTwo(3,4));



