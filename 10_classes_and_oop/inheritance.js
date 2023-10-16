class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
   constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
   }

   addCourse(){
    console.log(`Course is added by ${this.username}`)
   }
}

const chai=new Teacher("chai","c@a.com","123")
chai.addCourse()