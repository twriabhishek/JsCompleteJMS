//jab bhi hum this keyword ka use kartey hai then hum current context ki baat karr rahey hotey hai.
const user={
    name:"Abhinav",
    age:25,
    position:"Reporter",

    getDetails:function(){
        console.log(`Name of ${this.position} is ${this.name} and age is ${this.age}`);
        console.log(this);
    }
}

user.getDetails();





//1) new keyword ek constructor function hai jiski help se hum ek object ke multiple instance create kartey hai.Jismey sabkey
//pass apna apna context hota hai.

// const promise=new Promise();
// const date= new Date();

function setDetails(name, age, position){
    this.names=name;
    this.ages=age;
    this.positions=position;
    return this;
}

//Jab hum bina new keyword k function define kartey hai then unka context create nahi hota hai.

let getDetails1=setDetails("Abhishek", 24, "Developer");
console.log(getDetails1);

let getDetails2=setDetails("Love", 26, "SDE");
console.log(getDetails1);


//Abhi humney new keyword use kiya hai means getDetails3 and getDetails4 dono ka apna apna context create hua hai.
let getDetails3= new setDetails("Gokul", 29, "XYZ");
console.log(getDetails3);

let getDetails4=new setDetails("Narella", 30, "ABC");
console.log(getDetails3);

//Means constructor function[new] every time ek new instance deta hai.