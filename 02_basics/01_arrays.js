//Arrays
//Arrays do Shallow Copies. It is a copy that shares the same reference points
const myArray=[1,2,3,4,5,true,"Jord"];

// console.log(myArray.length); 
// console.log(myArray[2]);

//Array Methods
const myHeros=["Ben10","Ash","Goku"];

const anotherArr=new Array(2,4,6,8);


myArray.push(6);
myArray.push(8);//adds a element at the end of the array
myArray.pop()// Remove last element from array
myArray.unshift(9);//adds an element at the start of the array
myArray.shift()//removes an element from the start
// console.log(myArray.includes(9));// to check if the given element exists in the array or not
// console.log(myArray.indexOf(5));//to get the index or position of the element

const newArray=myArray.join();
// console.log(myArray);
// console.log(newArray);

const player1=[1,2,3,4,5,6,7,8];
console.log("A",player1);
player1.slice(1,3);
console.log("B",player1);
const player2=[1,2,3,4,5,6,7,8];
console.log("D",player2);
player2.splice(1,3);
console.log("E",player2);