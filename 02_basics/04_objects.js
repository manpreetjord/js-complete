
// const tinderUser=new Object();//Singleton
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="Samy";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
        fName:"Sam",
        lName:"Helsin"
    }
}
}
console.log(regularUser.fullName.userFullName.fName);

const obj1={1:"a",2:"b" }
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2};// This is wrong it will be object inside object
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}// Spread Operator

console.log(obj3);

const users=[{
    id:1,
    email:"jord1@gmail.com",
},
{
    id:2,
    email:"jord2@gmail.com",
},
{
    id:3,
    email:"jord3@gmail.com",
}]

// (users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/************************************Destructuring ************************/


const course={
    courseName:"JSMastery",
    price:"999",
    courseInstructor:"Manpreet"
}

console.log(course.courseInstructor);// How to call it 

const {courseName,courseInstructor:instructor,price}=course;// Destructuring

console.log(instructor);

//Example

// const navbar= ({company}) =>{


// }

// navbar(company="JordInc") 


//JSON and API

{
    //This is JSON
}

// {
//     "name":"Manpreet",
//     "coursName":"js Mastery",
//     "price":"free"
// }

[
    {},
    {},
    {}
]