class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
   
    get email(){
return this._email
    }
set email(value){
    this._email=value
}
    get password(){
return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
    
}

const manpreet=new User("man@example.com","123");

console.log(manpreet.password);
console.log(manpreet.email);