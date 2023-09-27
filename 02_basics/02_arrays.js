const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const new_Heros=[...marvel_heros,...dc_heros];
// console.log(new_Heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(2);//or give infinity
// console.log(real_another_array);


console.log(Array.isArray("Manpreet"));
console.log(Array.from("Manpreet"));
// console.log(Array.from({"name:"Manpreet"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score3));


