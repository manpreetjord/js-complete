//Objects
//2 ways literal,constructor
//Singleton - Create an object which is one of its kind. Constructor

//Object Literals 

// Object.create
const JsUser={
    name:"Manpreet",
    location:"Pune",
    email:"jord@goog.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday","Saturday"],
    "FName":"MJ"

    }

    // console.log(JsUser.email);
    // console.log(JsUser["email"]);
    // console.log(JsUser.FName);
    // Object.freeze(JsUser)
    JsUser.email="a@b.c";
    // console.log(JsUser.email);

    JsUser.greeting=function(){
        console.log("Hello JS User");
    }
    console.log(JsUser.greeting)
    JsUser.greeting2=function(){
        console.log(`Hello JS User,${this.name}`);
    }

    console.log(JsUser.greeting())
    console.log(JsUser.greeting2())