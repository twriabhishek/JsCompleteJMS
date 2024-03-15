//1) JS m prototypal inheritance hota hai

class User{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username} whose email is ${this.email}`);
    }
}

const teacher1=new Teacher('im_abhishek', 'abhi@gmail.com', 765423456);

teacher1.addCourse();
teacher1.logme();