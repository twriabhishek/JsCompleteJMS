//1) Classes wagairah es6 ya uskey baad s introduce hui.

class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptpassword(){
        return(`abc${this.password}abc`);
    }
}

let user1=new User('im_abhishek', 'abhishek@yopmail.com', 987654321);
console.log(user1.encryptpassword());


User.prototype.changeUsername=function(){
    return (this.username.toUpperCase());
}

console.log(user1.changeUsername());


//1)Yaha User ek class hai and user1, User class ka 1 instance hai.
//2)Hum user1 instance m function directly bhi bana saktey hai aur prototype  ka use karkey bhi bana saktey hai.

