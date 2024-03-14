//.length ek prototype hai.
//But mai ek aisa hi custom prototype[Means method] aur banana chata hu.

let myName="asdfghjkloiuytrew     ";
console.log(myName.length);


//1)Object top level ki hierarchy hai.Means Sabhi data finally object s hokar hi gujartey hai.
//2)Create ek factory function hota hai.
//3)Sabhi cheezey[Array, String, Function etc] object s hokar hi jati hai furture object ka koi super prototype nahi hota hai.

let myHeros=["Thor", "Spider"];

let heroPower={
    thor:"hammer",
    spider:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spider}`);
    }
}

heroPower.getSpiderPower();

Object.prototype.available=function(){
    console.log("I am present in all Object.");
}

myHeros.available();

//1)Magar jab hum directly object ko hi prototype de detey hai then wo prototype sabhi ke pass[Array, String etc]
//aa jaega.Agar humko sirf array ko dena hai then then hum Array object ko prototype detey hai.

Array.prototype.getName=function(){
    console.log("I am in array object");
}

myHeros.getName();
myHeros.available();




//Prototypal Inheritance
//1) Kaisey hum kisi object m doosrey object ki properties access karr saktey hai usko hi prototypal inheritance kahtey hai.JS m prototypal inheritance hota hai.



//This is not a old syntax
const headTeacher={
    makeVideo:true,
}

const supportTeacher={
    isAvailable:false,
}

const taTeacher={
    makeAssigment:'JS Assignment',
    fullTime:true,
    __proto__:supportTeacher,
}



//This is modern syntax
Object.getPrototypeOf(headTeacher, supportTeacher);









let myName1="asdfghjkloiuytrew                                     ";
String.prototype.trueLength=function(){
    console.log(`True length is ${this.trim().length}`);
}

myName.trueLength();
"Abhishek".trueLength();
"Tiwari".trueLength();
