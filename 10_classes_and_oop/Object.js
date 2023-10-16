function numberMultiply(num){
    return num*5
}

numberMultiply.power=2

console.log(numberMultiply(5));
console.log(numberMultiply.power);
console.log(numberMultiply.prototype);

const createUser=(username,score)=>{
this.username=username;
this.score=score;

}

createUser.prototype.increment=function(){
    this.score++
}
const jord= createUser("king",25);
const singh= createUser("kg",50);