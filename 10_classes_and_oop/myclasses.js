//-->ES6 +


class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

encryptPassword(){
    return `${this.password} xyz`
}

changeUsername(){
    return `${this.username.toUpperCase()}`
}
}
const chai=new User('chai',"ma@email.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
f
//Behind the scene

// function user(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password;   
// }