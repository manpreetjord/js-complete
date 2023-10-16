function setUserName (username){
    //Complex Calculations amnd DB Calls
        this.username=username
}

function createUser(username,email,password){
    this.email=email;
    this.password=password;
    setUserName(username)
}