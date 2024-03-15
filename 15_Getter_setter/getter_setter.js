//Class based syntax for applying getter and setters
class User{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return (this._email);
    }
    get password(){
        return (this._password);
    }
    set email(value){
        this._email=value.toUpperCase();
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}

const user1 = new User("jms@gmail.com", "qwer98766789vcxcfgjnm");

console.log(user1.email);
console.log(user1.password);






//1)Jab class nahi thi then getter and setter function ki help s get and set kartey theyy.

//function based syntax for applying getter and setters

function Car(name, price){
    this._name=name;
    this._price=price;

    Object.defineProperty(this, 'name', {
        get:function(){
            return this._name.toUpperCase();
        },
        set:function(value){
            this._name=value;
        }
    })

    Object.defineProperty(this, 'price', {
        get:function(){
            return this._price.toUpperCase();
        },
        set:function(value){
            this._price=value;
        }
    })
}

let car1=new Car("Audi", '3cr');
console.log(car1.name);
console.log(car1.price);





//Object based syntax for applying getter and setters
const human={
    _name:"hc",
    _gender:"Male",

    get name(){
        return this._name
    },
    set name(value){
        this._name=value
    },
    get gender(){
        return this._gender
    },
    set gender(value){
        this._gender=value
    }
}

//new constructor function hai and create factory function hai.
let man=Object.create(human);
console.log(man.name);
console.log(man.gender);