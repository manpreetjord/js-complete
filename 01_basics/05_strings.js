const userName="jord"
const user='king'
const repoCount=12
// console.log(userName+user+repoCount);
// console.log(`Hello my name is ${userName.toUpperCase()} and my repo count is ${repoCount}`)

const gameName=new String('Far-Cry-3');


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('3'));


const newString=gameName.substring(0,4);

console.log(newString); //FarC It will not include the last value because it is from 0 upto 4 not including 4

const anotherString=gameName.slice(-3,2);
console.log(anotherString);

const newStringTrim="      Jord";
console.log(newStringTrim.trim()) //Jord
console.log(newStringTrim);//      Jord 


const url="jordinc.com/home%20page";

console.log(url.replace('%20',"")); //jordinc.com/homepage
console.log(url.includes('king'));//false

console.log(gameName.split(''));
