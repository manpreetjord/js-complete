const user={
    username:"Manpreet",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user?.getUserDetails());
// console.log(this);

//CONSTRUCTOR FUNCTION

// const promiseOne=new Promise()

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn


    this.greeting=function(){
        console.log(`Wrlcome ${this.username}`);
    }
    return this
}

const userOne=new User("man",8,true)
const userTwo=new User("Chai",6,false)
console.log(userOne.constructor);
// console.log(userTwo);

//When using a new word, an empty instance is generated 
//a constructor function is called due to new word
//then it gets added 