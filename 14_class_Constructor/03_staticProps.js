//1)Jab hum ek new class initiate kartey hai then uss class m methods[function] and properties[variable] 
//create kartey hai. But sometimes hum yeh nahi chahtey ki uss class s create honey wale sabhi object[instance]
//ko method ka accesss ho then uskey liye hum [static] keyword ka use kartey hai.

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    static logMe(){
        return(`Username is ${this.name} and Password is ${this.email}`)
    }
}

let user1=new User("Abhishek", "abhi@gmail.com");
user1.logMe();