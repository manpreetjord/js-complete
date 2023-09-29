//ForEach Loop . It is also a higher order function

const coding=["js","ruby","python","cpp","java"]

// coding.forEach((item)=>{
//     console.log(item);
// })

// coding.forEach(function (val){
//     console.log(val);
// })

// function printMe(item){
// console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });


const myCoding=[
    {
        languageName:"Javascript",
        languageFile:".js"
    },
    {
        languageName:"Java",
        languageFile:".java"
    },
    {
        languageName:"Python",
        languageFile:".py"
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    // console.log(item.languageFile);

})